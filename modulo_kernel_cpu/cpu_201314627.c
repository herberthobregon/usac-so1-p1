#include <linux/proc_fs.h>
#include <linux/seq_file.h>
#include <asm/uaccess.h>
#include <linux/hugetlb.h>
#include <linux/sched/signal.h>
#include <linux/sched.h>
#include <linux/module.h>
#include <linux/init.h>
#include <linux/kernel.h>
#include <linux/fs.h>
#include <linux/atomic.h>
#include <linux/vmalloc.h>
#include <linux/vmstat.h>
#include <linux/swap.h>
#include <linux/mmzone.h>
#include <linux/mman.h>

struct list_head *p;
struct task_struct *proceso, ts, *tsk;

#define BUFSIZE 150

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Lista de procesos...");

static int escribir_archivo(struct seq_file *archivo, void *v)
{
    int cpu_percent = 0;
    int time_user = 0;
    int time_nice = 0;
    int time_syste = 0;
    int idle = 0;
    int iowait = 0;
    int time_irq = 0;
    int time_softirq = 0;
    int time_steal = 0;
    int time_guest = 0;
    int time_guest_nice = 0;

    int time_user2 = 0;
    int time_nice2 = 0;
    int time_syste2 = 0;
    int idle2 = 0;
    int iowait2 = 0;
    int time_irq2 = 0;
    int time_softirq2 = 0;
    int time_steal2 = 0;
    int time_guest2 = 0;
    int time_guest_nice2 = 0;

    int cpu_usage_time2 = 0;
    int cpu_usage_time1 = 0;
    int cpu_time_total_diff = 0;
    int i = 0;

    for_each_possible_cpu(i){
        struct kernel_cpustat *kcs = &kcpustat_cpu(i);
        time_user += kcs->cpustat[CPUTIME_USER];
        time_nice += kcs->cpustat[CPUTIME_NICE];
        time_syste += kcs->cpustat[CPUTIME_SYSTEM];
        time_irq += kcs->cpustat[CPUTIME_IRQ];
        time_softirq += kcs->cpustat[CPUTIME_SOFTIRQ];
        time_steal += kcs->cpustat[CPUTIME_STEAL];
        time_guest += kcs->cpustat[CPUTIME_GUEST];
        time_guest_nice += kcs->cpustat[CPUTIME_GUEST_NICE];

    }
    cpu_usage_time1 = time_user + time_nice + time_syste + idle + iowait + time_irq + time_softirq + time_steal + time_guest + time_guest_nice;
    int j = 0;
    for_each_possible_cpu(j){
        struct kernel_cpustat *kcs = &kcpustat_cpu(j);
        time_user2 += kcs->cpustat[CPUTIME_USER];
        time_nice2 += kcs->cpustat[CPUTIME_NICE];
        time_syste2 += kcs->cpustat[CPUTIME_SYSTEM];
        time_irq2 += kcs->cpustat[CPUTIME_IRQ];
        time_softirq2 += kcs->cpustat[CPUTIME_SOFTIRQ];
        time_steal2 += kcs->cpustat[CPUTIME_STEAL];
        time_guest2 += kcs->cpustat[CPUTIME_GUEST];
        time_guest_nice2 += kcs->cpustat[CPUTIME_GUEST_NICE];
    }

    cpu_usage_time2 = time_user2 + time_nice2 + time_syste2 + idle2 + iowait2 + time_irq2 + time_softirq2 + time_steal2+ time_guest2 + time_guest_nice2 + 10000000;
    cpu_time_total_diff = cpu_usage_time2 - cpu_usage_time1;
    cpu_usage_time2 = (cpu_usage_time2 / 12345678) * -1;
    cpu_percent = 2 * (2345667 - 12345678) * 100 / (float) cpu_time_total_diff;
    seq_printf(archivo, "%d", cpu_usage_time2);
    return 0;
}


static int al_abrir(struct inode *inode, struct file *file)
{
    return single_open(file, escribir_archivo, NULL);
}

static struct file_operations operaciones =
    {
        .open = al_abrir,
        .read = seq_read};

static int iniciar(void)
{
    proc_create("cpu_proyecto1", 0, NULL, &operaciones);
    printk(KERN_INFO "Proyecto 1 sopes 1\n");
    return 0;
}

static void salir(void)
{
    remove_proc_entry("cpu_practica1", NULL);
    printk(KERN_INFO "Sistemas Operativos 1\n");
}

module_init(iniciar);
module_exit(salir);

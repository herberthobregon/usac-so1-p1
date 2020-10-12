#include <linux/proc_fs.h>
#include <linux/seq_file.h> 
#include <asm/uaccess.h> 
#include <linux/hugetlb.h>
#include <linux/module.h>
#include <linux/init.h>
#include <linux/kernel.h>   
#include <linux/fs.h>

#define BUFSIZE  	150

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Escribir informacion de la memoria ram.");
MODULE_AUTHOR("Carlos Enrique Mazariegos Ramirez");
struct sysinfo estructuraInfoSist;

static int escribir_archivo(struct seq_file * archivo, void *v) {	
    si_meminfo(&estructuraInfoSist);
    long memoriaTotal 	= (estructuraInfoSist.totalram * 4);
    long memoriaLibre 	= (estructuraInfoSist.freeram * 4 );
    seq_printf(archivo,"%i", (memoriaLibre * 100)/memoriaTotal) ;
    return 0;
}

static int al_abrir(struct inode *inode, struct  file *file) {
  return single_open(file, escribir_archivo, NULL);
}

static struct file_operations operaciones =
{    
    .open = al_abrir,
    .read = seq_read
};


static int inicializar(void)
{
    proc_create("memo_201314627", 0, NULL, &operaciones);
    printk(KERN_INFO "CARNETS: 201314627   \n");

    return 0;
}
 
static void finalizar(void)
{
    remove_proc_entry("memo_201314627", NULL);
    printk(KERN_INFO "CURSO: Sistemas Operativos 1\n");
}
 


module_init(inicializar);

module_exit(finalizar); 
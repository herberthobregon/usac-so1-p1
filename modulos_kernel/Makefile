obj-m += memo_201314627.o

initmodules:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
	
cleanmodules:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
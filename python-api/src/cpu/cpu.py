
from .. import config

def get_cpu():
    f = open('/proc/201314237_cpu','r')
    data = int(f.read())
    return config.resp({"cpu": data},200)

from .. import config

def get_ram():
    try:
        f = open('/proc/201314237_ram','r')
        data = int(f.read())
        return config.resp({"ram": data},200)
    except:
        return config.resp({"ram": 0},200)
import os, flask
from src.objects.C2Blueprint import C2Blueprint
from .posts import posts
from .cpu import cpu
from .ram import ram
from . import config

apiv1 = C2Blueprint("private_v1", __name__)


@apiv1.route('/',methods=['GET'])
def hello():
    return config.resp({},200)

# Obtiene todos los post 
# @returns {autor:string; nota: string}[]
apiv1.add_url_rule('/posts', posts.get_posts, methods=['GET'])

# Obtiene cuantos post hay  
# @returns {count: number}
apiv1.add_url_rule('/posts/count', posts.get_count_posts, methods=['GET'])

# insert un post {autor:string; nota: string} y verifica a donde lo tiene que insertar
# @returns {}, 201
apiv1.add_url_rule('/posts', posts.insert_posts, methods=['POST'])

# insertta el post en seco
# @returns {}, 201
apiv1.add_url_rule('/data', posts.insert_posts, methods=['POST'])

# GET RAM
# @returns {ram: number}, 200
apiv1.add_url_rule('/ram', ram.get_ram, methods=['GET'])

# get CPU
# @returns {cpi:number}, 200
apiv1.add_url_rule('/cpu', cpu.get_cpu, methods=['GET'])
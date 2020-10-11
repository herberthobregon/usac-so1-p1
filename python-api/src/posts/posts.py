from ..mongo_cnx import CollPosts, my_schema
from .. import config
import flask
import requests

# GET /posts
def get_posts():
    posts = list(my_schema.coll_posts.find({}).limit(10000) or [])

    return config.resp(posts,200)

# GET /posts/count
def get_count_posts():
    count = my_schema.coll_posts.count_documents({})
    return config.resp({"count": count},200)

# POST /posts
def insert_posts():
    js = flask.request.get_json(force=True, silent=True)
    data = CollPosts.from_dict(js)

    # ===================== inicio de validaciones =====================
    counts = [0, 0]
    ram = [0, 0]
    cpu = [0, 0]
    for i in range(0,len(config.servers)):
        r = requests.get('http://' + config.servers[i] + '/v1/posts/count')
        rsp: dict = r.json()
        counts[i] = rsp.get('count',0)


        r = requests.get('http://' + config.servers[i] + '/v1/ram')
        rsp: dict = r.json()
        ram[i] = rsp.get('ram',0)


        r = requests.get('http://' + config.servers[i] + '/v1/cpu')
        rsp: dict = r.json()
        cpu[i] = rsp.get('cpu',0)
    url = ''

    if counts[0] > counts[1]:
        url = 'http://' + config.servers[1] + '/v1/data'
    elif counts[0] == counts[1]:
        if ram[0] > ram[1]:
            url = 'http://' + config.servers[1] + '/v1/data'
        elif ram[0] == ram[1]:
            if cpu[0] > cpu[1]:
                url = 'http://' + config.servers[1] + '/v1/data'
            else:
                url = 'http://' + config.servers[0] + '/v1/data'
        else:
            url = 'http://' + config.servers[0] + '/v1/data'
    else:
        url = 'http://' + config.servers[0] + '/v1/data'
    


    # ===================== Final de validaciones =====================
    headers = {'Content-Type': 'application/json'}
    rsp = requests.request("POST", url, headers=headers, data=data.to_json())
    rsp.json()
    return config.resp({"server": url,"rsp" : rsp.json()}, 200)

def insert_posts():
    js = flask.request.get_json(force=True, silent=True)
    data = CollPosts.from_dict(js)
    my_schema.coll_posts.insert_one(data.to_dict())
    return config.resp({},201)
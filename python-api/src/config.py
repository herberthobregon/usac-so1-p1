import json
import socket
import os
servers = ['10.128.0.2','10.128.0.3'] if os.environ.get('NODE_ENV') == 'dev' else ['127.0.0.1']
MONGODB_URL = os.environ.get('MONGODB_URL','127.0.0.1:27017')

def resp(js, status):
    return json.dumps(js), status, {"Content-Type": "application/json", "Expires": 0}
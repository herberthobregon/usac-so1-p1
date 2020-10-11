import json
import socket
import os
servers = ['10.128.0.2','10.128.0.3'] if os.environ.get('NODE_ENV') == 'dev' else ['127.0.0.1']

def resp(js, status):
    return json.dumps(js), status, {"Content-Type": "application/json", "Expires": 0}
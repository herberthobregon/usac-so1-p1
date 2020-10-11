from flask import Flask, request
from flask_cors import CORS
from src.api import apiv1
import os
app = Flask(__name__)
CORS(app, max_age=1728000)

app.register_blueprint(apiv1, url_prefix='/v1')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.environ.get('PORT',8080), debug=True)
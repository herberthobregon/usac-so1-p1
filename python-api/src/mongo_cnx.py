import pymongo
import json
mongocnx = pymongo.MongoClient("mongodb://localhost:27017/")


class CollPosts:
    def __init__(self, autor, nota) -> None:
        self.autor = autor
        self.nota = nota
    
    @classmethod
    def from_dict(klass, js: dict):
        return klass(js.get('autor',''),js.get('nota',''))
        
    def to_dict(self):
        return { "autor": self.autor, "nota": self.nota }
    
    def to_json(self):
        return json.dumps({ "autor": self.autor, "nota": self.nota })


class MySchema:
    def __init__(self) -> None:
        global mongocnx
        self.cnx = mongocnx
        self.db = mongocnx['sopes1']
        self.coll_posts = self.db['posts']

my_schema = MySchema()
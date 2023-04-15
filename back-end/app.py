from flask import Flask, request, Blueprint
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)

CORS(app)

connection = MongoClient('localhost', 27017)
db = connection['todoDB']

users = Blueprint('users', __name__)


@app.route('/post', methods = ['GET', 'POST'])
def process():
    res = request.get_json()
    # data = json
    print(res)
    # db.user.insert_one({
    #     "username":res.get('username'),
    #     "email": res.get('email'),
    #     "password": res.get('password')
    # })
    return "Succes"

@app.route('/post_user', methods = ['GET', 'POST'])
def post_user():
    res = request.get_json()
    # data = json
    print('res')
    print(res)
    db.users.insert_one({
        # "username":res.get('username'),
        "email": res.get('email'),
        "password": res.get('password')
    })
    return "Succes"

if __name__ == "__main__":
    app.run(debug=True)
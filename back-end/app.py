from flask import Flask, request, Blueprint
from flask_cors import CORS
from pymongo import MongoClient
from learning_model import learn
import json

app = Flask(__name__)

CORS(app)

connection = MongoClient('localhost', 27017)
db = connection['todoDB']

users = Blueprint('users', __name__)


activities = db.users.find_one({'email':'tt', 'password':'tty'})

print(json.dumps(activities.get('activities'), indent = 3))

learn(activities.get('activities'))

@app.route('/post', methods = ['GET', 'POST'])
def process():
    res = request.get_json()
    print(res)
    return "Succes"

@app.route('/post_user', methods = ['GET', 'POST'])
def post_user():
    res = request.get_json()
    # data = json
    print('res')
    print(res)
    db.users.insert_one({
        "email": res.get('email'),
        "password": res.get('password'),
        'activities':[]
    })
    return "Succes"

@app.route('/add_activity', methods=['GET', 'POST'])
def add_activity():
    res = request.get_json()
    newdocument = db.users.find_one({'email':'tt', 'password':'tty'})
    print('title:')
    
    newdocument['activities'].append({
        'title':res.get('title'),
        'date':res.get('date'),
        'time':res.get('time'),
        'day':res.get('day')
        })
    
    db.users.update_one({"email":newdocument['email']}, {"$set":newdocument})
    suggestions = learn(newdocument['activities'])

    print(suggestions)
    return 'updated'


@app.route('/get_activities', methods = ['GET', 'POST'])
def get_activities():
    res = request.get_json()
    user_item = db.users.find_one({'email': res.get('email')})
    activities = user_item.get('activities')
    return activities

if __name__ == "__main__":
    app.run(debug=True)
from flask import Flask, request, Blueprint
from flask_cors import CORS
from pymongo import MongoClient
from learning_model import learn
import json
import datetime
from calculate_interval import calculate_interval

app = Flask(__name__)

CORS(app)

connection = MongoClient('localhost', 27017)
db = connection['todoDB']

users = Blueprint('users', __name__)


document = db.users.find_one({'email':'tt', 'password':'tty'})

activities = document.get('activities')

print(json.dumps(activities, indent = 3))

learn(activities)

current_date = datetime.date.today()
firstActivity_date = activities[0].get('date')

interval = calculate_interval(firstActivity_date, current_date)



# print(activities[0])

# print(current_date)

# print(interval)

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

@app.route('/get_suggestions', methods=['GET', 'POST'])
def get_suggestions():
    res = request.get_json()
    document = db.users.find_one({'email':'tt', 'password':'tty'})
    suggestions = document.get('suggestions')
    print("suggestions")
    print(json.dumps(suggestions, indent = 3))

    return suggestions
    # current_date = datetime.date.today()
    # firstActivity_date = activities[0].get('date')

    # interval = calculate_interval(firstActivity_date, current_date)
    # if interval > 7:
    #     suggestions = learn(document['activities'])
    #     print(interval)
    #     print(suggestions)
    #     return suggestions
    
    # else: 
    #     return None


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
    
    schedule_history = []
    current_date = datetime.date.today()

    for element in newdocument['activities']:
        result = calculate_interval(current_date, element.get("date"))
        if result<0:
            schedule_history.append(element)

    suggestions = learn(schedule_history)

    
    print('activities:')
    print(json.dumps(schedule_history, indent = 3))

    newdocument['suggestions'] = suggestions
    db.users.update_one({"email":newdocument['email']}, {"$set":newdocument})

    print(suggestions)
    return suggestions


@app.route('/get_activities', methods = ['GET', 'POST'])
def get_activities():
    res = request.get_json()
    user_item = db.users.find_one({'email': res.get('email')})
    activities = user_item.get('activities')
    # schedule_history = []
    # current_date = datetime.date.today()

    # for element in activities:
    #         result = calculate_interval(current_date, element.get("date"))
    #         if result<0:
    #             schedule_history.append(element)

    #     # suggestions = learn(activities)

        
    # print('activities:')
    # print(json.dumps(schedule_history, indent = 2))

    return activities

if __name__ == "__main__":
    app.run(debug=True)
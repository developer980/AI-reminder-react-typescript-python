import json

# a = 1
# b = 3
# print(a + b)

# elements = [
#     {
#         "activity":'c',
#         "time":3,
#         "date":5
#     },
#     {
#         "activity":'a',
#         "time":2,
#         "date":4
#     },
#     {
#         "activity":'a',
#         "time":5,
#         "date":1
#     },
#     {
#         "activity":'a',
#         "time":1,
#         "date":2
#     },
#     {
#         "activity":'a',
#         "time":1,
#         "date":3
#     },
#     {
#         "activity":'b',
#         "time":2,
#         "date":2
#     },
#     {
#         "activity":'b',
#         "time":3,
#         "date":3
#     },
#     {
#         "activity":'c',
#         "time":3,
#         "date":4
#     }
# ]

def learn(elements):
    # print(json.dumps(elements, indent=3))
    checked_elements = []

    most_common = {
        'obj':{},
        'quantity':0
    }

    print('processing')

    activity_frequency = {
    }

    time_frequency = {
    }

    for item in range(len(elements)):

        if elements[item].get('title') in activity_frequency:
            activity_frequency[elements[item].get('title')]['freq'] += 1
            activity_frequency[elements[item].get('title')]['date'].append({
                    'date':elements[item].get('date'),
                    'time':elements[item].get('time'),
                    'day':elements[item].get('day'),
            })
        
        else:
            activity_frequency[elements[item].get('title')] = {
                "name":elements[item].get('title'),
                "freq":1,
                'date':[{
                    'date':elements[item].get('date'),
                    'time':elements[item].get('time'),
                    'day':elements[item].get('day'),
                    }]
                }


    def bubble_sort(mylist):
        new_list = []
        new_list = list(mylist.values())
        n = len(new_list)
        # print(new_list)
        for i in range(n):
            print('activity: ')
            print(new_list[i].get('freq'))
            for j in range(0, n-i-1):
                if new_list[j].get('freq') < new_list[j+1].get('freq'):
                    new_list[j], new_list[j+1] = new_list[j+1], new_list[j] 

        
        return new_list

    final_list = bubble_sort(activity_frequency)
    # print(json.dumps(final_list, indent=3))

    suggestions = []

    for i in range(len(final_list)):
        if i == 0:
            suggestion = "shouldn't you do " + str(final_list[i].get('name') + " at " + str(final_list[i].get('date')[0].get('time'))) + "?"
            suggestions.append({
                "important suggestion":suggestion,
                "data":final_list[i]
                })

        else:
            suggestion = "do you have any plans for " + str(final_list[i].get('name') + " at " + str(final_list[i].get('date')[0].get('time'))) + "?"
            suggestions.append({
                "suggestion":suggestion,
                "data":final_list[i]
                })


    return suggestions

import datetime

def calculate_interval(date1, date2):
    year1 = str(date1).split("-")[0]
    month1 = str(date1).split("-")[1]
    day1 = str(date1).split("-")[2]

    year2 = str(date2).split("-")[0]
    month2 = str(date2).split("-")[1]
    day2 = str(date2).split("-")[2]

    date1_structure = datetime.date(int(year1), int(month1), int(day1))
    date2_structure = datetime.date(int(year2), int(month2), int(day2))

    interval = date2_structure - date1_structure

    return interval.days
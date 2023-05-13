import React from 'react'
import Activity from '../activity/activity'
import "./activity-routine.css"
import { useState } from 'react'
import Activity_model from '../activity_model/activity_model'
import Axios from 'axios'

type Props = {
    activities: {
        title: string,
        date: string,
        time: string,
    }[],
    day: string,
    date: number,
    month: number,
    year:number,
}

export default function Activity_routine({ activities, day, date, month, year }: Props) {
    
    const [show, showActivityModel] = useState(0) 

    console.log(activities)
    const sorted_activities_list = activities.sort((a, b) => (Number(a.time.replace(':', '.')) - Number(b.time.replace(':', '.'))) > 0 ? 1:-1)
    console.log(sorted_activities_list)

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <div className = "activity-routine">
            <div className='current-day'>
                <b>{day}</b>, {String(date)} {months[month]} {year}
            </div>

            <div className = 'routine-activities'>
                {sorted_activities_list.map(activity => {

                    const activity_date = activity.date.split("-")[2]
                    const activity_month = activity.date.split('-')[1]
                    console.log(activity_date + " = " + (date -1))

                    if(Number(activity_date) == date && Number(activity_month) == month+1)
                        return (
                            <Activity title={activity.title} date={activity.date} time={activity.time} currentDate={date}/>
                        )  
                })}
                
                {show ? <Activity_model day={day} date={date} month={month} year={year} /> : null}
                
                <div className="routine-add" onClick={() => {
                    showActivityModel(1)
                }}>+</div>
            </div>
        </div>
    )
}
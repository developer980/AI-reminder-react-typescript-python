import React, { useState } from 'react'
import Activity from '../../components/activity/activity'
import "./home.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
// require('dotenv').config()
import { DotenvConfigOptions } from 'dotenv'
import Layout from '../../components/layout/layout'
import Side_section from '../../components/side_section/side_section'
import Activity_routine from '../../components/activity_routine/activity_routine'

export default function Home() {
    const data = ["Data1", "Data2", "Data3"]
    const [week_index, setWeekIndex] = useState(0)
    const[month_index, setMonthIndex] = useState(-1)

    console.log(process.env.REACT_APP_SERVICE)

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const today = new Date()
    const current_date_index = today.getDate()
    const current_day_index = today.getDay()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const last_month_length = new Date(year, month + month_index, 0).getDate()
    console.log("Last month had: " + last_month_length + " days")
    console.log(days[current_day_index - 1])
    
    const current_date = new Date(today.getTime())

    // type Props = {
    //     item: {
    //         date: string,
    //         day: string,
    //         time: string,
    //         title: string
    //     }
    // }

    // interface suggestionsState{
    //     list:[{
    //         data: object,
    //         day: string,
    //         time: string,
    //         title: string
    //     }]
    // }
    // today.setDate(today.getDate() - 7)

    console.log('current date: ' + today.getDate())
    const [activities, setActivities] = useState([
        {
            date:'',
            day:'',
            time: "",
            title: '',
        },
    ])


    const [suggestions, setSuggestions] = useState<any[]>([])
    const [today_suggestions, set_today_suggestions] = useState<any[]>([])
    const [suggestions_menu, showSuggestionsMenu] = useState<any>(0)

    
    // set_today_suggestions(prevstate => [...prevstate, {
    //     greet:"hello there"
    // }])

    suggestions.length == 0 && axios.post('http://127.0.0.1:5000/get_suggestions', {
        email: 'tt'
    }).then(response => {
        setSuggestions(response.data)
    })
    console.log(suggestions)

    // const activities =

    console.log(activities.length)
    

    activities.length == 1 && axios.post('http://127.0.0.1:5000/get_activities', {
        email:'tt'
    }).then(response => {
        console.log('length ' + response.data.length)
        
        setActivities([{
                date: "",
                day: "",
                time: "",
                title: ""
            }, ...response.data])
    })
    console.log(activities)

    const newSuggestions = suggestions.map(suggestion => {
        const data = suggestion.data.date.filter((item: any) => item.day == days[current_day_index - 1])
        const name = suggestion.data.name
        return{
            name,
            data
        }

        // // if (suggestion.hasOwnProperty('suggestions'))
        // console.log(data)

        // return obj
    }).filter(suggestion => suggestion.data.length > 0)

    console.log(newSuggestions)
    
    if (!today_suggestions.length && newSuggestions.length)
        set_today_suggestions([...newSuggestions])
    
    console.log(today_suggestions)
    

    return (
        <Layout>
            <div className = "main-section">
                <button className = 'switch-button prev' onClick={() => {
                    setWeekIndex(week_index - 7)
                }}>Prev</button>
                <button className = 'switch-button next' onClick={() => {
                    setWeekIndex(week_index + 7)
                }}>Next</button>
                <button className="view-suggestions" onClick={() =>
                   suggestions_menu ? showSuggestionsMenu(0) : showSuggestionsMenu(1)
                }>suggestions</button>
                
                <div className="suggestion-menu">
                    {
                        suggestions_menu ?
                        today_suggestions.map(item => {
                        return <div className = "suggestion-item">
                            Shouldn't you go {item.name} at {item.data[0].time}
                        </div>
                        }) : null
                    }
                </div>
                
                <Side_section />
                <div className="activities-list">
                    {/* <button onClick={() => {
                        axios.post("http://127.0.0.1:5000/post", {
                            poop:'poop'
                        }).then(data => {
                            console.log(data.data)
                        })
                    }}>Post</button> */}
                    {/* <Activity title='Activity1' data = {data}/>   */}
                    {
                        days.map((day, index) => {

                            const date = new Date(today.getTime())
                            date.setDate(today.getDate() - current_date_index + week_index + index + 1)
                            
                            const current_activities = activities.filter(activity => activity.day.includes(day))

                            // console.log(current_activities)
                            return <Activity_routine activities={current_activities} day={day} date={date.getDate()} month={date.getMonth()} year= {date.getFullYear()} />
                        })
                    }

                    <Link to="/login">
                        login
                    </Link>
                </div>
                </div>
        </Layout>
  )
}

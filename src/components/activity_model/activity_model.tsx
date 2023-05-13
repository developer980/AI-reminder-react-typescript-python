import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import "./activity-model.css"

type Props = {
    day: string,
    date: number,
    month: number,
    year: number,
}

const Activity_model = ({ day, date, month, year }: Props) => {

    const [title, setTitle] = useState('')
    // const [date, setDate] = useState('')
    const [time, setTime] = useState<any>({
        hours: '',
        minutes:''
    })
    console.log(date)

    const fullDate = `${year}-${month < 10 ? "0" + (month + 1) : month}-${date < 10 ? "0" + date : date}`

    return <div className='activity'>
            <input className="activity-title" placeholder='Activity name' onChange={(e) => {  
            setTitle(e.target.value)
            }}/>
                
            <div className="activity-details-date">
                {fullDate}
            </div>
        
            <div>
                    {/* <input className="activity-settings-date"></input> */}
                <input className="activity-details-time activity-details-time-input" maxLength={2} onChange={(e) => {
                    if(e.target.value.length == 2)
                        document.getElementById("minutes")?.focus()
                
                    setTime((prevState:any) => {
                        return {
                            hours: e.target.value,
                            minutes: prevState.minutes,
                        }
                    })
                }} /> :
                <input id="minutes" className="activity-details-time activity-details-time-input" maxLength={2} onChange={(e) => {
                setTime((prevState:any) => {
                    return {
                        hours: prevState.hours,
                        minutes: e.target.value,
                    }
                })
                }} />
            </div>  

                <div className="activity-importance">
                    Important
                </div>
                
                <div className="activity-manage">
            <button className="activity-manage-button" onClick={() => {
                console.log('sending')
                Axios.post('http://127.0.0.1:5000/add_activity', {
                    title:title,
                    date:fullDate,
                    time: time.hours + ":" + time.minutes,
                    day:day
                })
                    }}>Add</button>
                </div>  
            </div>
}

export default Activity_model
// export default function Activity() {
//   return (
//     <div className='activity'>
//         <div className = "activity-title">Title</div>
//           <div className="activity-details">
//               <ul>
//                   <li>Elem1</li>
//                   <li>Elem2</li>
//                   <li>Elem3</li>
//               </ul>
//         </div>
//         <div className = "activity-settings"></div>  
//     </div>
//   )
// }

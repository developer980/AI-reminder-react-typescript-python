import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
// import "./activity.css"

type Props = {
    day: string,
    // data: string[]
}

const Activity_model = ({day}: Props) => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    console.log(date)

    return <div className='activity'>
            <input className="activity-title" placeholder='Activity name' onChange={(e) => {  
            setTitle(e.target.value)
            }}/>
                
            <div className="activity-details">
                <input className="activity-details-date" type="date" placeholder='Date' onChange={(e) => {
                    setDate(e.target.value)
                }} />
            </div>
        
            <div className="activity-settings">
                    {/* <input className="activity-settings-date"></input> */}
                <input className="activity-settings-time" onChange={(e) => {
                    setTime(e.target.value)
                }} placeholder='H:MIN'/>
            </div>  

                <div className="activity-importance">
                    Important
                </div>
                
                <div className="activity-manage">
            <button className="activity-manage-button" onClick={() => {
                console.log('sending')
                Axios.post('http://127.0.0.1:5000/add_activity', {
                    title:title,
                    date:date,
                    time: time,
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

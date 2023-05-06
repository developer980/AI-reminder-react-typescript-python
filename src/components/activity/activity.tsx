import React from 'react'
import "./activity.css"

type Props = {
    title: string,
    date: string,
    time: string,
    currentDate:number
}

const Activity = ({title, date, time}: Props) => {
    return <div className='activity'>
                <div className = "activity-title">{title}</div>
                <div className="activity-details-date">
                    {date}
                </div>
        
                {/* <div className="activity-settings"> */}
                    {/* <div className="activity-settings-date">Tue 3 Aug. 2023</div> */}
                <div className="activity-details-time">{time.replace('.', ':')}</div>
                {/* </div>   */}

                {/* <div className="activity-importance">
                    Important
                </div> */}
                
                <div className="activity-manage">
                    <button className="activity-manage-button">Remove</button>
                </div>  
            </div>
}

export default Activity
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

import React from 'react'
import "./activity.css"

type Props = {
    title: string,
    data: string[]
}

export default function Activity({title, data}: Props) {
    return <div className='activity'>
                <div className = "activity-title">{title}</div>
                    <div className="activity-details">
                        {
                            data.map(elem => {
                                return<div className='activity-datails-elem'>
                                        {elem}  
                                    </div>
                                })
                        }
                    </div>
        <div className="activity-settings">
            <div className="activity-settings-date">Tue 3 Aug. 2023</div>
            <div className="activity-settings-time">00:00</div>
        </div>  

        <div className="activity-importance">
            Important
        </div>
        
        <div className="activity-manage">
            <button className="activity-manage-button">Remove</button>
        </div>  
            </div>
}


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

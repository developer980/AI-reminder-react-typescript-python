import React from 'react'
import "./side-section.css"

type Props = {}

export default function Side_section({}: Props) {
    return (
        <div className='side-section'>
            <div className='side-section-item'>
               Activity type
                <div className='side-section-activity-types'>
                    <div className='activity-type activity-type-work'>Work</div>
                    <div className='activity-type activity-type-fun'>Fun</div>
                    <div className='activity-type activity-type-travel'>Travel</div>
                </div>
            </div>

            <div className='side-section-item'>
                Activity time
                <div className='side-section-activity-types'>
                    <div className='activity-time activity-time-first'>First-part</div>
                    <div className='activity-time activity-time-mid'>Mid-day</div>
                    <div className='activity-time activity-time-ev'>Evening</div>
                </div>
            </div>
        </div>
  )
}
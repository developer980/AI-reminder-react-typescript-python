import React from 'react'
import Activity from '../../components/activity/activity'
import "./home.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
    const data = ["Data1", "Data2", "Data3"]
    const activities = [
        {
            title: "Lorem ipsum dolor sit amet",
            data: [
                "Provident similique",
                "Veritatis obcaecati",
                "Quo neque error"
            ]
        },
        {
            title: "Maxime mollitia, molest",
            data: [
                "data11",
                "data12",
                "data13"
            ]
        },
        {
            title: "act3",
            data: [
                "data21",
                "data22",
                "data23"
            ]
        }
    ]
  return (
      <div className="activities-list">
          <button onClick={() => {
              axios.post("http://127.0.0.1:5000/post", {
                  poop:'poop'
              }).then(data => {
                  console.log(data.data)
              })
          }}>Post</button>
          {/* <Activity title='Activity1' data = {data}/>   */}
          {
              activities.map(item => {
                  return <Activity title={item.title} data={item.data} />
              })
          }

          <Link to="/login">
              login
          </Link>
    </div>
  )
}

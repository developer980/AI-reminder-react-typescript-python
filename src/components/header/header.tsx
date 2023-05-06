import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

type Props = {}

export default function Header({}: Props) {
  return (
    <nav>
        <div className="nav-links">
            <Link className="nav-links-element" to = "/">Home</Link>
            <Link className="nav-links-element" to = "/login">Sign in</Link>
            <Link className="nav-links-element" to = "/">Profile</Link>
        </div>      
    </nav>
  )
}
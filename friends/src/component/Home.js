import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return(
        <div>
            <h2>Friends List</h2>
            <Link to='/' component={Home} /> 
        </div>
    )
}
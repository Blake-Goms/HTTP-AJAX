import React from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend'

export default function({friends}) {
    return(
    <div>
    
    <Link to='/'>Home</Link>
    { friends.map((friend, index) => (  
        <Friend name={friend.name} age={friend.age} email={friend.email} key={index} />        
    ))}
    
    </div>
    )
}

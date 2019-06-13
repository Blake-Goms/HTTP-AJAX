import React from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend'

export default function FriendsList({friends}) {
    return(
    <div>
        <div>
            <Link to='/'>Home</Link>
        </div>    
        <div>
        <Link to='/friendForm'>Add Friend</Link>
        </div>     
    { friends.map((friend, index) => (  
        <Friend name={friend.name} age={friend.age} email={friend.email} key={index} />        
    ))}
    
    </div>
    )
}

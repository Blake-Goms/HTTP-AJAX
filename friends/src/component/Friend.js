import React from 'react';

export default function Friend(props) {
    return(
        <div className='card-container'>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>
                <h2>{props.age}</h2>            
                <h2>{props.email}</h2>
                <button onClick={e => props.setUpdateForm(e, props.friend)} >Update Friend Info</button>
                <button onClick={e => props.deleteFriend(e, props.friend.id)}>Delete</button>
            </div>
        </div> 
    )
}

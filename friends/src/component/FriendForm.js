import React from 'react'
import {Link} from 'react-router-dom'

export default class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: this.props.activeFriend ||  {
                name: '',
                age: '',
                email: '',
                id: 0
            },
            active: false
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend ) {
            this.setState({friend: this.props.activeFriend, active: true })
        }
    }

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({ 
            friend: {...prevState.friend,
            [e.target.name]: e.target.value}
        }))
    }

    submitHandler = (e, friend) => {
        if (this.state.active) {
            //update here
            this.props.updateFriend(e, this.state.friend)
        } else {
            //add here
            this.props.addFriend(e, this.state.friend)
        }
        this.setState({
            friend: {
            age: '',
            email: '',
            }, active: false
        })
    }
    


    render (){
        return (
            <div>                
                <form onSubmit={this.submitHandler} >
                    <input name='name' value={this.state.friend.name} type= 'text' placeholder='Name' onChange={this.changeHandler} required />
                    <input name='age' value={this.state.friend.age} type= 'number' placeholder='Age'  onChange={this.changeHandler} required />
                    <input name='email' value={this.state.friend.email} type= 'email' placeholder='E-mail'  onChange={this.changeHandler} required />
                    <button> {`${this.state.active ? 'Update' : 'Add Friend'}`} </button>
                </form>
            </div>
        )
    }
}
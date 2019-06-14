import React from 'react';
import axios from 'axios';
import { Route, withRouter, Link } from 'react-router-dom';
import FriendsList from './component/FriendsList';
import FriendForm from './component/FriendForm';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
        activeFriend: null,
        friends: [],
        error: '',
        activeFriend: null
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(res => {
        console.log(res);
        this.setState({ friends: res.data})
        })
        .catch(err => {
        console.log(err);
        this.setState({ error: err.response.message})//isn't doing much, but Dustin had *shrug*
        })
    }

    addFriend = (e, friend) => {
        e.preventDefault();
        axios.post('http://localhost:5000/friends', friend)
        .then( res => this.setState({friends: res.data}))
        .catch( err => console.log(err))
    }

    updateFriend = (e, friend) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/friends/${friend.id}`, friend)
            .then( res => this.setState({friends: res.data}))
            .catch( err => console.log(err))
    }

    setUpdateForm = (e, friend) => {
        e.preventDefault();
        this.setState({ activeFriend: friend })
    }

    deleteFriend = (e, id) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then( res => this.setState({friends: res.data}))
            .catch( err => console.log(err))
    }

    render() {
        return (
        <div className="App">
            <Link to='/'> Home </Link> 
            <Link to='/friends-list'> View Friends </Link> 
            <Route exact path='/friends-list' render={props =>
            <>
                <FriendForm
                addFriend={this.addFriend}
                updateFriend={this.updateFriend}
                activeFriend={this.state.activeFriend}
                /> 
                <FriendsList 
                setUpdateForm={this.setUpdateForm}
                deleteFriend={this.deleteFriend}
                friends={this.state.friends}
                activeFriend={this.setState.activeFriend}
                />
            </>
            }/>        
        </div>
        );
    }
}

export default withRouter(App);

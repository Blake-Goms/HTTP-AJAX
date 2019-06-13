import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import Home from './component/Home';
import FriendsList from './component/FriendsList';
import FriendForm from './component/FriendForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
      friends: [],
      error: ''
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

  // POST: CREATE FOR ADD FRIEND
  addFriend = (e, friend) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/friends', friend)
    .then( res => {
      this.setState({
        friends: res.data
      })
    })
    .catch( err => {
      this.setState({
        error: err
      })
  });
  }


// UPDATE FORMS
  setUpdateForm = ( e, friend) => {
    e.preventDefault();
    this.setState({
      friends: friend
    });
    this.props.history.push('/friendForm');
  };

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
    .put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then( res => {
      this.setState ({
        activeFriend: null,
        friends: res.data
      });
      this.props.history.push('/friend');
    })
    .catch(err => {
      console.log(err);
    });
  };



  render() {
    return (
      <div className="App">
        {/* {...props} sends the history,match,location to component. Shortcut */}
        <Route exact path="/" component={Home} />

        <Route path='/friend'  
          render={props => 
          <FriendsList {...props} 
          friends={this.state.friends} /> 
          } 
        />     
        
        <Route path="/friendForm"
          render={props => (
            <FriendForm
              {...props}
              activeFriend={this.state.activeFriend}
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />

      </div>
    );
  }
}

export default App;

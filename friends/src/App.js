import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';
import FriendsList from './component/FriendsList';
import Friend from './component/Friend';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
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

  render() {
    return (
      <div className="App">
        {/* {...props} sends the history,match,location to component. Shortcut */}
        <Link to='/friend' > View Friends </Link>
        <Route exact path='/'  render={props => <FriendsList {...props} friends={this.state.friends} /> } />
        <Route path='/friend'  component={Friend} />         
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

class FriendForm extends React.Component {
    state = {
        friend: this.props.activeFriend || {
        name: '',
        age: '',
        email: ''
        },
        active: false
    };

    componentDidUpdate(prevProps) {
        if (
        this.props.activeFriend &&
        prevProps.activeFriend !== this.props.activeFriend
        ) {
        this.setState({
            friend: this.props.activeFriend,
            active: true
        });
        }
    }

    changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'age') {
        value = parseInt(value, 10);
        }

        this.setState(prevState => ({
        friend: {
            ...prevState.friend,
            [ev.target.name]: value
        }
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.active) {
        this.props.updateFriend(e, this.state.friend);
        } else {
        this.props.addFriend(e, this.state.friend);
        }
        this.setState({
        friend: {
            name: '',
            age: '',
            email: ''
        },
        active: false
        });
    };

    render() {
        return (
        <div>
            <Link to='/friend'>View Friends</Link>
            <h2>{`${this.props.activeFriend ? 'Update' : 'Add New'} friend`}</h2>
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="name"
                onChange={this.changeHandler}
                placeholder="name"
                value={this.state.friend.name}
            />
            <div className="baseline" />

            <input
                type="number"
                name="age"
                onChange={this.changeHandler}
                placeholder="age"
                value={this.state.friend.price}
            />
            <div className="baseline" />

            <input
                type="string"
                name="email"
                onChange={this.changeHandler}
                placeholder="email"
                value={this.state.friend.description}
            />

            <div className="baseline" />

            <button className="md-button form-button">{`${
                this.props.activeFriend ? 'Update' : 'Add New'
            } friend`}</button>
            </form>
        </div>
        );
    }
}

export default FriendForm;
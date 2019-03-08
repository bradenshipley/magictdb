import React, { Component } from 'react';
import { auth } from './firebase/config'

class App extends Component {
	state = {
		user: ''
	}
	componentDidMount = () => {
		//add a listener for a logged in user, if there is one, set the user state to the currently logged in user, else do nothing
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user })
			} else {
				this.setState({ user: '' })
			}
		})
	}
	register = () => {
		auth.createUserWithEmailAndPassword('kayceeshipley@gmail.com', 'password123').catch(err => console.log(err))
	}
	login = (user, email) => {
		auth.signInWithEmailAndPassword('bradenrshipley@gmail.com', 'password123').catch(err => console.log(err))
	}
	logout = () => {
		auth.signOut().then(() => this.setState({ user: '' })).catch(err => console.log(err))
	}
	render() {
		return (
			<div className="App">
				Landing Page
			<button onClick={this.register}>register</button>
				<button onClick={this.login}>login</button>
				<button onClick={this.logout}>logout</button>
				<br />
				{this.state.user ? this.state.user.email : <p>Nobody is signed in!</p>}
			</div>
		);
	}
}

export default App;

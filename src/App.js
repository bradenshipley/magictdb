import React, { Component } from 'react';
import AppBar from './components/AppBar/AppBar'
import { auth } from './firebase/config'
import RegisterModal from './components/Modal/RegisterModal'
import LoginModal from './components/Modal/LoginModal'
import { MuiThemeProvider } from '@material-ui/core/styles';
import routes from './routes'

class App extends Component {
	state = {
		user: '',
		showRegister: false,
		showLogin: false
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
	showRegister = () => {
		this.setState({ showRegister: !this.state.showRegister })
	}
	showLogin = () => {
		this.setState({ showLogin: !this.state.showLogin })
	}
	logout = () => {
		auth.signOut().then(() => this.setState({ user: '' })).catch(err => console.log(err))
	}
	render() {
		return (
			<MuiThemeProvider theme={this.props.theme}>
				<div className="App">
					<AppBar
						login={this.login}
						logout={this.logout}
						user={this.state.user}
						showRegister={this.showRegister}
						showLogin={this.showLogin}
						register={this.register}
					/>
					{routes}
					<RegisterModal
						show={this.state.showRegister}
						showRegister={this.showRegister}
						register={this.register}
					/>
					<LoginModal
						show={this.state.showLogin}
						showLogin={this.showLogin}
						login={this.login}
					/>
				</div>
			</MuiThemeProvider >
		);
	}
}

export default (App);

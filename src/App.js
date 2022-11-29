import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Profile from './components/profile';
import News from './components/news';
import Footer from "./components/footer";

export default class AppMain extends Component {

    state = {
        isLoggedIn: false,
    }

    onLogin = (event) => {
        event.preventDefault();
        if (event.target.username.value === 'Admin' && event.target.password.value === '12345') {
            <Redirect to='/profile'/>
            this.setState({isLoggedIn: true});
        } else {
            window.alert("Username or password entered is incorrect.");
            this.setState({isLoggedIn: false});
        }
    }

    render() {

        return (
            <React.Fragment>
                <Router>
                    <Header/>

                    <Switch>

                        <Route path='/' component={Home} exact/>

                        <Route path='/news' component={News}/>

                        <Route path='/login' render={() => (
                                this.state.isLoggedIn ? <Profile/> :
                                    <Login
                                        isLoggedIn={this.state.isLoggedIn}
                                        onLogin={this.onLogin}/>)}/>

                        <Route path='/profile' render={() => (
                                this.state.isLoggedIn ? <Profile/> : <Redirect to='/login'/>
                            )}/>

                    </Switch>

                    <Footer/>

                </Router>
            </React.Fragment>
        );
    }
}
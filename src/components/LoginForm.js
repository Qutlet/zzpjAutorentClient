import React, { Component } from 'react'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import UserStore from './Stores/UserStore'
import axios from 'axios';
import {Link} from 'react-router-dom'

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            buttonDisabled: false,
            error: ''
        }
    }
    setInputValue(property, val) {
        val = val.trim();
        if (val.lenght > 12) {
            return;
        }
        this.setState({
            [property]: val
        })
    }
    resetForm() {
        this.setState({
            name: '',
            password: '',
            buttonDisabled: false
        })
    }
    async doLogin() {
        if (!this.state.name){
            return;
        }
        if (!this.state.password){
            return
        }
        this.setState({
            buttonDisabled:true
        })
        axios.post('https://autorentserver.azurewebsites.net/api/auth/sign-in', {
            name: this.state.name,
            password: this.state.password
          })
          .then((response) => {
              UserStore.login(response.data.permission_level, response.data.token);
              this.props.history.push('/');
              alert('Zalogowano pomyślnie!');
          })
          .catch(function (error) {
            console.log(error.message);
            alert('Nie udało się zalogować.');
          });
          this.resetForm();
    }
    render() {
        return (
            <React.Fragment>
            <div className="loginForm">
            
            <div className='login-label'>Log in</div>
            <InputField
                type='text'
                placeholder='Username'
                value={this.state.name ? this.state.name : ''}
                onChange={ (val) => this.setInputValue('name', val)}
            />
            <InputField
                type='password'
                placeholder='Haslo'
                value={this.state.password ? this.state.password : ''}
                onChange={ (val) => this.setInputValue('password', val)}
            />
            <SubmitButton
                text={'Zaloguj sie'}
                disabled={this.state.buttonDisabled}
                onClick={ () => this.doLogin()}/>
            <div>{this.state.error}</div>

            <div>{this.state.error}</div>
                <Link to="/register" className="nav-link">
                    <div className="login-swap">Nie posiadam konta.</div>
                </Link>
            </div>
            </React.Fragment>
        )
    }
}

export default LoginForm

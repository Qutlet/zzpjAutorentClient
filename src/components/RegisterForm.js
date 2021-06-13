
import React, { Component } from 'react'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import UserStore from './Stores/UserStore'
import axios from 'axios';
import {Link} from 'react-router-dom'

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            buttonDisabled: false,

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
    async doRegister() {
        if (!this.state.name){
            return;
        }
        if (!this.state.password ){
            return
        }
        this.setState({
            buttonDisabled:true
        })
        axios.post('http://localhost:8080/register', {
            firstName: this.state.name,
            lastName: this.state.name,
            password: this.state.password,
            matchingPassword: this.state.password,
            email: this.state.name
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error.message);
          });

    }

    render() {
        return (
            <React.Fragment>
            <div className="loginForm">
            <div className='login-label'>Register</div>
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
            <InputField
                type='password'
                placeholder='Haslo'
                value={this.state.password ? this.state.password : ''}
                onChange={ (val) => this.setInputValue('password', val)}
            />
            <SubmitButton
                text={'Zajerestruj sie'}
                disabled={this.state.buttonDisabled}
                onClick={ () => this.doRegister()}/>
            <div>{this.state.error}</div>
                <Link to="/login" className="nav-link">
                    <div className="login-swap">Posiadam już konto.</div>
                </Link>
            </div>
            </React.Fragment>
        )
    }
}

export default RegisterForm

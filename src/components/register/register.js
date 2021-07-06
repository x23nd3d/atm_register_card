import React, {Component} from 'react';
import './register.css';
import Register from '../../services/register/becomeTheClient';
import Card from '../card/card';


export default class RegisterUser extends Component {

    state = {
        redirect: false,
            name: '',
            surname: '',
            random: this.random()
    }

    registerService = new Register();

    register = () => {
        const user = this.registerService.createNewUser(document.getElementById('card-details'));
        const check = this.registerService.checkUser();
        console.log(check)
        if (check) {
            this.redirect();
            alert('Redirected')
            window.location.reload();
        } else {
            alert('Please register first');
        }
    }

    redirect = () => {
        this.setState(({redirect}) => {
            return {
                redirect: !redirect
            }
        })
    }

    changeHandler = (e) => {
        this.setState(({name, surname}) => {
            const value = e.target.value;
            const holder = e.target.placeholder.toLowerCase();

            return {
                [holder]: value
            }
        })
    }

    random() {
        const num = Math.floor(Math.random()*5) + '' + Math.floor(Math.random()*9) + '' +  Math.floor(Math.random()*7)  + '' +   Math.floor(Math.random()*4);
        const num2 = Math.floor(Math.random()*2) + '' + Math.floor(Math.random()*2) + '' +  Math.floor(Math.random()*1)  + '' +   Math.floor(Math.random()*9);
        const num3 = Math.floor(Math.random()*5) + '' + Math.floor(Math.random()*8) + '' +  Math.floor(Math.random()*7)  + '' +   Math.floor(Math.random()*2);
        const num4 = Math.floor(Math.random()*9) + '' + Math.floor(Math.random()*3) + '' +  Math.floor(Math.random()*4)  + '' +   Math.floor(Math.random()*8);

        return num + ' ' + num2 + ' ' + num3 + ' ' + num4
    }





    render() {

        const { name, surname, random } = this.state;

        return (
            <>
                <div className="main-card">
                    <form action="#" className="card-form" id="card-details">
                        <p>Please register in our Bank to use ATM.</p>
                        <input
                            className="card-item"
                            type="text"
                            placeholder="Name"
                            onChange={this.changeHandler.bind(this)}
                            value={name}/>
                        <input
                            className="card-item"
                            type="text"
                            placeholder="Surname"
                            onChange={this.changeHandler.bind(this)}
                            value={surname}/>
                        <input className="card-item" type="text" placeholder="Age"/>
                        <input className="card-item" type="text" placeholder="Cash"/>
                        <a href="#" className="card-item btn" onClick={this.register.bind(this)} type="submit" id="card-submit">Register</a>
                    </form>
                </div>
                <Card name={name} surname={surname} number={random}/>
            </>

        )
    }
}
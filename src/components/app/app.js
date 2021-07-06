import React, {Component} from 'react';
import './app.css'
import Intro from "../intro";
import RegisterUser from "../register";
import Atm from "../atm";


export default class App extends Component {

    state = {
        registered: !!localStorage.getItem('user'),
        atm: false
    }


    openATM = () => {
        this.setState(({atm}) => {
            return {
                atm: !atm
            }
        })
    }


    // TODO: if we have localstorage = ATM else = INTRO



    render() {

    const { registered, atm } = this.state;
    const output = registered ? <Atm/> :  <RegisterUser/>;
    // const intro = registered ? output : <Intro/>

            console.log(this.state.registered)
        return (
            <div className="container">
                {output}
            </div>
        )
    }
}
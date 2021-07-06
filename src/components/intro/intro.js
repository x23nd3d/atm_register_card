import React, {Component} from 'react';


export default class Intro extends Component {


    render() {
        return (
            <div className="greet">
                <p className="greet-title">Are you already owner of our Super Bank Card? (SBC)</p>
                <div className="btn-list">
                    <a href="#" className="btn btn-main">Yes</a>
                    <a href="#" className="btn btn-main">No</a>
                </div>
            </div>
        )
    }
}
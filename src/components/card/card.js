import React from 'react';
import './card.css'

const Card = ({name, surname, number}) => {

    return (
        <>
                <div className="cc">
                    <span className="chip"></span>
                    <span className="nubank-logo"></span>
                    <span className="mastercard">MasterCard</span>
                    <span className="cc-number">{number}</span>
                    <span className="cc-date expedition">01/29</span>
                    <span className="cc-name">{name + ' ' + surname}</span>
                </div>
        </>
    )
}

export default Card;
import React from 'react';

const Card =(props)=>{
    const {name,birth_year,gender,planet}=props;

    return (
        <div className="ui card">
           
            <div className="content">
                <div className="header">{name}</div>
                <div className="meta  column">
                    <span className="item">Birth year: {birth_year}</span>
                    <span className="item">Gender: {gender}</span>
                </div>
                <div className="description">{name}'s home planet is {planet}.</div>
            </div>
           
        </div>
    );
}

export default Card;
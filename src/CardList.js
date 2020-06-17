import React from 'react';
import Card from './Card.js';

const CardList = ({people}) =>{

   


    return (
        <div className='ui container cards'>
        {
            people.map((person,i) => {
            return(
                <Card key={i} 
                    name={person.name}
                    birth_year={person.birth_year}
                    gender={person.gender}
                    planet={person.planet}
                    
                />
                );
            })
        }
        </div>
                
           
      

    );
}

export default CardList;
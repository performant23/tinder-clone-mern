import React, {useEffect, useState} from 'react'
import "./TinderCards.css";
import TinderCard from 'react-tinder-card'
import axios from "./axios.js";

function TinderCards() {
    
    const [people, setPeople] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const req = await axios.get('/tinder/card');
            setPeople(req.data);
        }

    fetchData();

    },[])



    const swiped = (direction, Delname) => {
        console.log(Delname + ":(" + direction);
    };
    
    const outOfFrame = (Delname) =>{
        console.log(Delname + "outta frame");
    
    };
    
    
    
  return (
    <div className='TinderCards'>
        <div className='card__container'>
            {people.map((person) =>
            (
                // Imported from react-tinder-card. Assigning the values to parameters
                <TinderCard 
                className="swipe"
                key= {person.name}
                preventSwipe={['up', 'down']}
                onSwipe={(dir) => swiped (dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{backgroundImage: `url(${person.imgUrl})`}} className='card'>
                        <h4>{person.name}</h4>
                    </div>


                </TinderCard>
            )
            
            )
            }
        </div>
    </div>
  )
}

export default TinderCards
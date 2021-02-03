import React, { useState, useEffect } from 'react'
import card1 from '../../images/Arcanine.png'
import card2 from '../../images/charizard.png'
import card3 from '../../images/evee.png'
import card4 from '../../images/Gengar.png'
import card5 from '../../images/Lucario.png'
import card6 from '../../images/Mewtwo.png'
import card7 from '../../images/Mimikyu.png'
import card8 from '../../images/pikachu.png'
import card9 from '../../images/Snorlax.png'
import card10 from '../../images/Tyranitar.png'
import Tiles from './Tiles'

function CardContainer(props) {
    const { handleGameLogic, score, highsore} = props

    const pics = [
        {
            name: 'Arcanine', 
            src:card1
        },
        {
            name: 'Charizard', 
            src:card2
        }, 
        {
            name: 'Evee', 
            src:card3
        }, 
        {
            name: 'Gengar', 
            src:card4
        }, 
        {
            name: 'Lucario', 
            src:card5
        }, 
        {
            name: 'Mewtwo', 
            src:card6
        }, 
        {
            name: 'Mimikyu', 
            src:card7
        }, 
        {
            name: 'Pikachu', 
            src:card8
        }, 
        {
            name: 'Snorlax', 
            src:card9
        }, 
        {
            name: 'Tyranitar',
            src:card10}
         ];

         const [cards, setNewCards] = useState(pics)

         const shuffle = (newCards) => {
             for (let i = newCards.length -1; i > 0; i--){
                let randomId = Math.floor(Math.random() * i);
                [newCards[randomId], newCards[i]] = [newCards[i], newCards[randomId]]
             }
         }

         useEffect(() => {
            const newCards = [...cards];
            shuffle(newCards);
            setNewCards(newCards)
        },[score, highsore])

         return (
            <>
                {cards.map((card) => (
                    <Tiles card={card} key={card.title} handleGameLogic={handleGameLogic}/>
                ))}
            </>
         )
}


export default CardContainer
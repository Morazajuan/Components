import {database} from '../database/config'

export function startLoadingCard() {
    return (dispatch) => {
        return database.ref('cards').once('value').then((snapshot) => {
        let cards = []
        snapshot.forEach((childSnapshot) => {
            cards.push(childSnapshot.val())
        })
        dispatch(loadCards(cards))
        }).catch((error) => {
        console.log(error)
        })
        }
   }
   export function startAddingCards(card){


    return ( dispatch) =>{
        return database.ref('cards').update({[card.name]: card}).then(() =>{
            dispatch(addCard(card))
        }).catch( (error)=>{
            console.log(error)
        })
    }
}
export function startRemovingCards(index, name) {
    return (dispatch) => {
    return database.ref(`cards/${name}`).remove().then(() => {
    dispatch(removeCard(index))
    }).catch((error) => {
    console.log(error)
    })
    }
   }

export function removeCard( index){

return{

    type: "REMOVE_CARD",
    index

}

}

export function addCard( card){

    return{
    
        type: "ADD_CARD",
        card
    
    }
    
    }
    export function loadCards(cards) {
        return {
        type: 'LOAD_CARD',
        cards
        }
       }
    
    
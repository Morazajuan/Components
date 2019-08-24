 
const cardReducer = function cards(state = cards , action){

 

switch(action.type){

    case 'REMOVE_CARD': {
        console.log("Remove_CARDS")

        console.log(state.slice(0,action.index))
        console.log(state.slice(action.index+1))


        if (action.index === -1){
            return []

        }
    
        
        // return;
        return [...state.slice(0,action.index), ...state.slice(action.index+1)] 
    }
    case 'ADD_CARD':{
         
         // console.log(action.newItem)
         return [...state, action.card]


        //  return [{"id": action.id, "imageLink": action.imageLink, "description": action.description},...state]
    }
    case 'LOAD_CARD':{
         
        // console.log(action.newItem)
        return  action.cards


       //  return [{"id": action.id, "imageLink": action.imageLink, "description": action.description},...state]
   }
    default: return state
}
 

}
export default cardReducer
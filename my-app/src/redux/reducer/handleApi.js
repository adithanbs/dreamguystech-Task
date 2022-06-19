import {ADDCART} from '../action/index'

const initialState = {
    apiValue:[]
};

const handleApi = (state = initialState,action) => {    
    switch (action.type) {
        case "ADDCART":
            // console.log("adddcart",{...state, apiValue:action.payload});
        return {...state, apiValue:action.payload};
        case "ADDFAV":    
        const updateValue = {...state, apiValue:action.payload}
        let finalVale = updateValue.apiValue;
        const newList = [...state.apiValue];
        const newState = newList.map((ele,index) => {
          return  ele.id === finalVale ? {...ele,fav : true} : ele
        });

        // console.log(newState);
    return {...state,newState}
        default:
            break;
    }
    // console.log("state",state);
    return state 
}

export default handleApi;
const initialState = [
    {adi:"dad"},{adi:"dad"}
];

const handleApi = (state = initialState,action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDCART":
            
            state = product;
            return state;
            
            break;
    
        default:
            break;
    }
}

export default handleApi;
 export const addCart = (product) => {
  //  console.log("aactionj",product);
   return {
     type: "ADDCART",
     payload: product,
   };
 }

 export const addFav = (product) => {

    return {
      type: "ADDFAV",
      payload: product,
    };
  }
import React from "react";
import { useDispatch,useSelector } from "react-redux";

const FavList = () => {
    const selector = useSelector((state) =>state.handleApi.apiValue)
    const value = selector.filter((e,i) => {
        return e.fav === true ? e : ""
    })
    console.log(selector,value)
    return(
        <>
        <div className = "container my - 5">
       <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Email</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
  
      </tr>
    </thead>
     <tbody>
        {value.map((ele,index) => (
   <tr key = {index} >
  <th scope="row">{ele.id}</th>
        <td>{ele.email}</td>
        <td>{ele.first_name}</td>
        <td>{ele.last_name}</td>
  
   </tr>  
        ))
         
        }
     
    </tbody> 
  </table>
  </div>
        </>
    )
}

export default FavList;


import React,{useEffect, useState} from 'react';
import LoadingSpinner from './LoadSpiner';
import { useDispatch } from 'react-redux';
import { addFav } from "../redux/action/index";
import "./post.css"
import { Link } from 'react-router-dom';

const Posts = ({ posts,loading }) => {

    const [searchvalue, setSearchValue] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        setSearchValue(posts)
    },[posts])
    const handleChangre = (e) => {
        let value = e.target.value
      
        if(value !== []){
          var searchList = posts.filter((contact) =>Object.values(contact).join(" ").toLowerCase().includes(value.toLowerCase()))
           setSearchValue(searchList);
          
      
      
        }else{
          setSearchValue(posts);
        }
      }

      console.log(searchvalue);
      const handleClick = (item) => {
           dispatch(addFav(item.id));
          }

  if (loading) {
    return <LoadingSpinner/>;
  }






  return (
      <>
      <div style = {{display:"flex",justifyContent:"flexEnd", height:"100px",
    alignItems: "center"}} > 
      <div>
    <input 
    style = {{height:"50px",width:"220px"}}
    class="search_btn" 
    placeholder="Search Employee ..." 
    type = "search"
    onChange = {handleChangre}
    />
    </div>
    <div className = "fav">
       <Link to = "/fav" style = {{fontSize:"20px",margin:"0",textDecoration:"none",color:"inherit"}}>Favourite List</Link>
    </div>
    </div>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Email</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Favourite</th>
  
      </tr>
    </thead>
     <tbody>
        {searchvalue.map((ele,index) => (
   <tr key = {index} >
  <th scope="row">{ele.id}</th>
        <td>{ele.email}</td>
        <td>{ele.first_name}</td>
        <td>{ele.last_name}</td>
        <td><input onClick = {() => handleClick(ele)} type = "checkbox" checked = {ele.fav}/></td>
  
   </tr>  
        ))
         
        }
     
    </tbody> 
  </table>
  </>
  );
};

export default Posts;
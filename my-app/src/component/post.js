

import React,{useEffect, useState} from 'react';
import LoadingSpinner from './LoadSpiner';

const Posts = ({ posts,loading }) => {

    const [searchvalue, setSearchValue] = useState([])
    
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
      const handleClick = (e) => {
           let element = searchvalue.map((ele,i)=> (
               ele.id === e.id ? {...e,fav:true} : e
           ))
           
          }

  if (loading) {
    return <LoadingSpinner/>;
  }






  return (
      <>
    <input 
    style = {{height:"38px",marginTop:"30px",marginBottom:"30px",marginLeft:"80%"}}
    class="search_btn" 
    placeholder="Search Employee ..." 
    type = "search"
    onChange = {handleChangre}
    />
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
        <button onClick = {() => handleClick(ele)}></button>
        <div class="form-check" >
        </div>
  
  
   </tr>  
        ))
         
        }
     
    </tbody> 
  </table>
  </>
  );
};

export default Posts;
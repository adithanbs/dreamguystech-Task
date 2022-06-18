import React,{useState} from "react";
import Pagination from "./pagination";
import Posts from "./post";
import axios from 'axios';


const AllList = () => {
    const [posts,setPost] = useState([]);
    const [loading, setIsLoading] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
  
    
    React.useEffect (() => {
      setIsLoading(true);
    axios.get(' https://reqres.in/api/users?page=${page}&per_page=${countPerPage}&delay=1`').then((response) => {
    let apiData = response.data.data;
    let addVal = apiData.map((e,i) =>{
      return{...e,fav:false}
    } )
    setPost(addVal);
    // dispatch({type:"ADDCART",payload:addVal})
    setIsLoading(false)
    
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
      },[]);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  const handleClick = (e) => {
//  let element = data.map((e,i)=> (
//      data.indexOf(e) === e.id ? {...e,fav = true} : e
//  ))
//  console.log(element)
}
console.log(currentPosts)
    return (
      <>
        <div className="container">
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </>
    );
}

export default AllList;
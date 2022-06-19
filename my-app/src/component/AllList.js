import React,{useState} from "react";
import Pagination from "./pagination";
import Posts from "./post";
import axios from 'axios';
import { addCart } from "../redux/action/index";
import { useDispatch,useSelector } from "react-redux";

const AllList = () => {
    // const [posts,setPost] = useState([]);
    const [loading, setIsLoading] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
  const dispatch = useDispatch();
  const posts = useSelector((state) =>state.handleApi.apiValue)
  console.log("selection",posts);
    React.useEffect (() => {
      setIsLoading(true);
    axios.get(' https://reqres.in/api/users?page=${page}&per_page=${countPerPage}&delay=1`').then((response) => {
    let apiData = response.data.data;
    let addVal = apiData.map((e,i) =>{
      return e.id === 6 || e.id === 3 ?{...e,fav:true} : {...e,fav:false} 
    } )
    // setPost(addVal);
    dispatch(addCart( addVal));
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
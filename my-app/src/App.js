import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import AllList from './component/AllList';
// import LoadingSpinner from './component/LoadSpiner';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { useSelector, useDispatch } from 'react-redux'


function App() {
  // const [apiData,setApiData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const count = useSelector((state) => state.counter.value)
  //  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get(
  //       " https://reqres.in/api/users?page=${page}&per_page=${countPerPage}&delay=1`"
  //     )
  //     .then((response) => {
  //       let apiData = response.data.data;
  //       let addVal = apiData.map((e, i) => {
  //         return { ...e, fav: false };
  //       });
  //       setApiData(addVal);
  //       // dispatch({type:"ADDCART",payload:addVal})
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsLoading(false);
  //     });
  // }, []);
  // console.log(apiData);
  return (
    <div className="App">
      {/* {isLoading ? <LoadingSpinner /> : <AllList apiData={apiData}  /> } */}
      <AllList />
      {/* <LoadingSpinner/> */}
      {/* <BrowserRouter>
        <Routes> */}
          {/* <Route path="/" element={<AllList />} /> */}
        {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

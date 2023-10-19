import React from "react";
import Header from '../components/Header';
import Autosuggest from '../container/Autosuggest' ;
const Dashboard=()=>{
    return(
        <section>
           <Header/> 
           <Autosuggest/>
           <div className='container ht-100 
      d-flex justify-content-center 
      align-items-center'>
      {/* <h2>Dashboard Page</h2> */}
      </div> 
        </section>
    )
}
export default Dashboard;
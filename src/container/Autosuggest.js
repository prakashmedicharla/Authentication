import React from "react";
import {countries} from '../container/fakeData';
import { useState } from "react";

const Autosuggest=()=>{
    console.log(countries)
    const [input, setInput] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const[select,setSelect]= useState("")
  const handleChange = (e) => {
    let value = e.target.value;
    let matches=[]
    if (value.length >= 1) {
        const regex = new RegExp(`${value}`, "gi");
        matches = countries.filter((item) => regex.test(item.game));
      }
      setSuggestions(matches);
    setInput(value)
  } 
  const selectValue = (item) => {
    setSelect(item)
    setSuggestions("")
    setInput("")
   }
   const clearSearch = () => {
    setInput("")
    setSuggestions("")
    setSelect("")
  }
    return(
        <div className="App">
            <div className="title">React Autocomplete/Autosuggest 🚀</div>
            <div className="form-wrapper">
                <input className="input" type="text" placeholder="search..." onChange={handleChange}/>
                {
      suggestion?.length > 0? (
        <div className='suggestion-wrapper'>
         {
           suggestion.map(item => {
             return (
              <div className='suggestions' key={item.id} onClick={() => selectValue(item.game)}>
                {item.game}
              </div>
              )
            })
          }
       </div>
     ) : null
    }
    <div className="select">
  Country Selected :<span className="selected">{select}</span>
 </div>
 <div className="icon" onClick={clearSearch}>
   {suggestion.length > 0 ? (
    <i class="fa fa-times"></i>
    ) : (
    <i class="fa fa-search"></i>
   )}
 </div>
            </div>

        </div>
    )
}
export default Autosuggest;
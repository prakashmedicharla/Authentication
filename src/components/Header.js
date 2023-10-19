import React from "react";
import { getLogout } from "../redux/actions";
import { useDispatch } from "react-redux";

const Header=()=>{
    const dispatch= useDispatch();
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span class="navbar-brand">Dashboard</span>
          <button type="button" class="btn btn-danger" onClick={()=>dispatch(getLogout())}>
            Log Out
          </button>
        </div>
      </nav>
    )
}
export default Header;
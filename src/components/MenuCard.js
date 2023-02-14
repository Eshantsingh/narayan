import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import home from '../images/home.png';


function MenuCard (props){
    return(
        <>
      
    <div className="col-sm-3">
      <div className="card11 bg-light">
      {props.icon}
      </div>
      <div className="card-body">
        <h5 className="card12-title">{props.tittle}</h5>
        <p className="card-text">{props.matter}</p>
      
    </div>
  </div>
  

        </>
    )
}


export default MenuCard
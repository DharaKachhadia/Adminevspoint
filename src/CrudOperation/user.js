import React from "react"
import { Row } from "react-bootstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MdAccountCircle,
} from "react-icons/md";
import { Link } from "react-router-dom";
export default function BasicTable() {
  return (
    <div className="row grid-com">
      <div className="col-2 grid-left-com pt-5">
      <MdAccountCircle size={120} className="icon-color" />
          <h1>Admin</h1>
          <h6>admin123@gmail.com</h6>
          <hr/>
          <p>
          <Link to="/User"  className="links">
              Users
            </Link>
            </p>
            <p>
          <Link to="/Owners"  className="links">
              Owners
            </Link>
            </p>
            <p>
          <Link to="/station"  className="links">
              Stations
            </Link>
            </p>
            <p>
          <Link to="/StationReq"  className="links">
              Stations Request
            </Link>
            </p>
            <p>
          <Link to="/CreateNewStation"  className="links">
              Add Station
            </Link>
            </p>
            <p>
          <Link to="/HelpReq"  className="links">
              Help Requests
            </Link>
            </p>
          <hr />
          <button className="btn btn-success">
            Log Out
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center  mb-3 ">
            <div className="p-3 bg Edit">
            <div className="d-flex justify-content-center align-items-center  mb-3">
              <h4 className="text-right bold title">Edit User</h4>
            </div>  

            <div className="col-md-12">
                <label for="floatingInput" className="bold">Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Station Location" 
                  
                />            
            </div>
            <div className="col-md-12">
                <label for="floatingInput" className="bold">rating</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="rating" 
                  
                />            
            </div>
            <div className="col-md-12">
                <label for="floatingInput" className="bold">review</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="review" 
                  
                />            
            </div>

            <div className="mt-5 text-center">
              <button
                className="btn btn-success profile-button subbtn"
                type="button"
              
              >
                Submit Request
              </button>
            </div>
          </div>
  </div>
    </div>
  );
}
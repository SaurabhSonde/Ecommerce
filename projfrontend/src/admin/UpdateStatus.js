import React,{useState,useEffect} from 'react';
import { isAuthenticated } from '../auth/helper';
import Base from "../core/Base";
import {Link} from "react-router-dom";
import { getStatus, updateStatus } from './helper/adminapicall';

const UpdateStatus = () => {


    const goBack = () => {
      return <div className="mt-4 mb-3">
            <Link className="btn-sm btn-success" to="/admin/dashboard">Admin Home</Link>
        </div>
    }

    const myOrderForm = () => (
        
        <form>
            <div>
                <p className="lead">Update the Status</p>
                <input 
                type="text" 
                className="form-control my-3" 
                autoFocus 
                required 
                placeholder="Eg.Recieved"
                
                />
                <button className="btn btn-outline-info rounded" >Update Status</button>
            </div>
        </form>
    );

    return ( 
        <div>
           <Base title = "Update Status"
           description="Update an status of order"
           className = "container bg-info p-4">
                          <div className="row bg-white rounded">
               <div className="col-md-8 offset-md-2">
                   {myOrderForm()}
                   {goBack()}
               </div>
           </div>

           </Base>        
        </div>
     );
    }

    export default UpdateStatus;
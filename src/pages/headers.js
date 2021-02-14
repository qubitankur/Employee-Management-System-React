import React from 'react'
import '../styles/Styles.css'
export default function Headers(props) {

const logout = () => {
  return null;	
}
    return (
        <div>
       <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
       	<div className="text-white col-md-10" style={{fontSize:"23px", marginTop:'1px'}}>Payroll Management System</div>
       	<div>
       	<a className="headersLogout col-md-1"><s style={{fontSize:"23px", color:'white', textDecoration: 'none'}}>Logout</s></a>
       	</div >
		</nav>
        
        </div>
    )
}

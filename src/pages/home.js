import React from 'react';
import Sidebar from './sidebar';
import Headers from './headers'
export default function Home() {
    return (
        <div>
        <Headers />
        <Sidebar />
      	<div className="container-fluid">
      	<div className="row">
      	<div className="col-sm-4 col-md-4" style={{backgroundColor:'#b3ccff'}}><h5>Welcome back Administrator!</h5></div>
      	</div>
  		</div>
        </div>
    )
}

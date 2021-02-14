import React from 'react'
import "../styles/Styles.css";
import {Sidebardata} from './sidebarData';

export default function Sidebar() {
    return (
    	<div>
        <div className="Sidebars">
        <ul className="SideList">
        {Sidebardata.map((val, key)=>{
        	return <li key={key}
        	className="row"
        	id={window.pathname == val.link ? "active":""} 
        	onClick={()=>{window.location.pathname=val.link;
        	}}>

        	<div id="icon">{val.icon}</div>
        	<div id="title">{val.title}</div>
        	</li>;
        })}
        </ul>
        </div>
        </div>
    );
}

import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ControlCameraIcon from '@material-ui/icons/ControlCamera'; 
import DescriptionIcon from '@material-ui/icons/Description';
import EventNoteIcon from '@material-ui/icons/EventNote';

export const Sidebardata =[
	{
		title:"Home",
		icon:<HomeIcon />,
		link:"/home"
	},
	{
		title:"Employee List",
		icon:<AutorenewIcon />,
		link:"/employee_list"
	},
	{
		title:"Position List",
		icon:<ControlCameraIcon />,
		link:"/position_list"
	},
	{
		title:"Department List",
		icon:<DescriptionIcon />,
		link:"/department_list"
	},
	{
		title:"Payroll List",
		icon:<EventNoteIcon />,
		link:"/payroll_list"
	}
]


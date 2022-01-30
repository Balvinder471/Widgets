import React from 'react';
import {render} from 'react-dom';

import './index.css';
import App from "./App"

render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


// <div className="flex flex-col items-center bg-slate-700 gap-3 pt-4 pb-4 w-16 fixed h-screen top-0 left-0 rounded-sm">
//     <div className="sidebar-icons group">
//         <FaBeer size="25"/>
//         <span className="sidebar-tooltip group-hover:scale-100">
//                   Drink Beer
//               </span>
//     </div>
//     <div className="sidebar-icons group">
//         <FaAddressBook size="25"/>
//         <span className="sidebar-tooltip  group-hover:scale-100">
//                   Find Contacts
//               </span>
//     </div>
//     <div className="sidebar-icons group">
//         <BsApple size="25"/>
//         <span className="sidebar-tooltip  group-hover:scale-100">
//                   Buy an Apple Product!!
//               </span>
//     </div>
// </div>
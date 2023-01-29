import React from 'react'
import { SideData } from './SideData'

function SideBar() {
  return (
    <div className='SideBar'>
     <ul className='SideBarList'>
     {SideData.map((val,key)=>{
            return (
                <li key={key} 
                id={window.location.pathname==val.link? "active" :""}
                onClick={()=>{window.location.pathname=val.link}}
                 className='row'>
                    {""}
                    <div id="icon">{val.icon}</div>{""}
                    <div id="title">
                        {val.title}
                    </div>
                </li>
            );
      })}
     </ul>

    </div>
  )
}

export default SideBar

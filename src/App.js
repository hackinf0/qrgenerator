import React from 'react'
import SideBar from './components/SideBar'
import "../src/App.css"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate
} from "react-router-dom";
import Generator from './components/Generator';
import QrResult from "./components/QrResult"
import QrScanned from './components/QrScanned';
import {Menu,} from 'antd'
import {HomeFilled,QrcodeOutlined,ScanOutlined,InfoCircleFilled,PoweroffOutlined} from "@ant-design/icons"


function App() {
	const navigate =useNavigate()
  return (
		<div style={{display:"flex",flexDirection:"row"}}>
			<Menu
				onClick={({key})=>{
					if(key==="signout"){
						//sign out
					}else{
						navigate(key)
					}
				}}
				items={[
					{label:
						"Generate",key:'/',icon:<HomeFilled />
					},
					{label:"Qr Code",key:"/qrcodes",icon:<QrcodeOutlined />},
					{label:"Scanned",key:"/scan",icon:<ScanOutlined />},
					{label:"About", key:"/about",icon:<InfoCircleFilled />},
					{label:"Sign out", key:"signout",icon:<PoweroffOutlined />,danger:true}
				]}
			>

			</Menu>
			<Content/>
		</div>
  )
}

function Content (){

	return <div>
		<Routes>
			<Route path='/' element={<div><Generator/></div>}></Route>
			<Route path='/qrcodes' element={<div>Qr</div>}></Route>
			<Route path='/scan' element={<div>Scane</div>}></Route>
			<Route path='/about' element={<div>Details</div>}></Route>
		</Routes>
	</div>
}

export default App
 
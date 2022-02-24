import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";


//* CONFIG
import './scss/main.scss'
import './config/axios.settings'


//* PRIME REACT STYLES
import "primeicons/primeicons.css"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css"

import "/node_modules/primeflex/primeflex.css"

//* AUTH VIEWS
import Login from "./views/Auth/Login"


//* MAIN VIEWS
import Dashboard from "./views/Dashboard"

//* USER VIEWS
import Users from "./views/User/Users"
import CreateUser from "./views/User/CreateUser"

//* BLOG VIEWS
import Blogs from "./views/Blog/Blogs"
import CreateBlog from "./views/Blog/CreateBlog";
import Categories from "./views/Blog/Categories";



function App() {
	return (

		<BrowserRouter>
			<Routes>

			    <Route path="/" element={<Login/>} />
				
				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/users" element={<Users/>} />
				<Route path="/users/create" element={<CreateUser/>} />

				<Route path="/blog" element={<Blogs/>} />
				<Route path="/blog/create" element={<CreateBlog/>} />
				<Route path="/blog/categories" element={<Categories/>} />

			</Routes>
		</BrowserRouter>
	
	)
}

export default App

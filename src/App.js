import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";


//* CONFIG
import './scss/main.scss'
import './config/axios.settings'


//* PRIME REACT STYLES
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "/node_modules/primeflex/primeflex.css"


//* MAIN VIEWS
import Dashboard from "./views/Dashboard"

//* USER VIEWS
import Users from "./views/User/Users"
import CreateUser from "./views/User/crearUser"

//* BLOG VIEWS
import Blogs from "./views/Blog/Blogs"
import CreateBlog from "./views/Blog/CreateBlog";
import Categorias from "./views/Blog/Categorias";



function App() {
	return (

		<BrowserRouter>
			<Routes>

				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/users" element={<Users/>} />
				<Route path="/users/create" element={<CreateUser/>} />

				<Route path="/blog" element={<Blogs/>} />
				<Route path="/blog/create" element={<CreateBlog/>} />
				<Route path="/blog/categories" element={<Categorias/>} />

			</Routes>
		</BrowserRouter>
	
	)
}

export default App

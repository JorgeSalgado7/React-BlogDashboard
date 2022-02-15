import { BrowserRouter,Routes, Route } from "react-router-dom";

//CUSTOM CSS
import './scss/main.scss'

import './config/axios.settings'

//VIEWS
import Dashboard from "./views/Dashboard";
import GetBlogs from "./views/Blog/GetBlogs";
import GetUsers from "./views/Users/GetUsers";

function App() {
	return (

		<BrowserRouter>
			<Routes>

				{/** BLOG */}
				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/blog" element={<GetBlogs/>} />

				{/** USERS */}
				<Route path="/usuarios" element={<GetUsers/>} />

			</Routes>
		</BrowserRouter>
	
	)
}

export default App

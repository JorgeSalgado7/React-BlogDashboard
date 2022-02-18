import { BrowserRouter,Routes, Route } from "react-router-dom";

//CONFIG
import './scss/main.scss'
import './config/axios.settings'

//PRIME REACT STYLES
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

//PRIME REACT FLEX
import 'primeflex/primeflex.scss';

//VIEWS
import Dashboard from "./views/Dashboard";
import Usuarios from "./views/Usuarios";
import Index from "./views/blog/Index";




function App() {
	return (

		<BrowserRouter>
			<Routes>

				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/usuarios" element={<Usuarios/>} />
				<Route path="/blog" element={<Index/>} />

			</Routes>
		</BrowserRouter>
	
	)
}

export default App

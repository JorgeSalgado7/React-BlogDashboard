import { BrowserRouter,Routes, Route } from "react-router-dom";

//CONFIG
import './scss/main.scss'
import './config/axios.settings'

//PRIME REACT STYLES
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

//VIEWS
import Dashboard from "./views/Dashboard";



function App() {
	return (

		<BrowserRouter>
			<Routes>

				
				<Route path="/dashboard" element={<Dashboard/>} />
				

			</Routes>
		</BrowserRouter>
	
	)
}

export default App

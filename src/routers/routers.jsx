import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";

import Candidatos from "../components/Candidatos";
import Usuarios from "../components/Usuarios";

function Routers() {
	return (
		<Router>
			<Routes>
				<Route path="/candidatos" element={<Candidatos />} />
				<Route path="/usuarios" element={<Usuarios />} />
			</Routes>
		</Router>
	);
}

export default Routers;

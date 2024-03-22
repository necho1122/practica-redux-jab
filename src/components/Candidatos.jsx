import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData, toggleHide, toggleSave } from "../store/slices";
import "./Candidatos.css";

function Candidatos() {
	const dispatch = useDispatch();
	const candidatos = useSelector((state) => state.candidatos.data);

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=6")
			.then((response) => response.json())
			.then((data) => dispatch(setData(data.results)));
	}, [dispatch]);

	const handleHide = (id) => {
		dispatch(toggleHide(id));
	};

	const handleSave = (id) => {
		dispatch(toggleSave(id));
	};

	return (
		<div>
			<Link to="/usuarios">Usuarios</Link>
			<h1>Candidatos</h1>
			<div className="container-list">
				{candidatos.map((candidato) => (
					<div key={candidato.login.uuid} className="candidatos">
						<div className="candidatos-container">
							<img
								src={candidato.picture.thumbnail}
								alt={candidato.name.first}
							/>
							<div className="candidatos-datos">
								<p>{candidato.name.first}</p>
								<p>{candidato.name.last}</p>
								<p>{candidato.email}</p>
								<p>{candidato.phone}</p>
							</div>
							<div className="candidatos-buttons">
								<button
									onClick={() => handleHide(candidato.login.uuid)}
									type="button"
								>
									Ocultar
								</button>
								<button
									onClick={() => {
										handleSave(candidato.login.uuid);
										handleHide(candidato.login.uuid);
									}}
									type="button"
								>
									Guardar
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Candidatos;

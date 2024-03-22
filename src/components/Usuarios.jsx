import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDelete } from "../store/slices";
import "./Usuarios.css";

function Usuarios() {
	const candidatosGuardados = useSelector(
		(state) => state.candidatos.candidatosGuardados,
	);

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(toggleDelete(id));
	};

	return (
		<div>
			<div>
				<Link to="/candidatos">Candidatos</Link>
			</div>
			<h1>Usuarios</h1>
			<div className="candidato-list">
				{candidatosGuardados.map((candidato) => (
					<div key={candidato.login.uuid} className="candidato-guardado">
						<img src={candidato.picture.thumbnail} alt={candidato.name.first} />
						<div>
							<p>
								{candidato.name.first} {candidato.name.last}
							</p>
							<p>Email: {candidato.email}</p>
							<p>Teléfono: {candidato.phone}</p>
							<button
								onClick={() => handleDelete(candidato.login.uuid)}
								type="button"
							>
								Eliminar
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Usuarios;

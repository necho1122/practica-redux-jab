import { createSlice } from "@reduxjs/toolkit";

export const candidatosSlice = createSlice({
	name: "candidatos",
	initialState: {
		data: [],
		candidatosGuardados: [],
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload.map((candidato) => ({
				...candidato,
				guardado: false, // Agregar la propiedad guardado a cada candidato
			}));
		},
		toggleHide: (state, action) => {
			state.data = state.data.filter(
				(candidato) => candidato.login.uuid !== action.payload,
			);
		},
		toggleSave: (state, action) => {
			const candidato = state.data.find(
				(candidato) => candidato.login.uuid === action.payload,
			);
			if (candidato) {
				candidato.guardado = !candidato.guardado;
				if (candidato.guardado) {
					state.candidatosGuardados.push(candidato); // Guardar el candidato en el array de candidatos guardados
				} else {
					state.candidatosGuardados = state.candidatosGuardados.filter(
						(c) => c.login.uuid !== candidato.login.uuid,
					);
				}
			}
		},
		toggleDelete: (state, action) => {
			state.candidatosGuardados = state.candidatosGuardados.filter(
				(c) => c.login.uuid !== action.payload,
			);
		},
	},
});

export const { setData, toggleHide, toggleSave, toggleDelete } =
	candidatosSlice.actions;

export default candidatosSlice.reducer;

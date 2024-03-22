import { configureStore } from "@reduxjs/toolkit";
import { candidatosSlice } from "./slices";

export default configureStore({
	reducer: {
		candidatos: candidatosSlice.reducer,
	},
});

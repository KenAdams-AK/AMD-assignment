import { Navigate, Route, Routes } from "react-router-dom";
import * as ROUTES from "./api/routes";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import WorkersPage from "./pages/WorkersPage/WorkersPage";

function App() {
	return (
		<div className="App__container">
			<Routes>
				<Route path={ROUTES.ROUTE_HOME} element={<HomePage />} />
				<Route path={ROUTES.ROUTE_WORKERS} element={<WorkersPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;

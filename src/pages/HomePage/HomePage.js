import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className="HomePage__container">
			<div className="HomePage__title">
				<h1>
					Manage your workers' info easily.
					<br />
					Get more done.
				</h1>
			</div>
			<button className="HomePage__btn" onClick={() => navigate("/workers")}>
				Get Started
			</button>
		</div>
	);
};

export default HomePage;

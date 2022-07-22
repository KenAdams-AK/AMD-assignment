import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/List/List";
import WorkerItem from "../../components/WorkerItem/WorkerItem";
import { getWorkersAsyncAction } from "../../redux/reducers/workers/workersAsyncActions";
import "./WorkersPage.scss";

const WorkersPage = () => {
	const dispatch = useDispatch();
	const { isGetWorkersLoading, workersList, getWorkersError } = useSelector(
		(state) => state.workers
	);

	useEffect(() => {
		dispatch(getWorkersAsyncAction());
	}, []);

	const renderWorkers = (worker) => (
		<WorkerItem key={worker?.id} worker={worker} />
	);

	return (
		<div className="WorkersPage__container">
			<div className="WorkersPage__title">Your current workers list</div>
			<List
				isLoading={isGetWorkersLoading}
				error={getWorkersError}
				items={workersList}
				renderItems={renderWorkers}
			/>
		</div>
	);
};

export default WorkersPage;

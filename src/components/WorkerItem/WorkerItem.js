import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import WorkerForm from "../WorkerForm/WorkerForm";
import "./WorkerItem.scss";

const WorkerItem = ({ worker }) => {
	const { isPutWorkerInfoSuccess } = useSelector((state) => state.workers);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isFormUpdated, setIsFormUpdated] = useState(false);

	useEffect(() => {
		isModalOpen && isPutWorkerInfoSuccess && handleCloseModal();
	}, [isPutWorkerInfoSuccess]);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setIsFormUpdated(false);
	};

	return (
		<>
			<div className="WorkerItem__container" onDoubleClick={handleOpenModal}>
				<div className="WorkerItem__header">{worker?.name}</div>
				<div className="WorkerItem__main">
					<div className="WorkerItem__email">{worker?.email}</div>
					<div className="WorkerItem__city">{worker?.address?.city}</div>
					<div className="WorkerItem__phone">{worker?.phone}</div>
					<div className="WorkerItem__website">{worker?.website}</div>
					<div className="WorkerItem__company">{worker?.company?.name}</div>
				</div>
			</div>
			{isModalOpen && (
				<Modal
					title={`Edit ${worker?.name}'s information:`}
					handleCloseModal={handleCloseModal}
					content={
						<WorkerForm
							worker={worker}
							handleCloseModal={handleCloseModal}
							isFormUpdated={isFormUpdated}
							setIsFormUpdated={setIsFormUpdated}
						/>
					}
				/>
			)}
		</>
	);
};

export default WorkerItem;

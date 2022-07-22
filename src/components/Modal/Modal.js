import "./Modal.scss";

const Modal = ({ title, content, handleCloseModal }) => {
	return (
		<>
			<div className="Modal__overlay" onClick={handleCloseModal}>
				<div className="Modal__window" onClick={(e) => e.stopPropagation()}>
					<button className="Modal__close-btn" onClick={handleCloseModal}>
						&#10005;
					</button>
					<h2 className="Modal__header">{title}</h2>
					<div className="Modal__content">{content}</div>
				</div>
			</div>
		</>
	);
};

export default Modal;

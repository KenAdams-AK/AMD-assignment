import "./List.scss";

const List = ({ isLoading, error, items, renderItems }) => {
	if (isLoading) {
		return <div className="List__loader">Loading...</div>;
	}

	if (error) {
		return (
			<div className="List__error">
				Sorry, something went wrong. Error type: {error}.
			</div>
		);
	}

	return <div className="List__container">{items.map(renderItems)}</div>;
};

export default List;

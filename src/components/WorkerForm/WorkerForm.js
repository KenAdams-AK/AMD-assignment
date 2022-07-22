import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putWorkerInfoAsyncAction } from "../../redux/reducers/workers/workersAsyncActions";
import { fields, setNestedValue } from "./formUtils";
import "./WorkerForm.scss";

const WorkerForm = ({
	worker,
	handleCloseModal,
	isFormUpdated,
	setIsFormUpdated,
}) => {
	const dispatch = useDispatch();
	const { isPutWorkerInfoLoading, putWorkerInfoFailure } = useSelector(
		(state) => state.workers
	);

	const [formValues, setFormValues] = useState(null);

	useEffect(() => {
		setFormValues({ ...worker });
	}, []);

	const setNestedFieldValue = (field) => {
		if (field.nested) {
			switch (field.name) {
				case "city": {
					return formValues?.address?.city;
				}
				case "company": {
					return formValues?.company?.name;
				}
				default:
					return null;
			}
		}
		return formValues[field.name];
	};

	const handleChange = (e, field) => {
		setIsFormUpdated(true);

		if (!field.nested) {
			setFormValues({
				...formValues,
				[e.target.name]: e.target.value,
			});
		} else {
			switch (e.target.name) {
				case "city": {
					const updatedValue = setNestedValue(
						formValues,
						"address.city",
						e.target.value
					);
					setFormValues({
						...formValues,
						updatedValue,
					});
					break;
				}
				case "company": {
					const updatedValue = setNestedValue(
						formValues,
						"company.name",
						e.target.value
					);
					setFormValues({
						...formValues,
						updatedValue,
					});
					break;
				}
				default:
					return formValues;
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		isFormUpdated && dispatch(putWorkerInfoAsyncAction(formValues));
	};

	return (
		<div className="WorkerForm__container">
			{isPutWorkerInfoLoading && (
				<div className="WorkerForm__loader">Loading...</div>
			)}
			{putWorkerInfoFailure && (
				<div className="WorkerForm__error">
					Sorry, something went wrong. Error type: {putWorkerInfoFailure}.
				</div>
			)}
			<form className="WorkerForm__form" onSubmit={handleSubmit}>
				{formValues &&
					fields.map((field) => (
						<div className="WorkerForm__form-field" key={field.name}>
							<label>{field.label}:</label>
							<input
								onChange={(e) => handleChange(e, field)}
								type={field.type}
								name={field.name}
								required={field.required}
								value={setNestedFieldValue(field)}
							/>
						</div>
					))}
				<div className="WorkerForm__actions">
					<button
						className="WorkerForm__actions-cancel"
						onClick={handleCloseModal}
					>
						Cancel
					</button>
					<button
						className="WorkerForm__actions-save"
						disabled={!isFormUpdated}
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default WorkerForm;

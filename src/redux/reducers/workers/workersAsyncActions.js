import axios from "axios";
import { BASE_URL, GET_WORKERS } from "../../../api/endpoints";
import {
	getWorkersFailure,
	getWorkersRequest,
	getWorkersSuccess,
	putWorkerInfoFailure,
	putWorkerInfoRequest,
	putWorkerInfoSuccess,
} from "./workersActions";

export const getWorkersAsyncAction = () => (dispatch) => {
	dispatch(getWorkersRequest());
	axios
		.get(GET_WORKERS)
		.then((response) => dispatch(getWorkersSuccess(response?.data)))
		.catch((error) => dispatch(getWorkersFailure(error?.message)));
};

export const putWorkerInfoAsyncAction = (workerInfo) => (dispatch) => {
	const requestOptions = {
		method: "put",
		url: `${BASE_URL}/workers/${workerInfo.id}`,
		data: workerInfo,
	};

	dispatch(putWorkerInfoRequest());
	axios(requestOptions)
		.then((response) => dispatch(putWorkerInfoSuccess(response?.data)))
		.catch((error) => dispatch(putWorkerInfoFailure(error?.message)));
};

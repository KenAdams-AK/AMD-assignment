import {
	GET_WORKERS_FAILURE,
	GET_WORKERS_REQUEST,
	GET_WORKERS_SUCCESS,
	PUT_WORKER_INFO_FAILURE,
	PUT_WORKER_INFO_REQUEST,
	PUT_WORKER_INFO_SUCCESS,
} from "./workersTypes";

export const getWorkersRequest = () => ({ type: GET_WORKERS_REQUEST });
export const getWorkersSuccess = (response) => ({
	type: GET_WORKERS_SUCCESS,
	payload: response,
});
export const getWorkersFailure = (error) => ({
	type: GET_WORKERS_FAILURE,
	payload: error,
});

export const putWorkerInfoRequest = () => ({
	type: PUT_WORKER_INFO_REQUEST,
});
export const putWorkerInfoSuccess = (response) => ({
	type: PUT_WORKER_INFO_SUCCESS,
	payload: response,
});
export const putWorkerInfoFailure = (error) => ({
	type: PUT_WORKER_INFO_FAILURE,
	payload: error,
});

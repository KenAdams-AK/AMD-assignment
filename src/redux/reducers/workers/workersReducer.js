import {
	GET_WORKERS_FAILURE,
	GET_WORKERS_REQUEST,
	GET_WORKERS_SUCCESS,
	PUT_WORKER_INFO_FAILURE,
	PUT_WORKER_INFO_REQUEST,
	PUT_WORKER_INFO_SUCCESS,
} from "./workersTypes";

const initialState = {
	isGetWorkersLoading: false,
	workersList: [],
	getWorkersError: null,
	isPutWorkerInfoLoading: false,
	isPutWorkerInfoSuccess: false,
	putWorkerInfoFailure: null,
};

export const workersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_WORKERS_REQUEST: {
			return {
				...state,
				isGetWorkersLoading: true,
				getWorkersError: null,
			};
		}
		case GET_WORKERS_SUCCESS: {
			return {
				...state,
				isGetWorkersLoading: false,
				getWorkersError: null,
				workersList: action.payload,
			};
		}
		case GET_WORKERS_FAILURE: {
			return {
				...state,
				isGetWorkersLoading: false,
				getWorkersError: action.payload,
			};
		}

		case PUT_WORKER_INFO_REQUEST: {
			return {
				...state,
				isPutWorkerInfoLoading: true,
				isPutWorkerInfoSuccess: false,
				putWorkerInfoFailure: null,
			};
		}
		case PUT_WORKER_INFO_SUCCESS: {
			return {
				...state,
				isPutWorkerInfoLoading: false,
				putWorkerInfoFailure: null,
				workersList: [...state.workersList].map((worker) => {
					if (worker.id === action.payload?.id) {
						return { ...action.payload };
					} else {
						return { ...worker };
					}
				}),
				isPutWorkerInfoSuccess: true,
			};
		}
		case PUT_WORKER_INFO_FAILURE: {
			return {
				...state,
				isPutWorkerInfoLoading: false,
				isPutWorkerInfoSuccess: false,
				putWorkerInfoFailure: action.payload,
			};
		}
		default:
			return initialState;
	}
};

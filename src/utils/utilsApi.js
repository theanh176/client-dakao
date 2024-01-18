import { request } from "./request";

const handleCreate = async ({ api, data, privateToken = true, headers }) => {
	try {
		const newToken = privateToken
			? `${localStorage.getItem("token")}/`
			: "";
		const response = await request.post(`${api}`, data, {
			headers: {
				"X-Access-Token": newToken,
				"Content-Type": "application/json",
				...headers,
			},
		});
		return response;
	} catch (error) {
		return error;
	}
};

const handleGetData = async ({ api, params, q }) => {
	try {
		const response = await request.get(`${api}`, {
			params: {
				...params,
				q: JSON.stringify(q),
			},
			headers: {
				"X-Access-Token": "flex.public.token",
				"Content-Type": "application/json",
			},
		});
		return response?.data;
	} catch (error) {
		console.log(error);
	}
};

export { handleCreate, handleGetData };

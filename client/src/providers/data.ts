import axios from "axios";
import { DataProvider } from "@refinedev/core";

// Define base API URL (your MongoDB backend API)
const API_URL = "http://localhost:8000/api/v1";

const dataProvider: DataProvider = {
    // Include getApiUrl function
    getApiUrl: () => API_URL,

    getList: async ({ resource, pagination, filters, sort }) => {
        const response = await axios.get(`${API_URL}/${resource}`);
        return {
            data: response.data,
            total: response.data.length,
        };
    },

    getOne: async ({ resource, id }) => {
        const response = await axios.get(`${API_URL}/${resource}/${id}`);
        console.log(response.data)
        return { data: response.data };
    },

    create: async ({ resource, variables }) => {
        const response = await axios.post(`${API_URL}/${resource}`, variables);
        return { data: response.data };
    },

    update: async ({ resource, id, variables }) => {
        const response = await axios.put(`${API_URL}/${resource}/${id}`, variables);
        return { data: response.data };
    },

    deleteOne: async ({ resource, id }) => {
        const response = await axios.delete(`${API_URL}/${resource}/${id}`);
        return { data: response.data };
    },

    // Other CRUD methods (getMany, deleteMany, etc.) can also be added here as needed.
};

export default dataProvider;

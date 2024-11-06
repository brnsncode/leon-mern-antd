import axios from "axios";
import { DataProvider } from "@refinedev/core";

// Define base API URL for external REST API
const EXTERNAL_API_URL = "https://api.external-service.com"; // Adjust to your external API

const externalDataProvider: DataProvider = {
    getApiUrl: () => EXTERNAL_API_URL,

    getList: async ({ resource }) => {
        const response = await axios.get(`${EXTERNAL_API_URL}/${resource}`);
        return { data: response.data, total: response.data.length };
    },

    getOne: async ({ resource, id }) => {
        const response = await axios.get(`${EXTERNAL_API_URL}/${resource}/${id}`);
        return { data: response.data };
    },

    create: async ({ resource, variables }) => {
        const response = await axios.post(`${EXTERNAL_API_URL}/${resource}`, variables);
        return { data: response.data };
    },

    update: async ({ resource, id, variables }) => {
        const response = await axios.put(`${EXTERNAL_API_URL}/${resource}/${id}`, variables);
        return { data: response.data };
    },

    deleteOne: async ({ resource, id }) => {
        const response = await axios.delete(`${EXTERNAL_API_URL}/${resource}/${id}`);
        return { data: response.data };
    },
};

export default externalDataProvider;

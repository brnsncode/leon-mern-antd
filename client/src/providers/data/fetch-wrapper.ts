import { DataProvider } from "@refinedev/core";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api", // Replace with your MongoDB API base URL
});

const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const response = await axiosInstance.get(`/${resource}`);
        return { data: response.data, total: response.data.length };
    },
    getOne: async (resource, params) => {
        const response = await axiosInstance.get(`/${resource}/${params.id}`);
        return { data: response.data };
    },
    create: async (resource, params) => {
        const response = await axiosInstance.post(`/${resource}`, params.data);
        return { data: response.data };
    },
    update: async (resource, params) => {
        const response = await axiosInstance.put(`/${resource}/${params.id}`, params.data);
        return { data: response.data };
    },
    deleteOne: async (resource, params) => {
        await axiosInstance.delete(`/${resource}/${params.id}`);
        return { data: { id: params.id } };
    },
};

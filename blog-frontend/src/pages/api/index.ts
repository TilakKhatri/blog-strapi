import axios from "axios";

const api = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASE_URL,
    headers:{
        Authorization:`Bearer ${process.env.API_KEY}`
    }
});

// define all api call from here

export const fetchCategories =async () => api.get('/api/categories');

// for articles
export const fetchArticles =async (qsString:string) => api.get(`/api/articles?${qsString}`);

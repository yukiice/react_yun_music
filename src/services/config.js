export const devBaseUrl = "http://123.207.32.32:9001";
export const proBaseUrl = "https://127.0.0.1";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl:proBaseUrl

export const TIMEOUT = 5000 
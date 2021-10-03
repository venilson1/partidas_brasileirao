import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'https://api-brasileirao.glitch.me', timeout: 10000})

export async function get(url){
  const { data } = await axiosInstance.get(url);
  return data;
}
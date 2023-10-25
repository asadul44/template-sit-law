import { axiosInstance } from './../api/ClientApi';
import { AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

export const useMutationData = async <T>(url: string, data: any): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.post(url, data);
    return {
      data: response.data,
      error: null,
    };
  } catch (error: AxiosError | any) {
    return {
      data: null,
      error: error.message || 'An error occurred.',
    };
  }
};
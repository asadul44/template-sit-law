import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../api/ClientApi';
import { AxiosResponse } from 'axios';

export default  function useFetchData<T> (url: string) {
  const [data, setData] = useState<null | T>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(  () => {    
    axiosInstance.get(`${url}`)
      .then((response:AxiosResponse<T | any>) => {
        setData(response?.data as T);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}


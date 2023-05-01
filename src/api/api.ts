/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosResponse } from 'axios';
import { instance } from './instance';

type CustomErrorResponse = {
  message: string;
  statusCode: number;
};

export const getRequest = async <T>(
  endpoint: string,
  params: Record<string, any> = {}
): Promise<T> => {
  try {
    const request: AxiosResponse<T> = await instance.get(endpoint, {
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return request.data;
  } catch (requestError) {
    const axiosError = requestError as AxiosError<CustomErrorResponse>;

    if (axiosError) {
      const errorObj = {
        statusCode: axiosError.response?.data.statusCode,
        message: axiosError.response?.data.message,
      };

      throw new Error(`${errorObj.statusCode} - ${errorObj.message}`);
    } else {
      throw requestError;
    }
  }
};

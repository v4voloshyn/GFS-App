import axios, { AxiosResponse } from 'axios';

import { BASE_URL } from '../constants';
import { AUTH } from '../endpoints';

type GetTokenResponse = {
  token: string;
};

export const getToken = async (): Promise<GetTokenResponse> => {
  const response: AxiosResponse<GetTokenResponse> = await axios.get(
    `${BASE_URL}${AUTH.TOKEN_ENDPOINT}`
  );

  return response.data;
};

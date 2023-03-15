import axios from 'axios';

const BASE_URL = 'https://api.wisey.app/api/v1';

export const getToken = async () => {
  try {
    const token = await axios.get(`${BASE_URL}/auth/anonymous`, {
      params: {
        platform: 'subscriptions',
      },
    });

    return token.data.token;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      throw new Error(error.message, { cause: error.stack });
    } else {
      throw new Error(
        'Unknown error happened with getting token. Please, try to reload page'
      );
    }
  }
};

export const fetchCourses = async () => {
  try {
    const token = await getToken();

    const data = await axios.get(`${BASE_URL}/core/preview-courses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      throw new Error(error.message, { cause: error.stack });
    } else {
      throw new Error(
        'Unknown error happened with fetching courses. Please, try to reload page'
      );
    }
  }
};

export const fetchCourseById = async (courseId: number | string) => {
  try {
    const token = await getToken();

    const data = await axios.get(
      `${BASE_URL}/core/preview-courses/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      throw new Error(error.message, { cause: error.stack });
    } else {
      throw new Error(
        'Unknown error happened while fetchCourseById. Please, try to reload page'
      );
    }
  }
};

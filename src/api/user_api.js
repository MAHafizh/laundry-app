import apiManager from './apiManager';

export const user_api = async data => {
  try {
    const result = await apiManager('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

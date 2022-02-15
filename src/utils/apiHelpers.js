import { message } from 'antd';
import axios from 'axios';

const errorMessage =
  'Something went wrong while trying to access the API, please try and refresh the page..';
export const makeApiCall = async (url, callbackFunction) => {
  try {
    const response = await axios.get(url);
    callbackFunction(response.data);
  } catch (error) {
    console.error(error);
    message.error(errorMessage, 3);
  }
};

export const makeMultipleApiCalls = async (
  urlFunc,
  itemList,
  currentIndex,
  callbackFunction,
  key,
  result = []
) => {
  try {
    const response = await axios.get(urlFunc(itemList[currentIndex]));
    if (currentIndex + 1 <= itemList.length - 1) {
      makeMultipleApiCalls(
        urlFunc,
        itemList,
        currentIndex + 1,
        callbackFunction,
        key,
        [...result, ...response.data[key]]
      );
    } else callbackFunction([...result, ...response.data[key]]);
  } catch (error) {
    console.error(error);
    message.error(errorMessage, 3);
  }
};

export const makePaginatedApiCall = async (
  url,
  key,
  callbackFunction,
  result = [],
  params = ''
) => {
  try {
    const response = await axios.get(`${url}${params}`);
    if (response.data.pagination.next_page) {
      makePaginatedApiCall(
        url,
        key,
        callbackFunction,
        [...result, response.data[key]],
        response.data.pagination.next_page
      );
    } else callbackFunction([...result, response.data[key]]);
  } catch (error) {
    console.error(error);
    message.error(errorMessage, 3);
  }
};

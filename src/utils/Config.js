import axios from "axios";

const APIKEY = "AIzaSyCzwGl8yfmrxI2MSmEveV0YZhpIxjP2DOg";
const baseURL = "https://www.googleapis.com";
const endPoint = `/books/v1/volumes`;

const BookRequests = {
  getBookBySearch: async (searchParams) => {
    try {
      const response = await axios.get(
        `${baseURL}${endPoint}?q=${searchParams}&key=${APIKEY}`
      );

      const books = await response.data.items;

      //   console.log(books);
      return books;
    } catch (error) {
      console.log(error);
    }
  },
};

// BookRequests.getBookBySearch("react");

export default BookRequests;

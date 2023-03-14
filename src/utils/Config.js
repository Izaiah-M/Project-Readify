import axios from "axios";
// const axios = require("axios");

const APIKEY = "AIzaSyCzwGl8yfmrxI2MSmEveV0YZhpIxjP2DOg";
const baseURL = "https://www.googleapis.com";
const endPoint = `/books/v1/volumes`;

const BookRequests = {
  getBookBySearch: async (searchParams) => {
    try {
      const response = await axios.get(
        `${baseURL}${endPoint}?q=${searchParams}&key=${APIKEY}`
      );

      const jsonResponse = await response.data.items;

      const books = jsonResponse.map((book) => ({
        id: book.accessInfo.id,
        author: book.volumeInfo.authors,
        category: book.volumeInfo.categories,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        title: book.volumeInfo.title,
      }));

      //   console.log(books);
      return books;
    } catch (error) {
      console.log(error);
    }
  },
};

// console.log(await BookRequests.getBookBySearch("react"));

export default BookRequests;

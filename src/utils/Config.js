import axios from "axios";
// const axios = require("axios");
const { REACT_APP_API_KEY } = process.env;

const APIKEY = REACT_APP_API_KEY;
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

  getRandomBook: async () => {
    const categories = [
      "romance",
      "education",
      "fiction",
      "adventure",
      "sci-fi",
    ];

    // To pick a random book categorie
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];

    // Url to fetch the books randomly from.
    // https://www.googleapis.com/books/v1/volumes?q=subject:romance&key=AIzaSyCzwGl8yfmrxI2MSmEveV0YZhpIxjP2DOg

    const fetchURL = `${baseURL}${endPoint}?q=subject:${randomCategory}&key=${APIKEY}`;

    try {
      const response = await axios.get(fetchURL);

      const jsonResponse = await response.data.items;

      const books = jsonResponse.map((book) => ({
        id: book.accessInfo.id,
        author: book.volumeInfo.authors,
        category: book.volumeInfo.categories,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail,
        title: book.volumeInfo.title,
      }));

      return books;
    } catch (error) {
      console.log(error);
    }
  },
};

// console.log(await BookRequests.getBookBySearch("react"));

export default BookRequests;

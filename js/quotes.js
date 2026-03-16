const quotes = [
    {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
    },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
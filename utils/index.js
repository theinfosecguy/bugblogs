import { authorsList } from "../authors/authors";

const findAuthor = (id) => {
  return authorsList.find((author) => author.id === id);
};

const getImageURL = (title) => {
  return `https://og.bugblogs.tech/${title}.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fucarecdn.com%2Fcdc7a226-83a7-434d-95b6-66c93d276c24%2F`;
};

const generateRandomRGBACode = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return [`rgba(${r}, ${g}, ${b}, 0.1)`, `rgb(${r}, ${g}, ${b})`];
};

const splitTags = (tags) => {
  return tags[0].split(",");
};

const validateURL = (url) => {
  if (url.startsWith("http") || url.startsWith("https")) {
    return url;
  } else {
    return `https://${url}`;
  }
};

module.exports = {
  getImageURL,
  findAuthor,
  generateRandomRGBACode,
  splitTags,
  validateURL,
};

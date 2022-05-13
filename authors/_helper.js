import { authorsList } from "./authors";

export const findAuthor = (id) => {
  return authorsList.find((author) => author.id === id);
};

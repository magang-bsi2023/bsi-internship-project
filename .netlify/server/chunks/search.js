import { w as writable } from "./index.js";
const createSearchStore = (data) => {
  const { subscribe, set, update } = writable({
    data,
    filtered: data,
    search: ""
  });
  return {
    subscribe,
    set,
    update
  };
};
const searchHandler = (store) => {
  const searchTerm = store.search.toLowerCase() || "";
  store.filtered = store.data.filter((item) => {
    return item.searchTerms.toLowerCase().includes(searchTerm);
  });
};
export {
  createSearchStore as c,
  searchHandler as s
};

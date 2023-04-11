export const searchHandler = (store) => {
    const searchTerm = store.search.toLowerCase() || ""
    store.filtered = store.data.filter((item) => {
        return item.searchTerms.toLowerCase().includes(searchTerm)
    }) 
}
export function selectBook(book) {
    // selectBook is an actions creator, it need to return an actions:
        // an object with a type and a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
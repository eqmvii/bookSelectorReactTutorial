// action creators are just functions

// Can't just call it, have to wire the action Action with redux
export function selectBook(book) {
    // console.log('A book has been selected: ', book.title);

    // selectBook is an ActionCreater, and must return a valid action:
    // an object with a type property.
    // two values: type and payload (payload further clarifies)
    return (
      { type: "BOOK_SELECTED", // type is usually in uppercase
        payload: book
      }
    );
}

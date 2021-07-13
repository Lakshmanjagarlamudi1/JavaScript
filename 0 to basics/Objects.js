var user = {
  firstName: "Lakshman",
  lastName: "Jagarlamudi",
  role: "Student",
  mobile: 9381598525,
  state: "Andhra",
  books: [],
  buyBooks: function (bookName) {
    this.books.push(bookName);
  },
  getBooksCount: function () {
    return `${this.firstName} bought ${this.books.length} books`;
  },
};
//console.log(user);
//console.log(user.mobile);
//console.table(user)
//console.count(user);

console.log(user.getBooksCount());
user.buyBooks("React");
user.buyBooks("React");
user.buyBooks("React");
console.log(user.getBooksCount());
console.log(user.books);
console.info(user);

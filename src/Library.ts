class Library {

    books: Array<Book>;
    movies: Array<Movie>;
    items: Array<Item>;

    constructor(books: Array<Book>, movies: Array<Movie>) {
        this.books = books;
        this.movies = movies;
        this.items = (<Item[]>this.books).concat(this.movies);
    }

    static fromJSON(data: any): Library {
        let books: Array<Book> =data.books.map(book => new Book(book.title, book.author, book.genre, book.description));

        let movies: Array<Movie> = data.movies.map(movie => new Movie(movie.title, movie.genre, movie.description, movie.age, movie.name));

        console.log(books);
        console.log(movies);
        console.log(data);

        return new Library(books, movies);
    }

    getAll(): Array<Item> {
        return this.items;
    }
}
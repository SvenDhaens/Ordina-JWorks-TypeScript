class Library {

    items:Array<Item>;

    constructor(private books: Array<Book>,private movies:Array<Movie>){

    }

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }

    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }

    addMovie(){
        let movie = new Movie("random movie","random genre","random description",99,"random");
        this.movies.push(movie);
        movie.render(document.getElementById("items"));
    }

    addBook(){
        let book = new Book("random Book",new Author("random author"),"random genre","random description");
        this.books.push(book);
        book.render(document.getElementById("items"));
    }
}
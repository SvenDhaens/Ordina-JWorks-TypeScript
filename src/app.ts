function publishItems(title:string,genre:string,description:string) : void {

    let article: HTMLElement = document.createElement("article")
    article.innerHTML =
        "<h3>" + title + "</h3>" +
        "<p>" + genre + "</p>" +
        "<span>" + description + "</span>";


    document.getElementById("items").appendChild(article);

}

publishItems("Matrix","Thriller","Did you know, Neo is the one?");

publishItems("Moby Dick","Drama","Is this fish for real?");

function doSomethingElse(){
    let someBook: Book = new Book('testboek', 'genreboek', 'description');
    let someMovie: Movie = new Movie('The Matrix', 'awesome', 'Something with computers ;)')

    let library: Library = new Library(someBook, someMovie);
    let libraryDiv: HTMLElement = document.getElementById('library');

    library.render(libraryDiv);
}

doSomethingElse();
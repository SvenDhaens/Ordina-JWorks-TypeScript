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
    let someBook: Book = new Book('testboek', 'genreboek', 'description',"jos");
    let someMovie: Movie = new Movie('The Matrix', 'Thriller', 'Something with computers.',10,"awesome")

    let library: Library = new Library(someBook, someMovie);
    let libraryDiv: HTMLElement = document.getElementById('library');

    library.render(libraryDiv);
}

doSomethingElse();
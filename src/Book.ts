/**
 * Created by SVENDHAENS on 17/10/2017.
 */
class Book extends Item{

    constructor(title: string, genre: string, description: string) {
        super(title, genre, description);
    }

    render(element: HTMLElement) {
        element.innerHTML=
            "<h3>" + "Book:" +  this.title + "</h3>" +
            "<p>" + this.genre + "</p>" +
            "<span>" + this.description + "</span>";
    }
}
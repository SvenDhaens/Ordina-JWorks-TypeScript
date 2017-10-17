/**
 * Created by SVENDHAENS on 17/10/2017.
 */
class Book extends Item implements Author{
    name: string;

    constructor(title: string, genre: string, description: string, name: string) {
        super(title, genre, description);
        this.name = name;
    }

    render(element: HTMLElement) {
        element.innerHTML=
            "<h3>" + "Book:" +  this.title + "</h3>" +
            "<p>" + this.genre + "</p>" +
            "<span> author=" + this.name + "</span>" +
            "<span>" + this.description + "</span>";
    }
}
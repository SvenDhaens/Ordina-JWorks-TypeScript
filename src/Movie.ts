/**
 * Created by SVENDHAENS on 17/10/2017.
 */
class Movie extends Item implements Rating{
    age: number;
    name: string;

    constructor(title: string, genre: string, description: string, age: number, name: string) {
        super(title, genre, description);
        this.age = age;
        this.name = name;
    }

    render(element: HTMLElement) {
        element.innerHTML=
        "<h3>" + "Movie:" +  this.title + "</h3>" +
        "<p>" + this.genre + "</p>" +
        "<span>" + this.description + "</span>" +
        "<p>" + this.age+"</p>" +
        "<p>" + this.name+"</p>";
    }
}

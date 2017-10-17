/**
 * Created by SVENDHAENS on 17/10/2017.
 */

abstract class Item{
    title: string;
    genre: string;
    description: string;

    constructor(title: string, genre: string, description: string) {
        this.title = title;
        this.genre = genre;
        this.description = description;
    }

    abstract render(element: HTMLElement);
}

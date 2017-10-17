/** Created by SVENDHAENS on 17/10/2017. */
class Library{
    items: Array<Item>;

    constructor(...items: Array<Item>) {
        this.items = items;
    }

    render(element : HTMLElement){
        let motherElement :HTMLElement = document.createElement("section");
        motherElement.setAttribute("class","well");
        element.appendChild(motherElement);

        this.items.forEach(item => {
            let articlePart: HTMLElement = document.createElement("article")
            motherElement.appendChild(articlePart);
            item.render(articlePart);
        });
    }
}

//activate when you finished exercise 3
let jsonParser = new JSONParser();
let library: Library;

jsonParser.getJSON("items.json", data => {
    library = Library.fromJSON(data);

     var itemContainer: HTMLElement = document.getElementById("items");
     library.getAll().forEach(item => item.render(itemContainer));

});
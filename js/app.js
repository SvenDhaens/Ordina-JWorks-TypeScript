var jsonParser = new JSONParser();
var library;
jsonParser.getJSON("items.json", function (data) {
    library = Library.fromJSON(data);
    var itemContainer = document.getElementById("items");
    library.getAll().forEach(function (item) { return item.render(itemContainer); });
});
function addMovietoLib() {
    library.addMovie();
}
function addBooktoLib() {
    library.addBook();
}
//# sourceMappingURL=app.js.map
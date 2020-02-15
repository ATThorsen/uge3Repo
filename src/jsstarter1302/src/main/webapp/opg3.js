var listName = ["Lars", "Peter", "Jan", "Ian"];

    updateList();
    
function updateList() {
    let htmlString = "<ul>" +
            listName.map(function (a) {
                return "<li>" + a + "</li>";
            }).join("") +
            "</ul>";
    console.log(htmlString);
    document.getElementById("div1").innerHTML = htmlString;
}
function addToList(evt){
    evt.preventDefault();
    listName.push(document.getElementById("name").value);
    console.log(listName);
    updateList();
}   

    function deleteFirst(evt){
    evt.preventDefault();
    listName.shift();
    console.log(listName);
    updateList();
}   
    function deleteLast(evt){
    evt.preventDefault();
    listName.pop();
    console.log(listName);
    updateList();
}    

    var button = document.getElementById("fid").onsubmit = addToList;
    var button1 = document.getElementById("dfid").onsubmit = deleteFirst;
    var button2 = document.getElementById("dlid").onsubmit = deleteLast;

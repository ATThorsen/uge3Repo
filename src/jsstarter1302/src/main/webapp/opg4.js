
let cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

let carfilter = cars;



    HTMLPrint(cars);

function HTMLPrint(list) {
    let headers = (Object.getOwnPropertyNames(list[0]));
    let headerString = "<tr>" +
            headers.map(function (a) {
                return "<th>" + a + "</th>"
            }).join("") +
            "</tr>";
    console.log(headerString);
    let htmlRows = "<tr>"
    list.forEach(e => {
        let temp = Object.values(e).map(function (a) {
            return "<td>" + a + "</td>";
        }).join("") + "</tr>";
        htmlRows += temp;
    })
    console.log(htmlRows);
    document.getElementById("div1").innerHTML = "<table border='1'>" + headerString + htmlRows;
}

function filter(evt) {
    evt.preventDefault();
    let filtedcars = cars.filter(function (a) {
        return a.price < document.getElementById("lablePrice").value;

    })
    HTMLPrint(filtedcars);
}
   var button = document.getElementById("price").onsubmit = filter;
;

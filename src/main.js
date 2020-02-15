let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", "hanne", "Sanne"];
let all = boys.concat(girls);

console.log(all);

let alljoincomma = all.join(",");
console.log(alljoincomma);
let alljoinhyp = all.join("-");
console.log(alljoinhyp);


all.unshift("Hans","Kurt");
all.push("Lone","Gitte");
console.log(all);

all.shift(1);
all.pop(1);
console.log(all);


console.log(all.splice(3, 2));

console.log(all.reverse());

console.log(all.sort());

toUpper = function(x){ 
  return x.toUpperCase();
};
all = all.map(toUpper);

console.log(all);
let filteredNames = [];
filter = function(name) {
       if (name.charAt(0) == "I" || name.charAt(0) == "L"){
    filteredNames.unshift(name)};
    return filteredNames;
};

all = all.map(filter);
console.log(all);



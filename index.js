// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push("Ralph");
}

cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

 function destructivelyPrependCat(name){
    return cats.unshift("Bob");
 }

 cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function destructivelyRemoveLastCat(){
    return cats.pop();
  }

  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function destructivelyRemoveFirstCat(){
    return cats.shift();
  }

  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function appendCat(name){
    const newArray = [...cats, name];
    return newArray;
  }

  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function prependCat(name){
   const newArray = [name, ...cats];
    return newArray;
  }

  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");


  function removeLastCat(){
    const newArray = [...cats];
    newArray.splice(newArray.length - 1, 1);
    return newArray;
  }
   
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function removeFirstCat(){
    const newArray = [...cats];
    newArray.splice(0, 1);
    return newArray;
  }

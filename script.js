
 // using template literals/template strings https://wesbos.com/template-strings-html/ to make it easier
 // to insert HTML into DOM
 function buttonClick() {
     const myElem = document.createElement("div");
     let myString = `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aspernatur beatae ducimus esse excepturi fugiat fugit hic iste laudantium libero necessitatibus nulla odit perferendis, provident recusandae rem sint sunt?</div>`;

     myElem.innerHTML = myString;
     document.getElementById("myDiv").append(myElem);
 }

 function eraseText() {
    document.getElementById("myDiv").innerHTML = "";
 }


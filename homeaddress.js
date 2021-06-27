
var button = document.getElementById("click");
var input = document.getElementById("userinfo");
var ul = document.querySelector("ul");

//length function 
function totalLength(){

return input.value.length;

}

//for adding new list item function
function addNewListItem(){

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}


//function for cickListener

function clickListener() {

	 if(totalLength() >0){
    addNewListItem();

  }
}

//function for keyPressListener
function keyPressListener(event){
	if(totalLength() >0 && event.keyCode ===13){

   addNewListItem();

  }
}

button.addEventListener("click", clickListener);


input.addEventListener("keypress", keyPressListener);
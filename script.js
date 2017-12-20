var namesList = [];

var newName;


var fVal=document.getElementById("task");


var taskInput = document.getElementById("task");

function addTask()
{

	this.namesList.push(document.getElementById("task").value);

//document.getElementById("taskDetails").innerHTML= document.getElementById("task").value;



      for (var i = 0, n; n = namesList[i]; i++) {

		  var liElement = document.createElement('li');

      var btn = document.createElement('button');

		  var checkBox = document.createElement("input"); // checkbox

		  var label = document.createElement("label");

		  btn.innerText="Delete";
		  
		  btn.onclick=d;

		  checkBox.type = "checkbox";
		  
		  checkBox.onchange=c;


		  label.innerText = n;
		  
		  liElement.id=i;

		  liElement.appendChild(checkBox);
		   liElement.appendChild(label);
		  liElement.appendChild(btn);



	  }

	document.getElementById("taskDetails").appendChild(liElement);

	document.getElementById("task").value="";


        document.getElementById("task").focus();




}


var c=function completeTask()
{

alert("I am clicked");

}

var d=function deleteTask()
{
  alert("I am delete");
	
	var lists= document.getElementsByTagName("li");
	//console.log(lists);
	console.log(this.parentElement);
}

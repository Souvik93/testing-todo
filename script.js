var namesList = [];

var completedTasks = [];

var newName;


var fVal = document.getElementById("task");


var taskInput = document.getElementById("task");

function addTask() {
	
	if(document.getElementById("task").value=="")
		{
			alert("Blank Value");
		}
	
	else{
		
	

    this.namesList.push(document.getElementById("task").value);

    //document.getElementById("taskDetails").innerHTML= document.getElementById("task").value;



    for (var i = 0, n; n = namesList[i]; i++) {

        var liElement = document.createElement('li');

        var btn = document.createElement('button');

        var checkBox = document.createElement("input"); // checkbox

        var label = document.createElement("label");

        btn.innerText = "Delete";

        btn.onclick = d;
		
		btn.classList.add("btn", "btn-danger" ,"myBtn");

        checkBox.type = "checkbox";

        checkBox.onchange = c;
		
		checkBox.classList.add("form-controlsdd");


        label.value = n;
		
		label.innerText = n;

        liElement.id = i;

        liElement.appendChild(checkBox);
        liElement.appendChild(label);
        liElement.appendChild(btn);



    }

    document.getElementById("taskDetails").appendChild(liElement);

    document.getElementById("task").value = "";


    document.getElementById("task").focus();
		
	}




}


var c = function completeTask() {

    alert("Task Completed");
    var c = this.parentElement.childNodes;
    console.log("HJiiiiiiiiiii");
    console.log(c[1]);
    completedTasks.push(c[1].value);

    var elm = document.getElementById(this.parentElement.id);


    elm.parentNode.removeChild(elm);


    for (var i = 0, n; n = completedTasks[i]; i++) {
        var liElm = document.createElement('li');

        var label = document.createElement("label");

        var btn = document.createElement("button");

        btn.innerText = "Delete";

        btn.onclick = d;
		
		btn.classList.add("btn", "btn-danger", "myBtn");

        label.innerText = n;
		

        liElm.id = i;

        liElm.appendChild(label);
        liElm.appendChild(btn);

    }

    document.getElementById("completedTasksUl").appendChild(liElm);



}

// For deleting tasks
var d = function deleteTask() {
    alert("I am delete");

    console.log("Task Deleted Successfully");
    console.log(document.getElementById("task"));

    //var lists= document.getElementsByTagName("li");
    //console.log(lists);
    var elm = document.getElementById(this.parentElement.id);


    elm.parentNode.removeChild(elm);
}
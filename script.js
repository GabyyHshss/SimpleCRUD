// default toDo

let mytodo_list = ["Do Exercise", "Solve Bug", "Meet Team"];

// CREATE

function CreateTask() {
	let task = document.getElementById("add-task").value;
	if (task == "") {
		alert("Please enter a task");
	} else {
		mytodo_list.push(task);
		document.getElementById("add-task").value = "";
		ReadAllTask();
	}
}

// READ

function ReadAllTask() {
	let data = "";
	for (var i = 0; i < mytodo_list.length; i++) {
		data += "<tr>";
		data += "<td>" + mytodo_list[i] + "</td>";
		data += "<td><button class='btn btn-primary' onclick=UpdateTask(" + i + ")>Update</button></td>";
		data += "<td><button class='btn btn-danger' onclick=DeleteTask(" + i + ")>Delete</button></td>";
		data += "</tr>";
	}
	document.getElementById("counter").innerHTML = mytodo_list.length + " Task";
	document.getElementById("mytodo-tasks").innerHTML = data;
}
ReadAllTask();

// UPDATE

function UpdateTask (item) {
	document.getElementById("UpdateForm").style.display = "block";
	document.getElementById("update-task").value = mytodo_list[item];
	document.getElementById("UpdateForm").onsubmit = function () {
		let task = document.getElementById("update-task").value;
		mytodo_list.splice(item, 1, task.trim());

		ReadAllTask();
		CloseInput();
	};
}

// DELETE 

function DeleteTask(item) {
	mytodo_list.splice(item, 1);

	ReadAllTask();
}

function CloseInput(){
	document.getElementById("UpdateForm").style.display = "none";
}
alert("hallo tugas praktek")
document.addEventListener("DOMContentLoaded", function (){
    const tasklist = Document.getElementById("talk-list");
    const newtaskInput = document.getElementById("new-task");
    const addtaskbutton = document.getElementById("add-task");

    addtaskbutton.addEventListener("click", function() {
        const tasktexs = newtaskInput.Value.trim();
        if (tasktexs !== ""){
            addtaskbutton(tasktext);
            newtaskInput.value = "";
        }
});

newtaskInput.addtaskInput.addEventListener("keyup",function(even) {
    if (Event.key === "enter") {
        addtaskbutton.click();
    }
});
function addtask(tasktext){
    const taskItem = document.createElement("li");
    taskItem.textContent = tasktext;

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "delete"
    deletebutton.classList.add("delete-button");

    deletebutton.addEventListener("click", function() {
        tasklist.removeChild(taskItem);
    });

taskItem.appenChild(deletebutton);

taskItem.addEventListener("click", function(){
    taskItem.classList.toggle("completed")
});

tasklist.appenChild(taskItem);
}
});

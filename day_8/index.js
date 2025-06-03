


const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");

addTaskBtn.addEventListener("click",()=>{
    const il=document.createElement("li");
    il.textContent=taskInput.value;
    il.addEventListener("click", () => {
        il.classList.toggle("completed");
    });

    const small=document.createElement("small")
    const date= new Date()
    small.textContent=`  ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    il.appendChild(document.createElement("br")); // ירידת שורה


    il.appendChild(small);

        taskList.appendChild(il);
    taskInput.value="";

    const button=document.createElement("button");
    button.textContent = "❌";
    button.addEventListener("click", ()=>{
        il.remove()
    })
    il.appendChild(button);
    button.classList.add("delete-btn");

});

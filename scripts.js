
import { getHtml } from "./modules/helpers.js";
import "./components/single-task.js"
import { TaskAdding } from "./components/task-adding.js"
// import { Task } from "./modules/Task.js";
// import { createAdding } from "./modules/adding.js";

const addButton = getHtml({ dataAttr: "add-button" })
const taskAdding = getHtml({ dataAttr:"adding" });


if(!(addButton instanceof HTMLElement)) {
    throw new Error('data-add')
}

if (!(taskAdding instanceof TaskAdding)){
    throw new Error("Invalid task-adding in HTML")
}

addButton.addEventListener("click", () => {
    taskAdding.open = true;
})

taskAdding.addEventListener("added", (event) => {
    if (!(event instanceof CustomEvent)) {
    throw new Error("Required to be custom event")
    }

console.log(event.detail)

    console.log(event)
})

window.addEventListener("error", () => {
    document.body.innerHTML = `<div>Something went very wrong.</div>`
})

// const adding = createAdding();
// adding.submission = (data) => new Task(data)



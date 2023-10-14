// @ts-check

/* The Single-responsibility principle: "There should never be more than one
 * reason for a class to change." In other words, every class should have only
 * one resonsibility.
 */

/* The Open-closed principle: "Software entities hsould be open for extension,
 * but closed for modification."
 */

/* The Liskov substitution principle: " Functions that use pointers or
 * references to base classes must be able to use objects of derived classes
 * without knowing it." See also design by contract.
 */

/* The Interface segregation principle: "Clienst should not be forced to depend
 * upon interfaces that they do not use."
 */

/* The Dependency inversion principle: "depend upon abstractions, [not]
 * concretions."
 */

// const list = [
//     createTask({
//     title: "Wash the Dog",
//     urgency: "high",
//     due:null
// }),

// createTask({
//     title: "Write code",
//     urgency: "high",
//     due: new Date()
// }),

// createTask({
//     title: "Do dishes",
//     urgency: "high",
//     due: new Date()
// }),

// createTask({
//     title: "Learn JavaScript",
//     urgency: "high",
//     due: new Date()
// }),

// ];

// list[1].completed = true;

import { createTask } from "./modules/tasks.js";
import { createAdding } from "./modules/adding.js";

window.addEventListener("error", () => {
    document.body.innerHTML = `<div>Something went very wrong.</div>`
})

const adding = createAdding();
adding.submission = createTask;

const example = createTask({
    title: "Do homework",
    due: null,
    urgency: "high"
})

example.title = "w;eouqgfpo    wf"

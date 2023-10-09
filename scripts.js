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


import { state, Task } from "./modules/state.js";
import { addTaskToHtml } from "./modules/tasks.js";




window.addEventListener('error', () => {
    document.body.innerHTML = 'Something went very very wrong. Please refresh.';
});

addTaskToHtml("test")






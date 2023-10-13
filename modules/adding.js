
/**
 * @typedef {'high' | 'medium' | 'low'} Urgency - The priority that the tasks
 * should take in terms of how quickly it should be completed
 *
 * @typedef {'recent' | 'oldest' | 'upcoming'} Sorting - One of three possible
 * predefined ordering approaches that task can be shown in. `recent` arranges
 * based on the tasks that were created closest to the current date, `oldest`
 * does the opposite, and `upcoming` arranges based on the closest due date (if
 * no due date it will be placed last).
 */

/**
 * @typedef {object} Task - An object representing a task to be shown to a user
 * @prop {string} id - A unique value generated by {@link createId} used to identify a task.
 * @prop {string} title - A short user-provided description of what the task entails
 * @prop {boolean} completed - Whether the task has been completed or not
 * @prop {Date} created - The exact date when the task was created in the system
 * @prop {null | Date} due - A user specified date for when the task should be completed
 * @prop {Urgency} urgency - A user specified indication of how important the task
 */

import { getHtml } from "./helpers.js"

const createAddingHtml = () => {
    const element = getHtml({dataAttr:"adding"})

    const button = document.createElement("button");
    button.className = "button";
    button.innerText = "Add Task";

    element.appendChild(button)

    const dialog = document.createElement("dialog");
    dialog.className = "overlay";

    dialog.innerHTML = /* html */ `
    <h2 class="overlay__title">Add Task</h2>

    <form data-form id="adding">
      <label class="overlay__field">
        <div>Title</div>
        <input required class="overlay__input" name="title"  />
      </label>

      <label class="overlay__field">
        <div>Due</div>
        <input type="date" class="overlay__input" name="due"  />
      </label>

        <label class="overlay__field">
          <div>Urgency</div>
          <select required class="overlay__input" 
          name="urgency"  />
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="low">Low</option>
          </select>
        </label>
    </form>

    <div class="overlay__row">
      <button class="button" data-cancel>Cancel</button>

      <button 
        class="button" 
        type="submit"
        form="adding"
      >Save</button>
    </div>
        </dialog>
        `
        element.appendChild(dialog)

        return {
            button,
            dialog,
            form: dialog.querySelector("[data-form]"),
            cancel: dialog.querySelector("[data-cancel]"),
        }
}

/**
 * @typedef {object} Data
 * @prop {string} title
 * @prop {Date | null} due
 * @prop {Urgency} urgency
 * 
 */


/**
 * @callback Submission
 * @param {Data} data
 */

/**
 * @typedef {object} Adding
 * @prop {Submission} submission
 */

/**
 * @returns {Adding}
 */
export const createAdding = () => {
    const { button, dialog, cancel, form } = createAddingHtml()
    
    const state = {
        submission: undefined,
    }

    button.addEventListener("click", () => {
    // Alternative: dialog.open = true, but below creates grey bachground
        dialog.showModal();
    })

    cancel.addEventListener("click", () =>{
    // Alternative: dialog.open = false;
    dialog.close();
    })

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (typeof state.submission !== "function") {
            throw new Error('"submission" value has to be set as function')
        }

        if(!(event.target instanceof HTMLFormElement)){
            throw new Error("form not found")
        }

        const entries = new FormData(event.target)
        const response = Object.fromEntries(entries)
        state.submission(response)

        event.target.reset()
        dialog.close()
    })

    return {
        get submission() {
            return state.submission;
        },

        set submission(newValue) {
            state.submission = newValue
        },
    }
};

export default createAdding;

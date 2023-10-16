// // @ts-check

// // // COMBINE YOUR DATA + BEHAVIOUR INTO A SINGLE ENCAPSULATED UNIT

// // const counter = {
// //   /** The actual track value */
// //   value: 1,
// //   /**
// //    * Increases counter value by 1
// //    */
// //   increase() {
// //     counter.value += 1;
// //   },
// //   /**
// //    * Decreases counter value by 1
// //    */
// //   decrease() {
// //     counter.value -= 1;
// //   },
// //   /**
// //    * Logs the counter value in the console
// //    */
// //   display() {
// //     console.log(counter.value);
// //   },
// // };

// // counter.increase();
// // counter.increase();
// // counter.value = 10;
// // counter.display();

// /**
//  * @callback Modify
//  * @param {number} [amount] - The amount to modify the value with
//  */

// /**
//  * @callback EmptyFn
//  */

// /**
//  *
//  * @typedef {object} Counter - An object that keeps internal state and allows you to increase, decrease and
//  * log the value. Note that there is no way to access teh value from inside.
//  * @prop {Modify} increase - Increeases counter value
//  * @prop {Modify} decrease - Decreases counter value
//  * @prop {EmptyFn} display
//  * @prop {string} label
//  */

// /**
//  * @param {string} label - The actual value that is being measured
//  * @returns {Counter}
//  */
// const createCounter = (label) => {
//   let value = 1;
//   let innerLabel = label;

//   const increase = (amount) => {
//     value += amount || 1;
//   };
//   const decrease = (amount) => {
//     value -= amount || 1;
//   };
//   // eslint-disable-next-line
//   const display = () => console.log(`${value} ${innerLabel}`);

//   return {
//     display,
//     increase,
//     decrease,
//     get label() {
//       return innerLabel;
//     },

//     set label(newLabel) {
//       innerLabel = `${newLabel} is the lable now!`;
//     },
//   };
// };

// const counter = createCounter();

// counter.increase()
// counter.decrease(10)
// counter.display()

// const temperature = createCounter("Celcius");
// const humidity = createCounter("Humidity Factor");

// humidity.increase(20);
// temperature.decrease(3);
// temperature.increase(10);

// temperature.label = "F";

// humidity.display();
// temperature.display();

// These are two examples of  the same thing

// class Example1 {
//   test = undefined;

//   constructor(label) {
//     this.test = label
//   }
// }

// const instance1 = new Example1("one");

// function Example2(label) {
//   this.test = label;

// }

// const instance2 = new Example2("One")

// console.log(instance1, instance2)

// console.log(instance1 instanceof Example1)
// console.log(instance2 instanceof Example2)

class Example extends HTMLElement {
  connectedCallback() {
    this.innerText = "Hello!";
  }
}

customElements.define("exmaple-schalk", Example)
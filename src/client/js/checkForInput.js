/*jshint esversion: 8 */

function checkForInput(inputText) {
  if (inputText === '') {
    document.querySelector('#polarity').innerHTML = "don't be shy...please enter something";
  }
}

export { checkForInput };

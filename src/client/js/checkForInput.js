/*jshint esversion: 8 */

function checkForInput(inputText) {
  if (inputText === '') {
    document.querySelector('#results').innerHTML = "please enter something";
    document.querySelector('#polarity').innerHTML = '';
    document.querySelector('#subjectivity').innerHTML = '';
    document.querySelector('#polarity-confidence').innerHTML = '';
    document.querySelector('#subjectivity-confidence').innerHTML = '';
  }
}

export { checkForInput };

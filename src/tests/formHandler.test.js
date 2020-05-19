/*jshint esversion: 8 */
import "@babel/polyfill";
import "regenerator-runtime/runtime.js";
const fetch = require('node-fetch');
const formHandler = require('../client/js/formHandler');


describe('user input: formText', () => {
  test("the formText is: 'tests are great!'", async () => {
    document.body.innerHTML = ` <input id="user-input" type="text" name="input" value="tests are great!"
      placeholder="..."> `;
    const formText = await document.querySelector('#user-input').value;

    expect(formText).toBe('tests are great!');
  });
});


// API CALL //////////////////////////////////////

// async POST Function //////////////////////////
const postData = async ( url = '', data = {})=>{
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), //body datatype must match "Content-Type" header
  });
  try {
    const newData = await response.json();
    return newData;
  }catch(error) {
    console.log("postData error", error);
    // appropriately handle the error
  }
};

describe('API call', () => {
  test('it should return the correct answer', async () => {

    const formText = 'tests are great!';

    const output = {
      polarity: 'positive',
      subjectivity: 'objective',
      text: 'tests are great!',
      polarity_confidence: 0.9835010766983032,
      subjectivity_confidence: 0.9929405176433662
      };

    return expect (postData('http://localhost:8081/api',
                           {input:formText})).resolves.toStrictEqual(output);
  });
});

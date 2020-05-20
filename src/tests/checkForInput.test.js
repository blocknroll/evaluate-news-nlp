/*jshint esversion: 8 */
import "@babel/polyfill";
import "regenerator-runtime/runtime.js";
const fetch = require('node-fetch');
const sum = require('../client/js/checkForInput');


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

test('empty input generates alert', async () => {
  const formText = '';
  postData('http://localhost:8081/api', {input:formText});

  document.onload = function() {
    const output = "don't be shy...please enter something";
    expect(document.querySelector('#polarity').innerText).toBe(output);
  };
});

/*jshint esversion: 8 */

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('user-input').value;

    console.log("Form Submitted with: " + formText);

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

    postData('/api', {input:formText})
    .then(function(res) {
      document.getElementById('polarity').innerHTML = 'polarity: ' + res.polarity;
      document.getElementById('subjectivity').innerHTML = 'subjectivity: ' + res.subjectivity;
      document.getElementById('polarity-confidence').innerHTML = 'polarity-confidence: ' + res.polarity_confidence;
      document.getElementById('subjectivity-confidence').innerHTML = 'subjectivity-confidence: ' + res.subjectivity_confidence;
    });
}

export { handleSubmit };

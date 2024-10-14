const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

checkBtn.addEventListener('click', checkValid);
clearBtn.addEventListener('click', clearResults);
userInput.addEventListener('input',checkValid);

function checkValid() {
  const input = userInput.value.trim();
  if (!input) {
    alert('Please provide a phone number');
    return;
  }

const regex = /^(?:(?:\+{0,1}\d{0,2}[-.\s]?){0,1}91[-.\s]?)?[789]\d{4}[-.\s]?\d{5}$/;
  const isValid = regex.test(input);

  if (isValid) {
    resultsDiv.innerText = `Valid Indian number: ${input}`;
  } else {
    resultsDiv.innerText = `Invalid Indian number: ${input}`;
  }
}

function clearResults() {
  resultsDiv.innerText = '';
}

document.getElementById("close").addEventListener("click",()=>alert("This does nothing lol"));

let fact = document.querySelector('#fact');
let factText = document.querySelector('#fact-text');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactAjax);

function getFactAjax() {
  let number = numberInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://numbersapi.com/' + number);

  xhr.onload = function () {
    if (this.status === 200 && number != '') {
      fact.style.display = 'block';
      factText.innerHTML = this.responseText;
    }
  };
  xhr.onerror = function () {
    fact.style.display = 'block';
    factText.classList.add('bg-warning');
    factText.innerHTML = 'Sorry Something Went Wrong !!!';
  };

  xhr.send();
}

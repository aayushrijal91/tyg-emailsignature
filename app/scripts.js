const fname = document.getElementById('fnameInput');
const fnameResult = document.getElementById('fnameResult');
const lname = document.getElementById('lnameInput');
const lnameResult = document.getElementById('lnameResult');
const position = document.getElementById('positionInput');
const positionResult = document.getElementById('positionResult');
const email = document.getElementById('emailInput');
const emailResult = document.getElementById('emailAddress');
const phone = document.getElementById('phoneInput');
const phoneResult = document.getElementById('phoneResult');

const fnameInputHandler = function (e) {
    fnameResult.innerHTML = e.target.value;
}

const lnameInputHandler = function (e) {
    lnameResult.innerHTML = e.target.value;
}

const positionInputHandler = function (e) {
    positionResult.innerHTML = e.target.value;
}

const phoneInputHandler = function (e) {
    phoneResult.innerHTML = e.target.value;
    phoneResult.setAttribute('href', `tel:${e.target.value}`);
}

const emailInputHandler = function (e) {
    emailResult.innerHTML = e.target.value;
    emailResult.setAttribute('href', `mailto:${e.target.value}`);
}

fname.addEventListener('input', fnameInputHandler);
fname.addEventListener('propertychange', fnameInputHandler);
lname.addEventListener('input', lnameInputHandler);
lname.addEventListener('propertychange', lnameInputHandler);
position.addEventListener('input', positionInputHandler);
position.addEventListener('propertychange', positionInputHandler);
phone.addEventListener('input', phoneInputHandler);
phone.addEventListener('propertychange', phoneInputHandler);
email.addEventListener('input', emailInputHandler);
email.addEventListener('propertychange', emailInputHandler);

function copyTableToClipboard() {
    var table = document.getElementById("mainTable");

    var range = document.createRange();
    range.selectNode(table);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand("copy");

    window.getSelection().removeAllRanges();
    alert("Table copied to clipboard");
}

document.getElementById("copyButton").addEventListener("click", copyTableToClipboard);
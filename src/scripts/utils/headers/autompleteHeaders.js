import httpHeaders from "./httpHeaders";

export function handleKeyUp(event, suggestion) {
    let searchvalue = event.target.value;
    suggestion.innerHTML =``;
    if(searchvalue.length) {
        let autoCompleteValue = autoComplete(searchvalue, httpHeaders);
        autoCompleteValue.forEach(value => {addItem(value, suggestion)})
    }
}

function autoComplete(inputValue, httpHeaders) {
    return httpHeaders.filter(
        (value) => value.includes(inputValue)
    );
}

function addItem(value, suggestion) {
    suggestion.innerHTML = suggestion.innerHTML + `<li>${value}</li>`;
}

export function selectItem(event, inpst, suggestion) {
    if (event.target.tagName === 'LI') {
        inpst.value = event.target.textContent;
        suggestion.innerHTML = ``;
    }
}
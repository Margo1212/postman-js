import httpHeaders from "./httpHeaders";

export function handleKeyUp(event, suggestion) {
    let searchValue = event.target.value;
    suggestion.innerHTML =``;
    if(searchValue.length) {
        let autoCompleteValue = autoComplete(searchValue, httpHeaders);
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
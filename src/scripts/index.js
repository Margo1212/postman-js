import createTag from './utils/createTag.js';

//section for Headers and Body
const requestInfo = createTag({tagName: 'section', className: 'request-info'});
const requestInfoMainTitle = createTag({tagName: 'h2', className: 'request-info__main-title', tagText: 'Request info'})

const headersButton = createTag({tagName: 'button', className: 'request-info__btn', tagText: 'Headers'});
const bodyButton = createTag({tagName: 'button', className: 'request-info__btn', tagText: 'Body'});

//Body container and textarea
const requestInfoBody = createTag({className: 'request-info__body'});
const requestInfoBodyForm = createTag({tagName: 'form', className: 'request-info__body-form', tagAttrs: [{key: 'method', value: ''}, {key: 'action', value: ''}]});
const textareaLabel = createTag({tagName: 'label', tagAttrs: [{key: 'for', value: 'textarea'}]});
const requestInfoBodyTextBox = createTag({tagName: 'textarea', className: 'request-info__body-text-box', tagId: 'textarea'});


//Headers and Body section structure
requestInfo.appendChild(requestInfoMainTitle);
requestInfo.appendChild(headersButton);
requestInfo.appendChild(bodyButton);

//Body container
requestInfo.appendChild(requestInfoBody);
requestInfoBody.appendChild(requestInfoBodyForm);
requestInfoBodyForm.appendChild(textareaLabel);
requestInfoBodyForm.appendChild(requestInfoBodyTextBox);

CodeMirror.fromTextArea(requestInfoBodyTextBox, {
    lineNumbers: true,
    theme: 'yonce',
})

document.body.appendChild(requestInfo);

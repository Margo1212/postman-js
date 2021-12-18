import createTag from './utils/createTag.js';

//section for Headers and Body
const requestInfo = createTag({tagName: 'section', className: 'request-info'});
const requestInfoMainTitle = createTag({tagName: 'h2', className: 'request-info__main-title', tagText: 'Request info'})
const requestInfoOptions = createTag({tagName: 'ul', className: 'request-info__options',});
//Headers label
const requestInfoHeadersTitle = createTag({tagName: 'li', className: 'request-info__headers-title'});
const headersLink = createTag({tagName: 'a', tagText: 'Headers', tagAttrs: [{key: 'href', value: '#'}]});
//Body label
const requestInfoBodyTitle = createTag({tagName: 'li', className: 'request-info__body-title'});
const bodyLink = createTag({tagName: 'a', tagText: 'Body', tagAttrs: [{key: 'href', value: '#'}]});
//Body container and textarea
const requestInfoBody = createTag({className: 'request-info__body'});
const requestInfoBodyForm = createTag({tagName: 'form', className: 'request-info__body-form', tagAttrs: [{key: 'method', value: ''}, {key: 'action', value: ''}]}); //do poprawienia
const textareaLabel = createTag({tagName: 'label', tagAttrs: [{key: 'for', value: 'textarea'}]});
const requestInfoBodyTextBox = createTag({tagName: 'textarea', className: 'request-info__body-text-box', tagId: 'textarea'});

//Headers and Body container structure
requestInfo.appendChild(requestInfoMainTitle);
requestInfo.appendChild(requestInfoOptions);
//Label for Headers and Body
requestInfoOptions.appendChild(requestInfoHeadersTitle);
requestInfoHeadersTitle.appendChild(headersLink);
requestInfoOptions.appendChild(requestInfoBodyTitle);
requestInfoBodyTitle.appendChild(bodyLink);

//Body container
requestInfo.appendChild(requestInfoBody);
requestInfoBody.appendChild(requestInfoBodyForm);
requestInfoBodyForm.appendChild(textareaLabel);
requestInfoBodyForm.appendChild(requestInfoBodyTextBox);

document.body.appendChild(requestInfo);

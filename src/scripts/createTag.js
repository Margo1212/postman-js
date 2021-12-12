const createTag = ({tagName = 'div', tagText, className, tagId, tagAttrs, tagEvent}) => {

    const node = document.createElement(tagName)

    if (tagText !== undefined) {
        const nodeText = document.createTextNode(tagText)
        node.appendChild(nodeText)
    }

    if (className !== undefined) {
        if (Array.isArray(className)) {
            className.forEach(cls => {
                node.classList.add(cls)
            })
        } else {
            node.classList.add(className)
        }
    }

    if (tagId !== undefined) {
        node.id = tagId
    }

    if (tagAttrs !== undefined) {
        tagAttrs.forEach(attr => {
            node.setAttribute(attr.key, attr.value)
        })
    }

    if (tagEvent !== undefined) {
        const {name, callback} = tagEvent

        node.addEventListener(name, callback)
    }

    document.body.appendChild(node)

    return node
}

const divInput = createTag({className: 'input-block'})
const selectInput = createTag({tagName: 'select'})
//TODO options
const inputInput = createTag({tagName: 'input', tagAttrs: [{key: 'type', value: 'text', key: 'placeholder', value: 'Enter request URL'}] })
const btnInput = createTag({tagName: 'button', tagText: 'SEND'})

divInput.appendChild(selectInput)
divInput.appendChild(inputInput)
divInput.appendChild(btnInput)

// const config = {
//     tagName: 'p',
//     tagText: 'przykladowy tekst',
//     className: ['this-is-a-class', 'bb'],
//     tagId: 'ce-id',
//     tagAttrs: [
//         {
//             key: 'placeholder',
//             value: 'alallalala'
//         }
//     ],
//     tagEvent: {
//         name: 'click',
//         callback: () => console.log('ww')
//     }
// }

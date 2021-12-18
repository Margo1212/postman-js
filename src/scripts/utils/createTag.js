const createTag = ({
                       tagName = "div",
                       tagText,
                       className,
                       tagId,
                       tagAttrs,
                       tagEvent,
                   }) => {
    const node = document.createElement(tagName);

    if (tagText !== undefined) {
        const nodeText = document.createTextNode(tagText);
        node.appendChild(nodeText);
    }

    if (className !== undefined) {
        if (Array.isArray(className)) {
            className.forEach((cls) => {
                node.classList.add(cls);
            });
        } else {
            node.classList.add(className);
        }
    }

    if (tagId !== undefined) {
        node.id = tagId;
    }

    if (tagAttrs !== undefined) {
        tagAttrs.forEach((attr) => {
            node.setAttribute(attr.key, attr.value);
        });
    }

    if (tagEvent !== undefined) {
        const { name, callback } = tagEvent;

        node.addEventListener(name, callback);
    }

    document.body.appendChild(node);

    return node;
};

export default createTag;
  
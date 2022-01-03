const openTab = () => {
    const headerBtn = document.querySelector(".request-info__btn:first-of-type");
    const bodyBtn = document.querySelector(".request-info__btn:nth-of-type(2)");
    const bodyElement = document.querySelector(".request-info__body");

    bodyBtn.addEventListener("click", () => {
        bodyElement.classList.add("request-info__body-opened");
    });

    headerBtn.addEventListener("click", () => {
        bodyElement.classList.remove("request-info__body-opened");
    });
};

export default openTab;

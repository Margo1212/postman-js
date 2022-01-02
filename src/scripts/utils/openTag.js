const openTab = ({
  elementSelector,
  firstBtnSelector,
  secondBtnSelector,
  newClass,
}) => {
  const firstBtn = document.querySelector(firstBtnSelector);
  const secondBtn = document.querySelector(secondBtnSelector);
  const chosenElement = document.querySelector(elementSelector);

  secondBtn.addEventListener("click", () => {
    chosenElement.classList.add(newClass);
  });

  firstBtn.addEventListener("click", () => {
    chosenElement.classList.remove(newClass);
  });
};

export default openTab;

export const displayModal = () => {
  document.querySelector(".modal-create").classList.add("active");
};

export const hiddenModal = () => {
  document.querySelector(".modal-create").classList.remove("active");
};

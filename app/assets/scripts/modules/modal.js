import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this)); //binding maintains 'this' keyword to this class.

    // clicking the close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes the escape key on keyboard
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false; //prevents smooth scroll.
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;

class Modal {
    constructor(className) {
        this.modal = document.createElement('div')
        this.modal.classList.add('modal', className)
        this.modalContent = document.createElement('div')
        this.modalContent.classList.add('modal__content')
        this.modal.appendChild(this.modalContent)
    }

    get() {
        return this.modal
    }

    create() {
        document.body.appendChild(this.modal)

        this.modal.addEventListener('click', (event) => {
            event.preventDefault()
            const target = event.target

            if ((target !== this.modalContent) || (target !== target.closest(this.modalContent))) {
                this.destroy()
            }
        })
    }

    destroy() {
        document.body.removeChild(this.modal)
    }

    show() {
        this.modal.style.display = 'block'
    }

    hide() {
        this.modal.style.display = 'none'
    }

    insertInModal(HTML) {
        this.modalContent.insertAdjacentHTML('afterbegin', HTML)
    }
}

// const outsideModalCLick = (event) => {
//     const target = event.target
//
//     if ((target !== this.modalContent) || (target !== this.modalContent.contains())) {
//         this.destroy()
//     }
// }

export default Modal
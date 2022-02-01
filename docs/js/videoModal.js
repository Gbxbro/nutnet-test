import Modal from './modal.js'

const videoModal = () => {
    const playButton = document.querySelector('[data-action="play"]')

    playButton.addEventListener('click', () => {
        const modal = new Modal('youtube')
        modal.insertInModal(`
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KvUgaHTNit4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `)
        modal.create()
    })

}

export default videoModal
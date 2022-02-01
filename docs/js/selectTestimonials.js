import {performers, reviews} from './data/data.js'

const testimonialsRoot = document.querySelector('[data-testimonials="testimonials"]')
const reviewRoot = document.querySelector('[data-testimonials="review"]')
const testimonialsPerformersList = document.querySelector('[data-testimonials="performers"]')

const selectTestimonials = () => {
    new Promise(resolve => {
        renderPerformerList(testimonialsPerformersList)
        resolve()
    }).then(() => {
        testimonialsPerformersList.addEventListener('click', choosePerformerHandler)
        testimonialsPerformersList.children[2].click()
    })
}

const renderPerformerList = (root) => {
    performers.forEach(performer => {
        root.insertAdjacentHTML('beforeend', `
            <li class="performer-list__item" data-testimonials="performer" data-id="${performer.id}">
                <img src="${performer.image}" alt="${performer.alt}">
            </li>
        `)
    })
}

const getReview = (performerId) => {
    return reviews.find(review => review.performerId === performerId)
}

const renderReview = (performerId, root) => {
    const review = getReview(performerId)
    reviewRoot.innerHTML = ''
    performers.forEach(performer => {
        if (performer.id === performerId) {
            root.insertAdjacentHTML('afterbegin', `
                <div class="testimonials-content__comment">${review.text}</div>
                <h4 class="testimonials-content__title item-title">${performer.name}</h4>
                <div class="testimonials-content__subtitle">${performer.position}</div>
            `)
        }
    })
}

const removeActiveClasses = (items) => {
    for (const item of items) {
        item.classList.remove('active')
    }
}

const addActiveClass = (item) => {
    item.classList.add('active')
}

const choosePerformerHandler = (event) => {
    event.stopPropagation()
    const target = event.target
    const performer = target.closest('[data-testimonials="performer"]')

    if(performer) {
        const performerId = parseInt(performer.dataset.id)

        removeActiveClasses(testimonialsPerformersList.children)
        addActiveClass(performer)
        renderReview(performerId, reviewRoot)
    }
}

export default selectTestimonials


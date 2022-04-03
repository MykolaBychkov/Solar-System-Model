const popupLinks = document.querySelectorAll('.popup-link')
const popupCloseIcon = document.querySelectorAll('.close-popup')

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '')
            const currentPopup = document.getElementById(popupName)
            popupOpen(currentPopup)
            e.preventDefault()
        })
    }
}
if (popupCloseIcon.length > 0 ) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const element = popupCloseIcon[i];
        element.addEventListener('click', function (e) {
            popupClose(element.closest('.popup'))
            e.preventDefault()
        })
    }
}
function popupOpen (currentPopup) {
    if (currentPopup) {
        const popupActive = document.querySelector('.popup.open')
        if (popupActive) {
            popupClose(popupActive, false)
        }
        currentPopup.classList.add('open')
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup-content')) {
                popupClose(e.target.closest('.popup'))
            }
        })
    }
}
function popupClose(popupActive) {
    popupActive.classList.remove('open')
}
document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        const popupActive = document.querySelector('.popup.open')
        popupClose(popupActive)
    }
})
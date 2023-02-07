function lockedProfile() {

    Array.from(document.querySelectorAll('button')).forEach(el => el.addEventListener('click',function (event) {
        const parent = event.target.parentElement
        if (parent.querySelectorAll('input[type=radio]')[1].checked) {
            const hiddenfield = parent.querySelectorAll("[id*='HiddenFields']")[0]
            if (hiddenfield.style.display === 'block') {
                parent.querySelectorAll("[id*='HiddenFields']")[0].style.display = 'none'
                event.target.textContent = "Show more"
            } else {
                parent.querySelectorAll("[id*='HiddenFields']")[0].style.display = 'block'
                event.target.textContent = "Hide it"  
            }      
        }
    }));
}
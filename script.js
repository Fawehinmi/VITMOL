// document.documentElement.scrollHeight - window.innerHeight


window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.querySelector('.up').classList.contains('hidden') && document.querySelector('.up').classList.remove('hidden')
    } else {
        document.querySelector('.up').classList.add('hidden')
    }
})
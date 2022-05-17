function updateProgressBar(progressBar, value) {

    value = Math.round(value)

    progressBar.querySelector('.progress-fill').style.width = `${value}%`
    progressBar.querySelector('.progress-text').textContent = `${value}%`

}

//code that I add to call the function with randomly values, this piece of code is beyond the basic tutorial,
// I thought it would be good add it

counter.addEventListener('click', () => {
    const random = Math.random() * 100
    const progress = document.querySelector('.progress')
    
    updateProgressBar(progress, random)

})



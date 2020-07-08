const textElementOne = document.querySelectorAll('h1')
const textElementTwo = document.querySelectorAll('h2')
const textElementThree = document.querySelectorAll('h3')


const writerStyle = (element) => {
    const array = element.innerHTML.split('')
    element.innerHTML = ''

    array.forEach((letter, index) => {
        setTimeout(() => element.innerHTML += letter, 75 * index)
    })
}


writerStyle(textElementOne[0])
writerStyle(textElementThree[0])
writerStyle(textElementThree[1])
writerStyle(textElementTwo[0])


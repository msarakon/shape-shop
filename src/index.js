import './styles/main.scss'

const mySampleComponent = () => {
  const element = document.createElement('h1')
  element.innerHTML = 'Whee - The most definitive shape store in the world'
  element.classList.add('my-sample-component')
  return element
}

document.body.appendChild(mySampleComponent())

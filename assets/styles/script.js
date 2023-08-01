const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const div1 = document.querySelector('.rec1')
const div2 = document.querySelector('.encoded')
const div3 = document.querySelector('.rec2')

btn.addEventListener('click', function () {
  secretMessage()
})

function secretMessage () {
  const str = input.value
  const normalizedInput = str.replace(/[^\w]/g, '').toLowerCase()
  const strLength = normalizedInput.length
  const cols = Math.ceil(Math.sqrt(strLength))

  let encodeMessage = ''
  let encode = ''

  if (strLength < 10) {
    alert('should input at least 10 characters')
  } else {
    for (let i = 0; i < cols; i++) {
      for (let j = i; j < strLength; j += cols) {
        encodeMessage += normalizedInput[j]
        encode += normalizedInput[j]
      }
      encodeMessage += '\n'
    }

    div1.innerHTML = `${normalizedInput}`
    div2.innerHTML = `${encodeMessage} `
    div3.innerHTML = `${encode}`
  }
  console.log(normalizedInput)
}

const data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(data)

// 4.1.
// function task41a(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       console.log(arr[i])
//     }
//   }
// }
// task41a(data)

function task41b(arr) {
  const ulElement = document.querySelector('#task-41')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.1'
  ulElement.prepend(titleElement)

  arr.forEach((item) => {
    
    if (typeof item === 'number') {
      let output = ''
      output = `${item}`

      const liElement = document.createElement('li')
      liElement.textContent = output
  
      ulElement.append(liElement)
    }

  })
}
task41b(data)

// 4.2.
// function task42a(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//       console.log(arr[i])
//     }
//   }
// }
// task42a(data)

function task42b(arr) {

  const ulElement = document.querySelector('#task-42')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.2'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'string') {
      let output = ''
      output = `${item}`

      const liElement = document.createElement('li')
      liElement.textContent = output
  
      ulElement.append(liElement)
    }
  })
}
task42b(data)

// 4.3.
// function task43a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number')
//     console.log(Math.pow(arr[i], 4))
//   }
// }
// task43a(data)

function task43b(arr) {

  const ulElement = document.querySelector('#task-43')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.3'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'number') {
      let output = ''
      output = Math.pow(item, 4)

      const liElement = document.createElement('li')
      liElement.textContent = output
  
      ulElement.append(liElement)
    }
  })
}
task43b(data)

// 4.4.
// function task44a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       console.log(arr[i] + 55)
//     }
//   }
// }
// task44a(data)

function task44b(arr) {

  const ulElement = document.querySelector('#task-44')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.4'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'number') {
      let output = ''
      output = item + 55

      const liElement = document.createElement('li')
      liElement.textContent = output
  
      ulElement.append(liElement)
    }
  })
}
task44b(data)

// 4.5.
// function task45a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       console.log(arr[i] / 2)
//     }
//   }
// }
// task45a(data)

function task45b(arr) {
  const ulElement = document.querySelector('#task-45')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.5'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'number') {
      let output = ''
      output = item / 2

      const liElement = document.createElement('li')
      liElement.textContent = output
  
      ulElement.append(liElement)
    }
  })
}
task45b(data)

// 4.6.
// function task46a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       console.log('Number: ', arr[i])
//     }
//   }
// }
// task46a(data)

function task46b(arr) {
  const ulElement = document.querySelector('#task-46')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.6'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'number') {
      let output = ''
      output = `Number: ${item}`

      const liElement = document.createElement('li')
      liElement.textContent = output
  
      ulElement.append(liElement)
    }
  })
}
task46b(data)

// 4.7.
// function task47a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       console.log('Index: ', i, ',', 'Number: ', arr[i])
//     }
//   }
// }
// task47a(data)

function task47b(arr) {
  const ulElement = document.querySelector('#task-47')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.7'
  ulElement.prepend(titleElement)

  arr.map((item, index) => {
    if (typeof item === 'number') {
      let output = ''
      output = `Index: ${index}, Number: ${item}.`

      const liElement = document.createElement('li')
      liElement.textContent = output
  
      ulElement.append(liElement)
    }
  })
}
task47b(data)

// 4.8.
// function task48a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       console.log(arr[i] * i)
//     }
//   }
// }
// task48a(data)

function task48b(arr) {
  const ulElement = document.querySelector('#task-48')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.8'
  ulElement.prepend(titleElement)

  arr.map((item, index) => {
    if (typeof item === 'number') {
      let output = ''
      output = item * index

      const liElement = document.createElement('li')
      liElement.textContent = output
  
      ulElement.append(liElement)
    }
  })
}
task48b(data)

// 4.9.
// function task49a(arr) {
//   const newArr = []
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       newArr.push(arr[i])
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       console.log('Pirmas skaičius ' + newArr[i])
//     } else {
//       console.log(newArr[i] * newArr[i - 1])
//     }
//   }
// }
// task49a(data)

function task49b(arr) {
  const numbers = arr.filter((item) => typeof item === 'number')
  const ulElement = document.querySelector('#task-49')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.9'
  ulElement.prepend(titleElement)

  numbers.map((item, index) => {

    if (index === 0) {
      let output = ''
      output = `Pirmas skaičius ${item}`
      const liElement = document.createElement('li')
      liElement.textContent = output
      ulElement.append(liElement)

    } else {
      let output = ''
      output = item * numbers[index - 1]
      const liElement = document.createElement('li')
      liElement.textContent = output
      ulElement.append(liElement)
    }
  })
}

task49b(data)

// 4.10.
// function task410a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number' && arr[i] * 5 > 350) {
//       console.log(arr[i] * 5)
//     }
//   }
// }
// task410a(data)

function task410b(arr) {

  const ulElement = document.querySelector('#task-410')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.10'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'number' && item * 5 > 350) {

      let output = ''
      const result = item * 5
      output = `${item} * 5 = ${result}`

      const liElement = document.createElement('li')
      liElement.textContent = output
      ulElement.append(liElement)
    }
  })
}
task410b(data)

// 4.11.
// function task411a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//       console.log(`${arr[i]} has ${arr[i].length} symbols`)
//     }
//   }
// }
// task411a(data)

function task411b(arr) {

  const ulElement = document.querySelector('#task-411')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.11'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'string') {
      let output = ''
      output = `'${item}' has ${item.length} symbols.`

      const liElement = document.createElement('li')
      liElement.textContent = output
      ulElement.append(liElement)
    }
  })
}
task411b(data)

// 4.12.
// function task412a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {

//       const chars = arr[i].split('').join('-')
//       console.log(chars.toUpperCase())
//     }
//   }
// }
// task412a(data)

function task412b(arr) {

  const ulElement = document.querySelector('#task-412')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.12'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'string') {

      const chars = item.split('').join('-').toUpperCase()
      
      let output = ''
      output = chars

      const liElement = document.createElement('li')
      liElement.textContent = output
      ulElement.append(liElement)
    }
  })
}
task412b(data)

// 4.13.
// function task413a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {

//       const chars = arr[i].split('')
//       chars[0] = '_'
//       chars[2] = '_'
//       console.log(chars.join(''))
//     }
//   }
// }
// task413a(data)

function task413b(arr) {

  const ulElement = document.querySelector('#task-413')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.13'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'string') {
            
      let output = ''
      const chars = item.split('')
      chars[0] = '_'
      chars[2] = '_'
      output = chars.join('')

      const liElement = document.createElement('li')
      liElement.textContent = output
      ulElement.append(liElement)
    }
  })
}
task413b(data)

// 4.14.
// function task414a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//       const chars = arr[i].split('').reverse()
//       console.log(chars.join(''))
//     }
//   }
// }
// task414a(data)

function task414b(arr) {

  const ulElement = document.querySelector('#task-414')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.14'
  ulElement.prepend(titleElement)

  arr.map((item) => {
    if (typeof item === 'string') {

      let output = ''
      const chars = item.split('').reverse()

      output = chars.join('')

      const liElement = document.createElement('li')
      liElement.textContent = output
      ulElement.append(liElement)
    }
  })
}
task414b(data)

// 4.15.
// function task415a(arr) {
//   for (i = 0; i < arr.length; i++) {
//     const item = arr[i]

//     if (typeof item === 'string') {
//       if (i === 0) {
//         const nextItem = arr[i + 1]

//         const output = `Word ${item} is the first in the array and next item the array is ${nextItem}.`

//         console.log(output)
//       } else if (i === arr.length - 1) {
//         const previousItem = arr[i - 1]

//         const output = `Word ${item} is the last in the array and previous item the array is ${previousItem}.`

//         console.log(output)
//       } else {
//         const previousItem = arr[i - 1]
//         const nextItem = arr[i + 1]
        
//         const output = `Word ${item} is between ${previousItem} and ${nextItem} in the array`
        
//         console.log(output)
//       }
//     }
//   }
// }
// task415a(data)

function task415b(arr) {

  const ulElement = document.querySelector('#task-415')

  const titleElement = document.createElement('h3')
  titleElement.textContent = 'Užduotis 4.15'
  ulElement.prepend(titleElement)

  arr.map((item, index) => {

    if (typeof item === 'string') {

      let output = ''

      if (index === 0) {
        const nextItem = index + 1

        output = `Word ${item} is the first in the array and next item the array is ${nextItem}.`

      } else if (index === arr.length - 1) {
        const previousItem = index - 1

        output = `Word ${item} is the last in the array and previous item the array is ${previousItem}.`

      } else {
        const previousItem = index - 1
        const nextItem = index + 1
        
        output = `Word ${item} is between ${previousItem} and ${nextItem} in the array`
      }

      const liElement = document.createElement('li')
      liElement.textContent = output
      ulElement.append(liElement)
    }
  })
}
task415b(data)
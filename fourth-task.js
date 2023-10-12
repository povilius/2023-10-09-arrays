const arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(arr)

// 4.1.
function task41a() {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      console.log(arr[i])
    }
  }
}
// task41a()

function task41b() {
  arr.forEach((item) => {
    if (typeof item === 'number') {
      console.log(item)
    }
  })
}
// task41b()

// 4.2.
function task42a() {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      console.log(arr[i])
    }
  }
}
// task42a()

function task42b() {
  arr.map((item) => {
    if (typeof item === 'string') {
      console.log(item)
    }
  })
}
// task42b()

// 4.3.
function task43a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number')
    console.log(Math.pow(arr[i], 4))
  }
}
// task43a()

function task43b() {
  arr.map((item) => {
    if (typeof item === 'number') {
      console.log(Math.pow(item, 4))
    }
  })
}
// task43b()

// 4.4.
function task44a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      console.log(arr[i] + 55)
    }
  }
}
// task44a()

function task44b() {
  arr.map((item) => {
    if (typeof item === 'number') {
      console.log(item + 55)
    }
  })
}
// task44b()

// 4.5.
function task45a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      console.log(arr[i] / 2)
    }
  }
}
// task45a()

function task45b() {
  arr.map((item) => {
    if (typeof item === 'number') {
      console.log(item / 2)
    }
  })
}
// task45b()

// 4.6.
function task46a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      console.log('Number: ', arr[i])
    }
  }
}
// task46a()

function task46b() {
  arr.map((item) => {
    if (typeof item === 'number') {
      console.log('Number: ', item)
    }
  })
}
// task46b()

// 4.7.
function task47a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      console.log('Index: ', i, ',', 'Number: ', arr[i])
    }
  }
}
// task47a()

function task47b() {
  arr.map((item, index) => {
    if (typeof item === 'number') {
      console.log(`Index: ${index}, Number: ${item}`)
    }
  })
}
// task47b()

// 4.8.
function task48a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      console.log(arr[i] * i)
    }
  }
}
// task48a()

function task48b() {
  arr.map((item, index) => {
    if (typeof item === 'number') {
      console.log(item * index)
    }
  })
}
// task48b()

// 4.9.
function task49a() {
  const newArr = []
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      newArr.push(arr[i])
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (i === 0) {
      console.log('Pirmas skaičius ' + newArr[i])
    } else {
      console.log(newArr[i] * newArr[i - 1])
    }
  }
}
// task49a()

function task49b() {
  const numbers = arr.filter((item) => typeof item === 'number')

  numbers.map((item, index) => {
    if (index === 0) {
      console.log('Pirmas skaičius ' + item)
      return item
    } else {
      const product = item * numbers[index - 1]
      console.log(product)
      return product
    }
  })
}

// task49b()

// 4.10.
function task410a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] * 5 > 350) {
      console.log(arr[i] * 5)
    }
  }
}
// task410a()

function task410b() {
  arr.map((item) => {
    if (typeof item === 'number' && item * 5 > 350) {
      console.log(item * 5)
    }
  })
}
// task410b()

// 4.11.
function task411a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      console.log(`${arr[i]} has ${arr[i].length} symbols`)
    }
  }
}
// task411a()

function task411b() {
  arr.map((item) => {
    if (typeof item === 'string') {
      console.log(`${item} has ${item.length} symbols`)
    }
  })
}
// task411b()

// 4.12.
function task412a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {

      const chars = arr[i].split('').join('-')
      console.log(chars.toUpperCase())
    }
  }
}
// task412a()

function task412b() {
  arr.map((item) => {
    if (typeof item === 'string') {
      const chars = item.split('').join('-')
      console.log(chars.toUpperCase())
    }
  })
}
// task412b()

// 4.13.
function task413a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {

      const chars = arr[i].split('')
      chars[0] = '_'
      chars[2] = '_'
      console.log(chars.join(''))
    }
  }
}
// task413a()

function task413b() {
  arr.map((item) => {
    if (typeof item === 'string') {
      const chars = item.split('')
      chars[0] = '_'
      chars[2] = '_'
      console.log(chars.join(''))
    }
  })
}
// task413b()

// 4.14.
function task414a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      const chars = arr[i].split('').reverse()
      console.log(chars.join(''))
    }
  }
}
// task414a()

function task414b() {
  arr.map((item) => {
    if (typeof item === 'string') {
      const chars = item.split('').reverse()
      console.log(chars.join(''))
    }
  })
}
// task414b()

// 4.15.
function task415a() {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      console.log(arr[i - 1], arr[i], arr[i + 1])
    }
  }
}
task415a()
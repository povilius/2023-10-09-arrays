const orgData = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]

// 1.1.
orgData.shift()
// 1.2.
orgData.pop()
// 1.3.
const middleNum = Math.floor(orgData.length / 2)
// console.log(middleNum)
orgData.splice(middleNum, 1)
// 1.4.
orgData.splice(-2, 1)
// 1.5.
orgData.splice(1, 1)
// 1.6.
orgData.splice(7, 2)
// 1.7.
orgData.splice(-4, 3)
// 1.8.
orgData.splice(2, 1, 888)
// 1.9.
orgData.splice(9, 1, 33, 789, 6543)
// 1.10.
orgData.pop()
orgData.push(321, 654, 987)
// 1.11.
orgData.splice(1, 0, 11)
// 1.12.
orgData.splice(13, 0, 1)
// 1.13.
orgData.splice(-1, 0, -1)
// 1.14.
orgData.unshift(1, 2, 3)
// 1.15.
orgData.push(-333, -321, -312)
// 1.16.
orgData.splice(middleNum, 0, 0)
// 1.17.
orgData.shift()
// 1.18.
orgData.pop()
// 1.19.
orgData.unshift('start')
// 1.20.
orgData.push('end')


console.log(orgData)

const data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(data)
// 2.1.
console.log(data[0])
// 2.2.
console.log(data[26])
// 2.3.
console.log(data[1])
// 2.4.
console.log(data[25])
// 2.5.
console.log(data[7])
// 2.6.
console.log(data[18])
// 2.7.
console.log(data[13])
// 2.8.
const firstThree = data.slice(0, 3)
console.log(firstThree)
// 2.9.
const lastThree = data.slice(24)
console.log(lastThree)
// 2.10.
const first10 = data.slice(0, 10)
console.log(first10)
// 2.11.
const last10 = data.slice(20)
console.log(last10)
// 2.12.
const dataNum1 = data.slice(2, 8)
console.log(dataNum1)
// 2.13.
const dataNum2 = data.slice(-23, -18)
console.log(dataNum2)
// 2.14.
const dataNum3 = data.slice(10, 19)
console.log(dataNum3)
// 2.15.
const dataNum4 = data.slice(-19, -10)
console.log(dataNum4)
// 2.16.
const dataNum5 = data.slice(1)
console.log(dataNum5)
// 2.17.
const dataNum7 = data.slice(0, 26)
console.log(dataNum7)
// 2.18.
const dataNum8 = data.slice(4, 26)
console.log(dataNum8)
// 2.19.
const dataNum9 = data.slice(0, 22)
console.log(dataNum9)
// 2.20.
const dataNum10 = data.slice(0, 13)
console.log(dataNum10)
// 2.21.
const dataNum11 = data.slice(14, 27)
console.log(dataNum11)
// 2.22.
const dataNum12 = data.slice(1, 26)
console.log(dataNum12)
// 2.23.
const dataNum13 = data.slice(5, 24)
console.log(dataNum13)
// 2.24.
const dataNum14 = data.slice(1, 19)
console.log(dataNum14)
// 2.25.
const dataNum15 = data.slice(7, 26)
console.log(dataNum15)
// 2.26
const dataNum16 = data.slice(9, 15)
console.log(dataNum16)
// 2.27.
const dataNum17 = data.slice(11, 22)
console.log(dataNum17)
// 2.28.
const dataNum18 = data.slice(8, 20)
console.log(dataNum18)
// 2.29.
const dataNum19 = data.slice(0, 5)
const dataNum20 = data.slice(21, 27)
const dataNum21 = dataNum19.concat(dataNum20)
console.log(dataNum21)
// 2.30.
const dataNum22 = data.slice(2, 5)
const dataNum23 = data.slice(14, 17)
const dataNum24 = dataNum22.concat(dataNum23)
console.log(dataNum23)

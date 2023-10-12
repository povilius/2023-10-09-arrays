const arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(arr)

// 3.1.
const negativeNums = arr.filter(num => num > 0)
console.log(negativeNums)

// 3.2.
const positiveNums = arr.filter(num => num < 0)
console.log(positiveNums)

// 3.3.
const filteredNums1 = arr.filter(num => num % 2 === 0)
console.log(filteredNums1)

// 3.4.
const filteredNums2 = arr.filter(num => num % 3 === 0)
console.log(filteredNums2)

// 3.5.
const filteredNums3 = arr.filter(num => num % 5 === 0)
console.log(filteredNums3)

// 3.6.
const filteredNums4 = arr.filter(num => num % 11 === 0)
console.log(filteredNums4)

// 3.7.
const filteredNums5 = arr.filter(num => num % 31 === 0)
console.log(filteredNums5)

//3.8.
const filteredNums6 = arr.filter(num => num % 2 === 0 && num % 3 === 0)
console.log(filteredNums6)

// 3.9.
const filteredNums7 = arr.filter(num => num % 3 === 0 && num % 7 === 0)
console.log(filteredNums7)

// 3.10.
const filteredNums8 = arr.filter(num => num % 5 === 0 && num % 9 === 0)
console.log(filteredNums8)

// 3.11.
const filteredNums9 = arr.filter(num => num % 5 === 0 && num % 11 === 0)
console.log(filteredNums9)

// 3.12.
const filteredNums10 = arr.filter(num => num % 2 === 0 && num % 8 === 0 && num % 12 === 0)
console.log(filteredNums10)

// 3.13.
const filteredNums11 = arr.filter(num => num % 2 === 0 || num % 3 === 0)
console.log(filteredNums11)

// 3.14.
const filteredNums12 = arr.filter(num => num % 3 === 0 || num % 5 === 0)
console.log(filteredNums12)

// 3.15.
const filteredNums13 = arr.filter(num => num % 5 === 0 || num % 6 === 0)
console.log(filteredNums13)

// 3.16.
const filteredNums14 = arr.filter(num => num % 7 === 0 || num % 8 === 0)
console.log(filteredNums14)

// 3.17.
const filteredNums15 = arr.filter(num => num % 9 === 0 || num % 13 === 0)
console.log(filteredNums15)

// 3.18.
const filteredNums16 = arr.filter(num => num % 2 === 0 || num % 3 === 0 || num % 5 === 0)
console.log(filteredNums16)

// 3.19.
const filteredNums17 = arr.filter(num => num % 5 === 0 || num % 7 === 0 || num % 9 === 0)
console.log(filteredNums17)

// 3.20.
const filteredNums18 = arr.filter(num => num % 7 === 0 || num % 8 === 0 || num % 11 === 0)
console.log(filteredNums18)

// 3.21.
const filteredNums19 = arr.filter(num => num % 9 === 0 || num % 12 === 0 || num % 13 === 0)
console.log(filteredNums19)

// 3.22.
const filteredNums20 = arr.filter(num => num > 100)
console.log(filteredNums20)

// 3.23.
const filteredNums21 = arr.filter(num => num > 555)
console.log(filteredNums21)

// 3.24.
const filteredNums22 = arr.filter(num => num >= 888)
console.log(filteredNums22)

// 3.25.
const filteredNums23 = arr.filter(num => num >= 6789)
console.log(filteredNums23)

// 3.26.
const filteredNums24 = arr.filter(num => num < 50)
console.log(filteredNums24)

// 3.27.
const filteredNums25 = arr.filter(num => num < 1000)
console.log(filteredNums25)

// 3.28.
const filteredNums26 = arr.filter(num => num <= -1)
console.log(filteredNums26)

// 3.29.
const filteredNums27 = arr.filter(num => num <= -5564)
console.log(filteredNums27)

// 3.30.
const filteredNums28 = arr.filter(num => num < 1000 && num > 500)
console.log(filteredNums28)

// 3.31.
const filteredNums29 = arr.filter(num => num < 100 && num > 0)
console.log(filteredNums29)

// 3.32.
const filteredNums30 = arr.filter(num => num < 0 && num > -50)
console.log(filteredNums30)

// 3.33.
const filteredNums31 = arr.filter(num => num <= 0 && num > -100)
console.log(filteredNums31)

// 3.34.
const filteredNums32 = arr.filter(num => num >= 0 && num < 55)
console.log(filteredNums32)

// 3.35.
const filteredNums33 = arr.filter(num => num >= 444 && num <= 654)
console.log(filteredNums33)

// 3.36.
const filteredNums34 = arr.filter(num => num > 0 && num % 2 === 0)
console.log(filteredNums34)

// 3.37.
const filteredNums35 = arr.filter(num => num > 0 && num % 3 === 0)
console.log(filteredNums35)

// 3.38.
const filteredNums36 = arr.filter(num => num < 0 && num % 4 === 0)
console.log(filteredNums36)

// 3.39.
const filteredNums37 = arr.filter(num => num < 0 && num % 111 === 0)
console.log(filteredNums37)

// 3.40.
const filteredNums38 = arr.filter(num => num > 500 && num % 2 === 0)
console.log(filteredNums38)

// 3.41.
const filteredNums39 = arr.filter(num => num > 1000 && num % 3 === 0)
console.log(filteredNums39)

// 3.42.
const filteredNums40 = arr.filter(num => num < 1000 && num % 9 === 0)
console.log(filteredNums40)

// 3.43.
const filteredNums41 = arr.filter(num => num < 500 && num % 2 === 0)
console.log(filteredNums41)

// 3.44.
const filteredNums42 = arr.filter(num => num >= 3 && num % 3 === 0)
console.log(filteredNums42)

// 3.45.
const filteredNums43 = arr.filter(num => num >= 444 && num % 12 === 0)
console.log(filteredNums43)

// 3.46.
const filteredNums44 = arr.filter(num => num <= 155 && num % 55 === 0)
console.log(filteredNums44)

// 3.47.
const filteredNums45 = arr.filter(num => num <= -333 && num % 9 === 0)
console.log(filteredNums45)

// 3.48.
const filteredNums46 = arr.filter(num => num > 100 && num < 500 && num % 5 === 0)
console.log(filteredNums46)

// 3.49.
const filteredNums47 = arr.filter(num => num >= 888 && num < 1000 && num % 2 === 0)
console.log(filteredNums47)

// 3.50.
const filteredNums48 = arr.filter(num => num <= 888 && num >= -333 && num % 3 === 0 && num !== 0)
console.log(filteredNums48)

// 3.51.
const filteredNums49 = arr.filter(num => typeof num === 'number')
console.log(filteredNums49)

// 3.52.
const filteredNums50 = arr.filter(num => typeof num === 'string')
console.log(filteredNums50)

// 3.53.
const filteredNums51 = arr.filter(num => typeof num === 'string' && num.length > 5)
console.log(filteredNums51)

// 3.54.
const filteredNums52 = arr.filter(num => typeof num === 'string' && num.length >= 5)
console.log(filteredNums52)

// 3.55.
const filteredNums53 = arr.filter(num => typeof num === 'string' && num.length < 7)
console.log(filteredNums53)

// 3.56.
const filteredNums54 = arr.filter(num => typeof num === 'string' && num.includes('t'))
console.log(filteredNums54)

// 3.57.
const filteredNums55 = arr.filter(num => typeof num === 'string' && num.includes('y'))
console.log(filteredNums55)

// 3.58.
const filteredNums56 = arr.filter(num => typeof num === 'string' && num.includes('e') || typeof num === 'string' && num.includes('a'))
console.log(filteredNums56)

// 3.59.
const filteredNums57 = arr.filter(num => typeof num === 'string' && num.includes('t') && num.includes('i'))
console.log(filteredNums57)

// 3.60.
const filteredNums58 = arr.filter(num => typeof num === 'string' && num.includes('t') && !num.includes('k'))
console.log(filteredNums58)

// 3.61.
const filteredNums59 = arr.filter(num => typeof num === 'string' && num.includes('a') && !num.includes('s'))
console.log(filteredNums59)

// 3.62.
const filteredNums60 = arr.filter(num => typeof num === 'string' && num.split('t').length > 2)
console.log(filteredNums60)

// 3.63.
const filteredNums61 = arr.filter(num => typeof num === 'string' && num.includes('st'))
console.log(filteredNums61)

// 3.64.
const filteredNums62 = arr.filter(num => typeof num === 'string' && num.includes('nd'))
console.log(filteredNums62)

// 3.65.
const filteredNums63 = arr.filter(num => typeof num === 'string' && !num.includes('s'))
console.log(filteredNums63)

// 3.66.
const filteredNums64 = arr.filter(num => typeof num === 'string' && !num.includes('t'))
console.log(filteredNums64)

// 3.67.
const filteredNums65 = arr.filter(num => typeof num === 'string' && !num.includes('r') && !num.includes('l'))
console.log(filteredNums65)

// 3.68.
const filteredNums66 = arr.filter(num => typeof num === 'string' && num.charAt(0) == !NaN)
console.log(filteredNums66)

// 3.69.
const filteredNums67 = arr.filter(num => typeof num === 'string' && num.charAt(0) === 's')
console.log(filteredNums67)

// 3.70.
const filteredNums68 = arr.filter(num => typeof num === 'string' && num.charAt(0) === 'o')
console.log(filteredNums68)

// 3.71.
const filteredNums69 = arr.filter(num => typeof num === 'string' && num.endsWith('d'))
console.log(filteredNums69)

// 3.72.
const filteredNums70 = arr.filter(num => typeof num === 'string' && num.endsWith('s'))
console.log(filteredNums70)

// 3.73.
const filteredNums71 = arr.filter(num => typeof num === 'string' && num.includes('o') && num.length > 4)
console.log(filteredNums71)

// 3.74.
const filteredNums72 = arr.filter(num => typeof num === 'string' && num.includes('a') && num.length >= 5)
console.log(filteredNums72)

// 3.75.
const filteredNums73 = arr.filter(num => typeof num === 'string' && num.length % 2 === 0)
console.log(filteredNums73)

// 3.76.
const filteredNums74 = arr.filter(num => typeof num === 'string' && num.includes('s') && num.length % 2 !== 0)
console.log(filteredNums74)

// 3.77.
const filteredNums75 = arr.filter(num => typeof num === 'string' && num.charAt(2) === 'a')
console.log(filteredNums75)

// 3.78.
const filteredNums76 = arr.filter(num => typeof num === 'string' && num.charAt(3) === '')
console.log(filteredNums76)

// 3.79.
const filteredNums77 = arr.filter(num => typeof num === 'string' && num.charAt(4) !== 't' && num.length > 4)
console.log(filteredNums77)

// 3.80.
const filteredNums78 = arr.filter(num => typeof num === 'string' && num.charAt(0) !== 'e' && num.charAt(0) != !NaN && num.length < 6)
console.log(filteredNums78)
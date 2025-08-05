//variable
//string, number, bool, object
let firstname = 'apin' 
let age = 20 
let isThai = true

const idcard ='1234'

console.log('My name is',firstname, 'and my age is', age)


//operator +, -, *, /, %
/*let num1 = 'test'
let num2 = 'num'

let num3 = num1 + num2 //+ ใช้ต่อ string 
console.log('new number is', num3)*/


//condition &&, ||, ! ใช้เหมือน c++
/*let score = prompt('input your score') //input
console.log('your score ', score)

if (score >= 80) {
    console.log('GRAD : A')
} else if (score >= 50) {
    console.log('GRAD : D')
} else {
    console.log('GRAD : F')
}*/


//loop
/*console.log('------ while  loop -----')
let count1 = 0
while (count1 < 10) {
    console.log(count1)
    count1 = count1 + 1 
}

console.log('------ for loop -----')
for (let count2= 0; count2 < 10; count2++) {
    console.log(count2)
    
}*/


//array
/*let ages = [22,20,24]

console.log('length of list:' ,ages.length)
for (let index = 0; index < ages.length; index++) {
    console.log(ages[index])
    
}
//ต่อ array .push
ages.push(28)
console.log(ages) //ใช้แบบนี้ในการเข้าถึงง่ายกว่า ถ้าจะแค่ output

ages.pop()
console.log(ages)

//.includes ไว้เช็คว่ามีสิ่งนั้นอยู่ในลิสหรือป่าว
if (ages.includes(22)) {
    console.log('you have 22 in list')
}

//เรียงจากน้อยไปมาก
console.log('----- sort -----')
console.log(ages)
ages.sort()
console.log(ages)
*/


//object
/* obj ธรรมดา
let std = {
    age: 30,
    name: 'mike',
    grade: 'A'
}

console.log(std.age) //ใช้ . เหมือน c++
console.log(std.name)
console.log(std.grade)*/

//obj array
/*let std = [{
    age: 30,
    name: 'mike',
    grade: 'A'
},{
    age: 20,
    name: 'mm',
    grade: 'B'
}]

std.push({ //push, pop ได้ปกติ
    age:25,
    name: 'AA',
    grade: 'C'
})

for (let index = 0; index < std.length; index++) {
    console.log('\nstd no.', (index+1))
    console.log('name :', std[index].name)
    console.log('age  :', std[index].age)
    console.log('grade:', std[index].grade)
    
}*/


//function
/*function calculation(score) {
    
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return grade
}

let score1 = 80
let score2 = 50

let grade1 = calculation(score1)
let grade2 = calculation(score2)

console.log('grade:', grade1 , grade2)*/


//arrow function
/*let calculation = (score) => {
    
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return grade
}*/


//paramiter function
/*let score = [10,20,30,40]

for (let index = 0; index < score.length; index++) {
    console.log('score:', score[index])
    
}

//map ใช้ตอนอยากทำอะไรสักอย่างกับ array
score = score.map((s) => {
    return s * 2
})

//paramiter function
score.forEach((s) => {
    console.log('new score', s)
})*/

//filter เข้าถึง + condition ในตัว
/*let score = [10,20,30,40]

for (let index = 0; index < score.length; index++) {
    console.log('score:', score[index])
    
}

//filter เข้าถึง + condition ในตัว
let newScore = score.filter((s) =>{
    return s >= 30    //อันนีี้คือย่อของแบบล่าง
    /*if (s >= 30) {
        return true
    } else {
        return false
    }
})

newScore.forEach((i) => {
    console.log('new score:', i)
})*/

//obj (ต่อ)
let stds = [
    {
        name: 'mike',
        score: 80,
        grade: 'A'
    },
    {
        name: 'AA',
        score: 50,
        grade: 'D' 
    }
]

let std = stds.find((s) => {
    if (s.name == 'AA') {
        return true
    }
})
console.log('std', std)

//map
/*let doubleScore = stds.map((s) => {
    s.score =  s.score * 2
    return s
})
console.log('double Score:', doubleScore)*/

//fillter
let hightScore = stds.filter((s) => {
    if(s.score >= 60){
        return true
    }
})
console.log('hight Score:', hightScore)




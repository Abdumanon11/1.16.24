/* 

let courses = [

    {

        title: 'SMM',

        howLong: 3

    },

    {

        title: 'Dev',

        howLong: 6

    },

    {

        title: 'Graph',

        howLong: 4

    },

]

let earnings = {

    total: 0,

    max: {},

    min: {}

}

let m = 0

let w = 0

let average_age = 0

let smm = 0

let dev = 0

let graph = 0            

let students = [

    {

        sex: 'm',

        age: 14,

        payment: 1220000,

        course: {

            title: 'SMM',

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 1883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 16,

        payment: 2190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 19,

        payment: 718000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 15,

        payment: 2195000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 460000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 14,

        payment: 560000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 22,

        payment: 160000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 26,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 26,

        payment: 750000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 23,

        payment: 212000,

        course: {

            title: 'Graph',

        }

    },

    {

        sex: 'w',

        age: 24,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 27,

        payment: 190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 19,

        payment: 210000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 770000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 18,

        payment: 1200000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 51,

        payment: 880000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'm',

        age: 51,

        payment: 2430000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 33,

        payment: 1277000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 2750000,

        course: {

            title: 'Dev'
            
        }

    },

]

// В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*

//  1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*

//  2. Сохранить количество девочек и мальчиков внутри переменных m и w*

//  3. Сохранить заработок учебного центра в earning.total*

//  4. Узнать кто больше всех платит за обучение в earning.max*

//  5. Узнать кто меньше всех платит за обучение в earning.min*

//  6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*

//  7. Посчитать средний возраст студентов в average_age*

const setup = () => {
    
    //1
        let total_ = 0
    
        for (let item of students) {
    
            for (let course of courses) {
                if (course.title === item.course.title) {
                    item.course.howLong = course.howLong;
                    break
                }
            }
    
    


//2


            if (item.sex === `w`) {


                w++
            } else {


                m++
    
            }
    

    //3
            total_+= item.age;
    
    

//4

            if (!earnings.min.payment || item.payment > earnings.max.payment) {
                earnings.max = item;
            
            }
            if (!earnings.min.payment || item.payment < earnings.min.payment) {
                earnings.min = item;
            }
    //5
    
            if (item.course.title === `SMM`) {
                smm++
            } else if (item.course.title === `Dev`) {
                dev++
            } else {
                graph++
            }
    
    
            earnings.total += item.payment
        }
        //6
    
        let aveage = total_ / students.length
    
    
    
        console.log( w)
        console.log( m)
        console.log( earnings.total)
        console.log( earnings.max)
        console.log( earnings.min)
        console.log( smm)
        console.log( dev)
        console.log( graph) 
        console.log( aveage)
    }
    
     */
    
/* setup()
 */

// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*
/* 
let successful = []

let unSuccessful = []

let taxes = 0

let taxesMax = {}

let taxesMin = {}

// Реальные данные 2021*

let bank = [

{

name: 'Apple',

budget: 1000000,

tax: 28,

expensesPerYear: [

{ title: 'Salaries', total: 125000 },

{ title: 'Utilites', total: 18000, },

{ title: 'Rent', total: 258000 }

]

},

{

name: 'Microsoft',

budget: 988000,

tax: 21,

expensesPerYear: [

{

title: 'Salaries',

total: 148000

},

{

title: 'Utilites',

total: 124000,

},

{

title: 'Rent',

total: 314000

}

]

},

{

name: 'HP',

budget: 609000,

tax: 14,

expensesPerYear: [

{

title: 'Salaries',

total: 414000

},

{

title: 'Utilites',

total: 19000,

},

{

title: 'Rent',

total: 114400

}

]

},

{

name: 'Xiomi',

budget: 889500,

tax: 17,

expensesPerYear: [

{

title: 'Salaries',

total: 318000

},

{

title: 'Utilites',

total: 14000,

},

{

title: 'Rent',

total: 169000

}

]

},

{

name: 'Samsung',

budget: 889500,

tax: 12,

expensesPerYear: [

{

title: 'Salaries',

total: 650400

},

{

title: 'Utilites',

total: 29000,

},

{

title: 'Rent',

total: 212000

}

]

},

]

// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
//1
    bank.forEach(bank_2 => {
        bank_2.expensesPerMonth = bank_2.expensesPerYear.map(expense => {
          return {
      title: expense.title,
      total: expense.total / 12,
          };
        });
//2
        let  monthlyBudget = bank_2.budget / 12;
        let  totalExpensesPerMonth = bank_2.expensesPerYear.reduce((acc, expense) => acc + expense.total / 12, 0);
        let  procent = (totalExpensesPerMonth / monthlyBudget) * 100;
    
    bank_2.procent = procent;
    //3
    let netBudget = bank_2.budget * (1 - bank_2.tax / 100);
  taxes += bank_2.budget - netBudget;

 
  if (netBudget > 0) {
    successful.push(bank_2);
  } else {
    unSuccessful.push(bank_2);
  }

//4
        taxes += bank_2.tax;

        
        
//5
let totalTax = (bank_2.budget * bank_2.tax) / 100;

  
  if (totalTax > taxesMax.taxAmount) {
    taxesMax.bank_2 = bank_2.name
    taxesMax.taxAmount = totalTax
  }

  
  if (totalTax < taxesMin.taxAmount) {
    taxesMin.bank_2 =bank_2.name;
    taxesMin.taxAmount = totalTax;
  }



//6
        let netIncome = bank_2.budget - bank_2.tax;
        let totalExpenses = bank_2.expensesPerYear.reduce((acc, expense) => acc + expense.total, 0);
        bank_2.totalMoney = netIncome - totalExpenses;

    });
    console.table(bank ) 
    console.log(taxes);
    console.log("Company with the maximum taxes:", taxesMax.bank_2,  );
    console.log("Company with the minimum taxes:", taxesMin.bank_2,  );
    console.log(successful);
    console.log(unSuccessful);

    }    
    
setup()


 */


let hotel = [
    [
      {
        room: 1,
        price: 300,
        brand: "Luxe",
        children: false,
      },
      {
        room: 2,
        price: 4000,
        brand: "Deluxe",
        children: true,
      },
      {
        room: 3,
        price: 1000,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 4,
        price: 900,
        brand: "Luxe",
        children: true,
      },
    ],
    [
      {
        room: 5,
        price: 700,
        brand: "Luxe",
        children: true,
      },
      {
        room: 6,
        price: 79000,
        brand: "President",
        children: true,
      },
      {
        room: 7,
        price: 600,
        brand: "Luxe",
        children: false,
      },
      {
        room: 8,
        price: 950,
        brand: "Luxe",
        children: true,
      },
    ],
    [
      {
        room: 9,
        price: 1900,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 10,
        price: 5000,
        brand: "Deluxe",
        children: true,
      },
      {
        room: 11,
        price: 1000,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 12,
        price: 250,
        brand: "Luxe",
        children: false,
      },
    ],
    [
      {
        room: 13,
        price: 10000,
        brand: "President",
        children: true,
      },
      {
        room: 11,
        price: 8000,
        brand: "President",
        children: false,
      },
    ],
  ];
  
  
let rooms = {
    all_rooms: [],
    total_rooms: 0,
  };
  
  let brands = {
    president: [],
    deluxe: [],
    luxe: [],
  };
  
  let room_level = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
  };
  //1 отфильтровать по категориям
  //2 добавить ключ eting с буленовым значением в каждый номер
  //3 посчитать и красиво раставить все команты переменную rooms
  //4 найти самую дорогую комнату
  //5 посчитать сколько стоит каждый этаж
  //6 посчитать сколько стоят все комнаты вместе взятые
  //7 найти все комнаты в которых живут дети



  
  
 
// 1. 
hotel.flat().forEach(room => brands[room.brand.toLowerCase()].push(room));

// 2.
hotel.flat().forEach(room => room.eting = Math.random() < 0.5);

// 3. 
hotel.flat().forEach(room => {
  rooms.all_rooms.push(room);
  rooms.total_rooms++;
  room_level[`perviy`] += room.room <= 4 ? 1 : 0;
  room_level[`vtoroy`] += room.room >= 5 && room.room <= 8 ? 1 : 0;
  room_level[`tretiy`] += room.room >= 9 && room.room <= 12 ? 1 : 0;
  room_level[`chetvertiy`] += room.room >= 13 ? 1 : 0;
});

// 4. 
let mostExpensiveRoom = rooms.all_rooms.reduce((maxRoom, room) => (room.price > maxRoom.price ? room : maxRoom), rooms.all_rooms[0]);

// 5. 
let floorCost = { perviy: 0, vtoroy: 0, tretiy: 0, chetvertiy: 0 };

hotel.flat().forEach(room => {
  let floorKey = Math.ceil(room.room / 4);
  floorCost[`perviy`] += room.price;
});

// 6. 
let totalCost = rooms.all_rooms.reduce((sum, room) => sum + room.price, 0);

// 7
let roomsWithChildren = rooms.all_rooms.filter(room => room.children);

console.log("Отфильтрованные номера по бренду", brands);
console.log("Номера с ключом «eting»", rooms.all_rooms);
console.log("Самый дорогой номер", mostExpensiveRoom);
console.log("Стоимость каждого этажа", floorCost);
console.log("Общая стоимость всех номеро", totalCost);
console.log("Номера с детьми", roomsWithChildren);























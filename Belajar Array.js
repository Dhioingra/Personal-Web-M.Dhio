let name1 = "deby"
let name2 = "andrey"
let name3 = "titin"
let name4 = "clarence"


//-------- Array ---------//
// array terdiri dari index mulai dari 0.

let names = ["deby","andrey","titin","clarence"]

// console.log (names)
// console.log (names[0])
// console.log (names[1])
// console.log (names[2])
// console.log (names[3])

//------- Object ----------//

// object terdiri dari "key : value" atau "properti : value"

let people1 = {
    name : "Dimas",
    email : "dimas@gmail.com",
    address : "Bekasi",
    height : 170,
}

let people2 = {
    name : "Dhio",
    email : "dhio@gmail.com",
    address : "Makassar",
    height : 168,
}

// console.log (people1.address)
// console.log (people2['address'])

// -------- Array of Object -------- //
let allDataPeople = [people1,
                    people2,
                    {
                        nama : "deby",
                        email : "deby@gamil.com",
                        address : "Tangerang",
                        height : 165
                    },{
                        nama : "Clarence",
                        email : "clarence@gmail.com",
                        address : "Bogor",
                        height : 160,
                    }
]

console.log (allDataPeople.people1['email'])
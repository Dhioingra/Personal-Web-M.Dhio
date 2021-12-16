let noAngkot = 1
let jumlahAngkot = 10
let angkotBeroperasi = 9

// while (noAngkot <= angkotBeroperasi) {
//     console.log ("Angkot no." +noAngkot+" beroperasi dengan baik")
//     noAngkot += 1;
// }
// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++){
//     console.log (`angkot no. ${noAngkot} sedang tidak beroperasi`)
// }

// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
//     if(noAngkot <= angkotBeroperasi) {
//         console.log (`Angkot no. ${noAngkot} beroperasi dengan baik.`)
//     }else{
//         console.log (`Angkot no. ${noAngkot} sedang tidak beroperasi`)
//     }
// }

let angka = prompt ("masukkan Angka!")

if(angka % 2 === 0 && angka != null){
    alert (`${angka} adalah bilangan genap!`)
}else if ( angka %2 === 1){
    alert (`${angka} adalah bilangan ganjil!`)
}else if (angka === null){
    alert ("Terima kasih!")
}
else {
    alert ("Anda tidak memasukkan angka")
}
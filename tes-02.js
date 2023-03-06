/*
Sumbul ingin memesan sebuah sepatu. 
Akan tetapi dia ingin membeli sepatu ketika cuaca sedang baik. 
Jadi kalau hujan dia akan beli dari online. kemudian, dia ingin sepatu warnah hitam, akan tetapi di toko hanya ada warna putih. 
jadi dia akan membeli juga kaus kaki warna putih
*/
let cuaca = 'cerah';
let adaSepatuHitam = false;

if (cuaca == 'hujan') {
    console.log('ke toko sepatu');
    console.log('beli sepatu putih');
    console.log('tidak ada sepatu hitam');
} else {
    console.log('pesan shope');
    if (!adaSepatuHitam) {
        console.log('tidak ada sepatu hitam');
    } else {
        console.log('ada sepatu hitam');
        console.log('beli kaus kaki putih');
    }
    console.log('checkout sepatu');
}

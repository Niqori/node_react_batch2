// program untuk menghitung mundur hingga angka 1
function countDown(number) {
    // menampilkan number
    console.log(number);

    // mengurangi nilai number
    var newNumber = number - 1;

    // kondisi jika nomor masih di atas 0
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);

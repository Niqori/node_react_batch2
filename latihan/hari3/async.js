console.log("")
console.log("CALLBACK")

function periksadokter(nomorAntri,callback){
    if (nomorAntri >5) {
        callback(false)
    }
    else{
        callback(true)  
    }
}

periksadokter(6, function(check) {
    if(check){
        console.log("Giliran mu")
    }
    else{
        console.log("Keluar sek")
    }
})
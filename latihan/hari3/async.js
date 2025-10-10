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
console.log("")
console.log("Async/Await")
function doAsync(){
    return new Promise (function (resolve,reject){
        var check = true
        if (check){
            resolve("berhasil")
        }
        else{
            reject("gagal")
        }
    })
}

async function hello() {
    var result = await doAsync()
    console.log(result)
}

hello()
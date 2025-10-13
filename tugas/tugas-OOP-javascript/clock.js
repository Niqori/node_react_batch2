class Clock {
    // Properti/state untuk menyimpan template dan timer.
    // Properti timer akan digunakan oleh start() dan stop().
    constructor({ template }) {
        this.template = template;
        this.timer = null; // Inisialisasi timer sebagai null
    }

    // Method untuk menampilkan waktu saat ini
    _render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    // Method untuk memulai clock
    start() {
        // Panggil render() segera
        this._render();
        
        // Simpan interval ID di properti this.timer
        // Perhatikan penggunaan .bind(this) agar this di dalam _render() mengacu pada objek Clock
        this.timer = setInterval(this._render.bind(this), 1000);
    }

    // Method untuk menghentikan clock
    stop() {
        clearInterval(this.timer);
        console.log("Clock dihentikan.");
    }
}

// --- Penggunaan ---

var clock = new Clock({ template: 'h:m:s' });

console.log("Clock dimulai. Tekan Ctrl + C untuk menghentikan...");
clock.start();

// Anda dapat menjalankan baris berikut setelah beberapa saat untuk menguji stop()
// setTimeout(() => {
//     clock.stop();
// }, 5000);
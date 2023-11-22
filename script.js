function Angkot(sopir, Trayek, Penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.Penumpang = Penumpang;
    this.kas = kas;

    this.penumpangnaik = function(namapenumpang){
        this.Penumpang.push(namapenumpang);
        return this.Penumpang;
    }
}

var angkot1 = new Angkot ('sandhika', ['cicaheym', 'cibiru'], [], 0);
var angkot2 = new Angkot('tom cruise', ['antapani','ciroyom,'], [], 0);

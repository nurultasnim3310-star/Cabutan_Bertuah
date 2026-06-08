$(document).ready(function(){

    var peserta = [];

    // Simpan nama peserta
    $("#tambah").click(function(){

        var nama = $("#nama").val();

        if(nama != ""){
            peserta.push(nama);

            $("#senarai").append("<li>" + nama + "</li>");

            $("#nama").val("");
        }
    });

    
    $("#pemenang").click(function(){

        if(peserta.length == 0){
            $("#winner").text("Tiada peserta!");
            return;
        }

        var random = Math.floor(Math.random() * peserta.length);

        $("#winner").text(
            "🎉 Pemenang: " + peserta[random]
        );
    });

});
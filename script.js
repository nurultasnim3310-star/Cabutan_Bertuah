$(document).ready(function(){

    var peserta = [
        "Tasnim",
        "Natasha",
        "Ain",
        "Suri",
        "Nadiah",
        "Qyra",
        "Alya"
    ];


    $("#draw").click(function(){

        var random = Math.floor(Math.random() * peserta.length);

        $("#winner").text("🎉 Pemenang: " + peserta[random]);
    });

});
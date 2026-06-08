$(document).ready(function(){

    var peserta = [
        "Tasnim",
        "Natasha",
        "Haikal",
        "Adib",
        "Qyra",
        "Farhan",
        "Alya",
        "Nadiah",
        "Suri",
        "Ain"
    ];

    $("#draw").click(function(){

        var random = Math.floor(Math.random() * peserta.length);

        $("#winner").text("🎉 Pemenang: " + peserta[random]);

    });

});
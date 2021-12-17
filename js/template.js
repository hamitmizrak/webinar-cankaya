// 18.5 - 24.9 Normal Kilolu
// 25-29.9 Fazla Kilolu
// 30-40 Obez
// 40 ve üstü Aşırı Obez

$(function () {
  $("#vki_hesapla").on("click", function () {
    let kilo = Number($("#kilo").val());
    let boy = Number($("#boy").val()) / 100;

    //Vücut Kitle İndeksi (VKİ) = Vücut Ağırlığı (kg.) / Boy uzunluğunun karesi (m2.)
    let vki = kilo / Math.pow(boy, 2);

    let yuvarlama = Math.round(vki);
    //sonuc:
    $("#sonuc").html(yuvarlama);

    if (yuvarlama < 18) {
      $("#sonuc2").html("<i><b>Düşük kilolu</b></i>");
    } else if (18 <= yuvarlama && yuvarlama < 24) {
      $("#sonuc2").html("<i><b>Normal kilolu</b></i>");
    } else if (24 <= yuvarlama && yuvarlama < 29) {
      $("#sonuc2").html("<i><b>orta kilolu</b></i>");
    } else if (30 <= yuvarlama && yuvarlama < 40) {
      $("#sonuc2").html("<i><b>obez kilolu</b></i>");
    } else if (yuvarlama > 40) {
      $("#sonuc2").html("<i><b>obez++ kilolu</b></i>");
    } else {
      alert("Dikkattttt");
    }
  });
});

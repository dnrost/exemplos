function salva() {
    alert("Animal Salvo");
    alert("Muitos cachorros")
}

navigator.geolocation.getCurrentPosition(showpos);

    function showpos(position) {
        lat = position.coords.latitude;
        lat = position.coords.longitude;
        alert("Sua posição: " + lat + "," + lon);
    }
$("document").ready(function () {
    var map = L.map('map', {
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: 'topleft'
        }
    }).setView([40.6443, -8.6455], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var composedUri = "http://192.168.160.58/Olympics/api/Games?page=1&pagesize=100";
    ajaxHelper(composedUri, 'GET')
        .done(function (data) {
            console.log(data);

            $.each(data.Records, function (index, record) {
                L.marker([record.Lat, record.Lon]).addTo(map)
                    .bindPopup(record.Name + '<br>' + record.CityName + " (" + record.CountryName + ")<br><a class=\"text-dark text-decoration-none\" href =\"./GameDetails?id=" + record.Id + "\"><span class=\"text-danger\">&rarr;</span> Ver Jogos</a>");
            });

            // Add two additional points in Aveiro
            L.marker([40.6401, -8.6532]).addTo(map)
                .bindPopup('Additional Point 1 in Aveiro');

            L.marker([40.6421, -8.6365]).addTo(map)
                .bindPopup('Additional Point 2 in Aveiro');
        });
});
function ajaxHelper(uri, method, data) {
    return $.ajax({
        type: method,
        url: uri,
        dataType: 'json',
        contentType: 'application/json',
        data: data ? JSON.stringify(data) : null,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("AJAX Call[" + uri + "] Fail...");
        }
    });
}


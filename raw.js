let map;
let directionsService;
let directionsRenderer;
let geocoder;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'),
        {
            center: { lat: 3.433575, lng: -76.510635 },
            zoom: 15
        });
    //var marker0 = new google.maps.Marker({
    //    position: {lat:4.67909, lng: -74.07723},
    //    map: map,
    //    title: 'Esto es un marcador'
    //});

    let mCoordinates = [
        { lat: 3.340000, lng: -76.575000 },
        { lat: 3.340000, lng: -76.460000 },
        { lat: 3.500000, lng: -76.460000 },
        { lat: 3.500000, lng: -76.575000 }
    ];
    let ejeX = [];
    for (contadorX = 0; contadorX < 115; contadorX++) {
        ejeX.push((-76.57500 + (contadorX / 1000)));

    }
    let ejeY = [];
    for (contadorY = 0; contadorY < 160; contadorY++) {
        ejeY.push((3.500000 - (contadorY / 1000)));
    }
    for (lineasVerticales = 0; lineasVerticales < ejeX.length; lineasVerticales++) {
        let coordinatesTemp1 =
            [
                { lat: 3.340000, lng: ejeX[lineasVerticales] },
                { lat: 3.500000, lng: ejeX[lineasVerticales] }
            ];
        if (lineasVerticales % 10 == 0) {
            let tLineaVertical = new google.maps.Polygon({
                paths: coordinatesTemp1,
                strokeColor: '#000000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#000000',
                fillOpacity: 0
            });
            tLineaVertical.setMap(map);
        }
        else if (lineasVerticales % 5 == 0) {
            let tLineaVertical = new google.maps.Polygon({
                paths: coordinatesTemp1,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0
            });
            tLineaVertical.setMap(map);
        }
        else {
            let tLineaVertical = new google.maps.Polygon({
                paths: coordinatesTemp1,
                strokeColor: '#004DFF',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#004DFF',
                fillOpacity: 0
            });
            tLineaVertical.setMap(map);
        }
    }

    for (lineasHorizontales = 0; lineasHorizontales < ejeY.length; lineasHorizontales++) {
        let coordinatesTemp2 =
            [
                { lat: ejeY[lineasHorizontales], lng: -76.575000 },
                { lat: ejeY[lineasHorizontales], lng: -76.460000 }
            ];

        if (lineasHorizontales % 10 == 0) {
            let tLineaVertical = new google.maps.Polygon({
                paths: coordinatesTemp2,
                strokeColor: '#000000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#000000',
                fillOpacity: 0
            });
            tLineaVertical.setMap(map);
        } else if (lineasHorizontales % 5 == 0) {
            let tLineaVertical = new google.maps.Polygon({
                paths: coordinatesTemp2,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0
            });
            tLineaVertical.setMap(map);
        }
        else {
            let tLineaVertical = new google.maps.Polygon({
                paths: coordinatesTemp2,
                strokeColor: '#004DFF',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#004DFF',
                fillOpacity: 0
            });
            tLineaVertical.setMap(map);

        }

    }


    //let mPath = new google.maps.Polyline({
    //    path: mCoordinates,
    //    geodesic: true,
    //    strokeColor: '#FF0000',
    //    storkeOpacity: 1.0,
    //    strokeWeight: 2
    //});
    //mPath.setMap (map);
    let triangle = new google.maps.Polygon({
        paths: mCoordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0
    });
    triangle.setMap(map);
    directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });
    //directionsRenderer.setMap(map);
    // directionsService = new google.maps.DirectionsService();
    // let request = {
    //     origin: mCoordinates[0],
    //     language: 'de',
    //     provideRouteAlternatives: true,
    //     avoidHighways: false,
    //     //travelMode: 'WALKING',
    //     destination: mCoordinates[2],
    //     travelMode: 'DRIVING',
    //travelMode: 'TRANSIT',
    //transitOptions: {
    //    departureTime: new Date(1337675679473),
    //    modes: ['BUS'],
    //    routingPreference: 'FEWER_TRANSFERS'
    //  },
    //     waypoints: [{location:mCoordinates[1],stopover: true}]

    // };
    // directionsService.route(request, function (result,status)
    // {
    //     console.log(result);
    //     if(status == 'OK')
    //     {
    //         directionsRenderer.setDirections(result);
    //     }
    // });

    geocoder = new google.maps.Geocoder();
    var address = "Universidad de los andes, Bogotá, Colombia";
    geocoder.geocode({ 'address': address }, function (results, status) {
        console.log(results);
        if (status == 'OK') {
            //    map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: address
            });
            mCoordinates = [
                { lat: 4.67909, lng: -74.07723 },
                { lat: 4.66421, lng: -74.07861 },
                { lat: 4.68251, lng: -74.11792 },
                results[0].geometry.location
            ];
        }
        else {
            alert('Gecode was not successful for the following reason: ' + status);
        }
    });

    let entrada = {

        barrios: [

            { nombre: "20 de Julio", lat: 3.434934, lng: -76.512716, homicidios: 0 },

            { nombre: "3 de Julio", lat: 3.433044, lng: -76.539511, homicidios: 1 },

            { nombre: "Acueducto san antonio", lat: 3.445002, lng: -76.543398, homicidios: 0 },

            { nombre: "Agua Blanca", lat: 3.432728, lng: -76.517941, homicidios: 3 },

            { nombre: "Aguacatal", lat: 3.458548, lng: -76.557337, homicidios: 3 },

            { nombre: "Alameda", lat: 3.432790, lng: -76.534586, homicidios: 4 },

            { nombre: "Alferez Real", lat: 3.390515, lng: -76.548486, homicidios: 1 },

            { nombre: "Alfonso Barberena A.", lat: 3.435550, lng: -76.507797, homicidios: 0 },

            { nombre: "Alfonso Bonilla Aragón", lat: 3.419204, lng: -76.482999, homicidios: 17 },

            { nombre: "Alfonso Lopez I", lat: 3.464425, lng: -76.479933, homicidios: 9 },

            { nombre: "Alfonso Lopez II", lat: 3.458982, lng: -76.480952, homicidios: 1 },

            { nombre: "Alfonso Lopez III", lat: 3.454725, lng: -76.481947, homicidios: 2 },

            { nombre: "Alirio Mora Beltran", lat: 3.438105, lng: -76.478779, homicidios: 9 },

            { nombre: "Alto Napoles", lat: 3.384598, lng: -76.555225, homicidios: 3 },

            { nombre: "Altos de Menga", lat: 3.490862, lng: -76.533374, homicidios: 3 },

            { nombre: "Antonio Nariño", lat: 3.414453, lng: -76.506004, homicidios: 8 },

            { nombre: "Aranjuez", lat: 3.435995, lng: -76.523061, homicidios: 0 },

            { nombre: "Atanasio Girardot", lat: 3.444402, lng: -76.508070, homicidios: 2 },

            { nombre: "Belalcazar", lat: 3.441676, lng: -76.521170, homicidios: 11 },

            { nombre: "Belen", lat: 3.426538, lng: -76.553419, homicidios: 1 },

            { nombre: "Belisario Caicedo", lat: 3.413734, lng: -76.556822, homicidios: 3 },

            { nombre: "Bellavista", lat: 3.444530, lng: -76.552477, homicidios: 5 },

            { nombre: "Benjamin Herrera", lat: 3.447576, lng: -76.516356, homicidios: 2 },

            { nombre: "Bolivariano", lat: 3.467895, lng: -76.514140, homicidios: 1 },

            { nombre: "Bosques del Limonar", lat: 3.400258, lng: -76.534641, homicidios: 1 },

            { nombre: "Bretana", lat: 3.439971, lng: -76.531937, homicidios: 5 },

            { nombre: "Brisas de los Alamos", lat: 3.492436, lng: -76.504963, homicidios: 6 },

            { nombre: "Brisas de Mayo", lat: 3.416825, lng: -76.562125, homicidios: 18 },

            { nombre: "Brisas del Limonar", lat: 3.401428, lng: -76.522114, homicidios: 1 },

            { nombre: "Buenos Aires", lat: 3.392834, lng: -76.549140, homicidios: 1 },

            { nombre: "Caldas", lat: 3.395029, lng: -76.549215, homicidios: 1 },

            { nombre: "Calimio Desepaz", lat: 3.414629, lng: -76.468118, homicidios: 7 },

            { nombre: "Calypso", lat: 3.425338, lng: -76.499098, homicidios: 4 },

            { nombre: "Camino Real J Borrero", lat: 3.408104, lng: -76.544084, homicidios: 2 },

            { nombre: "Caney", lat: 3.384116, lng: -76.518128, homicidios: 5 },

            { nombre: "Cañaverales Los Samanes", lat: 3.402307, lng: -76.525274, homicidios: 1 },

            { nombre: "Chapinero", lat: 3.444542, lng: -76.501652, homicidios: 1 },

            { nombre: "Charco Azul", lat: 3.441627, lng: -76.485867, homicidios: 10 },

            { nombre: "Chiminangos I", lat: 3.476888, lng: -76.490394, homicidios: 3 },

            { nombre: "Ciudad 2000", lat: 3.393341, lng: -76.518807, homicidios: 3 },

            { nombre: "Ciudad Capri", lat: 3.389573, lng: -76.541732, homicidios: 1 },

            { nombre: "Ciudad Cordoba", lat: 3.403510, lng: -76.505819, homicidios: 18 },

            { nombre: "Ciudad De Los Alamos", lat: 3.486253, lng: -76.508900, homicidios: 5 },

            { nombre: "Ciudad Talanga", lat: 3.433492, lng: -76.469666, homicidios: 6 },

            { nombre: "Ciudad Comfandi", lat: 3.384898, lng: -76.522200, homicidios: 3 },

            { nombre: "Ciudadela Del Rio", lat: 3.424695, lng: -76.465102, homicidios: 1 },

            { nombre: "Ciudadela Foralia", lat: 3.495480, lng: -76.493679, homicidios: 17 },

            { nombre: "Compartir", lat: 3.431436, lng: -76.465539, homicidios: 5 },

            { nombre: "Cristobal Colon", lat: 3.420781, lng: -76.524390, homicidios: 2 },

            { nombre: "Departamental", lat: 3.415314, lng: -76.535895, homicidios: 1 },

            { nombre: "Desepaz Invicali", lat: 3.425218, lng: -76.463453, homicidios: 10 },

            { nombre: "El Diamante", lat: 3.421356, lng: -76.502440, homicidios: 5 },

            { nombre: "Eduardo Santos", lat: 3.429287, lng: -76.505049, homicidios: 6 },

            { nombre: "El Bosque", lat: 3.485343, lng: -76.529690, homicidios: 1 },

            { nombre: "El Calvario", lat: 3.450062, lng: -76.530165, homicidios: 10 },

            { nombre: "El Cedro", lat: 3.432841, lng: -76.537472, homicidios: 2 },

            { nombre: "El Cortijo", lat: 3.416230, lng: -76.559253, homicidios: 6 },

            { nombre: "El Dorado", lat: 3.420597, lng: -76.529096, homicidios: 1 },

            { nombre: "El Guabal", lat: 3.415592, lng: -76.527259, homicidios: 6 },

            { nombre: "El Ingenio", lat: 3.382863, lng: -76.530579, homicidios: 5 },

            { nombre: "El Jardin", lat: 3.425280, lng: -76.517296, homicidios: 6 },

            { nombre: "El Jordan", lat: 3.375653, lng: -76.551607, homicidios: 3 },

            { nombre: "El Lido", lat: 3.419357, lng: -76.550889, homicidios: 4 },

            { nombre: "El Limonar", lat: 3.403234, lng: -76.529530, homicidios: 1 },

            { nombre: "El Mortinal", lat: 3.442302, lng: -76.550256, homicidios: 1 },

            { nombre: "El Paraiso", lat: 3.431844, lng: -76.507255, homicidios: 2 },

            { nombre: "El Peñon", lat: 3.450050, lng: -76.541654, homicidios: 1 },

            { nombre: "El Poblado I", lat: 3.418591, lng: -76.497304, homicidios: 9 },

            { nombre: "El Poblado II", lat: 3.420518, lng: -76.490294, homicidios: 20 },

            { nombre: "El Prado", lat: 3.434855, lng: -76.516719, homicidios: 1 },

            { nombre: "El Refugio", lat: 3.398175, lng: -76.550254, homicidios: 1 },

            { nombre: "El Remanso", lat: 3.417611, lng: -76.464498, homicidios: 3 },

            { nombre: "El Retiro", lat: 3.410135, lng: -76.498649, homicidios: 23 },

            { nombre: "El Rodeo", lat: 3.435275, lng: -76.505261, homicidios: 10 },

            { nombre: "El Trebol", lat: 3.443111, lng: -76.496185, homicidios: 1 },

            { nombre: "El Vergel", lat: 3.416242, lng: -76.499366, homicidios: 16 },

            { nombre: "Evaristo Garcia", lat: 3.475696, lng: -76.506551, homicidios: 4 },

            { nombre: "Fepicol", lat: 3.462550, lng: -76.485603, homicidios: 2 },

            { nombre: "Flora Industrial", lat: 3.480791, lng: -76.504095, homicidios: 6 },

            { nombre: "Fonaviemcali", lat: 3.484484, lng: -76.489071, homicidios: 2 },

            { nombre: "Francisco Eladio Ramirez", lat: 3.388367, lng: -76.548667, homicidios: 1 },

            { nombre: "Granada", lat: 3.459389, lng: -76.534157, homicidios: 1 },

            { nombre: "Guayaquil", lat: 3.439507, lng: -76.527366, homicidios: 4 },

            { nombre: "Guillermo Valencia", lat: 3.472716, lng: -76.510639, homicidios: 1 },

            { nombre: "Industrial", lat: 3.452067, lng: -76.515065, homicidios: 2 },

            { nombre: "Jorge Eliecer Gaitan", lat: 3.469975, lng: -76.481881, homicidios: 4 },

            { nombre: "Jorge Isaacs", lat: 3.457521, lng: -76.518146, homicidios: 2 },

            { nombre: "Jose Holguin Garces", lat: 3.408674, lng: -76.521257, homicidios: 2 },

            { nombre: "Jose Manuel Marroquin II", lat: 3.424188, lng: -76.480197, homicidios: 15 },

            { nombre: "Jose Maria Cordoba", lat: 3.422615, lng: -76.510433, homicidios: 1 },

            { nombre: "Julio Rincon", lat: 3.426752, lng: -76.501595, homicidios: 1 },

            { nombre: "Junin", lat: 3.433949, lng: -76.528285, homicidios: 1 },

            { nombre: "La Base", lat: 3.449052, lng: -76.495577, homicidios: 1 },

            { nombre: "La Campiña", lat: 3.481070, lng: -76.527083, homicidios: 3 },

            { nombre: "La Floresta", lat: 3.444495, lng: -76.512579, homicidios: 4 },

            { nombre: "La Fortaleza", lat: 3.426305, lng: -76.512650, homicidios: 2 },

            { nombre: "La Gran Colombia", lat: 3.421793, lng: -76.506826, homicidios: 1 },

            { nombre: "La Hacienda", lat: 3.395960, lng: -76.530130, homicidios: 2 },

            { nombre: "La Independencia", lat: 3.416122, lng: -76.519405, homicidios: 3 },

            { nombre: "La Isla", lat: 3.472899, lng: -76.513617, homicidios: 4 },

            { nombre: "La Merced", lat: 3.449622, lng: -76.535960, homicidios: 1 },

            { nombre: "La Rivera I", lat: 3.474330, lng: -76.485968, homicidios: 2 },

            { nombre: "La Sultana", lat: 3.422230, lng: -76.564223, homicidios: 5 },

            { nombre: "Las Acacias", lat: 3.433618, lng: -76.521086, homicidios: 3 },

            { nombre: "Las Americas", lat: 3.447855, lng: -76.506142, homicidios: 1 },

            { nombre: "Las Ceibas", lat: 3.455491, lng: -76.488053, homicidios: 2 },

            { nombre: "Las Orquideas", lat: 3.414002, lng: -76.476462, homicidios: 8 },

            { nombre: "Las Quintas de Don Simon", lat: 3.389805, lng: -76.535568, homicidios: 2 },

            { nombre: "Laureano Gomez", lat: 3.411589, lng: -76.495584, homicidios: 10 },

            { nombre: "Leon XIII", lat: 3.426086, lng: -76.509373, homicidios: 2 },

            { nombre: "Lili", lat: 3.373084, lng: -76.520538, homicidios: 1 },

            { nombre: "Lleras Camargo", lat: 3.419737, lng: -76.561475, homicidios: 23 },

            { nombre: "Los Alcazares", lat: 3.487142, lng: -76.492217, homicidios: 3 },

            { nombre: "Los Andes B - La Rivera", lat: 3.469015, lng: -76.495111, homicidios: 2 },

            { nombre: "Los Andes", lat: 3.470869, lng: -76.499552, homicidios: 2 },

            { nombre: "Los Chorros", lat: 3.394176, lng: -76.554941, homicidios: 11 },

            { nombre: "Los Comuneros I", lat: 3.412106, lng: -76.492926, homicidios: 26 },

            { nombre: "Los Comuneros II", lat: 3.425086, lng: -76.493322, homicidios: 5 },

            { nombre: "Los Conquistadores", lat: 3.425412, lng: -76.506958, homicidios: 5 },

            { nombre: "Los Guayacanes", lat: 3.472111, lng: -76.489796, homicidios: 1 },

            { nombre: "Los Lagos", lat: 3.429513, lng: -76.486231, homicidios: 13 },

            { nombre: "Los Lideres", lat: 3.419015, lng: -76.466129, homicidios: 5 },

            { nombre: "Los Naranjos I", lat: 3.433352, lng: -76.481213, homicidios: 9 },

            { nombre: "Los Naranjos II", lat: 3.433191, lng: -76.476711, homicidios: 2 },

            { nombre: "Los Pinos", lat: 3.458298, lng: -76.485140, homicidios: 7 },

            { nombre: "Los Robles", lat: 3.421665, lng: -76.495285, homicidios: 5 },

            { nombre: "Los Sauces", lat: 3.417327, lng: -76.513887, homicidios: 1 },

            { nombre: "Lourdes", lat: 3.391958, lng: -76.555518, homicidios: 2 },

            { nombre: "Manuela Beltran", lat: 3.420749, lng: -76.471839, homicidios: 20 },

            { nombre: "Mariano Ramos", lat: 3.403627, lng: -76.516694, homicidios: 11 },

            { nombre: "Mario Correa Rengifo", lat: 3.387750, lng: -76.557526, homicidios: 1 },

            { nombre: "Marroquin III", lat: 3.432771, lng: -76.485668, homicidios: 9 },

            { nombre: "Melendez", lat: 3.378278, lng: -76.545090, homicidios: 2 },

            { nombre: "Metropolitano del Norte", lat: 3.481907, lng: -76.491326, homicidios: 1 },

            { nombre: "Mojica", lat: 3.415567, lng: -76.488061, homicidios: 23 },

            { nombre: "Morichal de Comafandi", lat: 3.397881, lng: -76.504315, homicidios: 2 },

            { nombre: "Napoles", lat: 3.386337, lng: -76.548478, homicidios: 1 },

            { nombre: "Normandia", lat: 3.452966, lng: -76.544361, homicidios: 1 },

            { nombre: "Nueva Floresta", lat: 3.438552, lng: -76.495443, homicidios: 6 },

            { nombre: "Nueva Tequendama", lat: 3.413199, lng: -76.543679, homicidios: 2 },

            { nombre: "Obrero", lat: 3.447927, lng: -76.520675, homicidios: 8 },

            { nombre: "Olaya Herrera", lat: 3.477604, lng: -76.508786, homicidios: 2 },

            { nombre: "Omar Torrijos", lat: 3.424882, lng: -76.486684, homicidios: 8 },

            { nombre: "Parcelaciones Pance", lat: 3.343053, lng: -76.534628, homicidios: 3 },

            { nombre: "Paso del Comercio", lat: 3.493976, lng: -76.487356, homicidios: 1 },

            { nombre: "Petecuy I", lat: 3.474376, lng: -76.479998, homicidios: 5 },

            { nombre: "Petecuy II", lat: 3.479988, lng: -76.481908, homicidios: 9 },

            { nombre: "Petecuy III", lat: 3.476986, lng: -76.480940, homicidios: 2 },

            { nombre: "Pizamos I", lat: 3.402237, lng: -76.474805, homicidios: 10 },

            { nombre: "Pizamos II", lat: 3.404193, lng: -76.472057, homicidios: 1 },

            { nombre: "Pizamos III", lat: 3.408410, lng: -76.475447, homicidios: 2 },

            { nombre: "Polvoines", lat: 3.371152, lng: -76.554855, homicidios: 4 },

            { nombre: "Porvenir", lat: 3.459261, lng: -76.514159, homicidios: 2 },

            { nombre: "Potrero Grande", lat: 3.407565, lng: -76.469994, homicidios: 27 },

            { nombre: "Prados del Limonar", lat: 3.390547, lng: -76.528369, homicidios: 2 },

            { nombre: "Prados del Norte", lat: 3.470821, lng: -76.520365, homicidios: 3 },

            { nombre: "Prados del Oriente", lat: 3.433009, lng: -76.514355, homicidios: 0 },

            { nombre: "Prados del Sur", lat: 3.388673, lng: -76.555041, homicidios: 1 },

            { nombre: "Primavera", lat: 3.422518, lng: -76.509166, homicidios: 11 },

            { nombre: "Primero de Mayo", lat: 3.406430, lng: -76.533546, homicidios: 1 },

            { nombre: "Primitivo Crespo", lat: 3.438239, lng: -76.516750, homicidios: 3 },

            { nombre: "Promociones Populares", lat: 3.425742, lng: -76.472626, homicidios: 5 },

            { nombre: "Puertas del Sol", lat: 3.432305, lng: -76.473498, homicidios: 12 },

            { nombre: "Puerto Mallarino", lat: 3.450388, lng: -76.483303, homicidios: 3 },

            { nombre: "Puerto Nuevo", lat: 3.453226, lng: -76.476565, homicidios: 4 },

            { nombre: "Republica Israel", lat: 3.407480, lng: -76.513013, homicidios: 10 },

            { nombre: "Rodrigo Lara Bonilla", lat: 3.427940, lng: -76.488922, homicidios: 6 },

            { nombre: "Saavedra Galindo", lat: 3.441418, lng: -76.514829, homicidios: 4 },

            { nombre: "Salomia", lat: 3.464171, lng: -76.505023, homicidios: 1 },

            { nombre: "San Benito", lat: 3.428669, lng: -76.509808, homicidios: 6 },

            { nombre: "San Fernando Nuevo", lat: 3.426564, lng: -76.543969, homicidios: 2 },

            { nombre: "San Juan Bosco", lat: 3.444364, lng: -76.532202, homicidios: 9 },

            { nombre: "San Judas Tadeo I", lat: 3.408727, lng: -76.524603, homicidios: 12 },

            { nombre: "San Judas Tadeo II", lat: 3.414575, lng: -76.523273, homicidios: 1 },

            { nombre: "San Luis", lat: 3.480577, lng: -76.486661, homicidios: 5 },

            { nombre: "San Luis II", lat: 3.488933, lng: -76.488506, homicidios: 2 },

            { nombre: "San Marino", lat: 3.460021, lng: -76.487659, homicidios: 3 },

            { nombre: "San Nicolas", lat: 3.455046, lng: -76.524512, homicidios: 9 },

            { nombre: "San Pascual", lat: 3.445732, lng: -76.528466, homicidios: 1 },

            { nombre: "San Pedro Claver", lat: 3.427923, lng: -76.502170, homicidios: 3 },

            { nombre: "San Vicente", lat: 3.465737, lng: -76.527496, homicidios: 4 },

            { nombre: "Santa Anita", lat: 3.400347, lng: -76.534801, homicidios: 3 },

            { nombre: "Santa Elena", lat: 3.428647, lng: -76.524472, homicidios: 7 },

            { nombre: "Santa Fe", lat: 3.440639, lng: -76.505777, homicidios: 3 },

            { nombre: "Santa Isabel", lat: 3.428124, lng: -76.548158, homicidios: 1 },

            { nombre: "Santa Monica Popular", lat: 3.437100, lng: -76.510254, homicidios: 2 },

            { nombre: "Santa Rosa", lat: 3.446704, lng: -76.534058, homicidios: 3 },

            { nombre: "Santo Domingo", lat: 3.412185, lng: -76.532199, homicidios: 3 },

            { nombre: "Sector Altos de Normandia", lat: 3.458964, lng: -76.535662, homicidios: 1 },

            { nombre: "Sector Melendez", lat: 3.376222, lng: -76.546052, homicidios: 1 },

            { nombre: "Siete de Agosto", lat: 3.447490, lng: -76.485184, homicidios: 6 },

            { nombre: "Siloe", lat: 3.420827, lng: -76.557334, homicidios: 30 },

            { nombre: "Simon Bolivar", lat: 3.442631, lng: -76.517776, homicidios: 4 },

            { nombre: "Sindical", lat: 3.430688, lng: -76.500405, homicidios: 3 },

            { nombre: "Sucre", lat: 3.447046, lng: -76.524582, homicidios: 18 },

            { nombre: "Tejares Cristales", lat: 3.442965, lng: -76.550673, homicidios: 1 },

            { nombre: "Terron Colorado", lat: 3.454452, lng: -76.552903, homicidios: 7 },

            { nombre: "Tierra Blanca", lat: 3.418967, lng: -76.558518, homicidios: 6 },

            { nombre: "Ulpiano Lloreda", lat: 3.441585, lng: -76.489890, homicidios: 3 },

            { nombre: "Unidad Bueno Madrid", lat: 3.467579, lng: -76.515931, homicidios: 2 },

            { nombre: "Union de Vivienda Popular", lat: 3.410735, lng: -76.509744, homicidios: 16 },

            { nombre: "Urbanizacion Ciudad Jardin", lat: 3.364483, lng: -76.535931, homicidios: 1 },

            { nombre: "Urbanizacion Santa Elena", lat: 3.422950, lng: -76.523434, homicidios: 4 },

            { nombre: "Urbanizacion Calimio", lat: 3.487752, lng: -76.484789, homicidios: 6 },

            { nombre: "Villamercedes I - Villa Luz - Las Garzas", lat: 3.409208, lng: -76.478278, homicidios: 6 },

            { nombre: "Vallado", lat: 3.407410, lng: -76.499949, homicidios: 19 },

            { nombre: "Valle Grande", lat: 3.436904, lng: -76.470256, homicidios: 16 },

            { nombre: "Venezuela - Urbanización Canaveralejo", lat: 3.414711, lng: -76.558795, homicidios: 3 },

            { nombre: "Versalles", lat: 3.461793, lng: -76.528651, homicidios: 2 },

            { nombre: "Villablanca", lat: 3.428745, lng: -76.495533, homicidios: 5 },

            { nombre: "Villa del Lago", lat: 3.438310, lng: -76.488211, homicidios: 5 },

            { nombre: "Villa del Prado - El Guabito", lat: 3.465772, lng: -76.490872, homicidios: 2 },

            { nombre: "Villa del Sur", lat: 3.411610, lng: -76.519438, homicidios: 1 },

            { nombre: "Villa San Marcos", lat: 3.426737, lng: -76.474439, homicidios: 3 },

            { nombre: "Villacolombia", lat: 3.449242, lng: -76.499707, homicidios: 2 },

            { nombre: "Villanueva", lat: 3.429785, lng: -76.509218, homicidios: 2 },

            { nombre: "Vista Hermosa", lat: 3.453242, lng: -76.570631, homicidios: 3 },

            { nombre: "Yira Castro", lat: 3.426641, lng: -76.497943, homicidios: 1 }
        ]


    };


    let matriz = [];
    for (contador = 0; contador < entrada.barrios.length; contador++) {
        objetoTemp = { nombre: entrada.barrios[contador].nombre, lat: 0, lng: 0, homicidios: entrada.barrios[contador].homicidios};
        for (coordenadaX = 0; coordenadaX < ejeX.length - 1; coordenadaX++) {
            if (entrada.barrios[contador].lng > ejeX[coordenadaX] && entrada.barrios[contador].lng < ejeX[coordenadaX + 1]) {
                objetoTemp.lng = coordenadaX;
            }
        }
        for (coordenadaY = 0; coordenadaY < ejeY.length - 1; coordenadaY++) {
            if (entrada.barrios[contador].lat < ejeY[coordenadaY] && entrada.barrios[contador].lat > ejeY[coordenadaY + 1]) {
                objetoTemp.lat = coordenadaY;
            }
        }
        matriz.push(objetoTemp);
    }
    console.log(matriz);





    for (contadorBarrios = 0; contadorBarrios < entrada.barrios.length; contadorBarrios++) {

        var coordenadas = {
            lat: entrada.barrios[contadorBarrios].lat, lng: entrada.barrios[contadorBarrios].lng
        }

        // geocoder.geocode({'location': {lat: coordenadas.lat ,lng: coordenadas.lng}}, function(results,status)
        // {

        // if(status == 'OK'){
        //map.setCenter(results[0].geometry.location);


        var marker = new google.maps.Marker({
            map: map,
            position: coordenadas,
            title: entrada.barrios[contadorBarrios].nombre + ": " + entrada.barrios[contadorBarrios].homicidios

        });
        //console.log(entrada.barrios[contadorBarrios].nombre)
        // }
        // else{
        //     alert('Geocode was not successful for the following reason: ' + status);
        // }

        // });
    }

    let entradaPol = {

        policia: [
            { distrito: "Distrito Uno Fray Damián", estacion: "Estación Terrón Colorado", direccion: "Avenida 4 BIS Oeste # 19-00 Cali", lat: 3.452220, lng: -76.569420 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Subestación Montebello", direccion: "Calle 12 Oeste No 42-71 Cgto Montebello Cali", lat: 3.484352, lng: -76.552341 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación la Flora", direccion: "AV. 3N. cona calle 23C B/Versalles Cali", lat: 3.459699, lng: -76.530626 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación la Flora", direccion: "Terminal de Cali", lat: 3.465721, lng: -76.521279 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación la Flora", direccion: "AV.6 con calle 30 Cali", lat: 3.472211, lng: -76.528339 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación la Flora", direccion: "AV. 2 con calle 52 Cali", lat: 3.481466, lng: -76.509583 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación la Flora", direccion: "AV. 3 con calle 44 Cali", lat: 3.478104, lng: -76.517464 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación la Flora", direccion: "AV. 4 Oeste Cali", lat: 3.450820, lng: -76.556055 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación Fray Damian", direccion: "Calle 13A No. 13-41 Cali", lat: 3.444265, lng: -76.528017 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación Fray Damián", direccion: "Carrera 10 # 1 OE - 00 Cali", lat: 3.447495, lng: -76.541551 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación Fray Damián", direccion: "Calle 3 # 14 - 00 Cali", lat: 3.443387, lng: -76.538855 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación San Francisco", direccion: "Carrera 1N # 33-00 Cali", lat: 3.471619, lng: -76.491821 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación Junín", direccion: "Carrera 24 # 11-08 Cali", lat: 3.432064, lng: -76.529697 },

            { distrito: "Distrito Uno Fray Damián", estacion: "Estación Junín", direccion: "Carrera 10 entre Calle 22A y 23 Cali", lat: 3.449748, lng: -76.521130 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación la Rivera", direccion: "Carrera 1D # 67-00 B/La Rivera Cali", lat: 3.475488, lng: -76.490051 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación la Rivera", direccion: "Carrera 1 & Calle 70 B/ Metropolitano Cali", lat: 3.485795, lng: -76.494107 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación la Rivera", direccion: "Carrera 5 & Calle 52 B/ Salomia Cali", lat: 3.471566, lng: -76.503481 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación Floralia", direccion: "Calle 72J No. 3AN-00 B/ Floralia Cali", lat: 3.494773, lng: -76.494102 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación Floralia", direccion: "Carrera 1 con Calle 83 B/Calimio Cali", lat: 3.473135, lng: -76.507529 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación Floralia", direccion: "Calle 73 con Carrera 3D B/ Quintas de Salomia Cali", lat: 3.469636, lng: -76.484348 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación Alfonso López", direccion: "Carrera 7D # 82-00 B/Alfonso López Cali", lat: 3.464202, lng: -76.477328 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación Alfonso López", direccion: "Calle 69 # 7C-00 Cali", lat: 3.463710, lng: -76.485897 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación Municipal", direccion: "Carrera 13 # 39-33 B/Municipal Cali", lat: 3.446503, lng: -76.506268 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación Agua Blanca", direccion: "Calle 26A # 25-28 Cali", lat: 3.432083, lng: -76.518447 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación Agua Blanca", direccion: "Calle 36 & KRA 47 Cali", lat: 3.415568, lng: -76.512335 },

            { distrito: "Distrito Dos la Rivera", estacion: "Estación Nueva Floresta", direccion: "Calle 44 # 24B-00 B/ Floresta Cali", lat: 3.447770, lng: -76.503926 },

            { distrito: "Distrito Tres el Lido", estacion: "Estación Guabal", direccion: "Carrera 44 # 14B-75 Cali", lat: 3.412854, lng: -76.527209 },

            { distrito: "Distrito Tres el Lido", estacion: "Estación Caney", direccion: "Carrera 81 # 47-00 B/Caney Cali", lat: 3.386790, lng: -76.516937 },

            { distrito: "Distrito Tres el Lido", estacion: "Estación Caney", direccion: "AV. 5B con carrera 56 Cali", lat: 3.408671, lng: -76.546445 },

            { distrito: "Distrito Tres el Lido", estacion: "Estación Caney", direccion: "Carrera 100 con calle 20 Cali", lat: 3.451885, lng: -76.524255 },

            { distrito: "Distrito Tres el Lido", estacion: "Estación Meléndez", direccion: "Calle 4 # 93-00 Cali", lat: 3.375857, lng: -76.547251 },

            { distrito: "Distrito Tres el Lido", estacion: "Subestación Buitrera", direccion: "Carrera 77 calle 2A Cali", lat: 3.388199, lng: -76.549779 },

            { distrito: "Distrito Tres el Lido", estacion: "Estación Lido", direccion: "Carrera 52 # 2-00 Cali", lat: 3.416337, lng: -76.553155 },

            { distrito: "Distrito Tres el Lido", estacion: "Subestación Pichindé", direccion: "Vía principal corregimiento Pichinde Cali", lat: 3.373232, lng: -76.532656 },

            { distrito: "Distrito Tres el Lido", estacion: "Subestación Pichindé", direccion: "AV. Circunvalar con Carrera 4 Cali", lat: 3.448041, lng: -76.544333 },

            { distrito: "Distrito Tres el Lido", estacion: "Subestación Pichindé", direccion: "Calle 5 Con CRA 36 Cali", lat: 3.431158, lng: -76.543714 },

            { distrito: "Distrito Tres el Lido", estacion: "Subestación Pichindé", direccion: "Calle 1 OESTE Con 56 Cali", lat: 3.409858, lng: -76.555233 },

            { distrito: "Distrito Tres el Lido", estacion: "Subestación Pichindé", direccion: "Calle 2 OESTE Con CRA 24 Cali", lat: 3.438747, lng: -76.543468 },

            { distrito: "Distrito Tres el Lido", estacion: "Estación Sultana", direccion: "Calle 22 oeste No.47-29 B/ La Sultana Cali", lat: 3.422376, lng: -76.564118 },

            { distrito: "Distrito Tres el Lido", estacion: "Estación Sultana", direccion: "Carrera 51 # 7-33 Barrio El Cortijo Cali", lat: 3.417801, lng: -76.559798 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Diamante", direccion: "Calle 41 # 32A -16 Cali", lat: 3.416140, lng: -76.498469 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Diamante", direccion: "Carrera 28C con calle 71 Cali", lat: 3.424265, lng: -76.493126 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Diamante", direccion: "Carrera 25U con calle 72U Cali", lat: 3.440490, lng: -76.484842 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Los Mangos", direccion: "Calle 73 # Diag. 26 M-90 B/Marroquín II Cali", lat: 3.426374, lng: -76.484363 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Mangos", direccion: "Calle 112 con carrera 26 Cali", lat: 3.427083, lng: -76.468286 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Mangos", direccion: "Calle 103 con carrerera 28A Cali", lat: 3.413070, lng: -76.479515 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Mangos", direccion: "Carrera 26C con calle 84 Cali", lat: 3.431577, lng: -76.474422 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Vallado", direccion: "Carrera 41B # 50-02 Cali", lat: 3.406470, lng: -76.502627 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Vallado", direccion: "Calle 83 con Carrera 28D4 Cali", lat: 3.415038, lng: -76.488803 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Mariano Ramos", direccion: "Carrera 48 # 45-03 Cali", lat: 3.401242, lng: -76.515377 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Desepaz", direccion: "Calle 121 # 25-00 Cali", lat: 3.425277, lng: -76.465410 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Desepaz", direccion: "Calle 123 Con caarrera 28D2 B/ Potrero Grande Cali", lat: 3.409741, lng: -76.470027 },

            { distrito: "Distrito Cuatro los Mangos", estacion: "Estación Desepaz", direccion: "Calle 123 con carrera 28F B/ Pizamos Cali", lat: 3.402727, lng: -76.473126 },

            { distrito: "Distrito Cinco Yumbo", estacion: "Estación Yumbo", direccion: "Calle 4 # 5-35 B/Belalcazar Cali", lat: 3.448277, lng: -76.537963 },

            { distrito: "Distrito Cinco Yumbo", estacion: "Subestación Dapa", direccion: "Calle 10 con carrera 40 Acopi-Yumbo Cali", lat: 3.495101, lng: -76.522471 },

            { distrito: "Distrito Cinco Yumbo", estacion: "Subestación Dapa", direccion: "Calle 10 con carrera 18 B/Las Americas Cali", lat: 3.440181, lng: -76.531629 },

            { distrito: "Distrito Cinco Yumbo", estacion: "Subestación Dapa", direccion: "Calle 18 con carrera 13A B/La Estancia Cali", lat: 4.649694, lng: -74.068736 },

            { distrito: "Distrito Cinco Yumbo", estacion: "Subestación Dapa", direccion: "Calle 5AN # 10AN-09 B/Pizarro Cali", lat: 4.992324, lng: -74.058048 },

            { distrito: "Distrito Cinco Yumbo", estacion: "Estación Vijes", direccion: "Carrera 5 # 5- 23 B/Centro Cali", lat: 3.449075, lng: -76.537046 },

            { distrito: "Distrito Cinco Yumbo", estacion: "Estación La Cumbre", direccion: "Carrera 5 # 2 -10 Cali", lat: 3.448061, lng: -76.539169 },

            { distrito: "Distrito Cinco Yumbo", estacion: "Subestación Pavas", direccion: "Carrera 8 con calle 4 esquina Cali", lat: 3.453176, lng: -76.505340 },

            { distrito: "Distrito Seis Jamundí", estacion: "Estación Jamundí", direccion: "Carrera 10 # 17-02 Cali", lat: 3.448347, lng: -76.525770 },

            { distrito: "Distrito Seis Jamundí", estacion: "Estación La María", direccion: "Carrera 125 # 24-00 Cali", lat: 3.336824, lng: -76.551571 },

            { distrito: "Distrito Siete Candelaria", estacion: "Estación Candelaria", direccion: "Carrera 6 # 8-50 Cali", lat: 3.449520, lng: -76.534423 },

            { distrito: "Distrito Siete Candelaria", estacion: "Subestación Cabuyal", direccion: "Carrera 6 # 5-16 Cali", lat: 3.448267, lng: -76.536777 },

            { distrito: "Distrito Siete Candelaria", estacion: "Subestación Carmelo", direccion: "Calle 14 # 10-09 B/Oaisis Cali", lat: 3.447764, lng: -76.528059 },

            { distrito: "Distrito Siete Candelaria", estacion: "Subestación San Joaquín", direccion: "Carrera 5C con calle 7 Cali", lat: 3.424222, lng: -76.542594 },

            { distrito: "Distrito Siete Candelaria", estacion: "Subestación Villa Gorgona", direccion: "Carrera 11 # 12-28 Cali", lat: 3.446611, lng: -76.530280 },

            { distrito: "Distrito Siete Candelaria", estacion: "Subestación Juanchito", direccion: "Carrera 8º # 93-58 Cali", lat: 3.450122, lng: -76.474467 }

        ]


    };

    for (contadorPolicia = 0; contadorPolicia < entradaPol.policia.length; contadorPolicia++) {

        var coordenadas = {
            lat: entradaPol.policia[contadorPolicia].lat, lng: entradaPol.policia[contadorPolicia].lng
        }

        var marker = new google.maps.Marker({
            map: map,
            position: coordenadas,
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            },
            title: entradaPol.policia[contadorPolicia].estacion

        });
    }

    let matrizPolicia = [];
    for (contador2 = 0; contador2 < entradaPol.policia.length; contador2++) {
        objetoTemp2 = { estacion: entradaPol.policia[contador2].estacion, lat: 0, lng: 0};
        for (coordenadaX = 0; coordenadaX < ejeX.length - 1; coordenadaX++) {
            if (entradaPol.policia[contador2].lng > ejeX[coordenadaX] && entradaPol.policia[contador2].lng < ejeX[coordenadaX + 1]) {
                objetoTemp2.lng = coordenadaX;
            }
        }
        for (coordenadaY = 0; coordenadaY < ejeY.length - 1; coordenadaY++) {
            if (entradaPol.policia[contador2].lat < ejeY[coordenadaY] && entradaPol.policia[contador2].lat > ejeY[coordenadaY + 1]) {
                objetoTemp2.lat = coordenadaY;
            }
        }
        matrizPolicia.push(objetoTemp2);
    }
    console.log(matrizPolicia);


    // geocoder.geocode({'location': {lat:4.67909,lng: -74.07723}}, function(results,status)
    // {
    //     console.log(results);
    //     if(status == 'OK'){
    //         //map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //             map: map,
    //             position: results[0].geometry.location,
    //             title : results[0].formatted_address
    //         });
    //     }
    //     else{
    //         alert('Geocode was not successful for the following reason: ' + status);
    //     }
    // });


}





//var marker0 = new google.maps.Marker(
//    {
//        position: {lat: 4.67909, lng: -74.07723},
//        map : map,
//        title: 'Esto es un marcador'
//    }
//);
//Forma alternativa de agregar al mapa
//marker0.setMap(map);
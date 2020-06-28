function validation() {

    var verify = 0;
    var typeclient = document.getElementById("typeclient")
    var clerib = document.getElementById("clerib");
    var agios = document.getElementById("agios");
    var solde = document.getElementById("solde");
    var fraisou = document.getElementById("fraisou");
    var dateou = document.getElementById("dateou");
    if (cp.value = "!0") {
        alert("Veillez choisir type client");

    }
    if (clerib.value == "") {
        alert("veillez siasir la cle rib");
        verify = 1

    }
    if (agios.value == "") {
        alert("veillez saisir les agios");
        verify = 1
    }
    if (solde.value == "") {
        alert("veillez saisir les solde");
        verify = 1
    }
    if (fraisou.value == "") {
        alert("veillez saisir les frais");
        verify = 1
    }
    if (dateou.value == "") {
        alert("veillez saisir la date");
        verify = 1
    }
    if (verify != 0) {
        return false
    } else alert("Formulaire envoyer");


}


//function tanef client
function chwclient() {
    var typeclient = document.getElementById('typeclient');
    if (typeclient.value == "0") {
        alert("Veillez choisir un type de client");
    }
    if (typeclient.value == "1") {
        clientphysique.style.display = 'block';
        clientmoral.style.display = 'none';
        boutton.style.display = 'block';

    }
    if (typeclient.value == "2") {
        clientmoral.style.display = 'block';
        clientphysique.style.display = 'none';
        boutton.style.display = 'block';


    }


};

/*
//function tanef client
function chxcl() {
    var cp = document.getElementById('cliph');
    var cm = document.getElementById('clim');
    var chx = document.getElementById('chx');

    if (chx.value == '1') {
        cp.style.display = 'block';
        cm.style.display = 'none';

    } else {
        cm.style.display = 'block';
        cp.style.display = 'none';
    };


*/


/*
function chtc() {
    var chw = document.getElementById(chw);
    var cliph = document.getElementById(cliph);
    var climo = document.getElementById(climo);
    if (chw.value == '1') {
        cp.style.display = 'block';
        cm.style.display = 'none';
    } else {
        cm.style.display = 'block';
        cp.style.display = 'none';
    }


}  */
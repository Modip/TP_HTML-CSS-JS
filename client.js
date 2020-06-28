function validate() {
    var verify = 0;
    var mor = document.getElementById(mor);
    var adresse = document.getElementById(adresse);
    var social = document.getElementById(social);
    var email = document.getElementById(email);
    var login = document.getElementById(login);
    var password = document.getElementById(password);
    if (mor.value == '') {
        alert('Veuillez remplir le nom');
        verify = 1
    }
    if (adresse.value == '') {
        alert("Veuillez remplir l'adresse");
        verify = 1
    }
    if (social.value == '') {
        alert('Veuillez remplir le numero social');
        verify = 1
    }
    if (mor.value == '') {
        alert("Veuillez remplir l' email");
        verify = 1
    }
    if (login.value == '') {
        alert('Veuillez remplir le login');
        verify = 1
    }
    if (mor.value == '') {
        alert('Veuillez remplir le mot de passe');
        verify = 1
    }
    if (verify != 0) {
        return false
    } else
        alert("formulaire envoyer");
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
//bimboum client domou adama
document.getElementById("inscription").addEventListener("submit", function(e) {
    var erreur;
    var inputs = document.getElementsByClassName("clcp");
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "veillez saisir tous les champs";
        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {

        alert('Formulaire envoyé');
    }

});








/*
var form = document.getElementById("inscription");
form.addEventListener("submit", function(e) {
            var climo = document.getElementById(climo);
            var mor = document.getElementById('mor');
            var adress = document.getElementById('adress');
            var social = document.getElementById('socail');
            var login = document.getElementById('login');
            if (climo.value() == "" {
                    e.preventDefault();
                    alert("veillez remplir tout les champs")
                }
            }
*/

/*
    function climo() {
        var erreur;
        var inputs = document.getElementsByClassName("climo");
        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "veillez saisir tous les champs";
            }
        }

        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        } else {

            alert('Formulaire envoyé');
        }
    }

    /*
    document.getElementById("inscription").addEventListener("submit", function(e) {

        var erreur;

        var inputs = this.getElementsByClassName("clcp");
        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "veillez saisir tous les champs";
            }
        }
        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        } else {

            alert('Formulaire envoyé');
        }



    });

    */








//function jook client

/*
document.getElementById("inscription").addEventListener("submit", function (e) {
    var chx = document.getElementById(chx);
    var erreur;

    var inputclip = document.getElementsByClassName("clip");
    var inputclim = document.getElementsByClassName("clim");
    if (chx == 1) {
        for (var i = 0; i < inputclcp.length; i++) {
            if (!inputclcp[i].value) {
                erreur = "veillez saisir tous les champs";
            }
        }
    }
    else {
        if (chx == 2) {
            for (var i = 0; i < inputclim.length; i++) {
                if (!inputclim[i].value) {
                    erreur = "veillez saisir tous les champs";
                }
            }

        }
    }



    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {

        alert('Formulaire envoyé');
    }



});






/*
document.getElementById("inscription").addEventListener("submit", function (e) {
    var erreur;
    var inputs = document.getElementsByClassName("cm");
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "veillez saisir tous les champs";
        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {

        alert('Formulaire envoyé');
    }



}); 




/*
document.getElementById('chx').style.visibility='hidden';
document.getElementById('chx').style.visibility='visible';


*/
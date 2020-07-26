let utilisateur = [
    {Prenom:"Enzo", Nom:"RADNAI"},
    {Prenom:"Ibrahim", Nom:"BELLAHCENE"},
    {Prenom:"Adel", Nom:"HACHELAF"},
    {Prenom:"Yves", Nom:"HENOT"},
    {Prenom:"Kevin", Nom:"ALLEGAERT"},
    {Prenom:"Pierre", Nom:"JANEZ"},
    {Prenom:"Papy", Nom:"SOMPO"},
    {Prenom:"Quentin", Nom:"RAMECOURT"},
    {Prenom:"Aurelien", Nom:"MORTELETTE"},
    {Prenom:"Arthur", Nom:"MARSY"},
    {Prenom:"Thibaut", Nom:"MATHON"},
    {Prenom:"Olivier", Nom:"GRAGNANI"},
    {Prenom:"Gerald", Nom:"LEVRAY"},
    {Prenom:"Lucas", Nom:"RYGIELSKI"},
    {Prenom:"Celi-Jael", Nom:"TSAMALAX"},
    {Prenom:"Tofik", Nom:"BISMIR"},
    {Prenom:"Mohammed", Nom:"HAZIME"},
    {Prenom:"Donovan", Nom:"GARCIA SAN JOSE"},
    {Prenom:"Emile", Nom:"MIKULI"},
]

const generateTableHead = (table, data) => {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    let th = document.createElement("th");
    let text = document.createTextNode("Gestion");
    th.appendChild(text);
    row.appendChild(th);
}

const generateTable = (table, data) => {

    for (let element of data) {
        let row = table.insertRow()
        for (key in element) {
            let cell = row.insertCell()
            let text = document.createTextNode(element[key])
            cell.appendChild(text);
        }
        cell = row.insertCell(-1);
        var btnRemove = document.createElement("INPUT");
        btnRemove.type = "button";
        btnRemove.value = "Supprimer";
        btnRemove.setAttribute("onclick", "Remove(this)");
        cell.appendChild(btnRemove);

    }


}

function Remove(button) {

    var row = button.parentNode.parentNode;
    var name = row.getElementsByTagName("TD")[0].innerHTML;
    if (confirm("Voulez vous supprimer : " + name)) {


        var table = document.querySelector("#TableAdmin");


        table.deleteRow(row.rowIndex);
        for (let e of utilisateur)
            if (e.nom == name) {
                console.log(e)
                var pos = utilisateur.indexOf(e)
                console.log(pos)
                utilisateur.splice(pos, 1)
                console.log(utilisateur)
            }
    }
};

let table = document.querySelector("table")
let tbody = document.querySelector("tbody")
let indice = Object.keys(utilisateur[0])
generateTableHead(table, indice);
generateTable(tbody, utilisateur);
let lists;
let nbID = 0;
let n = 0;


setdata();
substring();

function setdata() {
    lists = JSON.parse(JSON.stringify(data));
}

function substring() {
    for (var g = 0; g < lists.length; g++) {
        const str = lists[g].ID;
        if (str.substring(0, 3) == "SPC") {
            nbID++;
        }
    }
    nbID = Math.floor(nbID / 3);
}


function setdatainarray() {

    /*for (let g = 0; g < lists.length; g++) {
        str = lists[g].ID;
        if (str.substring(0, 3) == "STR") {*/
    for (let o = 0; o < lists.length; o++) {


        /* Ici on créé la ligne principal*/
        SearchIdNav = document.getElementById("strate");
        CreateDivRowP = document.createElement("div");
        CreateDivRowP.className = "row";
        CreateDivRowP.id = "RowP" + o;
        CreateDivRowP.style = "margin-top: 1.5%";
        SearchIdNav.appendChild(CreateDivRowP);

        for (let i = 0; i < 3; i++) {
            n = n + 1;
            let h = 0;
            /* Ici on créé les 6 colonnes principal*/
            SearchIdRowP = document.getElementById("RowP" + o);
            CreateDivColP = document.createElement("div");
            CreateDivColP.className = "col-4";
            CreateDivColP.id = "ColP" + o + i;
            /*CreateDivColP.style = "border: solid 1px";*/
            SearchIdRowP.appendChild(CreateDivColP);

            for (let j = 0; j < 3; j++) {
                /* Ici on créé les 3 lignes des colonnes*/
                SearchIdColP = document.getElementById("ColP" + o + i);
                CreateDivRowS = document.createElement("div");
                CreateDivRowS.className = "row";
                CreateDivRowS.id = "RowS" + o + i + j;
                /*CreateDivRowS.style = "border: solid 1px";*/
                SearchIdColP.appendChild(CreateDivRowS);

                for (let k = 0; k < 3; k++) {
                    /* Ici on créé les 3 lignes des colonnes*/
                    SearchIdRowS = document.getElementById("RowS" + o + i + j);
                    CreateDivColS = document.createElement("div");
                    CreateDivColS.className = "col-4";
                    CreateDivColS.id = "ColS" + o + i + j + k;
                    CreateDivColS.style = "border: solid 1px";
                    SearchIdRowS.appendChild(CreateDivColS);
                    h = h + 1;


                    switch (h) {
                        case 1:
                            CreateDivColS.innerHTML = lists[n].ID;
                            break;
                        case 2:
                            if ((lists[n].Priorite == "undefined") || (lists[n].Priorite == "")) {
                                lists[n].Priorite = "Undefined";
                            }
                            CreateDivColS.innerHTML = lists[n].Priorite;

                            break;
                        case 3:
                            if ((lists[n].Difficulte == "undefined") || (lists[n].Difficulte == "N/A")) {
                                lists[n].Difficulte = "";
                            }
                            CreateDivColS.innerHTML = "Difficulty: " + lists[n].Difficulte;
                            break;
                        case 4:
                            CreateDivColS.innerHTML = "Planet: " + lists[n].Planet;
                            break;
                        case 5:
                            CreateDivColS.innerHTML = "People: " + lists[n].People;
                            break;
                        case 6:
                            CreateDivColS.innerHTML = "Prosperity: " + lists[n].Prosperity;
                            break;
                        case 7:
                            CreateDivColS.innerHTML = "Add ->";
                            break;
                        case 8:
                            CreateDivColS.innerHTML = '<a class="add-panier panier" href="#"> Ajouter au panier</a>';
                            break;
                        case 9:
                            CreateDivColS.innerHTML = "<- Add";
                            break;
                        default:
                            // code block
                    }
                    /*CreateDivColS.innerHTML = n;*/
                }
            }
        }
    }
}
/*}
}*/
setdatainarray();
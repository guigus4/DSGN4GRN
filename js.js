let carts = document.querySelectorAll('.add-panier');

console.log(carts);

for(let i = 0; i< carts.length ; i++){
    carts[i].addEventListener('click', () =>{
        NombrePanier(lists[i]);
    } )
}

lists.forEach(element => {
    if(element.Incontournables =="INCONTOURNABLE"){
        NombrePanier(element);
    }
});

function onLoadNombrePanier(){
    let nbTotalIn = localStorage.getItem('nombreTotalPanier');
    
    if(nbTotalIn){
        document.querySelector('.panier span').textContent = nbTotalIn;
    }

}

function NombrePanier(list){
    let nbTotalIn = localStorage.getItem('nombreTotalPanier');
    nbTotalIn =parseInt(nbTotalIn);

    if(nbTotalIn){
        if(list.flagInPanier==false){
            localStorage.setItem('nombreTotalPanier', nbTotalIn+1);
            document.querySelector('.panier span').textContent = nbTotalIn + 1;
        }
    }else{
        localStorage.setItem('nombreTotalPanier', 1);
        document.querySelector('.panier span').textContent = 1;
    }
    if(list.flagInPanier==false){
        setItems(list);
    }
}

function setItems(list){
    let PanierItem = localStorage.getItem('listInPanier');
    PanierItem=JSON.parse(PanierItem);

    if(PanierItem != null){
        if(PanierItem[list.ID] == undefined){
            PanierItem = {
                ...PanierItem,
                [list.ID]: list
            }
            PanierItem[list.ID].flagInPanier = true;
        }
    }else{
        list.flagInPanier = true;
        PanierItem ={
            [list.ID]: list
        }
    }
    
    localStorage.setItem("listInPanier", JSON.stringify(PanierItem));
}

function displayPanier(){
    let PanierItems = localStorage.getItem("listInPanier");
    PanierItems = JSON.parse(PanierItems);
    let productContainer = document.querySelector(".products");
    let nbTotalIn = localStorage.getItem('nombreTotalPanier');

    if(PanierItems && productContainer){
        productContainer.innerHTML ='';
        Object.values(PanierItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle" ></ion-icon>
                <span>${item.ID}  ${item.Incontournables}</span>
            </div>
            `;
        });

        productContainer.innerHTML += `
        <div class="nombreTotalInPanier">
            <h4 class="nombreTotalTitre">Nombre total de bonnes pratiques </h4>
            <h4 class="nombreTotalItems">${nbTotalIn}</h4>
        </div>
        `
    }
}



onLoadNombrePanier();
displayPanier();
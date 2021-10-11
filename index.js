let cartItemBasic=[];
let cartItemSenior=[];

let basic= {
    name: "Basic18+",
    price: 15
}

let senior={
    name: "Senior65+",
    price: 10
}
function addToCartBasic(item){
    cartItemBasic.push(item);
    document.getElementById("itemCounterBasic").innerHTML=cartItemBasic.length;
    showTotal();
}

function removeFromCartBasic(){
    cartItemBasic.pop();
    document.getElementById("itemCounterBasic").innerHTML=cartItemBasic.length;
    showTotal();
}

function addToCartSenior(item){
    cartItemSenior.push(item);
    document.getElementById("itemCounterSenior").innerHTML=cartItemSenior.length;
    showTotal();
}

function removeFromCartSenior(){
    cartItemSenior.pop();
    document.getElementById("itemCounterSenior").innerHTML=cartItemSenior.length;
    showTotal();
}

function showTotal(){
    let orderTotal=document.getElementById("orderTotal");
    orderTotal.innerHTML="";
    let totalBasic=0;
    let totalSenior=0;
    let total;

    for(let i=0; i<cartItemBasic.length; i++){
        totalBasic+=cartItemBasic[i].price;
    }
    for(let i=0; i<cartItemSenior.length; i++){
        totalSenior+=cartItemSenior[i].price;
    }
    total=totalBasic+totalSenior;
    orderTotal.innerHTML+="Total EUR:"+" "+total;
}

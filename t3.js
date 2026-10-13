let other;
do{
let m1=20;
let m2=40;
let m3=60;
let m4=80;
let m5=100;

console.log("1.Juice = ₹20");
console.log("2.Coco Cola = ₹40");
console.log("3.Brownie= ₹60");
console.log("4.Popcorn = ₹80");
console.log("5.Cup Noodles = ₹100");
let options=Number(prompt("Choose a Menu : "));
let price=Number(prompt("Enter your price :"));
let cost;
let order;
if(options==1){
    cost=m1;
    order="Juice";
}else if(options==2){
    cost=m2;
    order="Coca Cola;"
}else if(options==3){
    cost=m3;
    order="Brownie";
}else if(options==4){
    cost=m4;
    order="Popcorn";
}else if(options==5){
    cost=m5;
    order="Cup noodles";
}else{
     alert("error:Item Number");
}
if(options>=1 && options<=5){
    if(cost<0){
         alert("error : amount no");
    }else if(price<cost){
     alert("Insufficient Money");
    }else{
        function select(){
            let balance = price-cost;
            alert("Your Order : "+ order);
            alert("Your change : "+balance);
            for(let i=1;i<=options;i++){
                let next="";
                for(j=1;j<=i;j++){
                    next+=j+" ";
                }
                console.log(next);
                }
            }
    }select();
}
     other=(confirm("are u willing to buy again"));
}while(other);
alert("Thank You !")
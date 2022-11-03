const Shop={
    name:"aaa",
    number:7777,
    lessprice:true,
    products:null,
    opened:undefined,

}

Shop.near=true;
delete Shop.lessprice;
Shop.name='aha';
Shop["price"] = true;
delete Shop[`price`];
console.log(Shop)

const vechicle={}

vechicle.brandName="BMW";
vechicle['model']="X5";
vechicle.model='M1';
delete vechicle['model'];
console.log(vechicle)


let salaries={
    Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let c=0;
for (let key in salaries){
    c+=salaries[key];
}
console.log(c)
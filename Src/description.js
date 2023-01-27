const products=[{
    id: "1",
    name : "Ford",
    image : ["Images/sell/ford.png","./Images/sell/Mercedes.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=1",
    model: "<span>Model Number</span>: MC20 2022",
    Engine: "<span>Engine</span>: V6 Turbo 3.0 Liter",
    Money: "<span>Money</span>: BR. 5,000,000",
    madeIn: "<span>Made In</span>: Italy",
    enginePower: "<span>Engine Power</span>: 255 hp @ 5000 rpm",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-Speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: 16 MPG",
    fuelType: "<span>Fuel Type</span>: Premium",
},{
    id: "2",
    name : "Ferrari", 
    image : ["./Images/sell/ferrari.jpg","./Images/sell/Mercedes.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=2",
    
    model: "<span>Model Number</span>: 296 GTB 2023",
    madeIn: "<span>Made In</span>: Maranello",
    enginePower: "<span>Engine Power</span>: 818 hp",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-speed",
    charger: "<span>Charger</span> : yes",
    mileageInCity: "<span>Mileage In City</span>: TBC",
    fuelType: "<span>Fuel Type</span>: Premium unleaded",
},{
    id: "3",
    name : "BMW",
    image : ["./Images/sell/BMW.jpg","./Images/sell/Mercedes.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=3",
    
    model: "<span>Model Number</span>: 430i xDrive Gran Coupe 2022",
    madeIn: "<span>Made In</span>: Germany",
    enginePower: "<span>Engine Power</span>: 255 hp @ 5000 rpm",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-Speed",
    charger: "<span>Charger</span>: Yes",
    mileageInCity: "<span>Mileage In City</span>: 23 MPG",
    fuelType: "<span>Fuel Type</span>: Premium",
},{
    id: "4",
    name : "Lamborghini",
    image : ["./Images/sell/Lamborghini.jpg","./Images/sell/Mercedes.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=4",
   
    model: "<span>Model Number</span>: Urus 2023",
    madeIn: "<span>Made In</span>: Italy",
    enginePower: "<span>Engine Power</span>: 255 hp @ 5000 rpm",
    driveType: "<span>Drive Type</span>: All Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-speed",
    charger: "<span>Charger</span>: Premium Unleaded",
    mileageInCity: "<span>Mileage In City</span>: 12 MPG",
    fuelType: "<span>Fuel Type</span>: Premium Unleaded",
},{
    id: "5",
    name : "Jaguar",
    image : ["./Images/sell/jaguar.jpg","./Images/sell/Mercedes.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=5",
    model: "<span>Model Number</span>: F-Type P450 R-Dynamic Convertible 2023",
    madeIn: "<span>Made In</span>: America",
    enginePower: "<span>Engine Power</span>: 500hp",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-Speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: 16 MPG",
    fuelType: "<span>Fuel Type</span>: Premium",
},{
    id: "6",
    name : "Maserati",
    image : ["./Images/sell/maserati MC20.jpg","./Images/sell/Mercedes.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=6",
    model: "<span>Model Number</span>: MC20 2022",
    madeIn: "<span>Made In</span>: Italy",
    enginePower: "<span>Engine Power</span>: 621 hp",
    driveType: "<span>Drive Type</span>: Rear Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-Speed",
    charger: "<span>Charger</span>: NO",
    mileageInCity: "<span>Mileage In City</span>: TBC",
    fuelType: "<span>Fuel Type</span>: Gasoline",
},
{   
    id: "7",
    name : "Lexus",
    image : ["./Images/sell/lexus.jpg","./Images/sell/Mercedes.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=7",
  
    model: "<span>Model Number</span>: NX 450h+ Plug-in Hybrid F SPORT 2022",
    madeIn: "<span>Made In</span>: Lexes (Toyota) motor",
    enginePower: "<span>Engine Power</span>: 304 hp @ 6000 rpm",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 7-speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: 84 MPG",
    fuelType: "<span>Fuel Type</span>: Plug in Hybrid",
},{
    id: "8",
    name : "Porsche",
    image : ["./Images/sell/Porsche.jpg","./Images/sell/Mercedes.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=8",
   
    model: "<span>Model Number</span>: Porsche 2022",
    madeIn: "<span>Made In</span>: Italy",
    enginePower: "<span>Engine Power</span>: 500hp",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-Speed",
    charger: "<span>Charger</span>: NO",
    mileageInCity: "<span>Mileage In City</span>: TBC",
    fuelType: "<span>Fuel Type</span>: Gasoline",
},{
    id: "9",
    name : "Mercedes",
    image : ["./Images/sell/Mercedes.jpg","./Images/sell/Porsche.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=9",
    model: "<span>Model Number</span>: Benz GLS 580 4MATIC 202",
    madeIn: "<span>Made In</span>: American",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: Turbo",
    mileageInCity: "<span>Mileage In City</span>: 16-np",
    fuelType: "<span>Fuel Type</span>: Premium unleaded gasoline",
},{
    id: "10",
    name : "Ford Fusion",
    image : ["./Images/sell/ford fusion.jpg","./Images/sell/Porsche.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=10",
    model: "<span>Model Number</span>: MC20 2022",
    madeIn: "<span>Made In</span>: Italy",
    enginePower: "<span>Engine Power</span>: 255 hp @ 5000 rpm",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-Speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: 16 MPG",
    fuelType: "<span>Fuel Type</span>: Premium",
},
{
    id: "11",
    name : "Honda Accord",
    image : ["./Images/sell/Honda-Accord-Hybrid-Sport-2022.jpg","./Images/sell/Porsche.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=11",
    model: "<span>Model Number</span>: F-Type P450 R-Dynamic Convertible 2023",
    madeIn: "<span>Made In</span>: America",
    enginePower: "<span>Engine Power</span>: 818 hp",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: 84 MPG",
    fuelType: "<span>Fuel Type</span>: Plug in Hybrid",
},{
    id: "12",
    name : "Jeep",
    image : ["./Images/sell/jeep.png","./Images/sell/Porsche.jpg","./Images/sell/Ram.jpg"],
    href: "description.html?id=12",
    model: "<span>Model Number</span>: NX 450h+ Plug-in Hybrid F SPORT 2022",
    madeIn: "<span>Made In</span>: Lexes (Toyota) motor",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: Yes",
    mileageInCity: "<span>Mileage In City</span>: 23 MPG",
    fuelType: "<span>Fuel Type</span>: Premium",
},{
    id: "13",
    name : "Ram",
    image : "./Images/sell/Ram.jpg",
    image : ["./Images/sell/Ram.jpg","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=13",
    model: "<span>Model Number</span>: 296 GTB 2023",
    madeIn: "<span>Made In</span>: Maranello",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: NO",
    mileageInCity: "<span>Mileage In City</span>: TBC",
    fuelType: "<span>Fuel Type</span>: Gasoline",
},{
    id: "14",
    name : "Rolls Royce",
    image : ["./Images/sell/Rolls Royce.jpg","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=14",
    model: "<span>Model Number</span>: 430i xDrive Gran Coupe 2022",
    madeIn: "<span>Made In</span>: Germany",
    enginePower: "<span>Engine Power</span>: 818 hp",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: 84 MPG",
    fuelType: "<span>Fuel Type</span>: Plug in Hybrid",
},{
    id: "15",
    name : "Suzuki",
    image : ["./Images/sell/Suzuki.jpg","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=15",
    model: "<span>Model Number</span>: F-Type P450 R-Dynamic Convertible 2023",
    madeIn: "<span>Made In</span>: America",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: Yes",
    mileageInCity: "<span>Mileage In City</span>: 23 MPG",
    fuelType: "<span>Fuel Type</span>: Premium",
},{
    id: "16",
    name : "Tesla",
    image : ["./Images/sell/tesla.jpg","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=16",
    model: "<span>Model Number</span>: NX 450h+ Plug-in Hybrid F SPORT 2022",
    madeIn: "<span>Made In</span>: Lexes (Toyota) motor",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: no ",
    mileageInCity: "<span>Mileage In City</span>: ",
    fuelType: "<span>Fuel Type</span>: ",
},{
    id: "17",
    name : "Toyota Corolla",
    image : ["./Images/sell/Toyota Corolla.png","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=17",
    model: "<span>Model Number</span>: Urus 2023",
    madeIn: "<span>Made In</span>: Italy",
    enginePower: "<span>Engine Power</span>: 818 hp",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-speed",
    charger: "<span>Charger</span>: NO",
    mileageInCity: "<span>Mileage In City</span>: TBC",
    fuelType: "<span>Fuel Type</span>: Gasoline",
},{
    id: "18",
    name : "Volvo",
    image : ["./Images/sell/volvo v60.jpg","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=18",
    model: "<span>Model Number</span>: 296 GTB 2023",
    madeIn: "<span>Made In</span>: Maranello",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: 84 MPG",
    fuelType: "<span>Fuel Type</span>: Plug in Hybrid",
},{
    id: "19",
    name : "Nissan",
    image : ["./Images/rent/Nissan.webp","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=19",
    model: "<span>Model Number</span>: ",
    madeIn: "<span>Made In</span>: American",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: Yes",
    mileageInCity: "<span>Mileage In City</span>: 23 MPG",
    fuelType: "<span>Fuel Type</span>: Premium",
},{
    id: "20",
    name : "Land Cruiser",
    image : ["./Images/rent/land cruiser mark 2.jpg","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=20",
    model: "<span>Model Number</span>: NX 450h+ Plug-in Hybrid F SPORT 2022",
    madeIn: "<span>Made In</span>: Lexes (Toyota) motor",
    enginePower: "<span>Engine Power</span>: 818 hp",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-speed",
    charger: "<span>Charger</span>: NO",
    mileageInCity: "<span>Mileage In City</span>: TBC",
    fuelType: "<span>Fuel Type</span>: Gasoline",
},{
    id: "21",
    name : "Toyota Hiace",
    image : ["./Images/rent/toyota hiace.jpg","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=21",
    model: "<span>Model Number</span>: 430i xDrive Gran Coupe 2022",
    madeIn: "<span>Made In</span>: Germany",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: 84 MPG",
    fuelType: "<span>Fuel Type</span>: Plug in Hybrid",
},{
    id: "22",
    name : "Volkswagen",
    image : ["./Images/rent/Volkswagen pasat.jpg","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=22",
    model: "<span>Model Number</span>: Urus 2023",
    madeIn: "<span>Made In</span>: Italy",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: ",
    fuelType: "<span>Fuel Type</span>: ",
},{
    id: "23",
    name : "Toyota Tacoma",
    image : ["./Images/rent/Toyota Tacoma.jpg","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=23",
    model: "<span>Model Number</span>: 296 GTB 2023",
    madeIn: "<span>Made In</span>: Maranello",
    enginePower: "<span>Engine Power</span>: 818 hp",
    driveType: "<span>Drive Type</span>: All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 8-speed",
    charger: "<span>Charger</span>: NO",
    mileageInCity: "<span>Mileage In City</span>: TBC",
    fuelType: "<span>Fuel Type</span>: Gasoline",
},{
    id: "24",
    name : "Hyundai",
    image : ["./Images/rent/Hyundai sonata.webp","./Images/sell/jeep.png","./Images/sell/Porsche.jpg"],
    href: "description.html?id=24",
    model: "<span>Model Number</span>: 430i xDrive Gran Coupe 2022",
    madeIn: "<span>Made In</span>: Germany",
    enginePower: "<span>Engine Power</span>: 483 hp @ 5,500 rpm",
    driveType: "<span>Drive Type</span>: 4MATIC fully variable All-Wheel Drive",
    gearBox: "<span>Gear Box</span>: 16-speed",
    charger: "<span>Charger</span>: yes",
    mileageInCity: "<span>Mileage In City</span>: 84 MPG",
    fuelType: "<span>Fuel Type</span>: Plug in Hybrid",
}
]

// function slider(e){
//     const nextBtn=document.querySelector(".slider--section-one__forward");
//     const image=document.querySelector(".select-car__image")
//     let counter=1;
//     console.log("dani")
//     nextBtn.addEventListener('click', () => {
//         image.setAttribute("src", e[counter]);
//         counter++;
//         if (counter > e.length - 1){
//             counter = 0;
//         }
//     });
// }

   
function getID(){
    let para = new URLSearchParams(window.location.search);
    let pass = parseInt(para.get("id"));
    console.log(pass)
    let selectedProduct=products[pass-1];
    console.log(selectedProduct.image)

    let images=selectedProduct.image;
    // slider(images)
    const name=document.querySelector(".name");
    const selectImg=document.querySelectorAll(".image");
    const desc1=document.getElementById("one");
    const desc2=document.getElementById("two");
    const desc3=document.getElementById("three");
    const desc4=document.getElementById("four");
    const desc5=document.getElementById("five");
    const desc6=document.getElementById("six");
    const desc7=document.getElementById("seven");
    const desc8=document.getElementById("eight");

    name.innerHTML=selectedProduct.name;
    let i=0;
    selectImg.forEach((e)=>{
        e.src = selectedProduct.image[i];
        i++;
    })
   
    desc1.innerHTML=selectedProduct.model; 
    desc2.innerHTML=selectedProduct.madeIn;
    desc3.innerHTML=selectedProduct.enginePower;
    desc4.innerHTML=selectedProduct.driveType;
    desc5.innerHTML=selectedProduct.gearBox;
    desc6.innerHTML=selectedProduct.charger;
    desc7.innerHTML=selectedProduct.mileageInCity;
    desc8.innerHTML=selectedProduct.fuelType;

}

document.getElementById("search").addEventListener("search",search1);
console.log("dan")

function search1(){
    const products = document.querySelectorAll(".products");
    console.log(document.getElementById("search").value)
    const value = document.getElementById("search").value.toLowerCase().trim();

    Array.prototype.forEach.call(products, product => {
        console.log(product.firstElementChild.firstElementChild.nextElementSibling.firstElementChild)
        let child=product.firstElementChild.firstElementChild.nextElementSibling.firstElementChild;
        
        if (!child.innerHTML.toLowerCase().includes(value)){
            product.style.display = 'none';
        }
        else {
            product.style.display = "block";
        }
    })
}
document.querySelector(".search-btn").addEventListener("click",search1);

function create(el) {
    console.log("dani")
    const sellCars=document.querySelector(".sell-cars") ;
    const rentCars=document.querySelector(".rent-cars") ;
    let div=document.createElement("div");    
    let img=document.createElement("img");
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");
    let a=document.createElement("a");
    let btn=document.createElement("button");

    div.appendChild(img);
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    div.appendChild(a);
    a.appendChild(btn);

    div.classList.add("product");
    img.classList.add("product__images");
    div1.classList.add("product__name");
    div2.classList.add("product__description");
    div3.classList.add("product__description");
    div4.classList.add("product__description");
    btn.classList.add("product__loading-more");

    img.src=el.image[0];
    div1.innerHTML=el.name;
    div2.innerHTML=el.model;
    div3.innerHTML=el.Engine;
    div4.innerHTML=el.Money;
    btn.innerHTML="View Detail"
    a.href=el.href
    let input=document.getElementById("search");
    if (input.name==="search"){
        sellCars.appendChild(div);
    } else{
        rentCars.appendChild(div);
    }
   
    

}






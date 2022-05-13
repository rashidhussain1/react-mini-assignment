import { CastRounded } from "@material-ui/icons";

const carlist=[
{
    id:1,
    name:"BMW iX - Electric 72kwh",
    seat:"5 seat",
    door:"4 doors",
    range:"120/miles",
    charging:"50 kw",
    drive:"front",
    avl:"12.10.2022",
    color:"Titanium Grey",
    speed:"140 mph",
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpOOoTjikg9GS512jToEWQgktSA55ltNlFJZVhGJFDqN28D2u_5Po1RKP0zpXB2U8ndI&usqp=CAU",
    efficiency:"17kWh/miles",
    rate:"400"
},
{
    id:2,
    name:"Audi e-tron GT 68kwh",
    seat:"4 seat",
    door:"4 doors",
    range:"140/miles",
    charging:"75 kw",
    drive:"front",
    avl:"12.10.2022",
    color:"Matte Red",
    speed:"160 mph",
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpvAhayzyEplNqc9h_5zhOr6g-LG9UJGRVcq5jKUDIuqpNtlKHneoxwygU8CPmLx_mBY&usqp=CAU",
    efficiency:"18kWh/miles",
    rate:"380"
},
{
    id:3,
    name:"Tesla Model-S 75kwh",
    seat:"2 seat",
    door:"2 doors",
    range:"150/miles",
    charging:"100 kw",
    avl:"12.10.2022",
    drive:"front",
    color:"Pearl White",
    speed:"180 mph",
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8oGCRimfcNK5AEprmbf5JsVDYCqUZhMMHmHls4PjGTdRrhgnNiaFxNsEQVTuI4Ng3ys&usqp=CAU",
    efficiency:"27kWh/miles",
    rate:"420"
}
]

export function getCars(){
    return carlist;
}

export function getCar(id){
    return carlist.find((c)=>c.id == id)
}
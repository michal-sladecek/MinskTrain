import items from '../consts/items'

const levels = [
    {
        "id": 1,
        "objective": "Pripocitaj jedna k prvemu vagonu",
        "hint": "Vlak vzdy prichadza z lava na lave horne policko, a ked vyjde z mapy predpokladame ze su splnene podmienky",
        "allowed": [items.RAILS, items.ADD_ONE]
    },
    {
        "id": 2,
        "objective": "Odpocitaj jedna k prvemu vagonu",
        "hint": "Vsimni si, co si dostal :)",
        "allowed": [items.RAILS, items.ADD_ONE, items.SUB_ONE]
    },
    {
        "id": 3,
        "objective": "V prvom vozni musi byt na konci 0",
        "hint": "Po vyhybkach vlak pojde rovno, ak je v danom vozni 0, inac pojde do strany",
        "allowed": [items.RAILS, items.ADD_ONE, items.SUB_ONE, items.SWITCHES]
    },
]

export default levels
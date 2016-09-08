const levelsDefault =  [
        {
            'id': 0,
            'objective': 'Pripocitaj jedna k prvemu vagonu',
            'hint': 'Vlak vzdy prichadza z lava na lave horne policko, a ked vyjde z mapy predpokladame ze su splnene podmienky',
            'allowed': ['rails']
        },
        {
            'id': 1,
            'objective': 'Odpocitaj jedna k prvemu vagonu',
            'hint': 'Vsimni si, co si dostal :)',
            'allowed': ['rails']
        },
        {
            'id': 2,
            'objective': 'V prvom vozni musi byt na konci 0',
            'hint': 'Po vyhybkach vlak pojde rovno, ak je v danom vozni 0, inac pojde do strany',
            'allowed': ['rails', 'switches']
        },
        {
            'id': 3,
            'objective': 'V tretom vozni ma byt sucet prvych dvoch',
            'hint': 'Vlak vzdy prichadza z lava na lave horne policko, a ked vyjde z mapy predpokladame ze su splnene podmienky',
            'allowed': ['rails', ]
        },
        {
            'id': 4,
            'objective': 'Vymen cisla v prvom a druhom vozni',
            'hint': 'Vsimni si, co si dostal :)',
            'allowed': ['rails',]
        },
        {
            'id': 5,
            'objective': 'Pohraj sa :)',
            'hint': 'Po vyhybkach vlak pojde rovno, ak je v danom vozni 0, inac pojde do strany',
            'allowed': ['rails', 'switches']
        }
    ]

export default levelsDefault
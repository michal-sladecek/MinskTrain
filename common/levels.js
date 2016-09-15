const levelsDefault =  [
        {
            'id': 0,
            'objective': 'Pripocitaj jedna k vagonu A (ak mas problemy, pozri hint)',
            'hint': 'Az spustite hru, na plan pride vlak. Vlak vzdy prichadza zlava na lave horne policko, a ked vyjde z mapy predpokladame ze su splnene podmienky. \
                     Vlak chodi po kolajniciach, a v staniciach sa robia na vagonoch operacie. Chceme, aby az vyjde z mapy, mal vo vagone A o 1 viac ako ked zacal svoju cestu.\
                     Vy musite zlava vybrat potrebne kolajnice a postavit mu drahu.',
            'allowed': ['rails', 'stations', 'helpers'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[0]-oldTrain[0]===1)
            }
        },
        {
            'id': 1,
            'objective': 'Odpocitaj jedna k prvemu vagonu',
            'hint': 'Vsimni si, co si dostal :)',
            'allowed': ['rails', 'stations', 'helpers'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[0]-oldTrain[0]===-1)
            }
        },
        {
            'id': 2,
            'objective': 'V prvom vozni musi byt na konci 0',
            'hint': 'Po vyhybkach vlak pojde rovno, ak je v danom vozni 0, inac pojde do strany',
            'allowed': ['rails','stations', 'switches', 'helpers'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[0]===0)
            }
        },
        {
            'id': 3,
            'objective': 'V tretom vozni ma byt sucet prvych dvoch',
            'hint': 'Vlak vzdy prichadza z lava na lave horne policko, a ked vyjde z mapy predpokladame ze su splnene podmienky',
            'allowed': ['rails','stations', 'switches', 'helpers'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===oldTrain[0]+oldTrain[1])
            }
        },
        {
            'id': 4,
            'objective': 'Vymen cisla v prvom a druhom vozni',
            'hint': 'Vsimni si, co si dostal :)',
            'allowed': ['rails',],
            checker: function(oldTrain, newTrain) {
                return (oldTrain[1]===newTrain[0] && oldTrain[0]===newTrain[1])
            }
        },
    ]

export default levelsDefault
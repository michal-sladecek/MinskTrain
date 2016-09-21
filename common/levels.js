var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

const levelsDefault =  [
        {
            id: 0,
            objective: 'Vlacik musi prejst do koncovej stanice',
            hint: 'Kolajnice si vyberas v menu a potom ich pokladas na planik klikanim alebo tahanim.\
                Az budes mat vsetko hotove mozes si vlacik vyskusat tlacitkami v lokomotive.\
                Level sa ti zarata az ho posles na otestovanie',
            allowed: ['rails', 'helpers'],
            checker: () => {
                return true
            }
        },
        {
            id: 1,
            objective: 'Pripocitaj 1 k vagonu A a odpocitaj 1 od vagonu B',
            hint: 'Mas novu stanicu. Po polozeni stanice sa ta hra spyta, od akeho vagona chces odpocitat alebo pripocitat 1',
            allowed: ['rails', 'stations', 'helpers'],
            checker: (oldTrain, newTrain) => {
                return ((newTrain[0]===oldTrain[0]+1)&&(newTrain[1]===oldTrain[1]-1))
            }
        },
        {
            id: 2,
            objective: 'Vynuluj vozen A',
            hint: 'Dostal si vyhybky, vyhybky sa ta tiez spytaju na vagon.\
                 Ked vlacik pride na vyhybku tak pojde rovno ak v tomt vagone bude 0.',
            allowed: ['rails','stations', 'switches', 'helpers'],
            checker: (oldTrain, newTrain) => {
                return (newTrain[0]===0)
            }
        },
        {
            id:3,
            objective: 'Zmen cislo vo vagone B na cislo z vagona A',
            hint: 'Podobne ako v predoslej.',
            allowed: ['rails','stations', 'switches', 'helpers'],
            checker: (oldTrain, newTrain) => {
                return (newTrain[1]===oldTrain[0])
            }
        },
        {
            id: 4,
            objective: 'Scitaj cisla vo vozni A a B a vysledok daj do vozna C.',
            hint: 'Dostal si novu stanicu, tato stanica zmeni cislo v jednom vagone na cislo z druheho vagonu',
            allowed: ['rails','stations', 'switches','setters', 'helpers'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===oldTrain[0]+oldTrain[1])
            }
        },
        {
            id: 5,
            objective: 'Odcitaj cislo vo vozni A od cisla vo vozni B a vysledok daj do vozna C.',
            hint: 'Dostal si novu stanicu, tato stanica zmeni cislo v jednom vagone na cislo z druheho vagonu',
            allowed: ['rails','stations', 'switches', 'setters', 'helpers'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===oldTrain[1]-oldTrain[0])
            }
        },
        {
            id: 6,
            objective: 'Vynasob cisla vo vozni A a B a vysledok daj do C',
            hint: 'Opat si dostal nove stanice, jedna spocita cisla v dvoch voznoch a vysledok da do tretieho, ta druha odpocita.',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===oldTrain[0]*oldTrain[1])
            }
        },
        {
            id: 7,
            objective: 'Vydel cislo vo vozni A cislom vo vozni B a vysledok daj do C. Ak A nedeli B, tak chceme najvacsie take cislo x, ze x*B<=A',
            hint: '',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===oldTrain[0]/oldTrain[1])
            }
        },
        {
            id: 8,
            objective: 'Vydel cislo vo vozni A cislom vo vozni B a zvysok po deleni daj do vozna C',
            hint: '',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===oldTrain[0]%oldTrain[1])
            }
        },
        {
            id: 9,
            objective: 'Daj do vozna C najvacsieho spolocneho delitela A a B',
            hint: 'Poznas Euklidov algoritmus?',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===gcd(oldTrain[0],oldTrain[1]))
            }
        },
    ]

export default levelsDefault
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

const levelsDefault =  [
        {
            id: 0,
            objective: 'Vláčik sa musí dostať do konečnej stanice',
            hint: 'Na ľavej strane hry máš menu, kde si môžeš vyberať koľajnice.\
            Tieto koľajnice následne môžeš pokladať na plochu. Až bude trať vystavaná, môžeš vláčik spustiť a pozrieť si jeho cestu,\
            a to pomocou tlačítok hore v lokomotíve.',
            allowed: ['rails', 'helpers'],
            title: 'Tutoriál',
            checker: () => {
                return true
            }
        },
        {
            id: 1,
            objective: 'Pripočítaj 1 k vagónu A',
            hint: 'Ak si pozorne pozrieš menu, všímneš si, že ti pribudli nové koľajnice. Tieto koľajnice obsahujú stanice, kde \
            sa nakladajú alebo vykladajú vozne. Keď stanicu pokladáš, spýta sa ťa, ktorý vozeň má nakladať alebo vykladať.\
            Stanica s pluskom pripočíta jeden k danému vozňu a stanica s mínuskom zasa odpočíta jeden.',
            allowed: ['rails', 'stations', 'helpers'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            title: 'Stanice',
            checker: (oldTrain, newTrain) => {
                return (newTrain[0]===oldTrain[0]+1)
            }
        },
        {
            id: 2,
            objective: 'Vynuluj vozen A',
            hint: 'Dostal si výhybky, výhybky, rovnako ako stanice, sa pýtajú na vagón keď ich pokladáš..\
                 Keď sa vláčik dostane na výhybky tak odbočí ak sa v tomto vozni nenachádza práve 0.\
                Výhybky tiež môžeš používať na spájanie dvoch koľají, ak na ne vlak príde z opačnej strany.\
                Dávaj si pozor, v tejto úlohe musíš vynulovať vozeň A, nech je na začiatku v ňom hocijaké číslo.\
                Aby si si to mohol preskúšať, po kliknutí na vozeň si do neho môžeš zadať hocijaké číslo.',
            title: 'Výhybky',
            beforeTestCase: (oldTrain) => {
                for(let i=1;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            allowed: ['rails','stations', 'switches', 'helpers'],
            checker: (oldTrain, newTrain) => {
                return (newTrain[0]===0)
            }
        },
        {
            id:3,
            objective: 'Zmeň číslo vo vagóne B na číslo z vagóna A a zachovaj hodnotu vo vagóne A.',
            hint: 'Dávaj si pozor, v B môže byť na začiatku hocičo.',
            title: 'Zmeň',
            allowed: ['rails','stations', 'switches', 'helpers'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            checker: (oldTrain, newTrain) => {
                return (newTrain[1]===oldTrain[0] && newTrain[0] === oldTrain[0])
            }
        },
        {
            id: 4,
            objective: 'Sčítaj čísla vo vozňoch A a B a výsledok daj do vozňa C.',
            hint: 'Nová stanica (n), robí jednoduchú operáciu - napíšeš vozeň ktorý bude brať a vozeň do ktorého bude dávať.\
             Ona nakopíruje hodnotu z prvého vozňa do druhého.',
            allowed: ['rails','stations', 'switches','setters', 'helpers'],
            title: 'Sčítaj',
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===oldTrain[0]+oldTrain[1])
            }
        },
        {
            id: 5,
            objective: 'Odčítaj číslo vo vozni A od čísla vo vozni B a výsledok daj do vozňa C',
            hint: '',
            allowed: ['rails','stations', 'switches', 'setters', 'helpers'],
            title: 'Odčítaj',
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return (oldTrain[1] >= oldTrain[0])
            },
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===oldTrain[1]-oldTrain[0])
            }
        },
        {
            id: 6,
            objective: 'Vynásob čísla vo vozňoch A a B a výsledok daj do C',
            hint: 'Nové stanice - obe zoberú 3 znaky vagónov, a prvá sčíta hodnoty z dvoch vagónov a výsledok dá do tretieho.\
            Druhá zasa odčítava.',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            title: 'Vynásob',
            checker: function(oldTrain, newTrain) {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return (newTrain[2]===oldTrain[0]*oldTrain[1])
            }
        },
        {
            id: 7,
            objective: 'Vydeľ číslo vo vozni A číslom vo vozni B a výsledok daj do C. Ak A nedelí B, tak chceme najväčšie také číslo x, ze x*B<A',
            hint: '',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            title: 'Delenie',
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return (oldTrain[1] != 0)
            },
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===Math.floor(oldTrain[0]/oldTrain[1]))
            }
        },
        {
            id: 8,
            objective: 'Daj do C zvyšok A po delení B',
            hint: '',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            title: 'Zvyšok',
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return (oldTrain[1] != 0)
            },
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===oldTrain[0]%oldTrain[1])
            }
        },
        {
            id: 9,
            objective: 'Daj do C najväčšieho spoločného deliteľa A a B',
            hint: '',
            title: 'Najväčší spoločný deliteľ',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus', 'muldivmod'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            checker: function(oldTrain, newTrain) {
                return (newTrain[2]===gcd(oldTrain[0],oldTrain[1]))
            }
        },
    ]

export default levelsDefault
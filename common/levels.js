var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

const levelsDefault = {
        A1: {
            id: 'A1',
            points: 1,
            group: 'A',
            objective: 'Vláčik musí prejsť do koncovej stanice',
            hint: 'Pozri si tutoriál :)',
            allowed: ['rails', 'helpers'],
            checker: () => {
                return true
            }
        },
        A2: {
            id: 'A2',
            points: 1,
            group: 'A',
            objective: 'Pripočítaj 1 k vozňu A a odpočítaj 1 od vozňa B (ak je neprázdny)',
            hint: 'Určite si si pozrel(a) tutoriál?',
            allowed: ['rails', 'stations', 'helpers'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return (oldTrain[1] > 0)
            },
            checker: (oldTrain, newTrain) => {
                return ((newTrain[0]===oldTrain[0]+1)&&(newTrain[1]===Math.max(oldTrain[1]-1, 0)))
            }
        },
        A3: {
            id: 'A3',
            points: 1,
            group: 'A',
            objective: 'Vynuluj vozeň A',
            hint: 'Pozrieť si tutoriál je naozaj dôležité.',
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
        A4: {
            id: 'A4',
            points: 3,
            group: 'A',
            objective: 'Zmeň číslo vo vagóne B na číslo z vagóna A',
            hint: 'Najskôr si B vynuluj. Potom skús vynulovať aj A ale rob pritom ešte niečo naviac.',
            allowed: ['rails','stations', 'switches', 'helpers'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            checker: (oldTrain, newTrain) => {
                return (newTrain[1]===oldTrain[0])
            }
        },
        A5: {
            id: 'A5',
            points: 4,
            group: 'A',
            objective: 'Zdvojnásob číslo vo vagóne A',
            hint: 'Už vieš presúvať. Najskôr si teda presuň A niekam preč. Vieš ho presunúť späť dvakrát?',
            allowed: ['rails','stations', 'switches', 'helpers'],
            beforeTestCase: (oldTrain) => {
                for(let i=1;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            checker: (oldTrain, newTrain) => {
                return (newTrain[0]===2*oldTrain[0])
            }
        },
        A6: {
            id: 'A6',
            points: 3,
            group: 'A',
            objective: 'Sčítaj čísla vo vozňoch A a B a výsledok ulož do vozňa C.',
            hint: 'Aj tu sa ti presúvanie celkom hodí. Možno však treba viac krát.',
            allowed: ['rails','stations', 'switches','setters', 'helpers'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            checker: (oldTrain, newTrain) => {
                return (newTrain[2]===oldTrain[0]+oldTrain[1])
            }
        },
        A7: {
            id: 'A7',
            points: 2,
            group: 'A',
            objective: 'Odčítaj číslo vo vozni A od čísla vo vozni B a výsledok ulož do vozňa C. Ak je číslo vo vozni A väčšie, výsledok je nula.',
            hint: 'Toto by už malo byť ľahké.',
            allowed: ['rails','stations', 'switches', 'setters', 'helpers'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            checker: (oldTrain, newTrain) => {
                return (newTrain[2]===Math.max(0, oldTrain[1]-oldTrain[0]))
            }
        },
        B1: {
            id: 'B1',
            points: 3,
            group: 'B',
            objective: 'Vynásob čísla vo vozňoch A a B a výsledok ulož do vozňa C',
            hint: 'Sčítavať už vieš priamo stanicou. Ako nám to ale pomôže k násobeniu?',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            checker: (oldTrain, newTrain) => {
                return (newTrain[2]===oldTrain[0]*oldTrain[1])
            }
        },
        B2: {
            id: 'B2',
            points: 3,
            group: 'B',
            objective: 'Vydel číslo vo vozni A číslom vo vozni B a výsledok ulož do vozňa C. Výsledok zaokrúhli nadol.',
            hint: 'Koľkokrát sa B nachádza v A?',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return (oldTrain[1] != 0)
            },
            checker: (oldTrain, newTrain) => {
                return (newTrain[2]===Math.floor(oldTrain[0]/oldTrain[1]))
            }
        },
        B3: {
            id: 'B3',
            points: 4,
            group: 'B',
            objective: 'Nájdi zvyšok po delení čísla vo vozni A číslom vo vozni B a ulož ho do vozňa C',
            hint: 'Všimni si že znova delíme. Len nás zaujíma iné číslo',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return (oldTrain[1] != 0)
            },
            checker: (oldTrain, newTrain) => {
                return (newTrain[2]===oldTrain[0]%oldTrain[1])
            }
        },
        B4: {
            id: 'B4',
            points: 5,
            group: 'B',
            objective: 'Daj do vozňa C najvačšieho spoločného deliteľa vozňov A a B',
            hint: 'Poznáš Euklidov algoritmus?',
            allowed: ['rails','stations', 'switches', 'helpers', 'setters', 'plusminus', 'muldivmod'],
            beforeTestCase: (oldTrain) => {
                for(let i=2;i<oldTrain.length;++i){
                    oldTrain[i]=0
                }
                return true
            },
            checker: (oldTrain, newTrain) => {
                return (newTrain[2]===gcd(oldTrain[0], oldTrain[1]))
            }
        },
    }


export default levelsDefault
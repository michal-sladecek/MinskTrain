# MinskTrain
Educational game

## Switch behaviour
Switches are written in form "ABC", id. Behaviour:
If vagon[id] == 0 and train comes from A, it will go to C
If vagon[id] != 0 and train comes from A, it will go to B
If comes from B or C, it will go to A

## Adding new stations
When adding new station, you must register it in:
* client/components/items/items.js  Here belongs svg 40x40 icon of the station
* client/components/items/forms.js  Form to show to player when adding tool
* common/items/items.js  Here belongs the behaviour of the tool when train passes by it
* reducers/data/game.js  Tools that user gets
* reducers/buildStation.js    Actions to perform in reducer when building station
* messages/tooltips.js      Tooltip to show when hovering over station
* common/levels.js    In which level user gets the item

##Next tasks
* Klikanie na menu je tazkopadne
* Pri zmene levela nevidno ze sa zmenil (zmeni sa popis aj url, ale mapa sa neresetne)
* Nikde nevidno ze sa da na vlaciky kliknut
* Menu vyzera hrozne, zisli by sa nejake styly
* Napovedu treba tiez nastylovat

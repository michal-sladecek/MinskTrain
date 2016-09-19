# MinskTrain
Educational game

## Switch behaviour
Switches are written in form "ABC", id. Behaviour:
If vagon[id] == 0 and train comes from A, it will go to C
If vagon[id] != 0 and train comes from A, it will go to B
If comes from B or C, it will go to A

## Adding new stations
When adding new station, you must register it in:
1. client/components/items/items.js -> Here belongs svg 40x40 icon of the station
2. common/items/items.js -> Here belongs the behaviour of the tool when train passes by it
3. reducers/data/game.js -> Tools that user gets
4. reducers/buildStation.js
5. messages/tooltips.js

##Tasks for 13.-15.
-Add frontend to testing (fetching and results)

-Make tooltips, everything should be much more intuitive
-Add plus/minus/divide/multiply stations                            H   (O)
-Design animation path to look nice
-Vytvor napovedu
-Center game grid
-Group levels by serie                                              M   (O)

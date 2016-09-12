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

##Tasks for 12.-18.
-Create the missing switches                                        E   (V)
-Refactor reducers/game.js, especially train moving                 M   (V)
-Animate movement                                                   H   (V)
-Make ids for switches and stations chosable                        H   (V)
-Add pause functionality                                            M   (O)
-Group levels by serie                                              M   (O)

-Add plus/minus/divide stations                                     H   (O)
-Design train to look nice                                          H   (V)
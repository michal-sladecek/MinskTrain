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

##Tasks for 13.-15.
-Group levels by serie                                              M   (O)


-Animate movement                                                   H   (V)
    -Fix pause functionality                                            M   (O)

-Add plus/minus/divide/multiply stations                            H   (O)
-Design train to look nice                                          H   (V)
-Fix errors to be more intuitive                                    E
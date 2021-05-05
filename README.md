# PlaceValueQuantities

This is an e-learning game intended to teach childeren basics of Mathematics i.e Unit, Tens and Hundered.
Click on this link to play the game https://kreedo-education.github.io/PlaceValueQuantities/
To play on android mobile download place-value-quantities.apk and install it.

### DATA Transfer from App to Game and vice - versa ###
This is a two way communication [App to Game  & Game to App].

Following things need to be taken care to achieve our data capture properly:-

1. The data format used for communication will be JSON.
2. Initial data fields will be coming from app to start the game.
3. The game will accept this data and then initialize game's varibale with the data recieved.
4. The game will have to send the data to app each time the game make any progress/update.

There are two types of game's builds avilable for now: - 
1. Unity Build 
2. Construct3 Build

## 1. Unity Build
 We will be looking into all four tasks one by one. 
 
 These are some steps that need to be followed for initial setup for Unity build
 
 1. Generate the WebGL build.
 2. Open index.html in any text editor.
 3. Add an event listener to listen for the data coming from app's webview.
 4. Create two javascript functions in the index.html to SendDataToUnity and to GetDataFromUnity.

Now come our tasks:
### Data Format ###
  The app will send the data in the JSOn format.
  This is sample data format:-
 ``` {
   "data":{
      "GameName":"Place VAlue Quantities",
      "GameID":"GL_PVQ",
      "ChildID":"CHILD_01",
      "AttemptID":"ATPT_01",
      "RewardPoints":0,
      "isMusic":1,
      "Level0":{
         "Completed":0,
         "StartTime":"Wed May 05 2021 10:04:59 GMT+0530 (India Standard Time)",
         "EndTime":"",
         "PlayCount":0
      },
      "Level1":{
         "PresentationDone":0,
         "Completed":0,
         "PlayCount":0,
         "CurrentPlay":0,
         "CorrectAttempts":0,
         "IncorrectAttempts":0
      },
      "Level2":{
         "PresentationDone":0,
         "Completed":0,
         "PlayCount":0,
         "CurrentPlay":0,
         "CorrectAttempts":0,
         "IncorrectAttempts":0
      },
      "Level3":{
         "PresentationDone":0,
         "Completed":0,
         "PlayCount":0,
         "CurrentPlay":0,
         "CorrectAttempts":0,
         "IncorrectAttempts":0
      },
      "Level4":{
         "PresentationDone":0,
         "Completed":0,
         "PlayCount":0,
         "CurrentPlay":0,
         "CorrectAttempts":0,
         "IncorrectAttempts":0
      }
   }
}
```

### Data Listener ###
Initial data fields will be coming from app to start the game. To catch the data comming from App's webview a listener will be required.
 Add this listener in index.html file.
 ```
 function handleEvent(message) {
       alert(message.data);
   
 }
	 
document.addEventListener("message", handleEvent);  
    ```


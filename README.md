# PlaceValueQuantities

This is an e-learning game intended to teach childeren basics of Mathematics i.e Unit, Tens and Hundered.
Click on this link to play the game https://kreedo-education.github.io/PlaceValueQuantities/
To play on android mobile download place-value-quantities.apk and install it.

### DATA Transfer from App to Game and vice - versa ###
This is a two way communication [App to Game  & Game to App].

Following things need to be taken care to achieve our data capture properly:-

1. Data Format
2. Data Listeners
3. Initialize the Game's Varibales.
4. Send the data to app.

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

Now come to our tasks:
### Data Format ###
  The app will send the data in the JSOn format.
  This is sample data format:-
 ``` 
 {
   "data":{
      "gameName":"Place VAlue Quantities",
      "gameId":"GL_PVQ",
      "childId":"CHILD_01",
      "attemptId":"ATPT_01",
      "rewardPoints":0,
      "isMusic":1,
      "level0":{
         "completed":0,
         "startDate":"",
         "endDate":"",
         "playCount":0
      },
      "level1":{
         "presentationDone":0,
         "completed":0,
         "playCount":0,
         "currentPlay":0,
         "correctAttempts":0,
         "incorrectAttempts":0
      },
      "level2":{
         "presentationDone":0,
         "completed":0,
         "playCount":0,
         "currentPlay":0,
         "correctAttempts":0,
         "incorrectAttempts":0
      },
      "level3":{
         "presentationDone":0,
         "completed":0,
         "playCount":0,
         "currentPlay":0,
         "correctAttempts":0,
         "incorrectAttempts":0
      },
      "level4":{
         "presentationDone":0,
         "completed":0,
         "playCount":0,
         "currentPlay":0,
         "correctAttempts":0,
         "incorrectAttempts":0
      }
   }
}
```

### Data Listener ###
Initial data fields will be coming from app to start the game. To catch the data comming from App's webview a listener will be required.
 Add this listener in index.html file.
 ```
 var messageData; // To stire the data arived from app
 function handleEvent(message) {
       //alert(message.data);  
       messageData = message.data;
       //use this data to initialize game variables once the loading of game has finished.
 }	 
document.addEventListener("message", handleEvent);  
 ```


### Initialize Game's Varibales ###
The game will accept this data and then initialize game's varibale with the data recieved, Once the data has arived from app to game, we can assign those to our game varibles. 
For this, we create an variable called messageData and a function in index.html 'sendDataToUnity(data) '

```
// Added by UBS team
var messageData;
// call this function to unity
function SendDataToUnity(data) {
	// Don't change this line.
	gameInstance.SendMessage("Canvas","DoSomething",data);
}
```

Call this function once game finishes the loading.
```
//If unity finished loading
if (progress === 1 && !gameInstance.removeTimeout) 
{
	//Hide the preloader with a delay
	gameInstance.removeTimeout = setTimeout(function() 
	{
		//Hide the preloader
		preLoader.style.display = "none"		
		SendDataToUnity(messageData);
	}, 500);
}
```
Important:  gameInstance.SendMessage("Canvas","DoSomething",data);
:- this line will take data to Unity and then Unity code i.e C# will catch this message and initialize all varibales accordingly.


### Send The Data To App ###
The game will have to send the data back to the app each time the game make any progress/update.
Before we send the data to App we need bring the updated data from game to index.html then push the data to app.

1. To bring data from Unity, we create a function getDataFromUnity(data)
2. To push data to app we write these lines  in the same function. **window.ReactNativeWebView.postMessage(arg)**
 Code - snippet
```
// get data from unity Don't change name of it. 
function GetDataFromUnity( arg )
{
	  console.log("called ", arg);
	  if (window && window.ReactNativeWebView) {
		window.ReactNativeWebView.postMessage(arg) // pushes the data to app
	  }
//   alert( arg );
}
```



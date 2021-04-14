
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	const url_string =window.location.href;
	const url = new URL(url_string);
	const jsonStr = url.searchParams.get("json");
	console.log("json string::",jsonStr);
	
	if(jsonStr){
		const gameJson = JSON.parse(jsonStr);
		runtime.globalVars.GameID = gameJson.id;
		runtime.globalVars.ChildID = gameJson.childId;
		runtime.globalVars.GameName = gameJson.name;
		runtime.globalVars.AttemptID = gameJson.attemptId;
	}
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	console.log("OnBeforeProjectStart", window.location);
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

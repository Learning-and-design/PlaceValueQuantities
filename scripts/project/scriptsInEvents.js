"use strict";

export class AppInterface  {

	static showToast(msg){
        console.log('showToast', msg);
		if(typeof(Android)!="undefined")
         Android.showToast(msg);
	}
	static sendToApp(data){		
		let jsonTxt = JSON.stringify(data);
		console.log("send to app",jsonTxt);
		if(typeof(Android)!="undefined")
			Android.showData(jsonTxt);
	}
}

{
	const scriptsInEvents = {

		async Egame_Event1_Act8(runtime, localVars)
		{
			if(localStorage.getItem(runtime.globalVars.GameID+"_"+runtime.globalVars.ChildID)===null){
			runtime.goToLayout("Tutorial");
			}
			
			else{
			
				var jsonTxt = localStorage.getItem(runtime.globalVars.GameID+"_"+runtime.globalVars.ChildID);
			
				var jObj = JSON.parse(jsonTxt);
				runtime.globalVars.RewardPoints = jObj.RewardPoints;
			    //Presenation level
				runtime.globalVars.PresentationDone = jObj.Level0.Completed;	
			    runtime.globalVars.L0_START_TIME = jObj.Level0.StartTime;
				runtime.globalVars.L0_END_TIME = jObj.Level0.EndTime;
				runtime.globalVars.L0_PLAY_COUNT = jObj.Level0.PlayCount;
				runtime.globalVars.isMusic = jObj.isMusic;
			
				//set level 1 global vars
				runtime.globalVars.L1TutorialDone = jObj.Level1.PresentationDone;
				runtime.globalVars.L1_TotalTrial = jObj.Level1.PlayCount;
				runtime.globalVars.L1_trial = jObj.Level1.CurrentPlay;
				runtime.globalVars.L1_Completed = jObj.Level1.Completed;
				runtime.globalVars.L1_correctAttempts = jObj.Level1.CorrectAttempts;
				runtime.globalVars.L1_IncorrectAttempts = jObj.Level1.IncorrectAttempts;
			
				//set level 2 global vars
				runtime.globalVars.L2TutorialDone = jObj.Level2.PresentationDone;
				runtime.globalVars.L2_TotalTrial = jObj.Level2.PlayCount;
				runtime.globalVars.L2_trial = jObj.Level2.CurrentPlay;
				runtime.globalVars.L2_Completed = jObj.Level2.Completed;
				runtime.globalVars.L2_correctAttempts = jObj.Level2.CorrectAttempts;
				runtime.globalVars.L2_IncorrectAttempts = jObj.Level2.IncorrectAttempts;
			
					runtime.globalVars.L3TutorialDone = jObj.Level3.PresentationDone;
				runtime.globalVars.L3_TotalTrial = jObj.Level3.PlayCount;
				runtime.globalVars.L3_trial = jObj.Level3.CurrentPlay;
				runtime.globalVars.L3_Completed = jObj.Level3.Completed;
				runtime.globalVars.L3_correctAttempts = jObj.Level3.CorrectAttempts;
				runtime.globalVars.L3_IncorrectAttempts = jObj.Level3.IncorrectAttempts;
			
					runtime.globalVars.L4TutorialDone = jObj.Level4.PresentationDone;
				runtime.globalVars.L4_TotalTrial = jObj.Level4.PlayCount;
				runtime.globalVars.L4_trial = jObj.Level4.CurrentPlay;
				runtime.globalVars.L4_Completed = jObj.Level4.Completed;
				runtime.globalVars.L4_correctAttempts = jObj.Level4.CorrectAttempts;
				runtime.globalVars.L4_IncorrectAttempts = jObj.Level4.IncorrectAttempts;
				
				if(!jObj.Level0.Completed){
			
					runtime.goToLayout("Tutorial");
					return;
				}
				for(let i=1; i<=4 ;i++){
					if(!eval("runtime.globalVars.L"+i+"TutorialDone")){
						runtime.goToLayout("Level"+i+"_Tutorial");
						return;
					}
					else if(!eval("runtime.globalVars.L"+i+"_Completed")){
						runtime.goToLayout("Level"+i);
					}
				}
			
			}
			
		},

		async Egame_Event4_Act1(runtime, localVars)
		{
			var data = {
			GameName:runtime.globalVars.GameName,
			GameID:runtime.globalVars.GameID,
			ChildID: runtime.globalVars.ChildID,
			AttemptID:runtime.globalVars.AttemptID,
			RewardPoints: runtime.globalVars.RewardPoints,
			isMusic: runtime.globalVars.isMusic,
				Level0:{										Completed:runtime.globalVars.PresentationDone,
				StartTime: runtime.globalVars.L0_START_TIME,
				EndTime: runtime.globalVars.L0_END_TIME,
				PlayCount: runtime.globalVars.L0_PLAY_COUNT
				
			},
				Level1: {PresentationDone: runtime.globalVars.L1TutorialDone, Completed:runtime.globalVars.L1_Completed, PlayCount: runtime.globalVars.L1_TotalTrial, CurrentPlay: runtime.globalVars.L1_trial, CorrectAttempts: runtime.globalVars.L1_correctAttempts, IncorrectAttempts: runtime.globalVars.L1_IncorrectAttempts},
			
			Level2:{PresentationDone: runtime.globalVars.L2TutorialDone, Completed:runtime.globalVars.L2_Completed, PlayCount: runtime.globalVars.L2_TotalTrial,
			CurrentPlay: runtime.globalVars.L2_trial, CorrectAttempts: runtime.globalVars.L2_correctAttempts, IncorrectAttempts: runtime.globalVars.L2_IncorrectAttempts},
			
			Level3:{PresentationDone: runtime.globalVars.L3TutorialDone, Completed:runtime.globalVars.L3_Completed, PlayCount: runtime.globalVars.L3_TotalTrial, CurrentPlay: runtime.globalVars.L3_trial, CorrectAttempts: runtime.globalVars.L3_correctAttempts, IncorrectAttempts: runtime.globalVars.L3_IncorrectAttempts},
			
			Level4:{PresentationDone: runtime.globalVars.L4TutorialDone, Completed:runtime.globalVars.L4_Completed, PlayCount: runtime.globalVars.L4_TotalTrial,CurrentPlay: runtime.globalVars.L4_trial, CorrectAttempts: runtime.globalVars.L4_correctAttempts, IncorrectAttempts: runtime.globalVars.L4_IncorrectAttempts}
			
			}
			
			var json = JSON.stringify(data);
			
			localStorage.setItem(runtime.globalVars.GameID+"_"+runtime.globalVars.ChildID, json);
			AppInterface.sendToApp(data);
		},

		async Egame_Event20_Act1(runtime, localVars)
		{
			
		},

		async Etutorial_Event4_Act2(runtime, localVars)
		{
				for(let i=1; i<=4 ;i++){
					if(!eval("runtime.globalVars.L"+i+"TutorialDone")){
						runtime.goToLayout("Level"+i+"_Tutorial");
						return;
					}
					else if(!eval("runtime.globalVars.L"+i+"_Completed")){
						runtime.goToLayout("Level"+i);
					}
				}
			
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}

export class AppInterface  {

	static showToast(msg){
		let jsonToast = {};
			jsonToast.toast = msg;
        console.log('showToast', jsonToast);
		   if (window && window.ReactNativeWebView) {
		   
			window.ReactNativeWebView.postMessage(jsonToast);
		}
		
	}
	static sendToApp(data){		
		let json_str = JSON.stringify(data);
		console.log("Send data to Webview", json_str);
		if (window && window.ReactNativeWebView) {
			window.ReactNativeWebView.postMessage(json_str);
		}
		
// 		alert(data.completed);
	}
}





const scriptsInEvents = {

		async Egame_Event1_Act8(runtime, localVars)
		{
			console.log("_______"+runtime.globalVars.GameLevel)
			if(runtime.globalVars.GameLevel == 0) runtime.goToLayout("Tutorial");
			else if(eval("runtime.globalVars.L"+runtime.globalVars.GameLevel+"TutorialDone")){
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel)
			}
			else{
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel+"_Tutorial");
			}
			
		},

		async Egame_Event11_Act1(runtime, localVars)
		{
			// if(runtime.globalVars.IsWeb)
			localStorage.setItem("pvq-data", JSON.stringify(runtime.getInstanceByUid(486).getJsonDataCopy()));
			if(localVars.sendtoapp)
			AppInterface.sendToApp(runtime.getInstanceByUid(486).getJsonDataCopy());
		},

		async Egame_Event34_Act1(runtime, localVars)
		{
			
		},

		async Egame_Event45_Act1(runtime, localVars)
		{
			localStorage.setItem("pvq-data", JSON.stringify(runtime.getInstanceByUid(486).getJsonDataCopy()));
			console.log(runtime.getInstanceByUid(486).getJsonDataCopy())
		},

		async Egame_Event46_Act4(runtime, localVars)
		{
			AppInterface.sendToApp(runtime.getInstanceByUid(488).getJsonDataCopy());
		},

		async Ehud_Event85_Act1(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
			document.getElementsByTagName("html")[0].style.background = colors[level];
			
			
		},

		async Etutorial_Event4_Act4(runtime, localVars)
		{
			if(eval("runtime.globalVars.L"+runtime.globalVars.GameLevel+"TutorialDone")){
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel)
			}
			else{
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel+"_Tutorial");
			}
			
		},

		async Etutorial_Event5_Act1(runtime, localVars)
		{
			if(eval("runtime.globalVars.L"+runtime.globalVars.GameLevel+"TutorialDone")){
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel)
			}
			else{
			runtime.goToLayout("Level"+runtime.globalVars.GameLevel+"_Tutorial");
			}
			
		},

		async Elevel1_Event70_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem("pvq-data"));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(486).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic
			
			
			runtime.globalVars.L1_Tutorial_TimeSpent = data.levelDetails.level1.presentation.timeSpent;
			runtime.globalVars.L1_TutorialCount = data.levelDetails.level1.presentation.playCount;
			runtime.globalVars.L1_Tutorial_Completed_Count = data.levelDetails.level1.presentation.completedCount;
			runtime.globalVars.L1_TutorialDone= data.levelDetails.level1.presentation.completed;
			
		},

		async Elevel1_tutorial_Event1_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
		},

		async Elevel2_tutorial_Event1_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
		},

		async Elevel2_Event116_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem("pvq-data"));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(486).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic
			
			runtime.globalVars.L2_Tutorial_TimeSpent = data.levelDetails.level2.presentation.timeSpent;
			runtime.globalVars.L2_TutorialCount = data.levelDetails.level2.presentation.playCount;
			runtime.globalVars.L2_Tutorial_Completed_Count = data.levelDetails.level2.presentation.completedCount;
			runtime.globalVars.L2_TutorialDone= data.levelDetails.level2.presentation.completed;
			
		},

		async Elevel3_tutorial_Event1_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
		},

		async Elevel3_Event104_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem("pvq-data"));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(486).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic
			
			runtime.globalVars.L3_Tutorial_TimeSpent = data.levelDetails.level3.presentation.timeSpent;
			runtime.globalVars.L3_TutorialCount = data.levelDetails.level3.presentation.playCount;
			runtime.globalVars.L3_Tutorial_Completed_Count = data.levelDetails.level3.presentation.completedCount;
			runtime.globalVars.L3_TutorialDone= data.levelDetails.level3.presentation.completed;
			
		},

		async Elevel4_tutorial_Event1_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
		},

		async Elevel4_Event87_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem("pvq-data"));
			runtime.getInstanceByUid(486).setJsonDataCopy(data);
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.globalVars.isMusic = data.isMusic
			
			runtime.globalVars.L4_Tutorial_TimeSpent = data.levelDetails.level4.presentation.timeSpent;
			runtime.globalVars.L4_TutorialCount = data.levelDetails.level4.presentation.playCount;
			runtime.globalVars.L4_Tutorial_Completed_Count = data.levelDetails.level4.presentation.completedCount;
			runtime.globalVars.L4_TutorialDone= data.levelDetails.level4.presentation.completed;
			
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;


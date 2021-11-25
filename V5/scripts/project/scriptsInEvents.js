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

		async Etutorial_Event1_Act4(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
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

		async Elevel1_Event1_Act2(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
		},

		async Elevel1_Event70_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem("pvq-data"));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(486).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic
			
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

		async Elevel2_Event1_Act3(runtime, localVars)
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
			
		},

		async Elevel3_tutorial_Event1_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
		},

		async Elevel3_Event1_Act3(runtime, localVars)
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
			
		},

		async Elevel4_tutorial_Event1_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
		},

		async Elevel4_Event1_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			let colors = ["rgb(179, 209, 171)", "rgb(203, 243, 253)", "rgb(210, 227, 247)", "rgb(202, 232, 202)", "rgb(185, 136, 76)"  ]
			document.body.style.backgroundColor = colors[level];
		},

		async Elevel4_Event87_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem("pvq-data"));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(486).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;


// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');
const app = require('../service/app');
const detect = require('detect-port');

//vscode.window.showTextDocument


async function getPort (index = 0) {
	const ports = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 3000, 3001, 3002, 4001, 4002, 5001, 5112, 5333];
	const newPort = await detect(ports[index]);
	if(newPort === ports[index]) {
		return newPort;
	}
	else {
		return getPort(index+1);
	}

}

const currWorkspacePath = vscode.workspace.workspaceFolders[0].uri.fsPath;

async function runWebview (webview, context) {
	const port = await getPort();
	app.set('port', port);
	var server = app.listen(port, function() {
  
	});
	webview.html = getWebViewContent(`http://127.0.0.1:${port}/web`, currWorkspacePath);
}


function getWebViewContent(baseUrl, aa) {
  return `<!doctype html><html lang="zh-cn" style="margin:0;padding:0;height:100%;"><head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>VIZ组件库</title>
	<body style="margin:0;padding:0;height:100%;">
	${aa}
	<iframe src="${baseUrl}" width="100" height="100%" frameborder="0" style={border:none;}></iframe>
	<script>
	const vscode = acquireVsCodeApi();

	window.addEventListener('message', function (e) {
		try {
			let data = JSON.parse(e.data)
			setTimeout(function() {
				vscode.postMessage({
					command: 'alert',
					text: e.data,
				})
			}, 5000);
			
		} catch (error) {
			console.log(error)
		}
	})
	
	
	</script>
	
	
	</body></html>
  `;
}

// function getWebViewContent(baseUrl, fileUrl) {
//   return `<!doctype html><html lang="zh-cn"><head>
// 	<meta charset="utf-8"/>
// 	<meta name="viewport" content="width=device-width,initial-scale=1">
// 	<title>VIZ组件库</title>
// 	<body style="background: #fff">
// 	<div style="position:absolute; top: 20px;left: 50%; width:100px; height:100px;border:1px solid #000;"></div>
// 	<script type="text/javascript" src="${baseUrl}/a.js"></script>

// 	图片：
// 	<img src="${baseUrl}/icon/favicon.png" />
// 	<script>
// 	const vscode = acquireVsCodeApi();
// 	setTimeout(function() {
// 		vscode.postMessage({
// 			command: 'alert',
// 			text: 'aaa',
// 		})
// 	}, 5000);
	
// 	</script>
// 	sdfsfdsfdsfds
	
	
// 	</body></html>
//   `;
// }

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "icode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('icode.icodeEdit', function () {
		// The code you place here will be executed every time your command is executed
		
		// Display a message box to the user
		const panel = vscode.window.createWebviewPanel(
			'icodeEdit',
			'Icode 编辑器',
			vscode.ViewColumn.One, // web view 显示位置
			{
				enableCommandUris: true,
			//localResourceRoots: true,
				enableForms: true,
				enableScripts: true, // 允许 JavaScript
				retainContextWhenHidden: true // 在 hidden 的时候保持不关闭
			}
		);

		runWebview(panel.webview, context);
		panel.webview.onDidReceiveMessage(
			message => {
				switch (message.command) {
					case 'alert':
						vscode.window.showErrorMessage(message.text);
						return;
				}
			},
			undefined,
			context.subscriptions
		);

	});


	let disposableB = vscode.commands.registerCommand('icode.icodeNew', function () {
		// The code you place here will be executed every time your command is executed
		
		// Display a message box to the user
		const panel = vscode.window.createWebviewPanel(
			'icodeNew',
			'Icode 编辑器',
			vscode.ViewColumn.One, // web view 显示位置
			{
				enableCommandUris: true,
			//localResourceRoots: true,
				enableForms: true,
				enableScripts: true, // 允许 JavaScript
				retainContextWhenHidden: true // 在 hidden 的时候保持不关闭
			}
		);

		runWebview(panel.webview, context);
		panel.webview.onDidReceiveMessage(
			message => {
				switch (message.command) {
					case 'alert':
						vscode.window.showErrorMessage(message.text);
						return;
				}
			},
			undefined,
			context.subscriptions
		);

	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableB);



}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

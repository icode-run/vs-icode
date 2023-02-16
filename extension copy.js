// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

// function getWebViewContent(baseUrl, fileUrl) {
//   return `<!doctype html><html style="margin:0;padding: 0;" lang="zh-cn"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"><title></title><script defer="defer" src="https://icode-run.github.io/icodeRun/index104ccc88caf7d1939c8a.js?104ccc88caf7d1939c8a"></script><script defer="defer" src="https://icode-run.github.io/icodeRun/remoteEntry.js?104ccc88caf7d1939c8a"></script></head><body style="margin:0;padding: 0;"><div id="component-layout-root"></div><noscript>如果你看到这个提示，说明 <strong>您的浏览器没有启用 JavaScript</strong>, 请 <strong>开启 JS</strong>。</noscript></body></html>
//   `;
// }

function getWebViewContent(baseUrl, fileUrl) {
  return `<!doctype html><html style="margin:0;padding: 0;" lang="zh-cn"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"><title></title><script defer="defer" src="/a.js"></script></head><body style="margin:0;padding: 0;">sdddddd</body></html>
  `;
}

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
	let disposable = vscode.commands.registerCommand('icode.helloWorld', function () {
		let baseUrl = vscode.Uri.joinPath(context.extensionUri, 'resources');
		

		// Display a message box to the user
		const panel = vscode.window.createWebviewPanel(
			'helloWorld',
			'Hello world',
			vscode.ViewColumn.One, // web view 显示位置
			{
				enableCommandUris: true,
				//localResourceRoots: [vscode.Uri.joinPath(context.extensionPath, 'resources')],
				enableForms: true,
				enableScripts: true, // 允许 JavaScript
				retainContextWhenHidden: true // 在 hidden 的时候保持不关闭
			}
		);
		
		baseUrl = panel.webview.asWebviewUri(baseUrl);
		panel.webview.html = getWebViewContent(baseUrl);
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


		//const aaa = vscode.Uri;
		// const icodePath = __dirname;
		//vscode.window.showInformationMessage(context.workspaceState && context.workspaceState.rootPath);
	});

	context.subscriptions.push(disposable);



}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

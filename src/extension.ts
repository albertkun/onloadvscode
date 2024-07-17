import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "VSCodeOnLoad" is now active.');

    // Read the script path from the configuration
    const scriptPath = vscode.workspace.getConfiguration().get<string>('myExtension.scriptPath');

    if (scriptPath) {
        // Use the user's script path if it's set
        exec(`python "${scriptPath}"`, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Script execution error: ${error}`);
                return;
            }
            if (stdout) {
                vscode.window.showInformationMessage(`Script output: ${stdout}`);
            }
            if (stderr) {
                vscode.window.showErrorMessage(`Script error output: ${stderr}`);
            }
        });
    } else {
        vscode.window.showInformationMessage('No script path is set in the extension settings.');
    }
}

export function deactivate() {}
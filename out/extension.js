"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const child_process_1 = require("child_process");
function activate(context) {
    console.log('Extension "VSCodeOnLoad" is now active.');
    // Read the script path from the configuration
    const scriptPath = vscode.workspace.getConfiguration().get('myExtension.scriptPath');
    if (scriptPath) {
        // Use the user's script path if it's set
        (0, child_process_1.exec)(`python "${scriptPath}"`, (error, stdout, stderr) => {
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
    }
    else {
        vscode.window.showInformationMessage('No script path is set in the extension settings.');
    }
}
function deactivate() { }
//# sourceMappingURL=extension.js.map
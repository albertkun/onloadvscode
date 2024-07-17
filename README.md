# On Load VSCode README

Welcome to the README for the "On Load VSCode" extension. This extension is designed to run a specified script automatically when a Visual Studio Code workspace is loaded. It's a handy tool for developers who want to automate tasks such as setting up environment variables, starting servers, or any initial setup required for their development environment.

## Features

"On Load VSCode" allows you to specify a script within your workspace that runs every time you load the workspace in Visual Studio Code. This can significantly streamline your development workflow by automating repetitive setup tasks.

To use this feature, simply specify the path to your script in the extension settings. Here's an example of how to configure it:

\!\[Setting up the script path\]\(images/setup-script-path.png\)

> Tip: You can use any type of script (e.g., `.sh`, `.bat`, `.ps1`, `.js`) as long as your system is capable of executing it.

## Requirements

There are no specific requirements for this extension, other than having Visual Studio Code installed. However, the script you wish to run may have its own requirements or dependencies.

## Extension Settings

This extension contributes the following settings:

* `onLoadVSCode.scriptPath`: Set this to the path of the script you want to run on workspace load. The path is relative to the root of your workspace.

## Known Issues

Currently, there are no known issues. If you encounter any problems, please open an issue on the GitHub repository for this extension.

## License

This project is licensed under the [Do No Harm License](https://github.com/raisely/NoHarm). See the [LICENSE](LICENSE) file for more details.

## Release Notes

### 1.0.0

Initial release of "On Load VSCode".

- Feature: Run a specified script on workspace load.

---

## Following Extension Guidelines

We've made sure to adhere to the [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines) provided by Visual Studio Code, ensuring a high-quality, consistent experience for users.

## Working with Markdown

This README is authored in Markdown. You can use Visual Studio Code to edit and preview Markdown files efficiently with these shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For More Information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy automating your workspace setup with On Load VSCode!**
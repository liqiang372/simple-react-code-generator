// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import path from "path";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "simple-react-code-generator.generate",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage(
          "Open a file to generate a React component"
        );
        return;
      }

      const filePath = editor.document.fileName;
      const fileName = path.basename(filePath, path.extname(filePath));
      const componentName =
        fileName.charAt(0).toUpperCase() + fileName.slice(1);

      const componentSkeleton = `import React, { FC } from 'react';

export interface ${componentName}Props {
  className?: string;
}

export const ${componentName}: FC<${componentName}Props> = ({className}) => {
  return <div className={className}> ${componentName} Component </div> ;
};
`;

      const position = new vscode.Position(0, 0);
      editor.edit((editBuilder) => {
        editBuilder.insert(position, componentSkeleton);
      });
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

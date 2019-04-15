// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { TextPrompt } = require('botbuilder-dialogs');

// This is a custom TextPrompt that requires the input to be between 1 and 50 characters in length.
module.exports.NamePrompt = class NamePrompt extends TextPrompt {
    constructor(dialogId) {
        super(dialogId, async (prompt) => {
            if (!prompt.recognized.succeeded) {
                await prompt.context.sendActivity('Bitte trag deinen Namen ein.');
                return false;
            } else {
                const value = prompt.recognized.value;
                if (value.length < 1) {
                    await prompt.context.sendActivity('Dein Name muss aus mindestens einem Buchstaben bestehen.');
                    return false;
                } else if (value.length > 50) {
                    await prompt.context.sendActivity(`Entschuldigung, aber ein Name kann nicht mehr als 50 Zeichen enthalten. Dein Name ist ${ value.length } Zeichen lang.`);
                    return false;
                } else {
                    return true;
                }
            }
        });
    }
};
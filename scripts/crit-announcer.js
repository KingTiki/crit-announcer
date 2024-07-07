import { initSettings } from "./settings.js";

export let getLocString = key => {
    return game.i18n.localize(key);
};

export let getSetting = key => {
    return game.settings.get("crit-announcer", key);
};

Hooks.on("init", function () {
    initSettings()
});

Hooks.on('createChatMessage', (chatMessage) => {
    checkChatMessage(chatMessage)
})

/**
 * Checks a certain chatMessage if it is a dnd5e roll
 * @param {chatMessage} chatMessage - The chatMessage that triggered the Hook
 * @returns doing nothing if chatMessage is made by the GM, is not a roll or it has no dnd5e flag
 */
function checkChatMessage(chatMessage) {
    if (chatMessage.isRoll === false || chatMessage.flags.dnd5e === undefined || chatMessage.user.isGM) return
    let type = chatMessage.flags.dnd5e.roll.type;
    if ((type === 'attack' && getSetting("critShowAttackRolls") === true) ||
        (type === 'death' && getSetting("critShowDeathSaves") === true)) {
        evaluateDiceRoll(chatMessage, type)
    }
}

/**
 * Function to evaluate if a roll is eligible for an announcement
 * @param {chatMessage} chatMessage - Takes the appropriate chatMessage to evaluate further
 * @param {String} type - The type of roll ('attack' or 'death') 
 */
function evaluateDiceRoll(chatMessage, type) {
    if (chatMessage.rolls[0].isCritical === true) {
        foundry.audio.AudioHelper.play({ src: getSetting("crit." + type), volume: 0.8, loop: false }, true);
    } else if (chatMessage.rolls[0].isFumble === true) {
        foundry.audio.AudioHelper.play({ src: getSetting("fail." + type), volume: 0.8, loop: false }, true);
    }
}

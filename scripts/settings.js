import { getLocString } from "./crit-announcer.js";

export const initSettings = function () {
    let moduleId = "crit-announcer";

    game.settings.register(moduleId, "critShowAttackRolls", {
        name: getLocString("crit.ShowAttackRolls"),
		hint: getLocString("crit.ShowAttackRollsHint"),
        type: Boolean,
        scope: 'world',
        config: true,
    });

    game.settings.register(moduleId, "critShowDeathSaves", {
        name: getLocString("crit.ShowDeathSaves"),
		hint: getLocString("crit.ShowDeathSavesHint"),
        type: Boolean,
        scope: 'world',
        config: true,
    });

    game.settings.register(moduleId, "crit.attack", {
		name: getLocString("crit.chooseCriticalAttackSound"),
		hint: getLocString("crit.chooseCriticalAttackSoundHint"),
		scope: "world",
		config: true,
		default: "/modules/crit-announcer/sounds/success-fanfare-trumpets.mp3",
		type: String,
		filePicker: 'audio',
	});

    game.settings.register(moduleId, "fail.attack", {
		name: getLocString("crit.chooseFumbleAttackSound"),
		hint: getLocString("crit.chooseFumbleAttackSoundHint"),
		scope: "world",
		config: true,
		default: "/modules/crit-announcer/sounds/wah-wah-sad-trombone.wav",
		type: String,
		filePicker: 'audio',
	});

    game.settings.register(moduleId, "crit.death", {
		name: getLocString("crit.chooseCriticalDeathSound"),
		hint: getLocString("crit.chooseCriticalDeathSoundHint"),
		scope: "world",
		config: true,
		default: "/modules/crit-announcer/sounds/success-fanfare-trumpets.mp3",
		type: String,
		filePicker: 'audio',
	});

    game.settings.register(moduleId, "fail.death", {
		name: getLocString("crit.chooseFumbleDeathSound"),
		hint: getLocString("crit.chooseFumbleDeathSoundHint"),
		scope: "world",
		config: true,
		default: "/modules/crit-announcer/sounds/wah-wah-sad-trombone.wav",
		type: String,
		filePicker: 'audio',
	});
}


import { Scene } from '../../story-manager';

const ashfordJoy = `Lady Ashford rises, tears of joy in her eyes. "At last. The true heir returns to claim their birthright."`;

const loyalistJoy = `${ashfordJoy}`;

const seraphineKneels = `Seraphine approaches, kneeling formally before you. "Your Highness, the Loyalists pledge our complete support. We will restore the throne, honor the ancient traditions, and rebuild what was lost."`;

const seraphineVow = `${seraphineKneels}`;

const alliesConcerned = `But you notice reactions around the room: Sage looks crushed, Vale conflicted, Rowan uncertain. This choice has cost you some allies while gaining others.`;

const companionReactions = `${alliesConcerned}`;

const coronationPrep = `"The coronation must be prepared," Lady Ashford continues. "But first, we must secure the Crystal Heart fragments. With traditional authority restored, the magical races may be willing to negotiate. Come - there is much work ahead."`;

const loyalistNext = `${coronationPrep}`;

// LOYALIST PATH
export const LoyalistPathStart: Scene = {
	id: 'loyalist_path_start',
	text: `${loyalistJoy}

${seraphineVow}

${companionReactions}

${loyalistNext}`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { seraphine_trust: 20 } },
			text: `${loyalistJoy}

Seraphine's joy is personal, not just political. She rises and approaches, eyes shining. "Your Highness," she says formally, but then adds softly, "Thank you. For trusting me, for trusting us."

She kneels, but when she takes your hand, the gesture is more than ceremony. "I will serve you faithfully," she promises. "Not just as advisor, but as... whatever you need me to be."

${companionReactions}

${loyalistNext}`
		},
		{
			conditions: { hasFlags: ['assert:true', 'prideful_mistake:true'] },
			text: `${loyalistJoy}

${seraphineVow}

${companionReactions}

Lyra stands apart, expression cold. Your assertion of authority with the elves now creates complications. "The magical races will not negotiate simply because humans declare 'traditional authority,'" she says sharply before departing. "You have much to learn about diplomacy."

Your pride may have cost you vital allies.

${loyalistNext}`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_bond: 20 } },
			text: `${loyalistJoy}

${seraphineVow}

${companionReactions}

Rowan's uncertainty hurts more than the others. They step close, speaking quietly. "I respect your choice. But tradition... it hasn't always been kind to people like me. Like us." They squeeze your hand. "I'm with you regardless. Just... don't forget who you were before the crown."

Their loyalty despite their doubts means everything.

${loyalistNext}`
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Begin the path to restoration',
			next: 'crystal_hunt_start',
			effects: { courage: 2 },
			hiddenEffects: {
				loyalist_path_confirmed: true,
				seraphine_becomes_advisor: true
			}
		}
	]
};

const reformistApproval = `Council Member Dane nods approvingly. "A wise choice, Your Highness. Together, we will build something new - a kingdom where power comes from the people's voice."`;

const seraphineDisappointment = `But Seraphine looks disappointed, even hurt. Lady Ashford rises stiffly. "I hope you know what you're doing," she says coldly before departing.`;

const reformistPath = `Dane approaches. "The path of reform is difficult. Tradition dies hard. But with your bloodline lending legitimacy to democratic change, we can create lasting peace. First, we must show the people - and the magical races - that this new system works."`;

// REFORMIST PATH
export const ReformistPathStart: Scene = {
	id: 'reformist_path_start',
	text: `Sage's face lights up like the sun. ${reformistApproval}

Vale grins openly - their Reformist allegiance clear now. "This is the right choice," they whisper.

${seraphineDisappointment}

${reformistPath}`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { vale_trust: 25 } },
			text: `Vale's revelation about being a Reformist spy now makes perfect sense. They step forward, relief and joy on their face. "Thank you," they say quietly. "For choosing what's right, not what was easy. And for still trusting me after I told you the truth."

Sage beams, practically glowing. ${reformistApproval}

${seraphineDisappointment}

${reformistPath}`
		},
		{
			conditions: { hasFlags: ['sage_romance_seed:true', 'sage_affection:20'] },
			text: `Sage's joy is overwhelming. He rushes forward, then stops himself, blushing. "I... sorry, that was unprofessional." But his eyes shine with more than political victory. "You chose the people. You chose democracy. You chose..." He can't finish, too emotional.

${reformistApproval}

Vale grins, clearly picking up on Sage's feelings. "Smooth," they tease gently.

${seraphineDisappointment}

${reformistPath}`
		},
		{
			conditions: { hasHiddenAttributes: { seraphine_trust: 20 } },
			text: `Sage's face lights up like the sun. ${reformistApproval}

Vale grins openly - their Reformist allegiance clear now. "This is the right choice," they whisper.

But Seraphine's disappointment cuts deep. She approaches before leaving, voice low. "I thought... I hoped you would trust the old ways. Trust me." Her hurt is personal, not political. "I hope your new democracy can protect you as well as the Loyalists would have."

Seeing her pain makes you question if any choice is truly right.

${reformistPath}`
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Begin building the new democracy',
			next: 'meeting_sage',
			effects: { wisdom: 2 },
			hiddenEffects: {
				reformist_path_confirmed: true,
				sage_becomes_close_advisor: true
			}
		}
	]
};

const blackwoodSatisfaction = `General Blackwood's satisfied smile sends chills down your spine. "Pragmatic. Good. The kingdom needs strength, not sentiment."`;

const militaryHorror = `Sage looks horrified. "You're making a mistake," he says quietly before leaving. Vale's expression is carefully neutral, but you sense their disapproval.`;

const militaryPlan = `Blackwood approaches. "We'll start by consolidating military control over key regions. The Crystal Heart fragments can wait - first, we establish order. Then we'll deal with the political factions and magical races from a position of strength."`;

// MILITARY PATH
export const MilitaryPathStart: Scene = {
	id: 'military_path_start',
	text: `${blackwoodSatisfaction}

Captain Kieran shifts uncomfortably but says nothing. You catch a flash of disappointment in his eyes - he hoped you'd choose differently.

${militaryHorror}

${militaryPlan}`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { kieran_loyalty: 20 } },
			text: `${blackwoodSatisfaction}

Captain Kieran's disappointment is palpable. He catches your eye, and you see conflict there - loyalty to his uncle versus his growing feelings for you. He steps forward, voice carefully controlled.

"If this is your choice, I will serve faithfully," he says formally. Then, quieter, "But I hope you'll let me temper my uncle's methods with mercy. The kingdom needs strength, yes. But also compassion."

His request is both professional and personal.

${militaryHorror}

${militaryPlan}`
		},
		{
			conditions: { hasFlags: ['sparred_with_kieran:true', 'kieran_impressed:true'] },
			text: `${blackwoodSatisfaction}

Kieran meets your eyes, remembering your sparring match. He saw your skill, your tactical mind. "My uncle will use strength," he says carefully. "But you and I... we know there's more to leadership than force. Don't forget that."

It's a promise and a plea.

${militaryHorror}

${militaryPlan}`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_bond: 20 } },
			text: `${blackwoodSatisfaction}

Captain Kieran shifts uncomfortably but says nothing. You catch a flash of disappointment in his eyes - he hoped you'd choose differently.

Rowan's reaction is worse. "No," they say flatly. "I didn't guide you here to become a warlord's figurehead." They turn to leave, then stop. "I'm staying. But not for him. For you. To remind you who you are when his tactics start to feel normal."

Their loyalty comes with a warning.

${militaryHorror}

${militaryPlan}`
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Accept the military alliance',
			next: 'crystal_hunt_start',
			effects: { courage: 2 },
			hiddenEffects: {
				military_path_confirmed: true,
				kieran_conflicted: true
			}
		}
	]
};

const independentShock = `The room falls silent. All three faction leaders stare at you in shock.

"You refuse us all?" Lady Ashford asks, voice tight.`;

const independentDeclaration = `You stand firm. "I appreciate your offers, but I will not be bound to any single faction's agenda. The kingdom needs unity, not division. I will forge my own path - starting with the magical races who were here long before human politics."`;

const factionDeparture = `But the faction leaders depart coldly. Marcus looks worried. "You've just made yourself very alone, Your Highness. And very vulnerable."`;

const companionSupport = `Vale steps forward. "Not alone. Some of us believe in you, not factions." Ash nods agreement.

This path will be hardest - but it's yours.`;

// INDEPENDENT PATH
export const IndependentPathStart: Scene = {
	id: 'independent_path_start',
	text: `${independentShock}

${independentDeclaration}

Rowan grins openly. "Now THAT'S the spirit." Lyra nods with respect.

${factionDeparture}

${companionSupport}`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { lyra_respect: 15, rowan_bond: 20 } },
			text: `${independentShock}

${independentDeclaration}

Rowan's grin is fierce and proud. "Now THAT'S the spirit!" They step beside you, hand on their blade. "We'll forge this path together."

Lyra's respect is evident. "The elves will support this. You honor all peoples, not just human factions. This is wisdom."

Your bond with both has made this choice possible.

${factionDeparture}

${companionSupport}`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true', 'diplomatic_focus:true'] },
			text: `${independentShock}

${independentDeclaration}

Lyra steps forward immediately. "This is the choice I hoped for. The elves, dwarves, and dragons will listen now. You put the realm above politics."

Rowan nods approvingly. "Starting with the magical races - that's smart. They have power the factions can't match."

${factionDeparture}

But your early commitment to the magical races has prepared the ground for this.

${companionSupport}`
		},
		{
			conditions: { hasFlags: ['collaborative_leadership:true', 'values_all_perspectives:true'] },
			text: `${independentShock}

${independentDeclaration}

Your companions exchange glances - they saw this coming. Your pattern of seeking counsel, valuing all perspectives, pointed toward rejecting single-faction loyalty.

Rowan grins. "Knew you wouldn't let them box you in." Lyra nods with respect. "You will build something new. Something better."

${factionDeparture}

${companionSupport}`
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Begin forging your own coalition',
			next: 'crystal_hunt_start',
			effects: { courage: 3, wisdom: 2 },
			hiddenEffects: {
				independent_path_confirmed: true,
				companions_most_important: true
			}
		}
	]
};

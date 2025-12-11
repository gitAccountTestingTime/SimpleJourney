import { Scene } from '../../story-manager';

// LOYALIST PATH
export const LoyalistPathStart: Scene = {
	id: 'loyalist_path_start',
	text: `Lady Ashford rises, tears of joy in her eyes. "At last. The true heir returns to claim their birthright."

Seraphine approaches, kneeling formally before you. "Your Highness, the Loyalists pledge our complete support. We will restore the throne, honor the ancient traditions, and rebuild what was lost."

But you notice reactions around the room: Sage looks crushed, Vale conflicted, Rowan uncertain. This choice has cost you some allies while gaining others.

"The coronation must be prepared," Lady Ashford continues. "But first, we must secure the Crystal Heart fragments. With traditional authority restored, the magical races may be willing to negotiate.

 Come - there is much work ahead."`,
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

// REFORMIST PATH
export const ReformistPathStart: Scene = {
	id: 'reformist_path_start',
	text: `Sage's face lights up like the sun. Council Member Dane nods approvingly. "A wise choice, Your Highness. Together, we will build something new - a kingdom where power comes from the people's voice."

Vale grins openly - their Reformist allegiance clear now. "This is the right choice," they whisper.

But Seraphine looks disappointed, even hurt. Lady Ashford rises stiffly. "I hope you know what you're doing," she says coldly before departing.

Dane approaches. "The path of reform is difficult. Tradition dies hard. But with your bloodline lending legitimacy to democratic change, we can create lasting peace. First, we must show the people - and the magical races - that this new system works."`,
	choices: [
		{
			id: 'continue',
			text: 'Begin building the new democracy',
			next: 'crystal_hunt_start',
			effects: { wisdom: 2 },
			hiddenEffects: {
				reformist_path_confirmed: true,
				sage_becomes_close_advisor: true
			}
		}
	]
};

// MILITARY PATH
export const MilitaryPathStart: Scene = {
	id: 'military_path_start',
	text: `General Blackwood's satisfied smile sends chills down your spine. "Pragmatic. Good. The kingdom needs strength, not sentiment."

Captain Kieran shifts uncomfortably but says nothing. You catch a flash of disappointment in his eyes - he hoped you'd choose differently.

Sage looks horrified. "You're making a mistake," he says quietly before leaving. Vale's expression is carefully neutral, but you sense their disapproval.

Blackwood approaches. "We'll start by consolidating military control over key regions. The Crystal Heart fragments can wait - first, we establish order. Then we'll deal with the political factions and magical races from a position of strength."`,
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

// INDEPENDENT PATH
export const IndependentPathStart: Scene = {
	id: 'independent_path_start',
	text: `The room falls silent. All three faction leaders stare at you in shock.

"You refuse us all?" Lady Ashford asks, voice tight.

You stand firm. "I appreciate your offers, but I will not be bound to any single faction's agenda. The kingdom needs unity, not division. I will forge my own path - starting with the magical races who were here long before human politics."

Rowan grins openly. "Now THAT'S the spirit." Lyra nods with respect.

But the faction leaders depart coldly. Marcus looks worried. "You've just made yourself very alone, Your Highness. And very vulnerable."

Vale steps forward. "Not alone. Some of us believe in you, not factions." Ash nods agreement.

This path will be hardest - but it's yours.`,
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

import { Scene } from '../../story-manager';

const journeyToGrove = `The journey to Moonwhisper Grove takes two days through ancient forest. Trees here are older than kingdoms, their branches singing with subtle magic. The air itself feels alive.`;

const lyraAppearance = `An elf materializes from the shadows - tall, graceful, with silver hair that flows like water and luminous eyes that have seen centuries pass. She wears traditional robes adorned with nature symbols, and power radiates from her like heat from flame.`;

const lyraChallenge = `"So," she says, voice melodious but cold, "the lost human heir appears at last. I am Lyra Starsong, Keeper of the Ancient Ways." Her eyes assess you with millennium-old judgment. "My people remember human treachery. Give me reason why I should teach you anything."

Rowan steps forward. "Lyra, please. They're trying to help."

"Are they?" Lyra's gaze doesn't waver from you. "Or will they repeat their ancestors' mistakes?"`;

export const LyraArrival: Scene = {
	id: 'lyra_arrival',
	text: `${journeyToGrove}

${lyraAppearance}

${lyraChallenge}`,
	textVariants: [
		{
			conditions: { hasFlags: ['crystal_heart_priority:true', 'magical_focus:true'] },
			text: `${journeyToGrove}

Your focus on the Crystal Heart fragments drives every step of this journey. You know magical knowledge is essential.

${lyraAppearance}

She senses your purpose immediately. "You come seeking the Crystal Heart's secrets," she observes. "At least you understand priorities. The Heart's restoration affects all races, not just humans."

${lyraChallenge}`
		},
		{
			conditions: { hasFlags: ['unity_priority:true', 'political_focus:true'] },
			text: `${journeyToGrove}

Your commitment to unifying the factions has been clear, but you understand the elves must be part of that unity.

${lyraAppearance}

"Marcus tells me you seek to unite the human factions," Lyra says, studying you. "Admirable, if possible. But humans have fought amongst themselves for millennia while ignoring those who share this realm." Her tone is pointed. "Will you make the same mistake?"

${lyraChallenge}`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true', 'diplomatic_focus:true'] },
			text: `${journeyToGrove}

Your decision to prioritize the magical races has already reached elven ears - the forest whispers news.

${lyraAppearance}

But Seraphine has briefed her on your intentions. "Marcus tells me you wish to prioritize alliance with the magical races," Lyra says, studying you with less hostility than expected. "That shows wisdom humans rarely possess." 

Her expression softens fractionally. "My people have suffered from human short-sightedness for centuries. If you truly mean to change that pattern..." She pauses. "Then perhaps there is hope after all. Come. We have much to discuss."`
		},
		{
			conditions: { hasFlags: ['collaborative_leadership:true', 'values_all_perspectives:true'] },
			text: `${journeyToGrove}

Your willingness to seek counsel before deciding has impressed your advisors. Lyra has heard of this approach.

${lyraAppearance}

"Rowan speaks well of you," Lyra says, less hostile than you expected. "They say you listen before acting, consider before choosing. That is... unusual for young rulers." There's grudging respect in her voice. "Perhaps you are not your ancestors after all."

${lyraChallenge}`
		},
		{
			conditions: { hasHiddenAttributes: { blood_magic_training: true } },
			text: `${journeyToGrove}

${lyraAppearance}

When Lyra Starsong appears, her cold assessment shifts as she senses your awakening power.

"Interesting," she murmurs, circling you. "You've already begun to unlock your blood magic. Someone taught you - or perhaps the ancestral spirits guide you?" 

Her luminous eyes study your blood mark. "The royal magic runs strong in you. Stronger than I expected." For the first time, something like approval enters her voice. "Perhaps you are not entirely hopeless, young heir."

Still, wariness remains. "But power without wisdom is dangerous. Show me you possess both."`
		}
	],
	choices: [
		{
			id: 'humble',
			text: 'Show humble respect - you have much to learn from her',
			next: 'lyra_bonding_1',
			effects: { wisdom: 4, charisma: 2 },
			hiddenEffects: {
				lyra_respect: 15,
				learning_blood_magic: true,
				elf_relationship_started: true,
				cultural_humility: true,
				rowan_bond: 8
			}
		},
		{
			id: 'assert',
			text: 'Assert your authority as rightful heir',
			next: 'faction_choice_point',
			effects: { courage: 3 },
			hiddenEffects: {
				lyra_respect: -5,
				learning_blood_magic: true,
				elf_relationship_started: true,
				prideful_mistake: true,
				seraphine_trust: 5,
				rowan_bond: -5
			}
		},
		{
			id: 'ask-crystal',
			text: 'Ask about the Crystal Heart and how to restore it',
			next: 'lyra_bonding_1',
			effects: { wisdom: 5 },
			hiddenEffects: {
				lyra_respect: 10,
				learning_blood_magic: true,
				elf_relationship_started: true,
				serious_purpose: true,
				lyra_sees_dedication: true
			}
		},
		{
			id: 'rowan-help',
			text: 'Ask Rowan to help bridge the cultural gap',
			next: 'faction_choice_point',
			effects: { wisdom: 3, charisma: 3 },
			hiddenEffects: {
				lyra_respect: 12,
				learning_blood_magic: true,
				elf_relationship_started: true,
				rowan_bond: 15,
				team_approach: true,
				cultural_awareness: true
			}
		}
	]
};
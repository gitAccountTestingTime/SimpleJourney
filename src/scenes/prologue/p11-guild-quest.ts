import { Scene } from '../../story-manager';

const guildMasterIntro = `The Guild Master summons you the next morning. She's a stern woman with silver hair and knowing eyes.`;

const contractOffer = `"I have a contract for you," she says without preamble. "Investigate strange occurrences at Silverwood Manor.`;

const questIntroduction = `${guildMasterIntro} ${contractOffer}`;

const sealPresentation = `She slides a contract across the desk. The seal catches your eye - the same symbol that glows on your arm when your power awakens.`;

const questSeal = `${sealPresentation}`;

const fateCoincidence = `"Interesting coincidence, isn't it?" She watches you carefully. "Almost as if fate itself is pushing you toward answers."`;

export const GuildMastersRequest: Scene = {
	id: 'guild_masters_request',
	text: `After Whisper's revelations about your bloodline, the pieces are starting to come together. The royal blood. The abandoned manor in Silverwood. The reason you've always felt... different.

${questIntroduction} The local lord has abandoned it, but there are reports of... unusual activity."

${questSeal}

${fateCoincidence}`,
	textVariants: [
		{
			conditions: { hasFlags: ['ash_trust:20', 'whisper_first_impression:direct'] },
			text: `After Whisper's direct revelations about your bloodline, the pieces fell into place. The royal blood. The abandoned manor. Your destiny.

${questIntroduction}"

Before you can respond, Ash enters the room. "I'm going with them," the mercenary captain states firmly. "If this is about their heritage, they'll need someone watching their back. Someone they can trust."

The Guild Master nods approvingly. "Good. Whisper's information is rarely wrong, and you'll need allies for what's coming."

${questSeal}`
		},
		{
			conditions: { hasHiddenAttributes: { ash_trust: 20 } },
			text: `After Whisper's revelations about your bloodline, the pieces are starting to come together. The royal blood. The abandoned manor in Silverwood. The reason you've always felt... different.

${questIntroduction}"

Before you can respond, Ash enters the room. "I'm going with them," the mercenary captain states firmly. "If this is about their heritage, they'll need someone watching their back."

The Guild Master nods approvingly. "Good. You'll need allies for what's coming."

${questSeal}`
		},
		{
			conditions: { hasFlags: ['whisper_first_impression:cautious'] },
			text: `After Whisper's revelations, you're proceeding carefully. The information about your bloodline is explosive—royal blood, a fallen house, ancient magic. You need to verify everything.

${questIntroduction} The local lord has abandoned it, but there are reports of unusual activity."

${questSeal}

"Whisper thought you might be cautious about this," she says approvingly. "Smart. But sometimes fate demands action despite our doubts."`
		},
		{
			conditions: { hasFlags: ['player_owes_whisper:true'] },
			text: `After Whisper's revelations—and the debt you now owe them—the path forward is clear. They gave you information about your bloodline, and now it's time to pay the price: investigate Silverwood.

${questIntroduction} The local lord has abandoned it, but there are reports of unusual activity."

${questSeal}

"Whisper suggested you'd accept this contract," she says with a knowing look. "They have a talent for predicting such things."`
		}
	],
	choices: [
		{
			id: 'eager',
			text: 'I\'ll leave immediately',
			next: 'road_to_silverwood',
			effects: { courage: 3 },
			hiddenEffects: {
				guild_master_impressed: true,
				quest_accepted_eager: true,
				'preparation_level:minimal': true
			}
		},
		{
			id: 'prepared',
			text: 'I\'ll need time to prepare and gather supplies',
			next: 'road_to_silverwood',
			effects: { wisdom: 3 },
			hiddenEffects: {
				quest_accepted_prepared: true,
				'preparation_level:thorough': true,
				supplies: 20
			}
		},
		{
			id: 'companions',
			text: 'I\'d like to bring companions with me',
			next: 'vale_bonding_1',
			effects: { charisma: 2 },
			hiddenEffects: {
				quest_accepted_with_group: true,
				'preparation_level:group': true,
				vale_joining: true,
				rook_joining: true
			}
		},
		{
			id: 'questions',
			text: 'Tell me everything you know about Silverwood Manor first',
			next: 'road_to_silverwood',
			effects: { wisdom: 4 },
			hiddenEffects: {
				quest_accepted_informed: true,
				guild_master_respect: true,
				'preparation_level:informed': true,
				silverwood_knowledge: true
			}
		}
	]
};

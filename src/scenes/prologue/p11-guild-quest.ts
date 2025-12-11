import { Scene } from '../../story-manager';

export const GuildMastersRequest: Scene = {
	id: 'guild_masters_request',
	text: `After Whisper's revelations about your bloodline, the pieces are starting to come together. The royal blood. The abandoned manor in Silverwood. The reason you've always felt... different.

The Guild Master summons you the next morning. She's a stern woman with silver hair and knowing eyes. "I have a contract for you," she says without preamble. "Investigate strange occurrences at Silverwood Manor. The local lord has abandoned it, but there are reports of... unusual activity."

She slides a contract across the desk. The seal catches your eye - the same symbol that glows on your arm when your power awakens. 

"Interesting coincidence, isn't it?" She watches you carefully. "Almost as if fate itself is pushing you toward answers."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 20 }
			},
			text: `After Whisper's revelations about your bloodline, the pieces are starting to come together. The royal blood. The abandoned manor in Silverwood. The reason you've always felt... different.

The Guild Master summons you the next morning. She's a stern woman with silver hair and knowing eyes. "I have a contract for you," she says without preamble. "Investigate strange occurrences at Silverwood Manor."

Before you can respond, Ash enters the room. "I'm going with them," the mercenary captain states firmly. "If this is about their heritage, they'll need someone watching their back."

The Guild Master nods approvingly. "Good. You'll need allies for what's coming." She slides a contract across the desk. The seal catches your eye - the same symbol that glows on your arm when your power awakens.`
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
				preparation_level: 'minimal'
			}
		},
		{
			id: 'prepared',
			text: 'I\'ll need time to prepare and gather supplies',
			next: 'road_to_silverwood',
			effects: { wisdom: 3 },
			hiddenEffects: {
				quest_accepted_prepared: true,
				preparation_level: 'thorough',
				supplies: 20
			}
		},
		{
			id: 'companions',
			text: 'I\'d like to bring companions with me',
			next: 'road_to_silverwood',
			effects: { charisma: 2 },
			hiddenEffects: {
				quest_accepted_with_group: true,
				preparation_level: 'group',
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
				preparation_level: 'informed',
				silverwood_knowledge: true
			}
		}
	]
};

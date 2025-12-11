import { Scene } from '../../story-manager';

export const BanditEncounter: Scene = {
	id: 'bandit_encounter',
	text: `The forest ambush site is eerily quiet. You find the bandits' camp, but something is wrong—these aren't hardened criminals. They're families with children, refugees with hollow eyes and torn clothes.

A woman steps forward, hand raised in peace. "Please, we don't want trouble. Our village was destroyed by Shadow Beasts. We're just trying to survive."

Vale whispers from beside you, "They're telling the truth. I can sense their desperation. But the village expects justice..."`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { personality_seed: 'brave' } },
			text: `The forest ambush site is eerily quiet. Your courage brought you here, but now you face an unexpected truth. These aren't hardened criminals—they're families with children, refugees with hollow eyes and torn clothes.

A woman steps forward, hand raised in peace. "Please, we don't want trouble. Our village was destroyed by Shadow Beasts. We're just trying to survive."

Vale whispers from beside you, "They're telling the truth. I can sense their desperation. Your bravery got us here, but what will you do with it?"`
		}
	],
	choices: [
		{
			id: 'fight-them',
			text: 'They broke the law—bring them to justice by force',
			next: 'first_shadow_beast',
			effects: { courage: 2, reputation: -3 },
			hiddenEffects: {
				first_moral_choice: 'ruthless',
				ruthlessness: 5,
				compassionate_actions: -1
			}
		},
		{
			id: 'negotiate',
			text: 'Negotiate a peaceful solution',
			next: 'first_shadow_beast',
			effects: { wisdom: 3, charisma: 2, reputation: 5 },
			hiddenEffects: {
				first_moral_choice: 'diplomatic',
				compassionate_actions: 3,
				vale_trust: 10
			}
		},
		{
			id: 'help-them',
			text: 'Offer to help them find legitimate work in Thornhaven',
			next: 'first_shadow_beast',
			effects: { charisma: 3, reputation: 8 },
			hiddenEffects: {
				first_moral_choice: 'compassionate',
				compassionate_actions: 5,
				vale_trust: 15,
				vale_romance: 10
			}
		},
		{
			id: 'turn-in',
			text: 'Turn them over to authorities—let the law decide',
			next: 'first_shadow_beast',
			effects: { wisdom: 2 },
			hiddenEffects: {
				first_moral_choice: 'lawful',
				ruthlessness: 2
			}
		}
	]
};

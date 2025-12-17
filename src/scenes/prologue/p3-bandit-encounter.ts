import { Scene } from '../../story-manager';

const forestQuiet = `The group slowly closes in around the bandits' camp, prepared to launch an ambush at your signal. As you approach and get a better view of the camp though, you begin to notice that something isn't adding up quite right.

The forest ambush site is eerily quiet. You find the bandits' camp, but something is wrong...these aren't hardened criminals. They're families with children, refugees with hollow eyes and torn clothes.

Clearly others of your group have noticed too, as murmurs ripple through the volunteers. The bandits look desperate, not dangerous.

Some members of your volunteer forces begin to stand up, and it isn't long before the "bandits" notice your presence. Tension spikes as they reach for makeshift weapons, but before anyone can act, one of the adults steps forward cautiously.`;

const womanPleads = `A woman steps forward, hand raised in peace. "Please, we don't want trouble. Our village was destroyed by Shadow Beasts. We're just trying to survive. We had no choice but to take what we needed to live...for our families to live." 

You take in their ragged appearance and fearful eyes. They truly look like refugees, not bandits.  You feel a pang of sympathy, but also the weight of your responsibility to the village that sent you here.

"Yet you attacked our people and stole from us," another volunteer growls from behind you. "How can we trust anything you say?"

The woman's eyes glisten with tears. "I understand your anger. We were desperate. Please, we just want a chance to start over. Help us find a way to live without stealing."

The members of both the camp and your volunteer group begin discussing among themselves, tension thick in the air as you all await your decision.  The people of Thornshaven are no strangers to struggle, but their empathy may meet an end when it comes to those who took from them. Clearly no one on either side expected this scene before them.`;

const refugeeRevelation = `${forestQuiet}

${womanPleads}`;

const valeWhisper = `Vale whispers from beside you, "I've plenty of experience with people in all sorts of situations, and I am quite good at telling if someone is lying or not. They're telling the truth. I can sense their desperation." 

Vale lets his sentence trail off, glancing around at the uneasy faces of the volunteers. 

"But the village expects justice..."`;



const valeFinal = `"Ultimately, the choice is yours," Vale adds quietly. "What do you want to do?"`;

export const BanditEncounter: Scene = {
	id: 'bandit_encounter',
	text: `${refugeeRevelation}

${valeWhisper}

${valeFinal}`,
	textVariants: [
		{
			conditions: { hasFlags: ['vale_first_impression:open'] },
			text: `After your evening of drinks and stories with Vale, you feel a sense of ease and familiarity with him, despite only having talked over a few drinks for one night.
			
			Waking feeling rested and somewhat less wary, you meet up with the other volunteers and set out at dawn. 
			
			As the group proceeds forward, Vale's insights proves valuable almost immediately. He seems to pick up on subtle cues in the environment, confidently guiding you closer to the bandits' camp without alerting them. You carefully issue commands to the volunteers to surround the camp quietly, and take a deep breath as your attack is about to begin.

${refugeeRevelation}

${valeWhisper}

"I know we've not known each other long, but I do feel like we made a genuine connection last night. I hope you can trust my judgment on this," Vale adds quietly. 

${valeFinal}`
		},
		{
			conditions: { hasFlags: ['vale_first_impression:cautious'] },
			text: `You kept your distance from Vale last night, and he seems to respect your caution. This morning, he's all business as you track the bandits.

			As the group proceeds forward, Vale's insights proves valuable almost immediately. He seems to pick up on subtle cues in the environment, confidently guiding you closer to the bandits' camp without alerting them. You carefully issue commands to the volunteers to surround the camp quietly, and take a deep breath as your attack is about to begin.

${refugeeRevelation}

${valeWhisper}

${valeFinal}`
		},
		{
			conditions: { hasFlags: ['vale_first_impression:investigative'] },
			text: `Your probing questions last night revealed Vale knows more than they initially let on.  It seems that there is something more going on in the area than simple bandits; Vale shared stories that he'd heard.  Not the sort of tales he'd tell as a bard, but rumors of dark and violent nature.
			
			He spoke of beings known as "Shadow Beasts".  He mentioned tracking unusual patterns related to their activity, as well as the fallout of their attacks such as displaced people.

			While he admitted he didn't have all the details, it was clear that Vale had a deeper understanding of the dangers in the area than he first let on.  You decide to keep a close eye on him as you proceed.

			As the group proceeds forward, Vale's insights proves valuable almost immediately. He seems to pick up on subtle cues in the environment, confidently guiding you closer to the bandits' camp without alerting them. You carefully issue commands to the volunteers to surround the camp quietly, and take a deep breath as your attack is about to begin.

${refugeeRevelation}

${valeWhisper}

Vale drops his voice even lower, ensuring only you can hear. "This is exactly the type of situation I was worried about when we spoke of the Shadow Beasts last night. I know trust is a luxury we can't afford right now, but I believe they're telling the truth."

${valeFinal}`

		},
		{
			conditions: { hasFlags: ['vale_first_impression:flirtatious'] },
			text: `You found that the conversation and laughter flowed easier between you and Vale than even the drinks last night. By the time you headed home, you found yourself not only feeling less nervous about the tomorrow's mission, but also smiling to yourself at the memory of Vale's charming wit and easy confidence.

This morning, as you meet up with the other volunteers and set out at dawn, Vale falls into step beside you. While nothing more than a quick smile passes between you two, there's a comfortable chemistry between you as you work together and get the group prepared to move and begin the trek into the forest.

As the group proceeds forward, Vale's insights proves valuable almost immediately. He seems to pick up on subtle cues in the environment, confidently guiding you closer to the bandits' camp without alerting them. You carefully issue commands to the volunteers to surround the camp quietly, and take a deep breath as your attack is about to begin.

${refugeeRevelation}

${valeWhisper}

Vale drops his voice even lower, ensuring only you can hear. "Shame that not everyone is as charming and trustworthy as me," he says with a wink. "But I do believe they're telling the truth." While his tone is playful, there's a seriousness in his eyes.

${valeFinal}`
		}
	],
	choices: [
		{
			id: 'fight-them',
			text: 'No matter their situation, they attacked your village and must be dealt with accordingly.  Tough decisions must be made for Thornshaven\'s safety. Give the order to attack.',
			next: 'first_shadow_beast',
			effects: { courage: 1, reputation: -3, wealth: 50 },
			hiddenEffects: {
				'first_moral_choice:ruthless': true,
				ruthlessness: 5,
				compassionate_actions: -1,
				quest_payment_received: true,
				vale_trust: -10,
				vale_romance: -10
			}
		},
		{
			id: 'intimidate',
			text: '[Strength] Demonstrate your physical prowess to intimidate them into compliance without the need for violence.',
			next: 'first_shadow_beast',
			requirements: {
				strength: { min: 4 }
			},
			effects: { reputation: 2, wealth: 50, strength: 1 },
			hiddenEffects: {
				'first_moral_choice:intimidating': true,
				ruthlessness: 2,
				quest_payment_received: true,
				vale_trust: -2
			}
		},
		{
			id: 'disarm',
			text: '[Dexterity] Use quick reflexes to disarm their leaders, showing you could harm them but choose not to.',
			next: 'first_shadow_beast',
			requirements: {
				dexterity: { min: 4 }
			},
			effects: { reputation: 4, wealth: 60, dexterity: 1 },
			hiddenEffects: {
				'first_moral_choice:dexterous': true,
				compassionate_actions: 1,
				quest_payment_received: true,
				vale_trust: 5,
				vale_romance: 3
			}
		},
		{
			id: 'negotiate',
			text: 'They can\'t be forgiven for what they did, but perhaps there\'s a way to end this without violence.  Try to negotiate a peaceful resolution.',
			next: 'first_shadow_beast',
			effects: { wisdom: 2, charisma: 2, reputation: 3, wealth: 60 },
			hiddenEffects: {
				'first_moral_choice:diplomatic': true,
				compassionate_actions: 1,
				vale_trust: 5,
				vale_romance: 2,
				quest_payment_received: true,
				quest_bonus_earned: true,
			}
		},
		{
			id: 'help-them',
			text: 'Desperation drove them to this, and everyone in Thornshaven can relate to doing whatever it takes for them and their families.  Offer to help them find a new path in town.',
			next: 'first_shadow_beast',
			effects: { charisma: 2, reputation: 5, wealth: 70 },
			hiddenEffects: {
				'first_moral_choice:compassionate': true,
				compassionate_actions: 2,
				vale_trust: 10,
				vale_romance: 5,
				quest_payment_received: true,
				quest_bonus_earned: true
			}
		},
		{
			id: 'turn-in',
			text: 'You agreed to help Thornshaven deal with bandits, but that doesn\'t mean you have to take their lives. Turn them over to the regional authorities for a fair trial instead.',
			next: 'first_shadow_beast',
			effects: { wealth: 50 },
			hiddenEffects: {
				'first_moral_choice:lawful': true,
				ruthlessness: 2,
				quest_payment_received: true,
				vale_romance: -2
			}
		}
	]
};

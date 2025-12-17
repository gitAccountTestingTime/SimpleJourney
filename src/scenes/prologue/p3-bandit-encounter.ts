import { Scene } from '../../story-manager';

const forestQuiet = `The forest ambush site is eerily quiet. You find the bandits' camp, but something is wrong—these aren't hardened criminals. They're families with children, refugees with hollow eyes and torn clothes.`;

const womanPleads = `A woman steps forward, hand raised in peace. "Please, we don't want trouble. Our village was destroyed by Shadow Beasts. We're just trying to survive."`;

const refugeeRevelation = `${forestQuiet}

${womanPleads}`;

const valeWhisper = `Vale whispers from beside you, "They're telling the truth. I can sense their desperation. But the village expects justice..."`;

export const BanditEncounter: Scene = {
	id: 'bandit_encounter',
	text: `${refugeeRevelation}

${valeWhisper}`,
	textVariants: [
		{
			conditions: { hasFlags: ['vale_first_impression:open'] },
			text: `After your evening of drinks and stories with Vale, you set out at dawn. The bard's insights about human nature prove valuable as you navigate the forest.

---

${refugeeRevelation}

Vale, who you've come to trust after your open conversation, whispers urgently, "They're telling the truth. I can sense their desperation. You saw my honest side last night—trust me now when I say these aren't criminals."`
		},
		{
			conditions: { hasFlags: ['vale_first_impression:cautious'] },
			text: `You kept your distance from Vale last night, and the bard seems to respect your caution. This morning, they're all business as you track the bandits.

---

${refugeeRevelation}

Vale observes quietly, "They're telling the truth. I can sense their desperation. I know you don't fully trust me yet, but the village expects justice and this... this isn't what we expected."`
		},
		{
			conditions: { hasFlags: ['vale_first_impression:investigative'] },
			text: `Your probing questions last night revealed Vale knows more than they initially let on. They admitted to tracking unusual patterns—Shadow Beast activity and displaced people.

---

${refugeeRevelation}

Vale's analytical gaze sweeps the camp. "As I suspected last night—this is connected to the Shadow Beast attacks. They're telling the truth about their village. The question is: what do we do with that truth?"`
		},
		{
			conditions: { hasFlags: ['vale_first_impression:flirtatious'] },
			text: `The flirtation from last night created an easy rapport between you and Vale. This morning, there's a comfortable chemistry as you work together.

---

${refugeeRevelation}

Vale moves closer, their voice low and concerned. "They're telling the truth, love. I can sense their desperation. Last night was fun, but this... this is serious. What do we do?"`
		}
	],
	choices: [
		{
			id: 'fight-them',
			text: 'They broke the law—bring them to justice by force',
			next: 'first_shadow_beast',
			effects: { courage: 2, reputation: -3, wealth: 50 },
			hiddenEffects: {
				'first_moral_choice:ruthless': true,
				ruthlessness: 5,
				compassionate_actions: -1,
				quest_payment_received: true
			}
		},
		{
			id: 'negotiate',
			text: 'Negotiate a peaceful solution',
			next: 'first_shadow_beast',
			effects: { wisdom: 3, charisma: 2, reputation: 5, wealth: 70 },
			hiddenEffects: {
				'first_moral_choice:diplomatic': true,
				compassionate_actions: 3,
				vale_trust: 10,
				quest_payment_received: true,
				quest_bonus_earned: true
			}
		},
		{
			id: 'help-them',
			text: 'Offer to help them find legitimate work in Thornhaven',
			next: 'first_shadow_beast',
			effects: { charisma: 3, reputation: 8, wealth: 70 },
			hiddenEffects: {
				'first_moral_choice:compassionate': true,
				compassionate_actions: 5,
				vale_trust: 15,
				vale_romance: 10,
				quest_payment_received: true,
				quest_bonus_earned: true
			}
		},
		{
			id: 'turn-in',
			text: 'Turn them over to authorities—let the law decide',
			next: 'first_shadow_beast',
			effects: { wisdom: 2, wealth: 50 },
			hiddenEffects: {
				'first_moral_choice:lawful': true,
				ruthlessness: 2,
				quest_payment_received: true
			}
		}
	]
};

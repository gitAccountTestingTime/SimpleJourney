import { Scene } from '../../story-manager';

const returningHome = `Before heading out to confront bandits, you know you'll need more than just courage. You return to your small cottage at the edge of the village, the modest place that's been your home for as long as you can remember.`;

const oldChest = `In the corner, beneath a worn blanket, sits the old wooden chest you've always kept. Inside lies the weapon you've practiced with over the years. Not to fight other people with, but enough to defend yourself or hunt for food when coin was scarce.`;

const familiarWeight = `You don't recall how you actually acquired the weapon.  It has always been with you, as far back as you can remember. And although you've never been formally trained, this weapon has always felt right in your hands. Whatever its origins, it's served you well enough. Time to see if those years of practice will be enough for what lies ahead.`;

const choiceTime = `You open the chest and reach inside to grab...`;

export const WeaponChoice: Scene = {
	id: 'weapon_choice',
	text: `Later that day, after the group meeting concluded, you head back to prepare.

${returningHome}

${oldChest}

${familiarWeight}

${choiceTime}`,
	textVariants: [
		{
			conditions: {
				hasFlags: ['origin_choice:courageous']
			},
			text: `Your immediate step forward caught everyone by surprise. The elder's eyes lit up with relief and gratitude as you became the first volunteer, only growing as your courage inspired several others to join. Before long, a small band had formed.

The elder clasped your shoulder, "Thank you. Your bravery gives us hope. Let us discuss what we know, and how we can proceed." You then led the volunteer group in planning, while the elder provided additional details.

With the meeting concluded and dawn approach fast approaching, you head back to prepare for tomorrow.

---

${returningHome}

${oldChest}

${familiarWeight}

${choiceTime}`
		},
		{
			conditions: {
				hasFlags: ['origin_choice:pragmatic']
			},
			text: `"The payment," you called out, your voice cutting through the murmurs and whispers swirling among the others gathered. "What exactly are we talking about?"

The elder nodded, understanding. "Fifty gold pieces per volunteer, plus any recovered goods will be split among those who help. The merchant guild has also promised future trade discounts."

You are careful to measure your response, but honestly it was more than fair. The crowd around you also began murmuring in approval, as clearly you weren't the only one whose interest was piqued. As several others stepped forward alongside you, the elder provides the group with meeting details for dawn before dismissing everyone to make their preparations.

With the meeting concluded, you head back to gather what you'll need.

---

${returningHome}

${oldChest}

${familiarWeight}

${choiceTime}`
		},
		{
			conditions: {
				hasFlags: ['origin_choice:leadership']
			},
			text: `"We shouldn't go in disorganized," you speak up, your voice clear and confident. "If we're doing this, we need a proper plan. Who has combat experience? Who knows the trade routes? We need scouts, fighters, and someone to coordinate."

Your words resonate; the crowd's nervous energy shifted into something more focused. The elder looks at you clearly impressed as volunteers began organizing themselves around your suggestions. As the one who spoke up, you found yourself naturally taking charge, assigning roles and gathering information.

By the time the elder dismissed everyone to prepare for dawn, you'd already formed the core of a capable team. At least... as capable as a group of volunteers gathered in your home village could be.

With the meeting concluded, you head back to gather your equipment.

---

${returningHome}

${oldChest}

${familiarWeight}

${choiceTime}`
		},
		{
			conditions: {
				hasFlags: ['origin_choice:clever']
			},
			text: `"Have we tried talking to them?" you ask as several heads turn your way. "Bandits usually want something specific. If we understand what they need, maybe we can find a solution that doesn't involve bloodshed."

The elder strokes his beard thoughtfully. "An interesting perspective. Though I fear these particular bandits have shown little interest in negotiation. From everything we know, they strike hard and fast, taking everything."

"Then at least we should try to understand their movements, their motives," you press. "Information can be more valuable than steel."

The elder nods slowly. "Wise words. Very well. Gather 'round and I will share what information I can, and we'll see if diplomacy has a place in this. But we must also be prepared for the alternative."

Other volunteers gathered around the two of you as you spoke, clearly feeling more confident now that someone had gotten the ball rolling. The elder provided what information he knew, and then the group scatters until the meeting planned at dawn the next morning so that everyone can make whatever preparations they need.

With the meeting concluded, you head back to gather what you'll need.

---

${returningHome}

${oldChest}

${familiarWeight}

${choiceTime}`
		}
	],
	choices: [
		{
			id: 'sword',
			text: 'A well-worn sword with a simple hilt. It has been your steadfast companion through many trials.',
			next: 'meet_vale',
			effects: { strength: 3, dexterity: 1 },
			hiddenEffects: {
				'weapon_type:sword': true,
				starting_weapon: 'sword',
				weapon_familiarity: 5,
				combat_style: 'balanced'
			}
		},
		{
			id: 'bow',
			text: 'A sturdy hunting bow with a quiver of arrows you\'ve made yourself. It feels natural in your hands.',
			next: 'meet_vale',
			effects: { dexterity: 4 },
			hiddenEffects: {
				'weapon_type:bow': true,
				starting_weapon: 'bow',
				weapon_familiarity: 5,
				combat_style: 'ranged'
			}
		},
		{
			id: 'spear',
			text: 'A spear you\'ve kept sharpened over the years. Your trusty hunting tool and defender.',
			next: 'meet_vale',
			effects: { strength: 2, dexterity: 2 },
			hiddenEffects: {
				'weapon_type:spear': true,
				starting_weapon: 'spear',
				weapon_familiarity: 5,
				combat_style: 'polearm'
			}
		},
		{
			id: 'axe',
			text: 'An old two-handed axe; the edge still sharp despite years of use. It feels powerful in your grip.',
			next: 'meet_vale',
			effects: { strength: 5 },
			hiddenEffects: {
				'weapon_type:axe': true,
				starting_weapon: 'axe',
				weapon_familiarity: 5,
				combat_style: 'power'
			}
		},
		{
			id: 'daggers',
			text: 'A non-descript pair of daggers, light and easy to conceal. They\'ve saved your life more than once.',
			next: 'meet_vale',
			effects: { dexterity: 5 },
			hiddenEffects: {
				'weapon_type:daggers': true,
				starting_weapon: 'daggers',
				weapon_familiarity: 5,
				combat_style: 'agile'
			}
		},
		{
			id: 'staff',
			text: 'A sturdy, balanced staff.  While you\'ve never managed to use magic, it has always felt like an extension of yourself.',
			next: 'meet_vale',
			effects: { magical_intelligence: 1, dexterity: 1, strength: 1 },
			hiddenEffects: {
				'weapon_type:staff': true,
				starting_weapon: 'staff',
				weapon_familiarity: 5,
				combat_style: 'magical'
			}
		}
	]
};

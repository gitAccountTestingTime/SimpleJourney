import { Scene } from '../../story-manager';

// Magical Training Sequences

const privateChamber = `Lyra leads you to a private chamber deep within the palace, warded against scrying and interruption. Ancient runes glow softly on the walls.`;

const birthright = `"Blood magic is your birthright," Lyra begins, her teaching voice formal yet kind. "Every ruler of this kingdom has possessed it, though few trained properly. It's not about violence or sacrifice - it's about connection, life force, and will."`;

const demonstration = `She demonstrates, a drop of her own blood floating in the air and glowing with ethereal light. "Your blood carries the magic of generations. It can heal, protect, empower, and even see truth. But it requires control, discipline, and respect."`;

const firstLesson = `Lyra extends her hand. "The first lesson is sensing your own life force. Feel it flowing through you, recognize its power. Only then can you begin to channel it."`;

const awakening = `As you concentrate, you feel something awaken - warmth spreading from your core, energy pulsing in rhythm with your heartbeat. Magic, real and potent, responding to your will.`;

export const BloodMagicBasics: Scene = {
	id: 'lyra_magic_lesson_1',
	text: `${privateChamber}

${birthright}

${demonstration}

${firstLesson}

${awakening}`,
	textVariants: [
		{
			conditions: { hasFlags: ['trusts_lyra:true', 'values_magic:true'], hasHiddenAttributes: { lyra_respect: 30 } },
			text: `${privateChamber}

Lyra's usual formality softens. "I've waited for you to be ready for this. Blood magic is intimate - it requires complete trust between teacher and student."

${birthright}

She takes your hand gently. "You've trusted me with your safety, your secrets. Now trust me with your very essence. I will guard this knowledge, and you, with my life."

${demonstration}

${firstLesson}

Her presence is warm, supportive, as the magic awakens. "That's it. I'm here with you. You're not alone in this."

${awakening}`
		},
		{
			conditions: { hasHiddenAttributes: { lyra_romance: 40 } },
			text: `${privateChamber}

Lyra's eyes hold yours with deep emotion. "Blood magic creates a bond between teacher and student. Our life forces will touch, intertwine." She pauses. "Given what's growing between us, this will be... intimate."

${birthright}

${demonstration}

She takes your hand, her touch lingering. "I've taught others, but never someone I..." She doesn't finish, but you understand.

${firstLesson}

As the magic awakens, you feel her presence within it - warm, protective, loving. The connection between you deepens beyond words.`
		}
	],
	choices: [
		{
			id: 'heal-focus',
			text: 'Focus on healing magic - protect and restore',
			next: 'elemental_control',
			effects: { wisdom: 5 },
			hiddenEffects: {
				magic_student: true,
				lyra_student: true,
				blood_magic_level: 3,
				healing_affinity: true,
				lyra_respect: 15
			}
		},
		{
			id: 'combat-focus',
			text: 'Focus on combat magic - defend the realm',
			next: 'elemental_control',
			effects: { courage: 5 },
			hiddenEffects: {
				magic_student: true,
				lyra_student: true,
				blood_magic_level: 3,
				combat_affinity: true,
				lyra_respect: 12
			}
		},
		{
			id: 'truth-focus',
			text: 'Focus on truth magic - see through deception',
			next: 'elemental_control',
			effects: { wisdom: 6 },
			hiddenEffects: {
				magic_student: true,
				lyra_student: true,
				blood_magic_level: 3,
				truth_sight: true,
				lyra_respect: 18
			}
		},
		{
			id: 'balanced',
			text: 'Learn all aspects equally - versatile approach',
			next: 'elemental_control',
			effects: { wisdom: 4 },
			hiddenEffects: {
				magic_student: true,
				lyra_student: true,
				blood_magic_level: 2,
				balanced_magic: true,
				lyra_respect: 15
			}
		}
	]
};

const gardenDawn = `Your second lesson takes place in the palace gardens at dawn. Lyra has prepared stations representing each element - a brazier for fire, a fountain for water, rich soil for earth, and open air.`;

const foundation = `"Blood magic is your foundation," Lyra explains, "but it can channel through the elements. Each element requires different mindset, different approach." She demonstrates, her magic causing flames to dance, water to rise, earth to shift, and wind to swirl.`;

const elementalNature = `"Fire requires passion and will. Water needs fluidity and adaptation. Earth demands patience and strength. Air seeks freedom and awareness." She looks at you seriously. "Most mages specialize in one or two elements. Masters can wield three. Legends speak of those who mastered all four."`;

const chooseElement = `She gestures to the stations. "Begin with the element that calls to you. Let your instinct guide your choice."`;

export const ElementalControl: Scene = {
	id: 'lyra_magic_lesson_2',
	text: `${gardenDawn}

${foundation}

${elementalNature}

${chooseElement}`,
	textVariants: [
		{
			conditions: { hasFlags: ['natural_aptitude:true', 'magical_prodigy:true'], hasHiddenAttributes: { lyra_respect: 40 } },
			text: `${gardenDawn}

Lyra's eyes shine with pride as she watches you work. "You've exceeded every expectation. Most students take months to reach your level - you've done it in weeks."

${foundation}

"I've trained for two hundred years," she admits. "And I've never seen anyone progress like you. You're not just talented - you're extraordinary."

${elementalNature}

She touches your shoulder warmly. "I'm honored to teach you. Truly honored."

${chooseElement}`
		},
		{
			conditions: { hasHiddenAttributes: { blood_magic_level: 5 } },
			text: `Your advanced blood magic training makes elemental channeling easier. Lyra notices your progress with impressed surprise.

"You're progressing faster than anyone I've taught," she admits. "Your natural aptitude is remarkable. Perhaps you could master multiple elements after all."

She grows more serious. "But remember - power without wisdom is dangerous. Make sure your heart and mind grow alongside your abilities."`
		}
	],
	choices: [
		{
			id: 'fire-mastery',
			text: 'Study fire magic - passion and destruction',
			next: 'rune_crafting',
			effects: { courage: 6 },
			hiddenEffects: {
				elemental_magic_learned: true,
				fire_affinity: true,
				elemental_control: 5,
				blood_magic_level: 5
			}
		},
		{
			id: 'water-mastery',
			text: 'Study water magic - healing and adaptation',
			next: 'rune_crafting',
			effects: { wisdom: 6 },
			hiddenEffects: {
				elemental_magic_learned: true,
				water_affinity: true,
				elemental_control: 5,
				blood_magic_level: 5,
				healing_magic_learned: true
			}
		},
		{
			id: 'earth-mastery',
			text: 'Study earth magic - protection and endurance',
			next: 'rune_crafting',
			effects: { wisdom: 5, courage: 3 },
			hiddenEffects: {
				elemental_magic_learned: true,
				earth_affinity: true,
				elemental_control: 5,
				blood_magic_level: 5
			}
		},
		{
			id: 'air-mastery',
			text: 'Study air magic - freedom and perception',
			next: 'rune_crafting',
			effects: { wisdom: 7 },
			hiddenEffects: {
				elemental_magic_learned: true,
				air_affinity: true,
				elemental_control: 5,
				blood_magic_level: 5,
				enhanced_perception: true
			}
		},
		{
			id: 'all-elements',
			text: 'Attempt to learn all four - ambitious mastery',
			next: 'rune_crafting',
			effects: { wisdom: 8, courage: 5 },
			hiddenEffects: {
				elemental_magic_learned: true,
				all_elements: true,
				elemental_control: 8,
				blood_magic_level: 7,
				legendary_potential: true,
				lyra_amazed: true
			}
		}
	]
};

export const RuneCrafting: Scene = {
	id: 'finn_runes',
	text: `Finn's personal forge is warmer and more welcoming than the palace training rooms. They've set up a workbench with runestones, chisels, and glowing materials.

"Dwarven rune magic is different from your blood magic," Finn explains cheerfully. "It's about permanence, craftsmanship, imbuing objects with lasting power. Takes time and patience, but creates effects that endure."

They demonstrate, carefully etching runes into a metal bracelet. As they work, the runes begin to glow. "Protection rune, see? Whoever wears this gets magical shielding. Not as powerful as active spells, but always on, never fades."

Finn hands you tools. "Creating runes is meditation and art combined. Each stroke must be precise, each symbol meaningful. Rushing ruins it." They grin. "Good thing we have all night and plenty of ale!"

The work is meticulous, requiring focus and care. But there's something deeply satisfying about creating lasting magic with your hands.`,
	choices: [
		{
			id: 'protection-runes',
			text: 'Learn protection runes - shield yourself and others',
			next: 'spirit_communion',
			effects: { wisdom: 5 },
			hiddenEffects: {
				rune_magic_learned: true,
				protection_runes_known: true,
				finn_friendship: 20,
				practical_magic: true
			}
		},
		{
			id: 'enhancement-runes',
			text: 'Learn enhancement runes - improve weapons and abilities',
			next: 'spirit_communion',
			effects: { courage: 4, wisdom: 3 },
			hiddenEffects: {
				rune_magic_learned: true,
				enhancement_runes_known: true,
				finn_friendship: 18,
				combat_improved: true
			}
		},
		{
			id: 'detection-runes',
			text: 'Learn detection runes - sense danger and magic',
			next: 'spirit_communion',
			effects: { wisdom: 6 },
			hiddenEffects: {
				rune_magic_learned: true,
				detection_runes_known: true,
				finn_friendship: 19,
				tactical_advantage: true
			}
		},
		{
			id: 'comprehensive',
			text: 'Study all rune types - become versatile runecrafter',
			next: 'spirit_communion',
			effects: { wisdom: 7 },
			hiddenEffects: {
				rune_magic_learned: true,
				comprehensive_runes: true,
				finn_friendship: 25,
				finn_romance: 15,
				master_craftsman_potential: true
			}
		}
	]
};

export const SpiritCommunion: Scene = {
	id: 'spirit_communion',
	text: `Lyra takes you to the sacred grove at midnight during the new moon. The veil between worlds is thinnest now, and spirits can be contacted.

"Your ancestors watch over the realm," Lyra explains in hushed tones. "Not just your blood family, but all who served justly. They can offer guidance, wisdom, even aid when darkness threatens."

She teaches you the ritual - specific words, gestures, offerings. As you perform it, the air grows cold and shimmer with otherworldly light. Shapes begin to form - translucent figures of those long dead.

One steps forward - a woman in ancient armor, bearing the Silverwood crest. "Heir of my bloodline," she speaks, her voice echoing strangely, "you stand where I once stood. The burden is heavy, but you need not carry it alone. We are with you."

Other spirits gather - warriors, scholars, healers, rulers. Generations of ancestors, all offering their strength.`,
	choices: [
		{
			id: 'wisdom-request',
			text: 'Request ancestral wisdom for coming trials',
			next: 'shadow_magic_temptation',
			effects: { wisdom: 8 },
			hiddenEffects: {
				spirit_magic_learned: true,
				ancestral_wisdom_gained: true,
				spirit_guidance: true,
				lyra_respect: 20
			}
		},
		{
			id: 'strength-request',
			text: 'Request ancestral strength for battle',
			next: 'shadow_magic_temptation',
			effects: { courage: 7 },
			hiddenEffects: {
				spirit_magic_learned: true,
				ancestral_strength_gained: true,
				warrior_spirits: true,
				lyra_respect: 18
			}
		},
		{
			id: 'healing-request',
			text: 'Request healing knowledge to help your people',
			next: 'shadow_magic_temptation',
			effects: { wisdom: 7, charisma: 3 },
			hiddenEffects: {
				spirit_magic_learned: true,
				ancestral_healing: true,
				healing_magic_learned: true,
				healer: true,
				lyra_respect: 22
			}
		},
		{
			id: 'conversation',
			text: 'Simply talk with them - know your history',
			next: 'shadow_magic_temptation',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				spirit_magic_learned: true,
				ancestral_connection: true,
				history_learned: true,
				emotional_bond: true,
				lyra_respect: 20
			}
		}
	]
};

export const ShadowMagicTemptation: Scene = {
	id: 'shadow_magic_temptation',
	text: `Shadow finds you alone one evening and makes an unexpected offer. Their expression is serious, almost concerned.

"I can teach you shadow magic," they say quietly. "The magic assassins use - moving through darkness, becoming invisible, striking from nowhere." They pause. "It's powerful. Potentially more powerful than blood magic for certain purposes."

They meet your eyes. "But it's dangerous. Shadow magic feeds on darkness - literal and metaphorical. Use it too much, and it changes you. Makes you colder, more detached, comfortable with violence." Their voice drops. "It's what happened to me. I started using shadow magic for good reasons, and slowly it twisted me into something else."

Shadow's warning is genuine. "I'm offering because you might need it for what's coming. Assassins, Shadow Beasts, enemies in the dark - shadow magic would give you huge advantage." They look away. "But I'd understand if you refuse. Maybe even respect you more for it."

The choice weighs on you - pragmatic power versus moral safety.`,
	choices: [
		{
			id: 'refuse-firmly',
			text: 'Refuse - some powers aren\'t worth the cost',
			next: 'healing_arts',
			effects: { wisdom: 8 },
			hiddenEffects: {
				shadow_magic_refused: true,
				shadow_redeemed: 25,
				moral_strength: true,
				shadow_respect: 25
			}
		},
		{
			id: 'limited-use',
			text: 'Learn basics but promise to use sparingly',
			next: 'healing_arts',
			effects: { wisdom: 6, courage: 4 },
			hiddenEffects: {
				shadow_magic_learned: true,
				corruption_risk: 1,
				controlled_darkness: true,
				shadow_friendship: 20
			}
		},
		{
			id: 'full-training',
			text: 'Accept full training - trust yourself to resist corruption',
			next: 'healing_arts',
			effects: { courage: 7, wisdom: 3 },
			hiddenEffects: {
				shadow_magic_learned: true,
				corruption_risk: 3,
				darkness_mastery: true,
				shadow_friendship: 18,
				power_at_cost: true
			}
		},
		{
			id: 'redemption-path',
			text: 'Learn it to help Shadow find redemptive use',
			next: 'healing_arts',
			effects: { charisma: 7, wisdom: 5 },
			hiddenEffects: {
				shadow_magic_learned: true,
				corruption_risk: 1,
				redemptive_darkness: true,
				shadow_redeemed: 30,
				shadow_romance: 20,
				transforming_darkness: true
			}
		}
	]
};

export const HealingArts: Scene = {
	id: 'healing_magic',
	text: `After witnessing suffering in the city - injuries from Shadow Beasts, illnesses from poverty, trauma from violence - you're determined to learn healing magic.

Lyra agrees to teach you, but with warnings. "Healing magic is among the most difficult. It requires not just power, but empathy, precision, and willingness to take on others' pain." She demonstrates on an injured bird, its broken wing mending as she channels magic through touch.

"True healing doesn't just close wounds," Lyra continues. "It restores wholeness - body, mind, sometimes spirit. That means understanding what wholeness means for each individual." She looks at you seriously. "Are you prepared to feel their pain? To carry some of their suffering? That's the price of being a healer."

The training is emotionally intense. You practice on animals first, then volunteer patients. Each healing requires you to open yourself to their hurt before you can fix it. It's exhausting, heartrending, but also profoundly meaningful.`,
	choices: [
		{
			id: 'physical-healing',
			text: 'Focus on physical wounds - immediate practical aid',
			next: 'climax_preparation',
			effects: { wisdom: 6 },
			hiddenEffects: {
				healing_magic_learned: true,
				healer: true,
				physical_healing_mastery: true,
				lyra_respect: 20,
				commoner_respect: 25
			}
		},
		{
			id: 'emotional-healing',
			text: 'Study emotional and trauma healing - mend broken hearts',
			next: 'climax_preparation',
			effects: { charisma: 6, wisdom: 5 },
			hiddenEffects: {
				healing_magic_learned: true,
				healer: true,
				emotional_healing_learned: true,
				lyra_respect: 22,
				compassionate_healer: true
			}
		},
		{
			id: 'comprehensive-healing',
			text: 'Master all healing arts - become legendary healer',
			next: 'climax_preparation',
			effects: { wisdom: 9, charisma: 5 },
			hiddenEffects: {
				healing_magic_learned: true,
				healer: true,
				master_healer: true,
				lyra_respect: 25,
				lyra_romance: 20,
				legendary_healer: true,
				commoner_respect: 35
			}
		},
		{
			id: 'battle-healing',
			text: 'Focus on battlefield healing - save warriors in combat',
			next: 'climax_preparation',
			effects: { courage: 6, wisdom: 5 },
			hiddenEffects: {
				healing_magic_learned: true,
				healer: true,
				combat_healing: true,
				lyra_respect: 20,
				military_faction_rep: 25,
				kieran_loyalty: 20
			}
		}
	]
};

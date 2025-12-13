import { Scene } from '../../story-manager';

/**
 * WORLD-BUILDING: Deep dive into blood magic system, the Aethermoor Covenant,
 * and the magical mechanics that underpin the kingdom.
 */

export const BloodMagicDeepDive: Scene = {
	id: 'wb_blood_magic_deep_dive',
	text: `Lyra meets you in the manor's meditation chamber - a circular room with silver runes etched into every surface. Moonlight streams through a crystal dome, and you can feel magic thrumming in the air.

"Blood magic is misunderstood," she begins. "Most people think it's dark, evil, using blood for power. But that's necromancy - death magic. True blood magic is about life, connection, and sacrifice."

She traces a rune that glows at her touch. "Every living thing has essence - the magical signature of their life force. Blood magic allows you to sense that essence, connect with it, and when necessary, transfer or share it. That's how Silverwoods created the Covenant - they bound their life essence to the kingdom itself."

Lyra turns to you, violet eyes serious. "You need to understand what that means. Your power isn't just personal - it's structural. The kingdom's magic flows through you like blood through a heart. When you're strong, the land prospers. When you're weak... everything suffers."`,
	choices: [
		{
			id: 'learn-basics',
			text: 'Learn the fundamental principles of blood magic',
			next: 'blood_magic_fundamentals',
			effects: { wisdom: 4 },
			hiddenEffects: {
				blood_magic_theory: 15,
				lyra_bond: 5
			}
		},
		{
			id: 'practice-sensing',
			text: 'Practice sensing life essence',
			next: 'blood_magic_practice',
			effects: { wisdom: 3, strength: 2 },
			hiddenEffects: {
				essence_sight: true,
				blood_magic_practical: 10,
				lyra_bond: 5
			}
		}
	]
};

export const BloodMagicFundamentals: Scene = {
	id: 'blood_magic_fundamentals',
	text: `Lyra guides you through the theory, and hours pass as you absorb centuries of knowledge:

**The Three Principles of Blood Magic:**

1. **Resonance** - All living things vibrate with magical frequency. Blood mages can sense and attune to these frequencies, creating bonds between beings.

2. **Sacrifice** - True power requires true cost. Blood magic isn't "free" - it draws from the caster's life force. Minor spells cause fatigue. Major rituals can age you years or even prove fatal.

3. **Connection** - Blood magic's real power is binding. You can forge links between people, creating shared strength, shared pain, shared purpose. The Aethermoor Covenant is the ultimate expression - seven houses bound to kingdom, kingdom bound to Silverwood bloodline.

**Types of Blood Magic:**

- **Empathic Sensing**: Feel others' emotional and physical states. (Beginner level)
- **Life Link**: Share vitality with another, healing them at cost to yourself. (Intermediate)
- **Battle Bond**: Link warriors together, synchronizing reflexes and sharing strength. (Advanced)
- **Soul Oath**: Create unbreakable magical promises, enforced by life essence. (Expert)
- **Covenant Weaving**: Bind groups or nations together in permanent magical compact. (Master level - only Silverwoods can perform)

**The Cost:**

Your grandmother Helena wrote extensively about blood magic's price. She aged prematurely from overuse - looked seventy at fifty. Your parents were more careful, but even routine statecraft using blood magic slowly drained them.

"Every time you use this power," Lyra says soberly, "you're spending your life. Literally. It's why Silverwoods rarely live beyond their sixties while normal nobles reach ninety or more. You need to choose carefully what's worth the cost."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_met: true, kieran_trust: 20 }
			},
			text: `As Lyra explains blood magic costs, Kieran interrupts from the doorway. "I've seen blood magic in battle," he says grimly. "Your grandmother once saved an entire regiment using a mass healing ritual. Linked herself to three hundred dying soldiers and pulled them back from death's edge."

He walks closer. "She collapsed afterward. Was bedridden for a month. Aged five years in one night." His voice softens. "But those three hundred soldiers lived. Went home to families. Had children. Those children are adults now - and they all know that Queen Helena traded years of her life for theirs."

Kieran meets your eyes. "That's the power you inherited. The ability to save people at cost to yourself. Some will say it's a curse. I say it's the most noble power imaginable - if you're wise enough to use it right."`
		},
		{
			conditions: {
				hasHiddenAttributes: { sage_met: true, sage_bond: 15 }
			},
			text: `Sage joins the lesson, adding historical context. "Blood magic is why Aethermoor succeeded where other kingdoms failed," he explains. "The Covenant isn't just political alliance - it's magical binding. Breaking an oath to the crown literally causes pain, even death."

He shows you a scroll documenting betrayals. "See these names? Lords who tried to rebel against bound oaths. Some suffered strokes. Others wasting diseases. A few simply dropped dead." Sage's expression is troubled. "It's effective... but is it right? Can a kingdom built on magical compulsion ever be truly free?"

He looks at you seriously. "Your parents started questioning this. Wondering if the Covenant should be reformed or even broken. Some think that's why they were killed - because they threatened the very foundation of the kingdom's power structure. Including your own power."`
		}
	],
	choices: [
		{
			id: 'embrace-power',
			text: 'Embrace the power and accept its costs',
			next: 'blood_magic_covenant_connection',
			effects: { strength: 4, courage: 3 },
			hiddenEffects: {
				blood_magic_committed: true,
				willing_sacrifice: true,
				power_user: true
			}
		},
		{
			id: 'fear-power',
			text: 'Express fear about the responsibility and cost',
			next: 'blood_magic_covenant_connection',
			effects: { wisdom: 4 },
			hiddenEffects: {
				blood_magic_cautious: true,
				acknowledges_burden: true,
				lyra_reassures: true
			}
		},
		{
			id: 'question-ethics',
			text: 'Question the ethics of binding magic and magical compulsion',
			next: 'blood_magic_covenant_connection',
			effects: { wisdom: 5 },
			hiddenEffects: {
				blood_magic_skeptical: true,
				philosophical_crisis: true,
				sage_approves: true,
				reformist_values: 10
			}
		},
		{
			id: 'want-to-practice',
			text: 'Enough theory - you want to practice and feel the magic',
			next: 'blood_magic_practice',
			effects: { courage: 3 },
			hiddenEffects: {
				action_oriented: true,
				practical_learner: true
			}
		}
	]
};

export const BloodMagicPractice: Scene = {
	id: 'blood_magic_practice',
	text: `"Alright," Lyra says. "Let's start simple. Close your eyes. Breathe. Feel your own heartbeat."

You do as instructed. The meditation chamber's magic amplifies your awareness. You feel your pulse, steady and strong. The blood moving through your veins carries more than oxygen - it carries essence, the magical signature of your life.

"Now," Lyra continues, voice soft, "reach out with that awareness. I'm standing three feet away. Try to sense my heartbeat."

At first, nothing. Then... there. A second rhythm, slightly faster than yours. Lyra's heart. You can feel it, like an echo in your own chest.

"Good," she breathes. "That's the foundation. You're sensing life essence. Now try to feel the quality of it. Am I calm? Anxious? Happy?"

You focus deeper. Lyra's essence feels... warm. Cautiously hopeful. And underneath, a current of old pain, old shame, carefully controlled.

Your eyes open. "You're nervous," you say. "But optimistic. And there's something you're carrying. A burden."

Lyra's eyes widen. "In less than five minutes, you achieved what takes most students weeks." She touches her chest over her heart. "The burden is Morgaine's legacy. My family's shame. You felt that just by sensing my essence."

She takes your hand. "You have remarkable natural talent. But talent without training is dangerous. Let me teach you properly - starting with basic techniques and building up to more advanced magic."`,
	choices: [
		{
			id: 'practice-healing',
			text: 'Practice basic healing magic',
			next: 'healing_practice',
			effects: { wisdom: 3, empathy: 4 },
			hiddenEffects: {
				healing_magic: 15,
				lyra_bond: 8,
				compassionate_magic: true
			}
		},
		{
			id: 'practice-bonding',
			text: 'Practice creating bonds between people',
			next: 'bonding_practice',
			effects: { charisma: 3, wisdom: 3 },
			hiddenEffects: {
				bonding_magic: 15,
				lyra_bond: 8,
				unity_magic: true
			}
		},
		{
			id: 'sense-companions',
			text: 'Try sensing all your companions - understand them deeply',
			next: 'companions_essence_reading',
			effects: { empathy: 5, wisdom: 3 },
			hiddenEffects: {
				essence_reading: 20,
				companions_understood: true,
				lyra_bond: 5,
				deeper_relationships: true
			}
		}
	]
};

export const HealingPractice: Scene = {
	id: 'healing_practice',
	text: `Lyra produces a small knife and before you can react, makes a shallow cut on her palm. Blood wells up, bright red.

"Your turn," she says, offering her bleeding hand. "Healing is the most fundamental blood magic. It's about sharing vitality, transferring your life force to knit wounds and restore health."

She guides your hand to hover over hers. "Feel my injury - the damaged tissue, the disrupted essence. Now feel your own vitality, abundant and strong. Imagine guiding a thread of your essence into the wound, weaving broken pieces back together."

You concentrate. It's harder than sensing - this requires projection, not just reception. But gradually you feel it: your essence flowing out, warm and golden, into Lyra's hand. The wound closes beneath your awareness, skin knitting together.

When you open your eyes, her palm is unmarked except for a thin silver scar. But you feel tired, as if you've run up a flight of stairs.

"That's the cost," Lyra says softly. "A minor healing, and it left you winded. Imagine healing mortal wounds - it could leave you barely conscious. Raising someone from the brink of death might kill you in their place."

She cups your face with her newly healed hand. "This is sacred power. The ability to save lives at cost to yourself. Your parents used it wisely and sparingly. I hope you will too."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_met: true, finn_trust: 15 }
			},
			text: `As you successfully heal Lyra's cut, Finn enters the chamber. He stops, staring at your hands glowing with silver light.

"That's incredible," he breathes. Then his expression shifts to something complex - hope and pain mixed. "Could you... my father's hands. They were broken years ago by Ironforge enforcers. He can't create anymore, can't practice his craft."

Finn's voice cracks. "Could your magic heal old injuries? Restore what was taken from him?"

Lyra answers gently: "Maybe. Old wounds are harder - scar tissue, healed wrong, essence long settled into damaged patterns. It would require immense power and risk significant cost." She looks at you. "But theoretically? A master blood mage could do it."

Finn meets your eyes. "Then become a master. Please. Not just for my father, but for all the people broken by this system. Imagine the hope you could bring - healing not just bodies but lives, futures, dreams. That's power worth any cost."`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_met: true, kieran_trust: 25 }
			},
			text: `As you successfully heal Lyra's cut, Kieran watches from the doorway with a soldier's assessment.

"Battlefield healing," he says quietly. "I've seen it before - mages pulling dying soldiers back from death's door. But most healing mages collapse after saving three or four warriors. They simply don't have enough life force to spare."

He enters the chamber, expression serious. "Your grandmother could heal dozens. She had enormous reserves and iron discipline about not pushing too far. Your parents were similar." Kieran meets your eyes. "But I watched Queen Sylvara heal a plague-stricken village. Fifty people, all dying. She saved forty-seven and aged five years doing it. The three she couldn't save haunted her forever."

He gestures at Lyra's healed hand. "Every life you save will cost you. And every life you can't save will break you a little. Can you carry that burden?"`
		}
	],
	choices: [
		{
			id: 'commit-healing',
			text: 'Commit to mastering healing magic - saving lives is worth the cost',
			next: 'blood_magic_path_chosen',
			effects: { wisdom: 4, empathy: 5 },
			hiddenEffects: {
				healer_path: true,
				compassionate_ruler: true,
				lyra_bond: 15,
				finn_inspired: true
			}
		},
		{
			id: 'stay-balanced',
			text: 'Learn healing but maintain balance - you can\'t save everyone',
			next: 'blood_magic_path_chosen',
			effects: { wisdom: 5, empathy: 2 },
			hiddenEffects: {
				balanced_magic: true,
				realistic_approach: true,
				lyra_bond: 8
			}
		},
		{
			id: 'focus-other-magic',
			text: 'Healing is important but explore other applications too',
			next: 'bonding_practice',
			effects: { wisdom: 3 },
			hiddenEffects: {
				versatile_magic: true,
				broad_interests: true
			}
		}
	]
};

export const BondingPractice: Scene = {
	id: 'bonding_practice',
	text: `"Bonding magic is what made the Covenant possible," Lyra explains. "It's the ability to create magical links between people - temporary or permanent, simple or complex."

She invites Rowan into the chamber. The half-elf ranger eyes you both warily but enters. "I volunteered to be a test subject," Rowan says. "Lyra assures me this won't be invasive."

"It won't," Lyra confirms. "We're going to create a basic empathic link - allowing you two to sense each other's emotional states. It's useful for building trust and coordination."

She guides you through the process: reaching out to Rowan's essence, creating a thin thread of connection between your life forces. It's delicate work, like embroidery with magic.

Suddenly, you gasp. You can feel Rowan - truly feel them. Their cautious curiosity, deep loyalty to duty, lingering loneliness from being caught between elven and human worlds. And underneath it all, a fierce protective instinct toward you that surprises you both.

Rowan's eyes widen. "I can feel your determination. Your fear of failing. And your genuine desire to do right by people." They laugh shakily. "This is intense."

The bond fades after a few minutes. Lyra explains: "Temporary bonds dissolve naturally. Permanent bonds - like those in the Covenant - require ritual and sacrifice. But you've proven you can do it."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { vale_trust: 25 }
			},
			text: `After the practice with Rowan, Vale volunteers next. "I want to understand this better," they say. "And honestly? I trust you. I want to feel what you feel."

You create the bond more easily this time. And through it, you sense Vale completely: their brilliant mind constantly analyzing, their deep love for knowledge, their fierce loyalty to you, and their terror of losing someone they care about again.

"My family," Vale whispers, feeling your curiosity through the bond. "I lost them to political violence years ago. That's why I became a wandering scholar - couldn't stay anywhere, couldn't risk caring too much." Their hand finds yours. "But you made me care anyway. Made me want to fight for something bigger than survival."

Through the bond, you feel their emotions clearly, and they feel yours. It's intimacy beyond words, beyond touch. For a moment, you're truly one person.

When the bond fades, Vale looks shaken but awed. "That's what the Covenant does? Binds entire houses together like that?" They shake their head. "It's beautiful and terrifying. Profound unity... or ultimate control, depending on how it's used."`
		},
		{
			conditions: {
				hasHiddenAttributes: { companions_priority: true }
			},
			text: `After the practice with Rowan, all your companions want to try. One by one, you create temporary bonds:

Ash - disciplined warrior mind, fierce loyalty, hidden vulnerability from years of loss.
Rook - chaotic creativity, mask of humor hiding deep loneliness and need for belonging.
Whisper - sharp awareness, walls around a wounded heart, unexpected gentleness beneath the silence.

Each connection teaches you something profound about your friends. And they learn about you - your fears, your determination, your genuine love for them all.

When the last bond fades, your companions look at each other with new understanding. "We should practice this before battles," Ash says. "Coordinating through empathic bonds would make us unstoppable."

Lyra smiles. "That's exactly what battle bonds are for. You're thinking like a Silverwood already."`
		}
	],
	choices: [
		{
			id: 'master-bonds',
			text: 'Focus on mastering bonding magic - unity is your strength',
			next: 'blood_magic_path_chosen',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				bonder_path: true,
				unity_focused: true,
				lyra_bond: 15,
				companions_closer: true
			}
		},
		{
			id: 'study-covenant',
			text: 'Study the Covenant itself - understand the kingdom\'s foundation',
			next: 'blood_magic_covenant_connection',
			effects: { wisdom: 5 },
			hiddenEffects: {
				covenant_scholar: true,
				structural_understanding: true
			}
		},
		{
			id: 'explore-both',
			text: 'Continue exploring both healing and bonding',
			next: 'blood_magic_path_chosen',
			effects: { wisdom: 4, empathy: 3 },
			hiddenEffects: {
				versatile_blood_mage: true,
				balanced_approach: true,
				lyra_bond: 10
			}
		}
	]
};

export const BloodMagicCovenantConnection: Scene = {
	id: 'blood_magic_covenant_connection',
	text: `Lyra takes you to the manor's deepest level - a chamber you didn't know existed. Ancient silver runes cover every surface, pulsing with slow, steady power.

"This is the Covenant Chamber," she says reverently. "Where your ancestor Aldric performed the binding ritual. The magic is still active, still flowing through these runes into the kingdom itself."

She guides you to the chamber's center, where a circular altar holds seven bowls, each with dried blood - remnants from the original ritual three centuries ago.

"Touch the altar," Lyra instructs. "Connect with the Covenant directly. You're its heir and keystone. It will recognize you."

You place your hand on the silver surface. Power surges through you - enormous, ancient, complex. You feel the kingdom itself: millions of lives, all connected through magical threads to this room, to this altar, to the Silverwood bloodline.

To you.

It's overwhelming. You sense House Ironforge's mountain strongholds, their forges burning day and night. Moonwhisper's soaring towers filled with arcane research. Thornwood's forest rangers moving through the wilderness. Every house, every person bound by the original compact, their essence flowing through the magic that sustains the kingdom.

And at the center of it all - a void. The place where your parents should be, maintaining the balance. Now empty. The Covenant strains without its proper anchor, fraying at the edges. You can feel the kingdom's magic weakening, old hatreds resurging, the fabric of unity coming apart thread by thread.

"Do you understand now?" Lyra asks softly. "Without a Silverwood on the throne, performing the binding rituals, maintaining the magic... the Covenant will eventually fail. And when it fails, Aethermoor will tear itself apart."`,
	choices: [
		{
			id: 'accept-duty',
			text: 'Accept your duty to maintain the Covenant and save the kingdom',
			next: 'crystal_hunt_start',
			effects: { courage: 5, wisdom: 4 },
			hiddenEffects: {
				covenant_keeper: true,
				duty_bound: true,
				traditional_path: true
			}
		},
		{
			id: 'reform-covenant',
			text: 'Vow to reform the Covenant - make it consensual, not binding',
			next: 'crystal_hunt_start',
			effects: { wisdom: 6, courage: 4 },
			hiddenEffects: {
				covenant_reformer: true,
				revolutionary_magic: true,
				dangerous_goal: true
			}
		},
		{
			id: 'break-covenant',
			text: 'Consider breaking the Covenant entirely - free everyone, accept chaos',
			next: 'crystal_hunt_start',
			effects: { courage: 7, wisdom: 3 },
			hiddenEffects: {
				covenant_breaker: true,
				radical_revolutionary: true,
				kingdom_destroyer: true
			}
		},
		{
			id: 'need-time',
			text: 'Need more time to understand before choosing a path',
			next: 'crystal_hunt_start',
			effects: { wisdom: 5 },
			hiddenEffects: {
				undecided: true,
				thoughtful_approach: true,
				needs_information: true
			}
		}
	]
};

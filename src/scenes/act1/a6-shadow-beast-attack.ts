import { Scene } from '../../story-manager';

const followerSituation = `The follower situation demanded attention. Whoever had been tracking you through the forest with professional skill represented either threat or opportunity—but you needed to know which. Your choice about how to handle them revealed something about your approach to danger, your instinct for leadership, your capacity for judgment under pressure.

But before you can fully resolve the situation—before questions can be asked or identities revealed or intentions explained—everything changes.`;

const realityTears = `Reality tears.

There's no other way to describe it. The air itself rips open like fabric pulled too hard, creating a wound in the world. The sound is terrible: a grinding, shrieking noise that makes your teeth ache and your blood mark flare in warning. Space distorts around the edges of the rift, colors bending wrong, light behaving in ways that hurt to watch.

This is dimensional breach—the weakening barrier between worlds, the growing threat that made Shadow Beasts possible in the first place. And it's opening right in front of you.`;

const riftAppearance = `The rift stabilizes into a jagged tear roughly eight feet tall and three feet wide, its edges crackling with sickly purple-black energy. Through it, you can see not another place but another kind of space—the void between dimensions, the hostile emptiness where things that shouldn't exist make their homes. The wrongness of it makes your stomach churn. This is a violation of natural law, a breaking of rules that should never be broken.

And something is coming through.`;

const beastEmergence = `The Shadow Beast emerges from the rift like a nightmare achieving physical form. It's massive—larger than a horse, larger than any creature you've fought before. Eight feet tall at the shoulder, twelve feet long not counting its lashing tail, built from darkness and hunger and malevolence given shape.

Its body defies easy description. Primarily lupine in structure—four powerful legs ending in claws that dig into forest earth like it's soft bread, a elongated torso rippling with muscles that shouldn't exist outside bone structure, a tail that moves with predatory intelligence. But the details are wrong: shadows leak from its form like steam, its substance constantly shifting between solid and ephemeral, and its surface seems to absorb light rather than reflect it.

No eyes. Just smooth darkness where eyes should be, yet you feel its awareness lock onto you with terrible precision. No visible mouth, yet when it makes sound—a low, resonating growl that comes from everywhere and nowhere—you see the suggestion of far too many teeth.`;

const beastPresence = `The temperature drops fifteen degrees in an instant. Your breath fogs. Frost forms on nearby leaves. The Shadow Beast's very presence distorts reality, creating a sphere of wrongness around itself that makes your magical awareness scream warnings.

This is no minor rift creature. This is an apex predator from beyond the veil, a hunter sophisticated enough to track dimensional signatures, powerful enough to force open its own breach. And it's hunting.`;

const bloodRecognition = `The beast's eyeless face turns toward you with absolute certainty. It senses something. Your blood. Your magic. The Silverwood power that marks you as heir to an ancient bloodline.

You understand in a flash of horrified insight: Shadow Beasts don't hunt randomly. They're drawn to magic, to power, to the traces of dimensional energy that certain bloodlines carry. The more powerful the magic, the more attractive the target. Your royal heritage, your awakening blood magic, the legacy you've just discovered—it all makes you irresistible to these creatures.

You're not just in danger. You're what it came here to consume.`;

const immediateResponse = `Everything happens in the space of five heartbeats. The rift opens. The beast emerges. It locks onto you. And every person present reacts according to their nature, their training, their relationship to you.`;

const rowanInstinct = `Rowan moves with the fluid speed of decades of ranger training. Twin blades appear in their hands—elven steel that gleams with faint enchantment, weapons maintained with religious care for exactly this kind of threat. They position themselves between you and the Shadow Beast with absolute commitment, their entire body language declaring: you'll have to go through me first.

"Get back!" Rowan shouts, voice cutting through the chaos with command authority. "Shadow Beast—major manifestation! Don't let it touch you directly!"

Their eyes never leave the creature, reading its stance, its weight distribution, looking for openings while calculating threat. This is Rowan at their most dangerous: a warrior confronting exactly the kind of enemy they've spent their entire career learning to fight.`;

const magicalResponse = `But even as Rowan moves, you feel your blood magic stirring. It surges up from deep within, responding to the threat with eager violence. The power doesn't feel afraid—it feels angry, territorial, challenged. This is its purpose, you realize. Blood magic wasn't just created for healing or enchantment. It was forged as a weapon against exactly this kind of extra-dimensional threat.

Your blood mark burns hot against your skin, light beginning to show through fabric. The magic wants to be used. Wants to prove itself. Wants to destroy the wrongness that dares to hunt you.

The question is: will you let it?`;

const criticalMoment = `The Shadow Beast coils, preparing to lunge. Rowan readies their blades. Your magic strains against your control. And in this frozen moment before violence erupts, you have to choose: How will you face this threat? What does your response reveal about who you're becoming?

There's no time for lengthy deliberation. The beast won't wait for philosophical consideration. This is instinct, training, character distilled into immediate action.`;

const getShadowBeastAttack = (): string => {
	return `${followerSituation}\n\n${realityTears}\n\n${riftAppearance}\n\n${beastEmergence}\n\n${beastPresence}\n\n${bloodRecognition}\n\n${immediateResponse}\n\n${rowanInstinct}\n\n${magicalResponse}\n\n${criticalMoment}`;
};

export const ShadowBeastAttack: Scene = {
	id: 'shadow_beast_attack',
	get text() {
		return getShadowBeastAttack();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['confrontational_tendency:true', 'direct_approach:true'] },
			get text() {
				return `You chose confrontation. Direct, bold, refusing to be hunted like prey in your own kingdom. You stepped forward, voice carrying authority you barely knew you possessed, and demanded the follower reveal themselves.

And they did. A man emerged from the forest shadows—middle-aged, silver hair pulled back in a warrior's knot, wearing travel-worn leather armor marked with the Silverwood crest. His hands were raised, showing no weapons, but his stance communicated decades of combat training barely restrained.

"Your Highness," he said, and the formal address carried weight. "I am Sir Marcus Thorne, Knight of the Silverwood Guard. I survived the Purge, went into hiding, waited twenty years for your return. I've been tracking you since you left the manor because—"

That's when reality tears.

${followerSituation}

${realityTears}

${riftAppearance}

${beastEmergence}

${beastPresence}

${bloodRecognition}

Sir Marcus reacts with the speed of a warrior who's fought these creatures before. His hands drop to weapons—a longsword that seems to shimmer with enchantment, and a dagger in his off-hand positioned for defensive parrying. He moves to flank the beast, creating a triangle formation with you and Rowan.

"This!" Marcus shouts over the creature's growling. "This is what I was trying to warn you about! The rifts are growing more frequent, the beasts more aggressive. They're hunting you specifically, Your Highness. Your blood magic draws them like moths to flame!"

${immediateResponse}

${rowanInstinct}

Rowan acknowledges Marcus with a curt nod—assessing him as ally for now, questions to follow if they all survive. "Knight," Rowan calls, "can you hold the left flank?"

"For the heir?" Marcus responds, falling into combat stance. "I'll hold until I'm dead."

You have allies. You have warriors ready to fight beside you. But the Shadow Beast is focused entirely on you, and your confrontational choice means you're already positioned forward—closer to danger, but also closer to decisive action.

${magicalResponse}

${criticalMoment}

Marcus calls out: "If you can use blood magic, now would be the time! These things fear the royal power!"`;
			}
		},
		{
			conditions: { hasFlags: ['tactical_mind:true', 'cooperative_combat:true'] },
			get text() {
				return `The trap you and Rowan designed was elegant: you'd continue walking, seemingly unaware, while Rowan doubled back through underbrush to approach the follower from behind. When you gave the signal—a specific hand gesture disguised as adjusting your pack—Rowan would emerge from cover, cutting off escape. The follower would be pinned between you, forced to reveal identity and intent without possibility of flight.

It was working perfectly. You'd identified the ideal location—a small clearing with limited exits, good sightlines, terrain that favored defenders. Rowan moved into position with the silence of falling snow. The follower, still tracking you, walked directly into the prepared ground.

You were three seconds from springing the trap when reality tears.

${followerSituation}

${realityTears}

${riftAppearance}

${beastEmergence}

${beastPresence}

${bloodRecognition}

The follower—revealed now by necessity rather than plan—springs from concealment but not toward you. Toward the threat. An older man, silver-haired and scarred, wearing armor marked with faded Silverwood insignia. He draws weapons with practiced efficiency: an enchanted blade and a buckler shield positioned defensively.

"Sir Marcus Thorne, Silverwood Knight!" he shouts, more for Rowan's benefit than yours. "I'm on your side! Shadow Beast—we need to coordinate!"

Rowan emerges from their concealed position instantly, assessing the new tactical situation with remarkable speed. The trap is forgotten—survival takes precedence. "Knight," Rowan calls sharply, "can you fight?"

"Twenty years fighting these abominations," Marcus responds, circling to create a flanking position. "I know their weaknesses."

Rowan makes a snap judgment. "Fine. Triangle formation—keep it surrounded, don't let it single out the heir. Fight now, questions later."

Your tactical approach is proving valuable. Instead of chaos, you have coordinated defenders, established positions, a plan forming even in the midst of crisis. Marcus and Rowan move like veterans who understand cooperative combat, each covering the other's vulnerabilities.

${immediateResponse}

${rowanInstinct}

But Rowan doesn't just defend—they coordinate. "Marcus, keep pressure on its left side! Your Highness, stay mobile, don't let it pin you! I'll draw its attention, you exploit openings!"

This is tactical combat, not chaotic brawling. Your trap mindset, your collaborative planning with Rowan, your instinct for strategy over brute force—it's all translating into coordinated defense.

${magicalResponse}

${criticalMoment}

Marcus shouts tactical advice: "Blood magic disrupts their cohesion! Aim for the core mass, not the limbs!"

You have information. You have positioning. You have allies working in sync. Now you need to decide how you'll contribute to this coordinated defense.`;
			}
		},
		{
			conditions: { hasFlags: ['cautious_approach:true', 'stealth_preference:true'] },
			get text() {
				return `You used the forest itself to lose the follower. Rowan had taught you some basics: how to obscure tracks by walking on rocks and fallen logs, how to use streams to break scent trails, how to take advantage of natural cover and misleading terrain. You implemented it all with careful attention to detail.

It worked. After fifteen minutes of careful evasion, you and Rowan paused in a dense thicket, listening. No sounds of pursuit. No glimpses of movement. The follower, however skilled, seemed to have lost your trail.

Rowan nodded approval. "Well done. Most people panic and run straight, making themselves easy to track. You stayed calm, thought tactically."

But something feels wrong. The forest is too quiet. The birds have stopped singing. Small animals that should be making noise rustling through underbrush have gone silent. It's the kind of unnatural stillness that precedes predators—the hush that means something is very wrong.

And then reality tears.

${followerSituation}

${realityTears}

${riftAppearance}

${beastEmergence}

${beastPresence}

${bloodRecognition}

Your follower appears from the trees behind you, not pursuing but arriving in parallel—as if he'd been tracking the same wrongness you felt. He's an older man, silver-haired, scarred, wearing armor with faded Silverwood insignia. His expression shows urgency rather than hostility.

"Dimensional breach!" he shouts, weapons already drawn. "I was trying to intercept it before it found you! Sir Marcus Thorne, Silverwood Knight—I'm here to protect you!"

Rowan spins, assessing both the follower and the beast in a fraction of a second. Your caution, your instinct to evade rather than confront, means you're positioned away from the immediate threat—better positioning for survival, though perhaps less ideal for decisive action.

"Prove you're an ally!" Rowan demands of Marcus. "Fight with us!"

"Gladly!" Marcus moves to a flanking position, clearly experienced with Shadow Beasts. "These things have been hunting the heir since they returned to the kingdom. The rifts respond to Silverwood blood magic—the stronger the magic, the more they're drawn!"

${immediateResponse}

${rowanInstinct}

Your cautious positioning means you have a moment other approaches wouldn't afford—time to observe, to assess, to make a deliberate choice about engagement rather than reacting on pure instinct. Marcus and Rowan are between you and immediate danger. You can see the beast's movements, study its behavior, look for weaknesses.

${magicalResponse}

But even from this safer position, your blood magic surges. The beast knows where you are. Your caution bought you seconds, not safety. It will come for you regardless of positioning, regardless of defenders. The question isn't whether you'll fight—it's how, and when, and with what level of commitment.

${criticalMoment}

Your cautious nature suggests careful engagement, measured response. But sometimes survival demands throwing caution aside and committing fully to violence. Which instinct will you follow?`;
			}
		},
		{
			conditions: { hasFlags: ['protective_of_others:true', 'clever_tactics:true'] },
			get text() {
				return `You chose the village. Not just for your own safety, but because you understood something important: whoever was following you wouldn't attack in public, with witnesses, where innocent people could be harmed. Either they'd reveal themselves peacefully, forced into the open by social pressure, or they'd retreat entirely. Either way, you'd gain information while keeping everyone safe.

It was clever tactics rooted in protective instinct. You weren't just thinking about your own survival—you were thinking about civilians who had nothing to do with royal politics or magical bloodlines or mysterious followers. They deserved protection from whatever danger might be stalking you.

Rowan approved. "Smart," they said. "Uses terrain and social dynamics instead of just physical confrontation. Your grandmother would have thought the same way."

The village comes into view through the trees—a cluster of perhaps thirty buildings, smoke rising from chimneys, the sounds of ordinary life audible even from a distance. Safety in numbers. Witnesses. Protection.

But the follower anticipated your choice. A figure steps onto the path ahead of you—not threatening, hands visible and empty, but clearly intercepting. An older man, silver-haired, wearing travel-worn armor marked with the Silverwood crest.

"Your Highness," he calls, voice carrying urgency. "Please wait. I'm Sir Marcus Thorne, Knight of the Silverwood Guard. I need to warn you before you—"

That's when reality tears.

${followerSituation}

${realityTears}

${riftAppearance}

${beastEmergence}

${beastPresence}

And it's positioned wrong. The rift opened between you and the village, putting the Shadow Beast directly in the path to safety. Beyond it, you can see villagers noticing the disturbance—people pointing, children being pulled indoors, someone running toward what might be a guard post or militia headquarters.

Civilians. Innocent people. About to be in terrible danger if this creature decides they're easier prey than you.

${bloodRecognition}

Sir Marcus reacts instantly, his entire tactical assessment shifting. "The village!" He sprints forward, positioning himself between the beast and the nearest buildings. "We have to contain it here! Can't let it reach the people!"

${immediateResponse}

${rowanInstinct}

But Rowan's focus splits. They're your guardian, sworn to protect you, but they're also a ranger who's spent decades protecting civilians from exactly these kinds of threats. "We have to keep it away from them!" Rowan shouts. "Draw its attention, keep it focused on us, don't let it turn toward easier prey!"

Your protective instinct, your clever tactic of seeking the village, has created a more complex situation. You're not just fighting for your own survival—you're fighting to protect people who don't even know they're in danger yet. The beast is between you and them. Your choices will determine whether civilians die today.

${magicalResponse}

Your blood magic surges, but now it's not just responding to threat. It's responding to your protective fury. Those are your people. Your kingdom. Your responsibility. You didn't choose royal heritage, but having it means you have power that others don't—power that can make a difference, power that demands use.

${criticalMoment}

Marcus shouts over his shoulder: "Your blood magic can save them! These creatures fear royal power! Don't hold back!"

Your protective nature, your tactical mind, your responsibility to innocents—it all comes down to this moment. How will you defend those who cannot defend themselves?`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { blood_magic_training: true }
			},
			get text() {
				return `${followerSituation}

${realityTears}

${riftAppearance}

But this time, you understand what you're seeing. Sir Aldric's training included information about dimensional rifts, about Shadow Beasts, about the ancient war between Silverwood blood magic and the entities that hunger for it. He taught you that these creatures aren't just monsters—they're extra-dimensional parasites drawn to magical bloodlines like yours, seeking to consume the power they sense.

He also taught you how to fight them.

${beastEmergence}

The Shadow Beast is massive, terrifying, radiating wrongness and hunger. But Aldric's teachings echo in your mind: "They're powerful, but they're vulnerable. Blood magic is anathema to their nature. We were designed to oppose them—the Silverwood line was forged as defenders against extra-dimensional threats. Your power isn't just about politics or healing or warfare among humans. It's about holding the line between worlds."

${beastPresence}

${bloodRecognition}

The creature lunges the moment it identifies you, massive body moving with horrifying speed despite its size. No hesitation, no assessment—just immediate violent intent focused on consuming your magic.

But you're ready.

Instinct takes over—not panic instinct, but trained instinct, Aldric's lessons manifesting as muscle memory and magical reflex. Your blood mark flares with brilliant crimson light, brighter than it's ever been, visible even through your clothing. You extend your hand almost unconsciously, and power flows.

The Shadow Beast crashes into your magic like a wave breaking against a cliff. The barrier you've created—pure blood magic shaped by intention and training—holds. More than holds: the creature recoils, shrieking in a frequency that makes your bones ache. Where your magic touches its essence, the beast's form destabilizes, shadows boiling away, cohesion breaking down.

${immediateResponse}

${rowanInstinct}

But Rowan stops mid-charge, staring at the display of power you're manifesting. The brilliant light, the way the creature recoils from your magic, the confidence in your stance—it's not the uncertain heir they've been guarding. It's someone who's been training, learning, preparing.

"You've been working with the ancestral spirits," Rowan says, and there's satisfaction in their voice. "Good. I was hoping the manor's magic would teach you. These things—" they gesture at the Shadow Beast, which is circling warily now, reassessing you as threat rather than prey, "—they're why blood magic exists. Your ancestors fought them for generations. That power in your veins? It was made for this."

The creature lunges again, and this time you don't just defend. Following Aldric's techniques, you shape your magic into focused assault—crimson energy that strikes like a spear, piercing the beast's core. It screams, form flickering, becoming less solid.

${magicalResponse}

But you're in control now. Aldric taught you the mental frameworks for managing the magic's eager violence, for directing its power with precision rather than letting it explode uncontrolled. You can feel your own vitality being drawn on—blood magic always has a cost—but you're using it efficiently, not burning yourself out.

${criticalMoment}

You've proven you can use your magic effectively. The question now is how you finish this fight—and what that choice reveals about the kind of mage you're becoming.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 25 }
			},
			get text() {
				return `${followerSituation}

${realityTears}

${riftAppearance}

Ash reacts before you've even fully processed what's happening. Years of mercenary work against extra-dimensional threats—fighting Shadow Beasts for coin, protecting caravans from rift incursions, taking contracts nobody else wanted because the pay was high and Ash's company was skilled enough to survive—all of it manifests as immediate tactical response.

"Formation delta!" Ash roars, and nearby mercenaries who'd been providing perimeter security snap into coordinated positions. They've drilled this: triangle formation with ranged weapons on the outer points, close-combat fighters creating an inner shell, and the primary target—you—protected at the center.

${beastEmergence}

${beastPresence}

Ash's mercenaries engage with professional efficiency. Crossbow bolts fly—not regular ammunition, but enchanted bolts specifically designed for extra-dimensional entities, expensive but effective. The Shadow Beast snarls as bolts strike its mass, each impact disrupting its cohesion slightly, making it more substantial and therefore more vulnerable to conventional weapons.

${bloodRecognition}

But the creature ignores the mercenaries entirely. It senses something more valuable than ordinary prey: your royal blood, your awakening magic, the concentrated power of the Silverwood line. To this creature, the mercenaries are annoyances. You are the feast it crossed dimensions to consume.

It lunges with single-minded focus, barreling through the formation toward you with horrifying speed and purpose. Mercenaries strike at it as it passes—swords cutting through shadow-flesh, axes biting into semi-solid mass—but the creature doesn't slow. It's willing to take damage, willing to sacrifice pieces of itself, as long as it reaches you.

Ash interposes themselves between you and death itself.

${immediateResponse}

The impact is tremendous—several tons of extra-dimensional predator colliding with a single mercenary captain. By all logic, Ash should be crushed, overwhelmed, destroyed. But Ash has fought these things before, knows their nature, and more importantly: Ash is fighting to protect someone they've grown to care about beyond professional obligation.

They catch the creature's charge on their shield—a massive kite shield reinforced with enchantments specifically for this purpose—and the force drives them back three feet, boots tearing furrows in forest earth. But they hold. Their sword flashes, striking at the beast's core mass with precise blows aimed at the central cohesion point where shadow becomes solid.

"Not today!" Ash growls, voice strained with effort but absolutely unwavering. "You want them? You go through me first. And I don't die easy."

${rowanInstinct}

Rowan arrives at Ash's flank a heartbeat later, their own blades flashing in coordinated strikes. The two warriors work together with remarkable synchronicity—mercenary captain and royal ranger, different backgrounds but shared purpose. They're creating a wall of steel and determination between you and the creature that hunts you.

Ash's mercenaries close in, surrounding the beast, layering attacks to keep it focused and overwhelmed. This is coordinated combat at its finest—professionals doing what they do best.

${magicalResponse}

But even with skilled defenders, even with coordinated tactics, you can feel the truth: the Shadow Beast is focused entirely on you. It will keep coming. Will accept any amount of damage. Will sacrifice pieces of itself. Will overwhelm any defense.

Because you're not just valuable prey. You're irresistible prey. Your blood magic calls to it like a beacon, and it will pursue that call until either it's destroyed or it consumes you.

Ash knows this. You see it in their face—the grim acceptance that defense alone might not be enough.

${criticalMoment}

Ash shouts over their shoulder: "If you can fight, now would be the time! We can hold it, but we can't kill it alone!"

They're creating an opening for you. Trusting you to be strong enough, brave enough, capable enough to seize the opportunity they're buying with their own bodies. That trust, that faith, that solid partnership you've built—now it demands you prove worthy of it.`;
			}
		}
	],
	choices: [
		{
			id: 'blood-magic',
			text: 'Unleash your blood magic against the creature—this is what your power was made for',
			next: 'agent_revealed',
			effects: { courage: 4, wisdom: 2 },
			hiddenEffects: {
				used_blood_magic_first_time: true,
				blood_magic_affinity: 10,
				faced_shadow_beast: true,
				combat_capable: true,
				rowan_bond: 8,
				magical_fighter: true
			},
			outcomes: [
				{
					conditions: {
						hasHiddenAttributes: { blood_magic_training: true }
					},
					effects: { wisdom: 5 },
					hiddenEffects: {
						blood_magic_mastery: 5,
						defeated_shadow_beast_solo: true
					}
				}
			]
		},
		{
			id: 'conventional',
			text: 'Draw your weapon and fight alongside Rowan—prove your courage with steel and skill',
			next: 'rowan_bonding_2',
			effects: { courage: 3 },
			hiddenEffects: {
				faced_shadow_beast: true,
				combat_capable: true,
				rowan_bond: 12,
				cooperative_combat: true,
				martial_fighter: true
			}
		},
		{
			id: 'let-rowan-protect',
			text: 'Trust Rowan to handle the beast while you provide tactical support from safety',
			next: 'rowan_bonding_2',
			effects: { wisdom: 3 },
			hiddenEffects: {
				faced_shadow_beast: true,
				rowan_saved_life: true,
				rowan_bond: 15,
				support_role: true,
				trust_in_guardian: true
			}
		},
		{
			id: 'flee-together',
			text: 'Retreat strategically with your companions—survival and intelligence over pride',
			next: 'agent_revealed',
			effects: { wisdom: 4 },
			hiddenEffects: {
				faced_shadow_beast: true,
				pragmatic_survival: true,
				rowan_bond: 10,
				lived_to_fight_another_day: true
			}
		}
	]
};

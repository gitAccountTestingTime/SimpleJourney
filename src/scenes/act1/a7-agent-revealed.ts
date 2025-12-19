import { Scene } from '../../story-manager';

const combatAftermath = `The Shadow Beast's corpse dissolves in the way these creatures always do—not dying so much as unraveling, its extra-dimensional substance losing cohesion and dissipating back into the void between worlds. The process takes less than a minute: solid shadow-flesh becoming ephemeral, then transparent, then simply gone. It leaves no blood, no bones, no physical evidence it ever existed beyond the gouged earth and torn vegetation marking where the battle occurred.

The dimensional rift that spawned it collapses moments later, reality reasserting itself with an audible snap that makes your ears pop. The wrongness in the air fades—temperature rising back to normal, colors correcting themselves, the oppressive sense of violation lifting like a weight removed from your chest.`;

const breathingSpace = `You're breathing hard, adrenaline still surging through your veins. Your blood mark pulses with residual power, eager magic slowly settling back into dormancy. Whether you fought with magic or steel, whether you faced the beast head-on or relied on allies to protect you, the confrontation has left its mark—physical exhaustion, emotional intensity, the knowledge that you just survived something that could have killed you.

Rowan is checking weapons, assessing for damage with the automatic efficiency of a warrior who's survived decades of combat. Their movements are controlled, professional, but you can see the tension in their shoulders—the aftermath of battle, the come-down from life-or-death stakes.`;

const followerEmerges = `That's when your mysterious follower emerges from the trees.

He steps into the clearing deliberately, making no effort at stealth now, hands visible and empty. Whatever reason he had for staying hidden during your forest journey, the Shadow Beast attack has apparently changed the calculation. Now he's revealing himself on his own terms, choosing this moment for the truth you've been seeking.`;

const marcusAppearance = `He's an older man—perhaps sixty years, though he carries those years with the vitality of someone half that age. Silver hair pulled back in a warrior's knot that's slightly disheveled from travel and combat. His face shows decades of weather and hardship: deep lines around eyes and mouth, a scar running from left temple to jawline, skin tanned from years spent outdoors. But his eyes are sharp, alert, assessing everything with the practiced evaluation of a veteran soldier.

He wears traveling clothes that appear nondescript at first glance—dark leather, practical wool, nothing that draws attention. But the details betray quality and purpose: the leather is supple and well-maintained, the wool is fine-grade despite appearing common, and the cut suggests these clothes were tailored by someone who understands how warriors need to move. Hidden beneath the cloak, you catch glimpses of armor—light chainmail, perhaps, or reinforced leather.

Most tellingly: he moves with the precise grace of decades of combat training. Each step is balanced, weight distributed perfectly, hands positioned where weapons could be drawn instantly if needed. This is someone who's been fighting his entire adult life and survived through skill rather than luck.`;

const marcusInsignia = `And there, partially concealed by his cloak but visible now that he's stepped into light: a badge or brooch pinned to his chest. You can't see details from this distance, but the shape is familiar—the Silverwood tree with spreading branches and deep roots. Your family's crest. Worn openly despite the danger that would have represented for the last twenty years.`;

const formalBow = `The man stops at a respectful distance—close enough for conversation, far enough to appear non-threatening. He meets your eyes for a long moment, reading something in your face or bearing. Then he executes a formal bow that speaks of court training and aristocratic protocol: right hand to chest, left behind his back, upper body bending precisely forty-five degrees, the exact bow due to royalty from a sworn knight.

"Forgive the deception, Your Highness," he says, and his voice carries both formality and genuine emotion. "I am Sir Marcus Thorne, Knight of the Silverwood Guard, Royal Agent serving House Silverwood. I have been searching for you for twenty years."`;

const marcusIdentity = `The words hang in the air—a claim that reshapes the entire situation. This wasn't a hostile follower or random danger. This was someone from your family's past, someone who survived the Purge, someone who's spent two decades looking for the heir he believed would return.`;

const rowanRecognition = `Rowan's weapons, which had been half-drawn in defensive readiness, lower slightly. Their eyes widen with recognition.

"Marcus?" Rowan breathes. "Marcus Thorne? I thought... everyone said you were dead. Killed in the initial assault on the palace."

Marcus's scarred face shows brief pain at the memory. "They said that about all of us who survived. Easier to hide when the world believes you're already dead." He glances at Rowan with something approaching fondness. "You've done well for yourself, Ranger Thorne. When I heard whispers that Rowan Thorne had been assigned as the heir's guardian, I hoped... but I needed to see for myself. Needed to know you'd found them."

Rowan absorbs this, processing. "So you've been following us. Testing us?"

"Observing," Marcus corrects gently. "Ensuring the heir was adequately protected, that you were doing your job properly, that this wasn't some elaborate trap or deception. I've seen too many false hopes over the years, too many rumors of Silverwood survivors that turned out to be lies or wishful thinking. I needed certainty before revealing myself."`;;

const shadowBeastTiming = `He gestures toward where the Shadow Beast dissolved. "The creature forced my hand. I was tracking it as well as tracking you—these rifts have been appearing with increasing frequency, and the beasts that come through are specifically hunting for Silverwood blood. Your heritage makes you a beacon to them, Your Highness. The stronger your magic grows, the more attractive you become as prey."

His expression turns grave, intense. "That Shadow Beast wasn't random. It was summoned or directed here, drawn by your blood mark's signature. Someone or something is actively hunting you, using these creatures as weapons. The longer you remain without proper protection, without allies who understand the magical threats you face, the greater the danger becomes."`;

const marcusOath = `Marcus straightens from his bow, meeting your eyes with absolute sincerity. "I served your parents. Your father saved my life during a border skirmish when I was a young knight—threw himself between me and an enemy blade, took a wound that should have killed him. Your mother healed that wound with her magic, refused to let him die for saving a subordinate. They were... they were good people. Noble not just in title, but in character."

His voice thickens with emotion barely restrained. "I wasn't in the palace when the Purge came. I was on assignment, gathering intelligence in the southern provinces. By the time I heard what happened and rushed back, it was over. Everyone dead. The bloodline supposedly extinct. I arrived three days too late to do anything except witness the aftermath."

He swallows hard. "I've spent twenty years trying to atone for that failure. Searching for any surviving member of House Silverwood, following rumors and prophecies, investigating every whisper of royal blood magic. And now here you stand—exactly as the prophecies described, bearing the blood mark, wielding the power, embodying the hope your parents died to protect."

His hand goes to his chest, over his heart, in the formal gesture of knight's oath. "I serve you now, if you'll have me. Whatever path you choose—restoration or reformation, claiming the throne or walking away from it entirely—I offer my sword, my skills, my loyalty. I couldn't protect your parents. But I can protect you. That's all I want. That's all I've wanted for twenty years."`;;

const momentOfChoice = `The forest seems to hold its breath. Marcus Thorne stands before you, a living connection to your lost family, offering service and loyalty and protection born from guilt and love and desperate purpose.

Rowan watches carefully, gauging your reaction, ready to support whatever decision you make but clearly recognizing Marcus as genuine.

And you must decide: Do you trust this revelation? Accept this oath? Welcome this mysterious follower as ally, or maintain appropriate skepticism given how convenient his appearance seems?`;

const getAgentRevealed = (): string => {
	return `${combatAftermath}\n\n${breathingSpace}\n\n${followerEmerges}\n\n${marcusAppearance}\n\n${marcusInsignia}\n\n${formalBow}\n\n${marcusIdentity}\n\n${rowanRecognition}\n\n${shadowBeastTiming}\n\n${marcusOath}\n\n${momentOfChoice}`;
};

export const AgentRevealed: Scene = {
	id: 'agent_revealed',
	get text() {
		return getAgentRevealed();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['used_blood_magic_first_time:true', 'magical_fighter:true'] },
			get text() {
				return `Your blood magic lingers in the air like residual heat, the crimson light of your blood mark slowly fading back to its dormant state. The power is settling now, returning to rest, but the memory of its intensity remains visceral—the eager surge, the violent joy it took in destroying the Shadow Beast, the way it wanted to keep going even after the threat was eliminated.

You used magic as a weapon. Not healing magic, not subtle enchantment, but raw destructive force channeled through your bloodline's ancient power. The Shadow Beast dissolved under your assault, its extra-dimensional substance unable to withstand the concentrated fury of Silverwood blood magic. It was exhilarating. It was terrifying. It was proof that you're not helpless, not dependent solely on others for protection.

But it was also exhausting. You can feel the cost now—vitality drawn from your own life force to fuel the magic, a bone-deep weariness that suggests you pushed yourself close to limits you didn't know you had. Blood magic always demands payment, and you've just made your first significant withdrawal.

${combatAftermath}

${breathingSpace}

You're still catching your breath, processing what you just did, when your follower emerges from the trees. His eyes are wide, shining with emotion you can't quite interpret—awe, hope, grief, vindication, all mixed together.

${followerEmerges}

${marcusAppearance}

But his focus isn't on his own appearance or introduction. It's on you, on the residual magic still emanating from your blood mark, on the undeniable evidence that you're not just claiming royal heritage but actively wielding royal power.

"Royal blood magic," he breathes, voice trembling slightly. "I never thought I'd see it again. Not after... not after watching it die with your parents."

${marcusInsignia}

${formalBow}

${marcusIdentity}

${rowanRecognition}

But Marcus's attention keeps returning to you, to the fading glow of your blood mark, to the evidence of power unleashed. "You fought with blood magic," he says, and there's profound emotion in his voice. "Just like your father did. He could turn that power against enemies with devastating precision, could make the magic sing with destructive purpose when protecting those he loved."

He swallows hard. "And your mother... she could heal with the same power, channel it toward restoration rather than destruction. The two of them together represented the full spectrum of what Silverwood magic could accomplish. Seeing you wield it now, seeing that the bloodline's power survived intact... Your Highness, you have no idea what this means. What hope this represents."

${shadowBeastTiming}

Marcus's scarred face shows fierce pride mixed with concern. "But you need training. Real training, beyond whatever instinct or ancestral guidance you've discovered. Blood magic is immensely powerful, but it's also dangerous—to you as much as to your enemies. Your parents spent years learning control, learning to channel the power without burning themselves out. You'll need that same training if you're going to survive what's coming."

${marcusOath}

He adds, voice soft with sincerity: "And watching you wield that power today, seeing you stand against an extra-dimensional predator with magic your parents would recognize... they would be so proud. I wish they could see what you've become, what you're capable of. But since they can't, I'll serve in their stead. I'll help you master that power, help you become the mage—and the leader—they hoped you'd be."

${momentOfChoice}

But there's additional weight now. Marcus didn't just witness you fighting. He witnessed you wielding the magic of his lost monarchs, channeling power he thought died with them. His oath isn't just about protection—it's about preserving and nurturing the magical legacy he watched destroyed twenty years ago.`;
			}
		},
		{
			conditions: { hasFlags: ['cooperative_combat:true', 'martial_fighter:true'] },
			get text() {
				return `You and Rowan stand back-to-back in the aftermath, both breathing hard, weapons still drawn as you scan for additional threats. The fight was brutal—coordinated combat against a creature designed to hunt and kill, every movement requiring precision and trust and split-second coordination. But it worked. Your collaborative tactics, your willingness to fight beside your guardian rather than hiding behind them, your competence with conventional weapons—all of it came together to bring down a threat that would have overwhelmed either of you alone.

Rowan gives you an approving nod, the kind of acknowledgment that only comes from warriors who've fought together and survived. "Good work," they say simply. "You held your position, didn't panic, struck when openings appeared. That's battlefield discipline. Whoever trained you did well."

The praise means something. Rowan doesn't offer empty compliments, doesn't coddle or inflate egos. If they say you fought well, you fought well.

${combatAftermath}

${breathingSpace}

You're checking your own weapons for damage—blade edge for nicks, grip for blood that needs cleaning, sheath for structural integrity—when your follower emerges from the trees.

${followerEmerges}

${marcusAppearance}

His eyes assess you with a warrior's professional evaluation—taking in your stance, your weapons, the way you carry yourself post-combat. There's respect in that assessment, approval from someone who clearly understands fighting.

"Excellent teamwork," he says, and his voice carries the authority of a veteran commenting on younger soldiers' performance. "Coordinated strikes, defensive positioning, trust between partners. Your guardian has trained you well—or you had training before ever meeting them. Either way, that was competent martial combat against a dangerous opponent."

${marcusInsignia}

${formalBow}

${marcusIdentity}

${rowanRecognition}

Marcus's scarred face shows a slight smile as he takes in the scene—you and Rowan standing together, weapons ready, clearly comfortable fighting as a unit. "Rowan Thorne," he says with satisfaction. "I should have known you'd train them properly. You always had excellent instincts for turning raw potential into combat capability."

Rowan inclines their head slightly. "They came with some skill already. I just refined it, taught them how to apply it against extra-dimensional threats specifically. But yes—they're a competent fighter. Would hold their own in most combat situations."

The casual professional assessment between two veterans feels oddly validating. You're not being coddled or protected from truth. You're being evaluated honestly—and passing that evaluation.

${shadowBeastTiming}

Marcus's expression turns more serious. "But martial skill alone won't be enough. These creatures are just the beginning. As your blood magic grows stronger, as you become more visible politically, the threats will escalate. You'll need more than just combat training. You'll need strategic thinking, political acumen, allies you can trust with your life."

${marcusOath}

He gestures between you and Rowan with respect. "You've already proven you can fight alongside trusted companions. That's good—that's essential. Leadership isn't about standing alone; it's about building teams, trusting others to cover your vulnerabilities while you cover theirs. Your parents understood that. They surrounded themselves with loyal, capable people and trusted those people to do their jobs."

His voice softens. "I was one of those people once. I served your father in combat, fought beside him in border conflicts, learned from him how to be a knight worth the title. Now I'm asking for the chance to serve you the same way—not as a guardian who protects you from everything, but as an ally who fights beside you when danger comes."

${momentOfChoice}

Rowan watches the exchange carefully, clearly recognizing Marcus as genuine but respecting your authority to make this decision yourself. Your cooperative combat showed you value partnership, value fighting alongside others rather than alone. Marcus is offering exactly that kind of partnership—the question is whether you trust him enough to accept it.`;
			}
		},
		{
			conditions: { hasFlags: ['rowan_saved_life:true', 'trust_in_guardian:true'] },
			get text() {
				return `Rowan helps you to your feet with gentle efficiency, checking you for injuries with the automatic concern of someone who's spent their entire career protecting others. You're shaken—the Shadow Beast came close, far too close, and if Rowan hadn't positioned themselves between you and death without hesitation, you wouldn't have survived. That knowledge sits heavy in your chest: you owe your life to your guardian's skill and sacrifice.

"Easy," Rowan murmurs, steadying you as your legs find stability. "You're safe. The threat is gone. Just breathe."

Their calm presence helps. The adrenaline starts to fade, replaced by relief and gratitude and the sobering awareness of how dangerous your heritage has made you. Shadow Beasts hunt royal blood. Being Silverwood heir isn't just a political burden—it's a target painted on your back for extra-dimensional predators.

${combatAftermath}

${breathingSpace}

You're still leaning slightly on Rowan for support when your follower emerges from the trees. His expression shows visible relief—not the detached observation of someone evaluating from a distance, but genuine concern for someone he cares about.

${followerEmerges}

${marcusAppearance}

His eyes move between you and Rowan, assessing the situation quickly: you shaken but alive, Rowan protective and watchful, the clear evidence that your guardian just saved your life. His jaw tightens briefly—frustration, perhaps, that he didn't intervene sooner, didn't reveal himself in time to help prevent the danger from getting so close.

"Thank the spirits," he breathes, and there's profound emotion in his voice. "That was too close. Far too close. I was tracking the rift signature, trying to intercept before it reached you, but I miscalculated how quickly it would manifest. If Rowan hadn't..."

He trails off, the unspoken words hanging heavy: if Rowan hadn't been there, you'd be dead.

${marcusInsignia}

${formalBow}

${marcusIdentity}

${rowanRecognition}

Marcus's attention focuses on Rowan with profound gratitude and respect. "Rowan Thorne," he says, voice thick with emotion. "Thank you. Thank you for being there when I wasn't, for doing what I've spent twenty years preparing to do. Your parents chose your guardian well—Rowan has clearly proven worthy of that trust."

Rowan inclines their head slightly, acknowledging the praise but deflecting attention. "It's my job. My oath. Protecting the heir isn't optional—it's the entire reason I exist in this role."

But Marcus shakes his head. "It's more than duty. I saw how you fought. You didn't just defend strategically—you put yourself at mortal risk without hesitation. That's not professional obligation. That's genuine care. The kind of loyalty that can't be commanded, only earned."

${shadowBeastTiming}

Marcus's scarred face shows guilt and determination. "I should have revealed myself sooner. Should have helped contain the threat before it got so close to you. I was being cautious—too cautious, clearly—trying to ensure I understood the full situation before exposing myself. That caution nearly cost you your life."

He meets your eyes with absolute sincerity. "I won't make that mistake again. Whatever skepticism or evaluation I was conducting, it ends now. You need protection, genuine protection from someone who understands the magical threats you face. Not just observation from the shadows."

${marcusOath}

His voice drops lower, more personal. "Your parents trusted me to protect them. I failed—I was away when they needed me most, arrived too late to do anything but witness the aftermath. I've lived with that failure for twenty years. I won't fail you the same way. I won't stand by and watch from a distance while danger threatens. If you'll accept my service, I'll be there—beside you, not behind you, not hiding in trees, but standing openly as your sworn protector."

${momentOfChoice}

Rowan catches your eye, giving a slight nod. They recognize Marcus as genuine, trust his offer as sincere. But they're also clearly communicating: the choice is yours. They saved your life, yes, but they won't presume to make your political decisions. You're the heir. You decide who to trust.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { confrontational_tendency: true }
			},
			get text() {
				return `${combatAftermath}

${breathingSpace}

Your mysterious follower steps forward into the clearing, and recognition hits immediately—this is the man you forced out of hiding earlier with your direct confrontation. The older warrior you demanded identify himself, the one tracking you with professional skill who chose revelation over continued stalking when you made it clear you wouldn't tolerate being hunted.

He's smiling slightly now, an expression that mixes approval with something like vindication.

${followerEmerges}

${marcusAppearance}

"As direct and effective as your parents," he says, and there's genuine warmth in his voice. "Your father had the same instinct—when facing unknown threats, he'd push forward rather than waiting for danger to reveal itself on its own terms. And your mother would support him in those confrontations, standing beside him with absolute confidence even when caution might have been wiser."

He executes that same formal bow you saw earlier, but now it carries additional meaning—not just protocol, but respect earned through your demonstrated character.

${formalBow}

"I am Sir Marcus Thorne, Knight of the Silverwood Guard, Royal Agent serving House Silverwood. I apologize for the earlier stalking—I needed to observe how you handled yourself, how you responded to unknown threats, whether you had the qualities necessary for what's coming. Not just royal blood, but royal character."

${marcusIdentity}

${rowanRecognition}

Marcus's eyes remain on you, assessing with professional approval. "You confronted me directly when you realized you were being followed. Demanded I reveal myself rather than accepting the uncertainty. That took courage—for all you knew, I was an assassin, and direct confrontation would have triggered immediate violence. But you chose boldness over fear."

He gestures toward where the Shadow Beast dissolved. "And then you faced an extra-dimensional predator with the same courage. No panic, no freezing, just immediate response to lethal threat. That's battlefield courage, Your Highness. The kind that can't be taught, only revealed under pressure."

Rowan relaxes slightly, weapons lowering. "Marcus. You've been testing them?"

"Observing," Marcus corrects, though his slight smile suggests testing isn't entirely inaccurate. "I've seen too many potential heirs over the years who claimed royal blood but lacked royal character. People who wanted the crown but couldn't handle the responsibility, who craved power but feared danger. I needed to know what kind of person you are when facing real threats, not just how you present yourself in controlled situations."

His expression turns serious, sincere. "And you passed. Both tests. You confronted unknown danger with courage and faced a Shadow Beast without surrendering to fear. Your parents would be proud—not because you're powerful or skilled necessarily, but because you're brave. Because you don't hide from threats or delegate all risk to others. That's what leadership requires."

${shadowBeastTiming}

${marcusOath}

But he adds, with a slight smile: "Though I do hope you'll balance that confrontational courage with appropriate caution going forward. Your parents were brave, yes, but they weren't reckless. They knew when to push forward and when to retreat strategically. That's the balance you'll need to find—courage tempered by wisdom, boldness informed by judgment."

${momentOfChoice}

There's additional weight to this decision. Marcus deliberately tested you, evaluated your character through manufactured challenge. Some might find that manipulative or offensive. But the test was genuine, and you apparently passed. The question is whether you trust someone who approaches loyalty through evaluation rather than immediate devotion.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 15 }
			},
			get text() {
				return `${combatAftermath}

${breathingSpace}

Your follower emerges from the trees, and Rowan's entire demeanor shifts instantly. Weapons lower, tension releases, and their face—usually so controlled and professional—breaks into something approaching joy.

"Marcus!" Rowan steps forward, forgetting protocol, forgetting the formal guardian role they usually maintain. "Marcus Thorne! I should have known. I should have recognized your tracking patterns—only you could follow me through the Wildwood without me catching you sooner."

${followerEmerges}

${marcusAppearance}

The silver-haired man's scarred face shows matching warmth, years of worry and isolation briefly lifting as he takes in Rowan. "Young Thornheart," he says, using what's clearly an old nickname. "Still as sharp as ever. Sharper, perhaps. You've grown into the ranger I always knew you'd become."

They embrace briefly—not the formal greeting of professional colleagues, but the reunion of people who genuinely care about each other. Teacher and student, perhaps, or something closer to family. When they separate, both have suspiciously bright eyes.

${marcusInsignia}

Rowan turns to you, and their voice carries conviction: "Your Highness, this is Sir Marcus Thorne. He's... he was one of the greatest knights of the Silverwood Guard. And he's the man who trained me in combat when I was barely fifteen years old, taught me everything that kept me alive through the dangerous years."

Marcus inclines his head modestly. "You were an exceptional student. Natural talent that just needed refinement and direction. I merely provided structure for skills you already possessed."

${formalBow}

${marcusIdentity}

Rowan's hand finds your shoulder, and there's urgency in their touch. "Marcus can be trusted. Absolutely trusted. He's one of the few who stayed loyal after the Purge, who didn't flee or collaborate with the new regime. He went into hiding, yes, but only because staying visible would have meant execution. And he's spent those twenty years—" their voice catches slightly, "—spent them looking for you. For the heir the prophecies promised would return."

Marcus's eyes glisten briefly, emotion carefully controlled but clearly present. "Your parents saved my life once," he says quietly. "Border conflict, twenty-three years ago. I was a young knight—arrogant, impulsive, took a risk I shouldn't have and got myself surrounded by enemies. Your father fought through an entire unit to reach me, took a blade meant for my heart. The wound should have killed him."

He swallows hard. "Your mother healed him. Used blood magic to pull him back from death's edge, spent herself to exhaustion restoring his life force. When I tried to thank them afterwards, your father just smiled and said, 'That's what we do. We protect our people, and they protect us. That's what makes us worth following.' "

${shadowBeastTiming}

${marcusOath}

Rowan speaks up, voice steady and certain: "I vouch for him. Completely. If you're asking whether he can be trusted, the answer is yes—without reservation. Marcus Thorne is one of the most honorable people I've ever known. If he's offering you his service, that service will be absolute and unwavering."

Marcus glances at Rowan with gratitude. "Thank you. That means... that means more than you know. I've been alone for so long, hiding, searching, doubting whether I'd ever find purpose again. And now here you both are—the heir I sought and the student I trained, working together, offering me a chance to serve as I was always meant to."

${momentOfChoice}

But there's additional context now. This isn't just a stranger offering service. This is someone Rowan knows, trusts, vouches for with absolute conviction. Someone who trained your guardian, taught them the skills that have kept you alive. The bond between them is real, deep, and carries weight. Your decision about Marcus affects not just practical security but also your relationship with Rowan—accepting or rejecting someone they clearly love like family.`;
			}
		}
	],
	choices: [
		{
			id: 'trust',
			text: 'Accept his oath immediately—he helped against the Shadow Beast and clearly serves with genuine devotion',
			next: 'seraphine_introduction',
			effects: { charisma: 2 },
			hiddenEffects: {
				trust_in_marcus: true,
				marcus_loyalty: 100,
				open_to_allies: true,
				rowan_bond: 5
			}
		},
		{
			id: 'demand-proof',
			text: 'Demand proof of his loyalty and identity—trust must be earned with evidence, not just words',
			next: 'seraphine_introduction',
			effects: { wisdom: 4 },
			hiddenEffects: {
				'skepticism_level:high': true,
				marcus_respect: true,
				trust_in_marcus: true,
				marcus_loyalty: 95,
				cautious_leader: true
			}
		},
		{
			id: 'refuse',
			text: 'Refuse to accept his service—the timing is too convenient, the story too perfect to trust',
			next: 'seraphine_introduction',
			effects: { courage: 2 },
			hiddenEffects: {
				'skepticism_level:very_high': true,
				marcus_must_prove_himself: true,
				trust_in_marcus: false,
				marcus_loyalty: 85,
				rowan_bond: -3
			}
		},
		{
			id: 'ask-rowan',
			text: 'Ask for Rowan\'s counsel before deciding—their judgment has proven trustworthy and wise',
			next: 'seraphine_introduction',
			effects: { wisdom: 3 },
			hiddenEffects: {
				rowan_trusts_marcus: true,
				trust_in_marcus: true,
				marcus_loyalty: 100,
				rowan_bond: 10,
				values_counsel: true
			}
		}
	]
};

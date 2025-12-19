import { Scene } from '../../story-manager';

const tournamentAftermath = `The tournament grounds are still bustling with activity, but you've found relative sanctuary in a secluded alcove beneath the arena's upper galleries. Stone columns provide cover from prying eyes, and the noise of the crowd above creates a protective curtain of sound. Your body protests every movement—muscles burning from exertion, joints aching from impacts and strain.`;

const theWound = `You examine a cut on your forearm, likely from a grazing blow during your chosen competition. Nothing serious—just a shallow slice that's already stopped bleeding. You reach for a cloth to clean it, more out of habit than necessity.`;

const magicManifestation = `Then the world changes.

Your blood begins to glow. Not metaphorically—literally. The crimson droplets on your skin emit light, faint at first like dying embers, then growing brighter until they shine with brilliant ruby radiance. The glow spreads along the wound's edges, and you watch in stunned fascination as the cut seals itself. Not scabbing over or healing naturally—the flesh simply knits back together as if time itself is reversing.

Heat rushes through your veins, spreading from the wound site through your entire body. It's not painful, but intense—like standing too close to a forge fire, except the heat comes from within. Your heartbeat thunders in your ears, and for a breathless moment, you feel connected to something vast and ancient. A presence, or perhaps a memory, that exists beyond the boundaries of your individual consciousness.

The sensation passes as quickly as it came, leaving you gasping and staring at unmarked skin where a wound existed seconds before.`;

const valeArrival = `Vale emerges from the shadows with their characteristic grace, but there's tension in their posture you haven't seen before. Their eyes fix on your healed arm, then scan the alcove—checking for witnesses, calculating risks with the practiced efficiency of someone whose life depends on such assessments.`;

const royalConnection = `"That's blood magic," Vale says quietly, moving closer and lowering their voice to barely above a whisper. "Hereditary. Passed through bloodlines, not learned through study or practice. It's almost extinct—the art nearly died out completely twenty years ago when the royal family of Silverwood was wiped out during the Purge."`;

const historicalContext = `They glance around again before continuing. "The Silverwood dynasty ruled the eastern kingdoms for three centuries. Their power came from blood magic—the ability to heal, to enhance physical abilities, even to share life force with others. Some claimed they could sense truth in a person's blood, know their intentions with a touch. They were loved by their people and feared by their enemies."`;

const thePurge = `Vale's expression darkens. "Then came the Purge. Political rivals, fearful nobles, and religious fanatics united to destroy them. They claimed blood magic was unnatural, that the Silverwoods were tainted. In reality, they were just afraid of a power they couldn't control. The entire royal line was executed—publicly, brutally, as a warning to anyone else who might practice the art."`;

const dangerWarning = `They meet your eyes with unusual gravity. "If you manifested blood magic, it means you carry Silverwood blood. Either you're descended from a branch family no one knew existed, or..." They pause, the implication hanging heavy in the air. "Or something more significant. Either way, we need to be extremely careful. There are people who would kill for what you have—some to study it, some to exploit it, and some simply because they believe you shouldn't exist."`;

const getMagicAwakening = (): string => {
	return `${tournamentAftermath}

${theWound}

${magicManifestation}

${valeArrival}

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}`;
};

export const BloodMagicAwakens: Scene = {
	id: 'blood_magic_awakens',
	get text() {
		return getMagicAwakening();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['vale_trust:20', 'tournament_champion:magic'] },
			get text() {
				return `Your victory in the magical aptitude test drew immediate attention. The Royal Academy judges surrounded you, asking questions, taking notes, discussing your "unprecedented natural affinity." You answered as best you could, but the truth is you're not entirely sure how you performed the feats they witnessed. The magic felt instinctive, like reaching for something that had always been there, waiting.

The attention became overwhelming. Nobles approached with offers, recruiters made pitches, and curious onlookers pressed close. You needed space to think, to process what happened. You excused yourself and found a secluded alcove beneath the arena's upper galleries.

${tournamentAftermath}

You examine a small cut on your hand from the testing apparatus—a controlled injury the judges inflicted to assess healing potential. You'd managed to slow the bleeding during the test, impressing them greatly. Now, alone and exhausted, you simply want to bandage it properly.

${magicManifestation}

Vale appears instantly, moving with urgent purpose. They must have been watching from the crowd. Concern and wonder war on their face as they take in the glowing blood, the healed wound, the unmistakable evidence of what you are.

"Your performance in the tournament," they say softly, voice thick with emotion. "I hoped... but I wasn't certain. And now this." They reach out, taking your hand gently, their touch warm and grounding.

"I've grown to care about you deeply. That makes what I have to tell you both easier and harder." They meet your eyes, and you see vulnerability there you've never witnessed before. Whatever they're about to reveal clearly matters tremendously.

${royalConnection}

${historicalContext}

${thePurge}

"You might be someone very important," Vale continues, still holding your hand. "And there are people who would kill for what you have—what you are. I won't let that happen. I promise you that."`;
			}
		},
		{
			conditions: { hasHiddenAttributes: { vale_trust: 20 } },
			get text() {
				return `The tournament tested you in ways you didn't expect—not just physically, but emotionally and mentally. Throughout the competition, you kept catching glimpses of Vale in the crowd, watching with an intensity that went beyond professional interest. Their presence became an anchor, a reminder that regardless of how you performed, someone was there who genuinely cared about your wellbeing.

When the events finally concluded, you felt drained—muscles aching, mind foggy with exhaustion. You found your way to a quiet alcove beneath the arena's upper galleries, seeking a moment of peace before facing the post-tournament crowds.

${tournamentAftermath}

${theWound}

${magicManifestation}

Vale appears immediately, faster than should be possible unless they were already close by—watching over you, protecting you even when you didn't realize it. Concern etches lines in their usually composed face as they take in the scene: the glowing blood, the sealed wound, the undeniable truth written in crimson light.

"I was afraid of this," they say quietly, moving to sit beside you. "But also... hoped for it." They take your hand, their touch steady and reassuring. "I need to be honest with you about something."

They draw a deep breath. "I've grown to care about you more than I should, given my profession. Information brokers aren't supposed to develop attachments—it compromises judgment, creates vulnerabilities, makes you sloppy. But with you..." They trail off, then seem to steel themselves.

"You need to know what this means. You might be someone very important. And there are people who would kill for what you have. I won't let that happen. Whatever comes next, you won't face it alone."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}`;
			}
		},
		{
			conditions: { hasFlags: ['tournament_champion:combat'] },
			get text() {
				return `Victory in the combat tournament came at a cost. Your body bears the marks of each fight—bruises blooming purple and yellow, muscles screaming protest with every movement, and several cuts from opponents' weapons that got through your guard. The final match was particularly brutal, a grinding test of endurance and pain tolerance as much as skill.

But you won. The crowd roared your name, officials presented you with a victor's token, and combat trainers from various military organizations immediately approached with recruitment offers. You accepted their congratulations with weary grace, then excused yourself before the adrenaline fully wore off and your body remembered how much punishment it had endured.

You found a secluded alcove beneath the arena's upper galleries, collapsing against the cool stone with relief.

${tournamentAftermath}

You examine the wounds more carefully now, cataloging which ones need attention. There's a particularly nasty cut on your forearm from a opponent's blade—clean edge, precise strike, the work of someone who really knew their craft. You'll need to clean and bandage it properly.

${magicManifestation}

Vale emerges from the shadows, eyes wide with a mixture of shock and recognition. They've seen many things in their career as an information broker, but this clearly catches them off-guard.

"Your combat skills were impressive," they say, voice tight with tension. "Natural talent, good instincts, excellent tactical awareness. I knew you were capable, but this..." They gesture at your healed arm, at the fading glow of your blood. "This changes everything."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

Vale's expression shifts to grim determination. "Your combat victory already drew attention. This will draw more—the wrong kind. We need to be strategic about what happens next."`;
			}
		},
		{
			conditions: { hasFlags: ['tournament_participant:none'] },
			get text() {
				return `You chose not to compete in the physical tournaments, instead spending the day navigating the social battlefield of the arena's premium sections. It was its own kind of exhausting competition—reading body language, managing conversations with nobles who could help or harm your future, carefully presenting yourself as capable and valuable without seeming desperate or arrogant.

The networking went well, or so you believe. Several promising contacts were made, including a minor noble who seemed genuinely interested in sponsoring an independent adventurer. A merchant family expressed interest in hiring protection for a trade caravan. Even a Royal Academy administrator suggested you might qualify for certain auxiliary programs that didn't require magical ability.

But the mental exertion of maintaining perfect composure for hours proved more tiring than any physical contest. You excused yourself from the social circles, needing a moment of privacy to drop the carefully constructed facade.

${tournamentAftermath}

While examining a decorative sword display—part curiosity, part professional interest in the quality of the weaponry—you accidentally catch your hand on an exposed blade edge. It's a stupid mistake, born of exhaustion and distraction. The cut is shallow but stings sharply, and you curse your carelessness.

${magicManifestation}

Vale appears instantly, as if they'd been waiting nearby. Given their profession and apparent interest in your wellbeing, they probably were. Their eyes fix on the healed wound, the fading glow, and something like satisfaction crosses their face.

"I was wondering when it would manifest," they say, voice low and measured. "Your bloodline has been dormant, waiting for the right trigger. Sometimes it's physical stress, sometimes emotional. Sometimes..." They gesture around the arena. "Sometimes it's simply being in the right place, surrounded by enough ambient magical energy to wake what's sleeping."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

"Choosing not to compete might have been the smartest decision you made today," Vale adds thoughtfully. "This manifestation happened in relative privacy. If it had occurred in front of the judges during a magical aptitude test, or in the combat arena..." They shake their head. "The wrong people would already know. This way, we have time to prepare."`;
			}
		}
	],
	choices: [
		{
			id: 'panic',
			text: 'Panic about the impossible thing that just happened to you',
			next: 'meet_whisper',
			effects: { courage: -1 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:fear': true
			}
		},
		{
			id: 'control',
			text: 'Focus inward and try to understand this new power rationally',
			next: 'meet_whisper',
			effects: { wisdom: 3 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:curiosity': true,
				vale_trust: 5
			}
		},
		{
			id: 'ask-help',
			text: 'Turn to Vale for guidance and support through this revelation',
			next: 'meet_whisper',
			effects: { charisma: 2 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:trust': true,
				vale_trust: 15,
				vale_romance: 10
			}
		},
		{
			id: 'demand-answers',
			text: 'Demand to know everything Vale knows about blood magic and royal lineages',
			next: 'meet_whisper',
			effects: { courage: 2 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:assertive': true,
				vale_trust: -5
			}
		}
	]
};

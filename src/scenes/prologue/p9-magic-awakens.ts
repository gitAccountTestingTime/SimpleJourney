import { Scene } from '../../story-manager';

const tournamentAftermath = `The tournament grounds are still bustling with activity, but you've found relative sanctuary in a secluded alcove beneath the arena's upper galleries. Stone columns provide cover from prying eyes, and the noise of the crowd above creates a protective curtain of sound. Your body protests every movement...muscles burning from exertion, joints aching from strain.`;

const theWound = `You examine a cut on your forearm, likely from a grazing blow during your chosen competition. Nothing serious—just a shallow slice that's already stopped bleeding. You reach for a cloth to clean it, more out of habit than necessity.`;

const magicManifestation = `Then the world changes.

Your blood begins to glow. Not metaphorically. Literally. The crimson droplets on your skin emit light, faint at first like dying embers, then growing brighter until they shine with brilliant ruby radiance. The glow spreads along the wound's edges, and you watch in stunned fascination as the cut seals itself. Not scabbing over or healing naturally, the flesh simply knits back together as if time itself is reversing.

Heat rushes through your veins, spreading from the wound site through your entire body. It's not painful, but intense. Something akin to standing too close to a forge fire, except the heat comes from within. Your heartbeat thunders in your ears, and for a breathless moment, you feel connected to something vast and ancient. A presence, or perhaps a memory, that exists beyond the boundaries of your individual consciousness.

The sensation passes as quickly as it came, leaving you gasping and staring at unmarked skin where a wound existed seconds before. You look at your arm...if it were not for the lingering warmth and the faint residual glow fading, you'd think it was all a hallucination.`;

const valeArrival = `Vale emerges from the shadows with their characteristic grace, but there's tension in their posture you haven't seen before. Their eyes fix on your healed arm, then scan the alcove—checking for witnesses, calculating risks with the practiced efficiency of someone whose life depends on such assessments.`;

const royalConnection = `"That's blood magic," Vale says quietly, moving closer and lowering their voice to barely above a whisper. "Hereditary. Passed through bloodlines, not learned through study or practice. It's almost extinct; the art nearly died out completely twenty years ago when the royal family of Silverwood was wiped out during the Purge."`;

const historicalContext = `He glances around again before continuing. "The Silverwood dynasty ruled the eastern kingdoms for three centuries. Their power came from blood magic; the ability to heal, to enhance physical abilities, even to share life force with others. Some claimed they could sense truth in a person's blood, know their intentions with a touch. They were loved by their people, and also feared by their enemies."`;

const thePurge = `Vale's expression darkens. "Then came the Purge. Political rivals, fearful nobles, and religious fanatics united to destroy them. They claimed blood magic was unnatural, that the Silverwoods were tainted. In reality, they were just afraid of a power they couldn't control. The entire royal line was executed, publicly and brutally, as a warning to anyone else who might dare to try and keep the art alive."`;

const dangerWarning = `They meet your eyes with unusual gravity. "If you manifested blood magic, it means you carry Silverwood blood. Either you're descended from a branch family no one knew existed, or..." They pause, the implication hanging heavy in the air. "Or something more significant. Either way, we need to be extremely careful. There are people who would kill for what you have in your blood, or worse. Some would wish to study it, some to exploit it, and some simply because they believe you shouldn't exist."`;

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
			conditions: { hasFlags: ['vale_romance:15', 'tournament_champion:magic'] },
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

"You might be someone very important," Vale continues, still holding your hand. "And there are people who would kill for what you have, for what you are. I won't let that happen. I promise you that."`;
			}
		},
// 		{
// 			conditions: { hasHiddenAttributes: { vale_trust: 20 } },
// 			get text() {
// 				return `The tournament tested you in ways you didn't expect—not just physically, but emotionally and mentally. Throughout the competition, you kept catching glimpses of Vale in the crowd, watching with an intensity that went beyond professional interest. Their presence became an anchor, a reminder that regardless of how you performed, someone was there who genuinely cared about your wellbeing.

// When the events finally concluded, you felt drained—muscles aching, mind foggy with exhaustion. You found your way to a quiet alcove beneath the arena's upper galleries, seeking a moment of peace before facing the post-tournament crowds.

// ${tournamentAftermath}

// ${theWound}

// ${magicManifestation}

// Vale appears immediately, faster than should be possible unless they were already close by—watching over you, protecting you even when you didn't realize it. Concern etches lines in their usually composed face as they take in the scene: the glowing blood, the sealed wound, the undeniable truth written in crimson light.

// "I was afraid of this," they say quietly, moving to sit beside you. "But also... hoped for it." They take your hand, their touch steady and reassuring. "I need to be honest with you about something."

// They draw a deep breath. "I've grown to care about you more than I should, given my profession. Information brokers aren't supposed to develop attachments—it compromises judgment, creates vulnerabilities, makes you sloppy. But with you..." They trail off, then seem to steel themselves.

// "You need to know what this means. You might be someone very important. And there are people who would kill for what you have. I won't let that happen. Whatever comes next, you won't face it alone."

// ${royalConnection}

// ${historicalContext}

// ${thePurge}

// ${dangerWarning}`;
// 			}
// 		},
		{
			conditions: { 
				hasHiddenAttributes: { vale_romance:15 }, 
				hasFlags: ['tournament_champion:combat'] },
			get text() {
				return `Victory in the combat tournament came at a cost. Your body bears the marks of each fight...bruises blooming purple and yellow, muscles screaming protest with every movement, and several cuts from opponents' weapons that got through your guard. The final match was particularly brutal, a grinding test of endurance and pain tolerance as much as skill.

But you won. The crowd roared your name, officials presented you with a victor's token, and combat trainers from various military organizations immediately approached with recruitment offers. Through it all, you kept catching glimpses of Vale in the crowd, their eyes never leaving you. Not watching like the recruiters, calculating your value. Watching instead like someone who cared whether you were truly alright beneath the warrior's mask you wore.

You accepted the congratulations with weary grace, then caught Vale's eye. They gave you a subtle nod toward a quieter area; an understanding that you needed space, and they would be there when you were ready. You excused yourself before the adrenaline fully wore off and your body remembered how much punishment it had endured.

You found a secluded alcove beneath the arena's upper galleries, collapsing against the cool stone with relief.

${tournamentAftermath}

You examine the wounds more carefully now, cataloging which ones need attention. There's a particularly nasty cut on your forearm from your opponent's blade; clean edge, precise strike, the work of someone who really knew their craft. You'll need to clean and bandage it properly. You reach to clean it with a cloth when suddenly—

${magicManifestation}

Vale appears instantly, moving with urgent purpose. They must have been nearby, keeping watch even when you thought you were alone. Concern and wonder war on their face as they take in the glowing blood, the sealed wound, the undeniable truth written in crimson light.

"I knew you were extraordinary," Vale says softly, kneeling beside you and gently taking your hand. "Your combat skills, your courage, the way you faced down opponents who should have broken you. But this..." Their voice catches with emotion. "This explains so much."

They meet your eyes, and the vulnerability you see there takes your breath away. "I've grown to care about you, {name}. Perhaps more than is wise or safe for someone in my profession. But watching you fight today, seeing you triumph..." They touch the unmarred skin where the wound had been. "I found myself fearful that something would happen to you. And now I understand why your wounds always healed faster than they should have, why you recovered from exhaustion quicker than seemed natural."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

Vale's grip on your hand tightens, protective and fierce. "Your combat victory already drew attention from every military recruiter in the kingdom. This power will draw more...nobles, mages, people who would see you as a weapon to be wielded or a threat to be eliminated. But I won't let that happen. Whatever comes next, you won't face it alone. I promise you that."`;
			}
		},
		{
			conditions: { hasFlags: ['tournament_champion:combat'] },
			get text() {
				return `Victory in the combat tournament came at a cost. Your body bears the marks of each fight...bruises blooming purple and yellow, muscles screaming protest with every movement, and several cuts from opponents' weapons that got through your guard. The final match was particularly brutal, a grinding test of endurance and pain tolerance as much as skill.

But you won. The crowd roared your name, officials presented you with a victor's token, and combat trainers from various military organizations immediately approached with recruitment offers. You accepted their congratulations with weary grace, then excused yourself before the adrenaline fully wore off and your body remembered how much punishment it had endured.

You found a secluded alcove beneath the arena's upper galleries, collapsing against the cool stone with relief.

${tournamentAftermath}

You examine the wounds more carefully now, cataloging which ones need attention. There's a particularly nasty cut on your forearm from a opponent's blade; clean edge, precise strike, the work of someone who really knew their craft. You'll need to clean and bandage it properly. You reach to clean it with a cloth when suddenly—

${magicManifestation}

Vale emerges from the shadows, eyes wide with a mixture of shock and recognition. They've seen many things in their career as an information broker, but this clearly catches them off-guard.

"Your combat skills were impressive," they say, voice tight with tension. "Natural talent, good instincts, excellent tactical awareness. I knew you were capable, but this..." They gesture at your healed arm, at the fading glow of your blood. "This changes everything."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

Vale's expression shifts to grim determination. "Your combat victory already drew attention. This will draw more, and almost exclusively the wrong kind. We need to be very strategic about what happens next."`;
			}
		},
		{
			conditions: { 
				hasHiddenAttributes: { vale_romance:15 }, 
				hasFlags: ['tournament_participant:magic'] 
			},
			get text() {
				return `The magical aptitude test was unlike anything you've experienced. The Royal Academy judges put you through a series of exercises designed to reveal innate magical potential; sensing energy flows, manipulating simple enchantments, resonating with various magical artifacts. You performed adequately, showing enough promise to be noted but not enough to win. Several competitors displayed flashier abilities or more refined control.

Throughout the testing, you kept catching glimpses of Vale in the crowd. Their attention never wavered from you, watching with an intensity that went beyond casual interest. When the judges announced the results and you'd placed well, but not exceptionally, Vale's expression remained warm and supportive rather than disappointed.

The experience left you drained in ways physical exertion never does. Magic pulls from somewhere deep inside, from reserves you didn't know you had. You found a secluded alcove beneath the arena's upper galleries, needing time to recover before facing the crowds.

${tournamentAftermath}

You examine a cut on your arm from a controlled injury the judges inflicted to assess healing potential. You'd managed to slow the bleeding slightly during the test, which earned you points. But now you just want to clean and bandage it properly. You reach to clean it with a cloth when suddenly—

${magicManifestation}

Vale appears immediately, moving with urgent purpose. Concern and wonder war on their face as they take in the glowing blood, the healed wound, the undeniable evidence of something far beyond what the judges witnessed.

"I've been watching you throughout the tournament," Vale says softly, taking your hand gently. "What you showed the judges was impressive, but this..." They gesture at your unmarked skin. "This is extraordinary. The kind of power that manifests only in very specific bloodlines."

Their grip tightens slightly, reassuringly. "I've grown to care about you, {name}. That makes what I have to tell you both easier and harder. But you deserve to know the truth...about what you are, about what this means, and about the danger you're now in."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

"The judges saw potential," Vale continues, voice thick with emotion. "But they didn't see this. We have a small window before anyone realizes you're more than a moderately talented magical candidate. We need to use that time wisely."`;
			}
		},
		{
			conditions: { hasFlags: ['tournament_participant:magic'] },
			get text() {
				return `The magical aptitude test pushed you to your limits. The Royal Academy judges evaluated everything; your ability to sense magical currents, manipulate simple enchantments, and resonate with various artifacts. You performed well enough to be noticed, showing clear potential even if you didn't achieve championship level. Several judges took notes about your "interesting raw talent" and "unconventional approach."

The mental and spiritual exhaustion that comes from channeling magic is different from physical tiredness. It's deeper, more profound, as if you've been reaching into parts of yourself you barely understand. When the testing concluded, you needed space to process everything you'd experienced.

${tournamentAftermath}

You examine a small cut on your arm from a controlled injury the judges inflicted to assess healing magic potential. You'd managed to slow the bleeding during the test, which impressed them, but now the wound just throbs with dull pain and continues to bleed slightly. You reach to clean it with a cloth when suddenly—

${magicManifestation}

Vale emerges from the shadows, eyes widening as they take in the scene. The shock on their face quickly transforms into careful calculation; they're an information broker by trade, and this is clearly valuable, dangerous information based on his reaction.

"Your performance in the magical test was notable," they say carefully, voice low. "But this? This is something entirely different. Something the judges didn't detect, or perhaps couldn't detect. Let me tell you what I know..."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

Vale studies you with new understanding. "The magical aptitude the judges measured was real. But it was only the surface. What you just demonstrated, that hereditary blood magic, it means you're connected to a legacy most people believe is extinct."`;
			}
		},
		{
			conditions: { 
				hasHiddenAttributes: { vale_romance:15 }, 
				hasFlags: ['tournament_participant:archery'] 
			},
			get text() {
				return `The archery contest tested patience, precision, and nerve in equal measure. You performed respectably hitting most targets, maintaining composure under pressure, demonstrating the steady hands and focused mind that marks a skilled archer. You didn't win, but you earned recognition from several military scouts who appreciated your form and consistency.

Throughout the competition, you spotted Vale in various parts of the crowd, always watching. Their presence became a comfort, a reminder that someone cared about your wellbeing beyond what you could offer professionally. When the contest ended, they appeared at your side almost immediately, offering quiet congratulations regardless of placement.

The sustained concentration required for archery left you mentally exhausted. Physical strain combined with hours of maintaining absolute focus took their toll. You found a secluded alcove beneath the arena's upper galleries, grateful for a moment of peace.

${tournamentAftermath}

While removing your archery equipment, you accidentally slice your forearm on the sharp edge of an arrow fletching, a careless mistake born of exhaustion and shaky hands. The cut isn't deep but it stings sharply, and you curse your lack of focus as you reach to clean it with a cloth when suddenly—

${magicManifestation}

Vale appears instantly, as if they'd been waiting nearby which, knowing them and the bond between you, they probably were. Their eyes widen at the glowing blood, the sealed wound, and something like understanding dawns on their face.

"I had suspicions," Vale admits quietly, moving close and taking your hand. "Little things I noticed since we first met. You heal faster than normal, bounce back from injuries with unusual speed. I thought it was just good constitution, but this..." They touch the unmarred skin where the cut had been moments before.

"I need to tell you something important," they continue, voice soft but urgent. "And you need to know that my feelings for you won't change based on what you are. If anything, this makes me more determined to protect you."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

Vale's expression turns fiercely protective. "Your archery skills are impressive, but this power, this bloodline, makes you invaluable in ways that are both wonderful and terrifying. But you don't have to figure this out alone."`;
			}
		},
		{
			conditions: { hasFlags: ['tournament_participant:archery'] },
			get text() {
				return `The archery contest demanded absolute focus and steady nerves. Each shot required calculating distance, wind, and trajectory while maintaining perfect form. You performed well...not champion level, but solid enough to earn approving nods from several experienced archers and military scouts. The competition was fierce, with a couple truly exceptional marksmen making your decent showing seem unremarkable by comparison.

Hours of sustained concentration and physical control left you drained. The tension of maintaining perfect posture, the strain of drawing the bow repeatedly, the mental pressure of performing under thousands of watching eyes...it all accumulated into bone-deep weariness.

${tournamentAftermath}

While packing away your archery equipment, you carelessly catch your forearm on a sharp arrow fletching. The cut is shallow but enough to draw blood, and you mentally berate yourself for the lapse in attention after maintaining such careful focus for hours. You reach to clean it with a cloth when suddenly—

${magicManifestation}

Vale appears from the shadows, their expression shifting rapidly from casual greeting to shocked recognition. They freeze for a moment, eyes locked on your glowing blood, before quickly checking the alcove to ensure no one else witnessed what just happened.

"That's not normal," they state quietly, moving closer but maintaining a professional distance. "That's was undoubtedly blood magic. Hereditary. Powerful. And... supposedly extinct."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

Vale's analytical mind is clearly working through implications. "Your archery skills caught some attention, but nothing extraordinary. This, however..." They gesture at your healed arm. "This changes everything about who you are and what you might become. You should be very careful about what you wish to do next."`;
			}
		},
		{
			conditions: { hasHiddenAttributes: { vale_romance:15 }, hasFlags: ['tournament_participant:strategy'] },
			get text() {
				return `The strategy tournament was a battle of minds rather than bodies. You faced opponents across game boards and tactical scenarios, each match a test of foresight, adaptability, and mental discipline. You performed credibly, winning some matches, losing others, demonstrating enough skill to be noted by several observers including military tacticians looking for potential staff officers.

Throughout the competition, you caught glimpses of Vale watching from the gallery. Their attention never wavered, and whenever you glanced their way, they offered subtle encouragement...a slight nod, a brief smile, small gestures that grounded you during intense moments of calculation.

The mental exertion proved more exhausting than any physical contest. Hours of sustained concentration, analyzing countless potential outcomes, forcing your mind to think three moves ahead in multiple scenarios simultaneously...it all left you intellectually drained.

${tournamentAftermath}

While organizing the game pieces from your final match, you carelessly catch your hand on the arm corner of a metal game piece. It's a foolish injury, the kind that happens when exhaustion makes you clumsy. The cut is small but bleeds freely enough to be annoying. You reach to clean it with a cloth when suddenly—

${magicManifestation}

Vale appears immediately, concern etched on their face as they rush to your side. Their eyes widen at the glowing blood, the sealed wound, and a complex mixture of emotions crosses their features; surprise, understanding, concern, and something that might be protective affection.

"Your tactical mind impressed the judges," Vale says softly, kneeling beside you and gently taking your hand. "I watched you outthink opponents who had decades more experience. But this..." They touch the unmarred skin with reverent fingers. "This explains certain things I'd noticed but couldn't quite place."

Their voice drops even lower, intimate and serious. "I've grown to care deeply about you. {name}. Probably more than is wise for someone in my profession. That means I need to be completely honest about what this manifestation means and what dangers it brings."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

"Your strategic abilities will serve you well in what comes next," Vale says, meeting your eyes with fierce determination. "Because now you'll need to think several moves ahead not just in games, but in staying alive. And I promise you won't face that challenge alone."`;
			}
		},
		{
			conditions: { hasFlags: ['tournament_participant:strategy'] },
			get text() {
				return `The strategy tournament tested your tactical mind against skilled opponents. Game matches and strategic scenarios revealed how you think under pressure, how you adapt to unexpected moves, and whether you can maintain composure while multiple threats develop simultaneously. You performed well enough to be noticed, as several military observers and noble advisors took note of your name, but you didn't dominate the field in the end.

The mental exhaustion that comes from hours of intense strategic thinking is profound. Your mind feels simultaneously sharp from the constant engagement and foggy from the sustained effort. You needed space away from the crowds, away from judging eyes, to let your thoughts settle.

${tournamentAftermath}

While idly examining a decorative sword display, partly to rest your mind with something non-strategic, partly out of professional curiosity, you accidentally catch your arm on an exposed edge of the display. It's a stupid mistake, the kind of carelessness that comes from mental fatigue overriding physical awareness. You sit back with a curse as you notice the cut bleeding slightly. You reach to clean it with a cloth when suddenly—

${magicManifestation}

Vale emerges from the shadows, their composed mask slipping as they take in the glowing blood and sealed wound. They quickly scan the area, ensuring no one else witnessed the impossible thing that just occurred.

"That's blood magic," Vale states flatly, voice carefully controlled. "Hereditary power passed through bloodlines, not learned through study. And it is supposed to be extinct. The art died out along with the Silverwood royal family when they were executed twenty years ago."

${royalConnection}

${historicalContext}

${thePurge}

${dangerWarning}

Vale's expression turns calculating. "Your performance in the strategy tournament demonstrated good tactical thinking. You're going to need those skills now, because what you've just revealed makes you either incredibly valuable or incredibly dangerous depending on who finds out."`;
			}
		},
		{
			conditions: { hasFlags: ['tournament_participant:none'] },
			get text() {
				return `You chose not to compete in the physical tournaments, instead spending the day navigating the social battlefield of the arena's premium sections. It was its own kind of exhausting competition; reading body language, managing conversations with nobles who could help or harm your future, carefully presenting yourself as capable and valuable without seeming desperate or arrogant.

The networking went well, or so you believe. Several promising contacts were made, including a minor noble who seemed genuinely interested in sponsoring an adventurer. A merchant family expressed interest in hiring protection for a trade caravan. Even a Royal Academy administrator suggested you might qualify for certain auxiliary programs that didn't require magical ability.

But the mental exertion of maintaining perfect composure for hours proved more tiring than any physical contest. You excused yourself from the social circles, needing a moment of privacy to drop the carefully constructed facade.

${tournamentAftermath}

While idly examining a decorative sword display, partly to rest your mind with something non-strategic, partly out of professional curiosity, you accidentally catch your arm on an exposed edge of the display. It's a stupid mistake, the kind of carelessness that comes from mental fatigue overriding physical awareness. You sit back with a curse as you notice the cut bleeding slightly. You reach to clean it with a cloth when suddenly—

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
			text: 'What just happened makes no sense. Your mind races as fear and confusion flood your senses.',
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
			text: 'Take a deep breath, trying to steady your thoughts and understand this new power, and what it means for you.',
			next: 'meet_whisper',
			effects: { wisdom: 3 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:curiosity': true,
				vale_trust: 5,
				vale_romance: 3
			}
		},
		{
			id: 'ask-help',
			text: 'Turn to Vale for guidance and support to ground you. Ask them what you should do next; your mind is still reeling.',
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
			text: 'You need more information, and you need it now. Vale seems to know more than he\'s letting on. Demand to know everything Vale knows about blood magic and royal lineages.',
			next: 'meet_whisper',
			effects: { courage: 2 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:assertive': true,
				vale_trust: -5,
				vale_romance: -3
			}
		}
	]
};

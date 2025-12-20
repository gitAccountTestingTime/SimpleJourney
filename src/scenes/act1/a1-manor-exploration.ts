import { Scene } from '../../story-manager';

const inheritanceRealized = `The words still feel surreal, almost dreamlike in their impossibility: Silverwood Manor belongs to you. Not through purchase or conquest, not through accident or theft, but through blood and birthright and destiny written before you were born. This sprawling estate, abandoned for twenty years, sealed by magic and protected by prophecy, has been waiting for you.

And now you stand in its great hall, no longer a visitor or investigator, but its rightful heir. The reality of that truth settles over you with weight both exhilarating and terrifying.`;

const greatHallDescription = `The great hall itself is a masterpiece of architectural ambition and magical artistry. Vaulted ceilings soar overhead, so high that sound echoes strangely, creating an acoustic that makes even whispers feel significant. Frescoes cover every inch of the ceiling—painted scenes depicting magical creatures both beautiful and terrible, ancient heroes performing legendary deeds, moments from Silverwood history rendered in vivid color that has somehow survived decades of neglect.

Walls line with portraits, dozens of them, each capturing a silver-haired ancestor who wore the blood of House Silverwood in their veins. You see your own features reflected in their faces—the shape of your eyes in a great-grandmother's portrait, the curve of your jaw in a great-uncle's, the exact shade of your hair color recurring through generations. This is your family, your lineage, proof written in paint and canvas that you belong to something ancient and powerful.`;

const architecturalWonder = `Sunlight streams through stained glass windows—massive installations that must have taken years to craft, depicting the Silverwood tree in various seasons, surrounded by the thirteen stars of the allied houses. The light fractures into rainbow patterns that dance across marble floors, creating kaleidoscope effects that shift throughout the day. The stone itself appears to shimmer with residual magic, responding subtly to your presence, recognizing the blood that gives you claim to this place.`;

const emotionalWeight = `This is the life that was stolen from you. The childhood you should have had, walking these halls as a prince or princess, learning magic from tutors in the library, dining in the great hall with family who loved you, growing up knowing who you were and what you would become. All of it taken by the Purge, by political enemies who feared your family's power, by those who tried to erase Silverwood from history.

But they failed. You survived. You returned. And now you stand in your ancestral home, inheriting not just wealth and property, but responsibility and legacy and the weight of an entire house's hopes.`;

const companionsPresence = `Your companions from your adventuring days—the people who knew you before titles and birthright, who traveled with you as an equal, who stood beside you through danger and discovery—explore alongside you now. Each reacts differently to this revelation of your true identity, their responses shaped by their own histories, values, and relationships with power.

You watch them taking in the grandeur, and wonder: will this change things between you? Can friendship survive the transformation from fellow adventurer to noble heir? Do they see you differently now, standing in halls that speak of wealth and privilege they never possessed?`;

const getManorExploration = (): string => {
	return `${inheritanceRealized}

${greatHallDescription}

${architecturalWonder}

${emotionalWeight}

${companionsPresence}`;
};

export const ManorExploration: Scene = {
	id: 'act1_start',
	get text() {
		return getManorExploration();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['identity_accepted:true', 'royal_path:true'] },
			get text() {
				return `When you stood before your impossible portrait at Silverwood Manor, when the truth of your heritage crashed over you like a tidal wave, you made a choice: to embrace it fully. To accept not just the blood in your veins, but the responsibility it carries, the legacy it demands, the destiny it offers.

"I am ready," you declared. "I will claim my destiny and restore House Silverwood."

The words felt right then, and they feel right now, even as the full weight of what they mean begins to settle. You didn't just inherit a building—you inherited a cause, a purpose, a duty to something larger than yourself.

${inheritanceRealized}

${greatHallDescription}

${architecturalWonder}

You walk through these halls not as a visitor discovering your past, but as an heir claiming your future. Each room you enter, each artifact you touch, each decision you make—all of it carries the weight of your declaration. You chose this path deliberately, accepted the crown even before it was offered, committed yourself to restoration before fully understanding the cost.

The sense of purpose is intoxicating. This is what you were meant for, what your parents sacrificed everything to preserve. Their love and hope and desperate faith brought you here, and you won't let their sacrifice be meaningless.

${emotionalWeight}

Your companions from your adventuring days explore alongside you, and you notice the shift in their behavior. They watch you more carefully now, assessing, measuring, wondering. Not with hostility, but with the wariness of people who understand that power changes things. You declared yourself ready to be royalty—now they're watching to see if power will change who you are, if the crown will corrupt the person they knew.

Some look proud. Others look concerned. A few look calculating, already positioning themselves for whatever comes next. The dynamics are shifting, and you feel the loss of easy equality even as you gain the potential for greater purpose.`;
			}
		},
		{
			conditions: { hasFlags: ['royal_path:reluctant'] },
			get text() {
				return `When you stood before your portrait at Silverwood, when the impossible truth revealed itself, you accepted it—but reluctantly. The words you chose reflected ambivalence, uncertainty, the need for time and space to process what you'd become.

"I acknowledge what I am, but I need time to understand what this means."

That need for understanding hasn't diminished. If anything, standing here now, surrounded by such overwhelming opulence and history, the disconnect feels even more profound. Who you were—the person who grew up without privilege, who learned to survive rather than rule, who built identity through action rather than inheritance—feels impossibly distant from who you're supposed to be.

${inheritanceRealized}

${greatHallDescription}

You walk through these halls feeling like an imposter in your own inheritance. The portraits of your ancestors seem to judge you, their painted eyes asking: Are you worthy? Can you carry what we built? Will you honor what we sacrificed?

You don't have answers. You're not sure you ever will.

${architecturalWonder}

The beauty of it all—the artistic mastery, the magical craftsmanship, the sheer wealth on display—feels almost obscene when you think about the people you've met who struggle daily for survival. Rook, stealing to eat. The villagers you've helped, barely scraping by. Even your own years of hardship before discovering your heritage.

How do you reconcile the person you were with the person you're supposed to become? How do you accept privilege you never earned, power you never sought, responsibility you never wanted?

${emotionalWeight}

Your companions from your adventuring days explore alongside you, offering silent support as you navigate this uncomfortable new reality. They sense your discomfort, your reluctance, and it seems to ease some of their own tension. You're still struggling, still uncertain—that makes you relatable, human, safe to trust.

Vale stays close, ready to offer comfort or distraction as needed. Ash watches with understanding born from their own complicated relationship with nobility and power. Rook looks relieved that you're not immediately embracing aristocratic airs. The support is genuine, grounding, reminding you that whatever you become, you don't have to become it alone.`;
			}
		},
		{
			conditions: { hasFlags: ['royal_path:independent'] },
			get text() {
				return `When you stood before your portrait at Silverwood, when the truth of your bloodline became undeniable, you made your position clear: you would acknowledge the facts, but you wouldn't let them define you. You chose independence, self-determination, the right to forge your own path regardless of what your blood might demand.

"I acknowledge my blood, but I choose my own path—not royal politics."

The declaration felt right then, and it feels right now. This manor is your heritage, yes—a fact you can't change and won't deny. But it doesn't define your purpose or dictate your future. You'll use what you've inherited on your own terms, for your own goals, in service of values you choose rather than obligations you're born to.

${inheritanceRealized}

${greatHallDescription}

You walk through these halls with appreciation for their beauty but no reverence for their authority. These are resources now—useful, valuable, advantageous—but they're not sacred. The portraits of your ancestors watch with whatever judgment they carry, but you don't feel bound by their expectations. You didn't choose to be born Silverwood. You do choose what that means.

${architecturalWonder}

The wealth here is significant. The knowledge in the library, the magical artifacts in the vaults, the political leverage inherent in the Silverwood name—all of it can be used. But used for what? That's the question you get to answer, not through duty or obligation, but through choice.

Will you restore House Silverwood? Maybe. If it serves your purposes. Will you embrace noble politics? Only if it accomplishes your goals. Will you become what your parents intended? Only insofar as their vision aligns with your own.

This is power on your terms. Independence claimed, not given.

${emotionalWeight}

But stolen from you nonetheless. You can claim independence now, but you can't reclaim the childhood you should have had, the family you should have known, the life that was yours by right.

Your companions from your adventuring days explore alongside you, and you catch the relief in their expressions. You haven't changed. You haven't suddenly adopted aristocratic airs or claimed superiority. You're still you—the person who values competence over birthright, who judges people by their actions rather than their blood, who built friendships through shared danger rather than inherited privilege.

They explore these halls with you as equals, and that matters more than any title.`;
			}
		},
		{
			conditions: { hasFlags: ['royal_path:companion_focused'] },
			get text() {
				return `When you stood before your portrait at Silverwood, overwhelmed by impossible truth and inherited destiny, you declared your priorities clearly: people mattered more than heritage, relationships more than bloodlines, the friends who chose you more than the family you never knew.

"My heritage matters, but these people—my friends—matter more."

The words came from the heart, and they remain true now. Standing in your ancestral manor, surrounded by wealth and legacy and the weight of dynasty, what grounds you isn't the bloodline or the magic or the political power—it's the people who traveled here with you. The companions who stood beside you before they knew you were royalty, who stayed beside you after the revelation, who followed you here not out of duty or ambition, but out of genuine connection.

${inheritanceRealized}

${greatHallDescription}

${architecturalWonder}

But you barely notice the architectural splendor or ancestral portraits. Your attention keeps returning to your companions—Vale examining the frescoes with artistic appreciation, Ash uncomfortable in such opulence but staying close in protective solidarity, Rook trying to hide amazement behind bravado, Whisper (if they're here) cataloging information with professional interest.

They're here with you. Not as servants or subjects, not as political allies or strategic assets, but as friends. That distinction matters more than any title or birthright.

${emotionalWeight}

But here's what complicates that stolen legacy: your parents didn't just lose their lives in the Purge—they sacrificed them. They saw your future, prepared for your return, and died to ensure you would survive. Their love wasn't abstract or distant; it was active, deliberate, fierce.

And now you honor that sacrifice not by rebuilding their kingdom or restoring their political power, but by valuing what they valued: connection, loyalty, the bonds between people that transcend blood and status. They raised you through the artifacts they left, the letters they wrote, the choices they made—and those choices taught you that people matter more than power.

Vale, Ash, Rook, Whisper, and the others explore alongside you, their presence a reminder of what truly matters. They look relieved, grateful, validated by your continued prioritization of relationships over royalty. You're not distancing yourself to claim aristocratic superiority—you're bringing them closer, sharing this inheritance, making this manor a home for chosen family rather than a monument to lost dynasty.

Ash catches your eye and nods—an acknowledgment of values held and promises kept. Vale smiles, warm and genuine, relieved that wealth hasn't created distance. Rook makes a joke about "technically, since we're all friends, doesn't that make me noble-adjacent?" and the laughter breaks any remaining tension.

This place is yours. But more importantly, these people are yours, and you are theirs. That's the legacy worth protecting.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { vale_trust: 15 }
			},
			get text() {
				return `${inheritanceRealized}

${greatHallDescription}

${architecturalWonder}

${emotionalWeight}

Vale walks beside you through these halls, their usual easy confidence tempered by obvious respect for what this place represents. They're an information broker, a bard, someone who's spent years navigating noble courts and understanding power dynamics—but this is different. This isn't someone else's inherited wealth to observe and analyze; this is yours, and their relationship with you makes their presence here feel weighted with new meaning.

"Your parents had excellent taste," Vale murmurs, pausing before a portrait of what must be your grandmother—the resemblance is unmistakable. Their fingers trace the frame gently, reverently. "Look at the detail work, the quality of the pigments. These were painted by masters, commissioned at enormous expense. They wanted future generations to remember."

They turn to you, expression serious but warm. "And look—they left everything prepared for you. These documents organized and preserved, the artifacts cataloged and protected, the manor sealed against time and decay. They knew. They had faith you'd return someday, that their sacrifice wouldn't be meaningless."

Their hand finds yours briefly, a gesture of connection and reassurance. "You're still you, you know," they say quietly. "The person I've traveled with, fought beside, laughed with around campfires. The person I've come to..." They pause, seeming to weigh words carefully. "To care about deeply. A fancy house doesn't change that. Royal blood doesn't change that."

They squeeze your hand gently before releasing it. "But I won't pretend this doesn't complicate things. You're not just my traveling companion anymore. You're nobility, whether you want the title or not. Heir to a fallen kingdom, possessor of legendary magic, inheritor of significant political leverage."

Vale meets your eyes directly. "So here's what I need to know: who do you want to become? Because you get to choose. The blood gives you options, but it doesn't dictate your path. You can rebuild the kingdom, walk away entirely, or forge something completely new. I'll support whatever you decide—but I need to know you're making the choice, not letting the choice make you."`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 20 }
			},
			get text() {
				return `${inheritanceRealized}

${greatHallDescription}

${architecturalWonder}

${emotionalWeight}

Ash lingers near the doorway, clearly uncomfortable with the opulence. Their mercenary company has made camp in abandoned keeps before, slept in the ruins of forgotten fortresses, but nothing like this. This isn't a battlefield trophy or temporary shelter—this is active, preserved wealth, a monument to the kind of power they've learned to distrust.

You catch them watching you with worried eyes, their usual confidence replaced by visible uncertainty. They've told you about their own family's destruction when they got too close to royal politics, about watching people they loved corrupted by proximity to power, about the vows they made to never let ambition override integrity.

And now here you are, standing in the heart of inherited aristocracy, literally surrounded by the trappings of dynasty and privilege.

"This is... a lot," Ash says quietly, gesturing at the grandeur surrounding you. Their voice carries weight, emotion they rarely let show. "I've seen what places like this do to people. The way wealth insulates you from reality, the way power makes you forget what it's like to struggle, the way privilege convinces you that you're different, special, deserving of more than others."

They step closer, and you see genuine fear in their expression—not of external threat, but of loss. Loss of the person they've come to care about, trust, respect.

"Promise me something," Ash says, voice rough with intensity. "Don't let this place change who you are. Don't forget where you came from—where we came from. Don't let inherited wealth make you blind to those who weren't born lucky."

They reach out, hand gripping your shoulder with warrior's strength tempered by careful gentleness. "You're good. You're genuinely good—not because of your blood or your magic or your birthright, but because of the choices you've made, the values you've held, the way you treat people regardless of their status."

Ash meets your eyes directly, vulnerability stark in their gaze. "I've lost too many people to power's corruption. I won't... I can't lose you too. So promise me you'll stay who you are. Promise me the person standing in this grand hall is the same person who camped beside me, trained with me, trusted me. Because that person is worth more than any kingdom."`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { rook_trust: 15 }
			},
			get text() {
				return `${inheritanceRealized}

${greatHallDescription}

${architecturalWonder}

Rook moves through the manor with their characteristic blend of wariness and curiosity, street-sharp instincts cataloging every detail. But beneath their usual bravado, you sense genuine discomfort. This is the world that labeled them criminal, that criminalized their survival, that built wealth by excluding people like them.

"Oh, I am SO stealing one of these," Rook announces with forced levity, eyeing a golden candlestick before catching your look. "What? I'm joking! Mostly." They grin, but the humor doesn't reach their eyes. "I mean, technically it's all yours now, right? So if you gave me permission, it wouldn't even be stealing. That's called 'receiving a gift from nobility.' Very fancy."

They touch things carefully—a marble column, a silk curtain, the smooth surface of an ancient table—with fingers that know the value of everything and the security of nothing. You've seen Rook confident, cocky even, navigating street markets and Undercroft tunnels with absolute assurance. But here, surrounded by legitimate wealth and inherited power, they seem smaller somehow. Uncertain.

${emotionalWeight}

"Seriously though," Rook says more quietly, their usual sharp edge replaced by something vulnerable, almost fearful. "You're not going to forget about us now that you're all noble and fancy, right?"

They try to make it sound like a joke, but the question is genuine, weighted with real worry. "Because I've gotten used to having you around. Used to traveling with someone who sees me as a person instead of a thief or a tool or a problem to solve. Used to being valued for who I am instead of just what I can steal or where I can sneak."

Rook meets your eyes, and the vulnerability there is stark. "I know how this goes. I've watched it happen. Street kid makes good, gets money or status, suddenly their old friends are embarrassing. Reminders of poverty they want to forget. People who don't fit the new life they're building."

They gesture around the opulent hall. "This is real power. Real wealth. The kind of life I used to steal from, that used to be completely untouchable to people like me. And now it's yours, and you're standing in it, and I'm..." They trail off, searching for words.

"I'm just Rook. Street thief with good instincts and better survival skills. No noble blood, no inherited magic, no dynasty to reclaim. Just someone who tried to pickpocket the wrong person and somehow ended up here."

They force a grin, but their hands are shaking slightly. "So yeah. Promise me you won't forget. Promise me this place doesn't change what we have. Because what we have... it matters to me. More than I probably should admit."`;
			}
		}
	],
	choices: [
		{
			id: 'organize-chambers',
			text: 'Organize your personal chambers thoughtfully—make this inherited space feel like home',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 3, empathy: 2 },
			hiddenEffects: {
				manor_explored: true,
				space_claimed: true,
				making_it_home: true,
				organized_mind: true
			},
			realLifeChallenge: {
				id: 'organize_space_challenge',
				type: 'physical',
				title: 'Claim Your Space',
				description: 'Your character organizes their ancestral manor - you bring order to your own space',
				instructions: 'Spend 15 minutes organizing a space around you. Clean a desk, organize a closet, arrange books, tidy a room - choose any area that needs attention. Create a sense of order and ownership over your environment.',
				durationMinutes: 15,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose a space to organize',
					'Clear away clutter',
					'Arrange items intentionally',
					'Create a sense of order',
					'Feel ownership of your space'
				],
				rewards: {
					stats: { wisdom: 2, vitality: 2, empathy: 1 },
					hiddenAttributes: { organized_mind: 1, space_claimed: true },
					message: 'Your space is more organized, and so is your mind. Like your character taking ownership of Silverwood Manor, you\'ve claimed and ordered your own environment. Small acts of organization create foundations for greater things.'
				}
			}
		},
		{
			id: 'journals',
			text: 'Read your parents\' preserved journals—connect with the family you never knew',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 3, wealth: 80 },
			hiddenEffects: {
				manor_explored: true,
				family_history_known: true,
				'emotional_connection:family': true,
				vale_trust: 3,
				compassionate_actions: 2,
				family_treasury_discovered: true
			}
		},
		{
			id: 'politics',
			text: 'Study the political documents—understand the power dynamics and leverage you inherit',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 2, charisma: 2, wealth: 50 },
			hiddenEffects: {
				manor_explored: true,
				political_knowledge: true,
				pragmatic_focus: true,
				vale_trust: 5,
				noble_funds_accessed: true
			}
		},
		{
			id: 'magic',
			text: 'Examine the magical artifacts and grimoires—deepen understanding of your blood magic heritage',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 4, wealth: 60 },
			hiddenEffects: {
				manor_explored: true,
				magic_focus: true,
				blood_magic_affinity: 5,
				studied_grimoire: true,
				valuable_artifacts_found: true
			}
		},
		{
			id: 'companions',
			text: 'Spend meaningful time with your companions—ground yourself in who you are through connection',
			next: 'rowan_formal_introduction',
			effects: { charisma: 3, courage: 2, wealth: 30 },
			hiddenEffects: {
				manor_explored: true,
				companions_priority: true,
				companions_see_noble_life: true,
				vale_trust: 5,
				ash_trust: 5,
				rook_trust: 5,
				whisper_trust: 3,
				companion_gifts_received: true
			}
		},
		{
			id: 'visit-merchant',
			text: 'Investigate the merchant who arrived at the manor gates—begin engaging with the world as nobility',
			next: 'manor_grounds_merchant',
			effects: { wisdom: 1 },
			hiddenEffects: {
				manor_explored: true,
				merchant_visit_chosen: true
			}
		},
		{
			id: 'investigate-library',
			text: 'Investigate the family library with Vale—uncover what secrets have been hidden in your own archives',
			next: 'vale_bonding_1',
			effects: { wisdom: 3, curiosity: 2 },
			hiddenEffects: {
				manor_explored: true,
				library_investigation_begun: true,
				vale_trust: 5
			}
		}
	]
};

import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Sage, Vale, and Ash
 * Three distinct relationship arcs with unique themes
 */

// ===== SAGE: Intellectual Connection & Democratic Ideals =====

export const SageBonding1: Scene = {
	id: 'sage_bonding_1',
	text: `You find Sage in the library at midnight, surrounded by books and scrolls about governance systems. He's so engrossed he doesn't notice you until you're right beside him.

"Oh! Your Highness!" He jumps, scattering papers. "I'm sorry, I lose track of time when researching. I was comparing democratic models from ancient kingdoms - some lasted centuries before corruption set in. I thought maybe if we understood the failures, we could..." He trails off, realizing he's rambling.

His earnest enthusiasm is endearing. This young scholar genuinely believes research can save the kingdom.`,
	choices: [
		{
			id: 'engage-ideas',
			text: 'Engage with his ideas - discuss governance models',
			next: 'sage_bonding_1b',
			effects: { wisdom: 5, empathy: 3 },
			hiddenEffects: {
				sage_bond: 15,
				sage_thrilled: true,
				intellectual_connection: true,
				sage_romance_seed: true
			}
		},
		{
			id: 'admire-dedication',
			text: 'Admire his dedication and passion for change',
			next: 'sage_bonding_1b',
			effects: { empathy: 5, charisma: 3 },
			hiddenEffects: {
				sage_bond: 12,
				sage_validated: true,
				passion_appreciated: true
			}
		}
	]
};

export const SageBonding1B: Scene = {
	id: 'sage_bonding_1b',
	text: `"You actually want to hear this?" Sage's eyes light up. "Most nobles think democracy is naive idealism. But the evidence shows mixed governance - combining democratic councils with skilled leadership - creates the most stable, prosperous kingdoms."

He spreads out documents excitedly. "Look - the Ocean Kingdoms lasted 300 years with elected regional councils advising the monarch. The Highland Confederacy survived two centuries with rotating leadership. It works when done right!"

His passion is infectious. But underneath, you sense insecurity - constant fear his ideas will be dismissed, that he's not taken seriously because he's young and common-born.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { intellectual_connection: true }
			},
			text: `As you discuss governance theory, Sage keeps glancing at you with wonder. "You actually understand," he says softly. "You engage with the philosophy, not just pretend to listen. That's..." He blushes. "That's rare. That's special."

Hours pass in debate and discussion. At one point, you're both leaning over the same document, heads close, and Sage freezes - aware of proximity, of your breath on his cheek. He pulls back nervously. "Sorry, I got too excited about constitutional theory," he jokes, but his cheeks are red.`
		}
	],
	choices: [
		{
			id: 'implement-ideas',
			text: 'Propose implementing some of his ideas - make him advisor',
			next: 'sage_bonding_2',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				sage_bond: 25,
				sage_advisor: true,
				dreams_realized: true,
				sage_romance_advancing: true
			}
		},
		{
			id: 'challenge-refine',
			text: 'Challenge and refine his ideas - intellectual partnership',
			next: 'sage_bonding_2',
			effects: { wisdom: 7, empathy: 3 },
			hiddenEffects: {
				sage_bond: 22,
				intellectual_equals: true,
				sage_respects_mind: true
			}
		}
	]
};

export const SageBonding2: Scene = {
	id: 'sage_bonding_2',
	text: `Sage works with you to draft reform proposals. His knowledge is encyclopedic but he defers to you constantly, second-guessing his expertise.

"Maybe that's too radical," he says, crossing out sections. "Or not radical enough? I don't know. What if I'm wrong and my ideas hurt people?" His anxiety is palpable.

"You're brilliant, Sage," you remind him. "Trust yourself."

He looks at you with vulnerable gratitude. "That means everything coming from you. I spent years being dismissed - 'idealistic boy,' 'naive commoner.' But you actually listen. Actually trust my mind." His voice drops. "You make me feel like maybe I can do this. Change the world. Make a difference."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { sage_romance_advancing: true }
			},
			text: `"It's more than respect," Sage admits quietly. "Though I shouldn't say this. You're royalty and I'm... me. But working with you, sharing ideas, having you value my thoughts..." He swallows. "I've never felt so seen. So valued. So..." He stops, unable to say it.

But his eyes say it clearly: he's falling in love. Terrified and hopeful in equal measure.`
		}
	],
	choices: [
		{
			id: 'affirm-feelings',
			text: 'Gently affirm you feel the connection too',
			next: 'sage_romance_path',
			effects: { empathy: 7, charisma: 5 },
			hiddenEffects: {
				sage_bond: 30,
				sage_romance: true,
				mutual_feelings: true,
				sage_relationship: 'romantic'
			}
		},
		{
			id: 'partnership',
			text: 'Affirm intellectual partnership and friendship',
			next: 'sage_bonding_3',
			effects: { wisdom: 6, empathy: 4 },
			hiddenEffects: {
				sage_bond: 22,
				sage_relationship: 'partners',
				platonic_bond: true
			}
		}
	]
};

export const SageRomancePath: Scene = {
	id: 'sage_romance_path',
	text: `"You... feel it too?" Sage looks like his world just shifted. "I thought I was imagining it. Wishful thinking. You're brilliant and powerful and important, and I'm just a scholar with books and ideas."

"You're everything," you correct gently. "Intelligent, passionate, dedicated to making the kingdom better. How could I not develop feelings?"

Sage's eyes fill with tears. "I've loved you for months," he confesses. "Every conversation, every shared idea, every time you valued my work instead of dismissing it. You make me feel like I matter. Not as a tool or resource but as... as me."

He takes your hands tentatively. "I want this. Want to build a better world with you. Not just as advisor but as partner. In everything." His smile is tremulous but genuine. "Help me be brave enough to believe this is real?"`,
	choices: [
		{
			id: 'kiss-him',
			text: 'Kiss him - show him it\'s absolutely real',
			next: 'sage_romance_continue',
			effects: { empathy: 7, charisma: 6 },
			hiddenEffects: {
				sage_bond: 35,
				sage_romance_level: 2,
				devoted_love: true,
				sage_secure: true
			}
		}
	]
};

// ===== VALE: Mystery & Knowledge Seeking =====

export const ValeBonding1: Scene = {
	id: 'vale_bonding_1',
	text: `Vale approaches you with old documents. "Found something interesting," they say casually, but their eyes gleam with excitement. "Your family's library has gaps - books that should be here but aren't. Someone's been hiding things."

They spread out inventory lists with discrepancies. "These banned texts, historical accounts that mysteriously vanished after your parents died. Someone doesn't want you knowing certain truths." Vale looks at you intently. "Want to investigate?"

The offer is tempting and dangerous. Vale doesn't care about propriety - they care about truth.`,
	choices: [
		{
			id: 'investigate-together',
			text: 'Agree to investigate together - uncover hidden truths',
			next: 'vale_bonding_1b',
			effects: { wisdom: 5, courage: 4 },
			hiddenEffects: {
				vale_bond: 15,
				investigation_partners: true,
				vale_approves: true,
				vale_romance_seed: true
			}
		}
	]
};

export const ValeBonding1B: Scene = {
	id: 'vale_bonding_1b',
	text: `Working with Vale is exhilarating. They're brilliant at finding patterns, solving puzzles, connecting seemingly unrelated information. Together you uncover a conspiracy - certain nobles have been suppressing information about your parents' reforms.

"They wanted to erase what your parents tried to do," Vale explains. "Make it seem like the old ways were always the only ways." They look at you with rare seriousness. "You're a threat because you might finish what they started. That's why they watch you so closely."

Vale's hand finds yours in the dim library light. "I'll help you uncover it all. Every secret, every lie. That's what I do." Their voice softens. "And maybe... that's who I want to do it for."`,
	choices: [
		{
			id: 'adventure-partners',
			text: 'Become adventure partners - investigate everything together',
			next: 'vale_bonding_2',
			effects: { wisdom: 6, courage: 5 },
			hiddenEffects: {
				vale_bond: 20,
				adventure_partnership: true,
				vale_committed: true
			}
		},
		{
			id: 'acknowledge-connection',
			text: 'Acknowledge the personal connection growing between you',
			next: 'vale_romance_path',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				vale_bond: 25,
				vale_romance: true,
				mutual_feelings: true,
				vale_relationship: 'romantic'
			}
		}
	]
};

export const ValeRomancePath: Scene = {
	id: 'vale_romance_path',
	text: `"Wasn't expecting this," Vale admits with a rare vulnerable smile. "I wander. Never stay anywhere long. Never let anyone get close. But you..." They cup your face gently. "You make me want to stay. Want to build something instead of just observing and moving on."

Vale kisses you softly. "I've seen a hundred kingdoms, walked a thousand roads. But investigating with you? Uncovering truths together? That's the most alive I've ever felt." They pull you close. "So yes. Let's solve every mystery, face every danger, uncover every secret. Together."`,
	choices: [
		{
			id: 'affirm-partnership',
			text: 'Affirm partnership in adventure and love',
			next: 'vale_romance_continue',
			effects: { courage: 6, empathy: 6 },
			hiddenEffects: {
				vale_bond: 30,
				vale_romance_level: 2,
				adventuring_lovers: true
			}
		}
	]
};

// ===== ASH: Mercenary Loyalty & Protection =====

export const AshBonding1: Scene = {
	id: 'ash_bonding_1',
	text: `Ash blocks your path in the training yard. "Spar with me," they demand. Not ask - demand. "If I'm protecting you, I need to know your limits. Your weaknesses. Your reflexes."

It's not a friendly request. Ash is testing you, measuring if you're worth the loyalty they're offering. The fight is real - Ash doesn't hold back much.

After, breathing hard, Ash nods grudgingly. "Better than expected. You don't freeze, don't give up easy." Almost approval. "Might actually be worth protecting after all."`,
	choices: [
		{
			id: 'ask-about-them',
			text: 'Ask about them - what drives this need to protect?',
			next: 'ash_bonding_1b',
			effects: { empathy: 5, wisdom: 3 },
			hiddenEffects: {
				ash_bond: 12,
				ash_slightly_opens: true,
				genuine_interest: true
			}
		},
		{
			id: 'earn-respect',
			text: 'Prove yourself further - push for another round',
			next: 'ash_bonding_1b',
			effects: { strength: 5, courage: 4 },
			hiddenEffects: {
				ash_bond: 15,
				ash_impressed: true,
				warrior_respect: true,
				ash_romance_seed: true
			}
		}
	]
};

export const AshBonding1B: Scene = {
	id: 'ash_bonding_1b',
	text: `"Why protect people?" Ash's jaw tightens. "Because I failed once. My village - raiders came. I was away on a contract, fighting someone else's war for coin. Came home to ashes and bodies. Everyone I knew. Dead."

Their voice is flat, emotionless - trauma buried deep. "I was the best fighter in the village. Should have been there. Could have saved them. But I chose coin over home." They look at you with haunted eyes. "I don't make that choice anymore. When I protect someone, I'm there. Always. No matter what."

"So yeah," Ash continues roughly. "I test you. Because if I'm putting my life between you and danger, I need to know you're worth it. Not as royalty - as a person. Someone worth dying for."`,
	choices: [
		{
			id: 'promise-worth-it',
			text: 'Promise to be worthy of that protection',
			next: 'ash_bonding_2',
			effects: { courage: 6, empathy: 4 },
			hiddenEffects: {
				ash_bond: 18,
				oath_given: true,
				ash_respects: true
			}
		},
		{
			id: 'mutual-protection',
			text: 'Offer mutual protection - you\'ll guard each other',
			next: 'ash_bonding_2',
			effects: { courage: 7, empathy: 4 },
			hiddenEffects: {
				ash_bond: 22,
				equals_in_battle: true,
				ash_honored: true,
				ash_romance_advancing: true
			}
		}
	]
};

export const AshBonding2: Scene = {
	id: 'ash_bonding_2',
	text: `During a mission, you're injured protecting Ash. Not seriously, but enough to bleed. Ash's reaction is immediate and visceral - fury and fear mixed together.

"Idiot!" they snap while bandaging you roughly. "I'm the bodyguard. You don't protect me. That's not how this works!" But their hands shake and you realize: they're terrified. Of losing someone again. Of failing again.

"Don't do that," Ash says quieter, not meeting your eyes. "Don't make me care that much. Don't make it personal. It's easier when it's just a job, just a contract." But the emotion in their voice says it's already too late.`,
	choices: [
		{
			id: 'acknowledge-care',
			text: 'Acknowledge that you care about them too',
			next: 'ash_romance_path',
			effects: { empathy: 7, courage: 5 },
			hiddenEffects: {
				ash_bond: 28,
				ash_romance: true,
				mutual_feelings: true,
				ash_relationship: 'romantic'
			}
		},
		{
			id: 'affirm-partnership',
			text: 'Affirm it IS personal - you protect each other',
			next: 'ash_bonding_3',
			effects: { courage: 6, empathy: 5 },
			hiddenEffects: {
				ash_bond: 25,
				chosen_family: true,
				ash_accepting: true
			}
		}
	]
};

export const AshBonding3: Scene = {
	id: 'ash_bonding_3',
	text: `Over time, Ash stops fighting the connection between you. The walls come down gradually as they realize you're not going anywhere, not abandoning them, not dying on them.

"You're stubborn," Ash observes one day with something like affection. "Most people I protect are either scared of me or treat me like furniture. You treat me like... a person. A partner."

They grip your shoulder firmly. "I failed my village. But I won't fail you. That's a promise. Whether we're partners, friends, family - whatever this is - you're mine to protect now. And I don't break my word."

Your relationship, whatever form it takes, is built on absolute trust and mutual protection.`,
	choices: [
		{
			id: 'accept-partnership',
			text: 'Accept the partnership and protection with gratitude',
			effects: { empathy: 6, courage: 5 },
			hiddenEffects: {
				ash_bond: 20,
				ash_relationship: 'battle_family',
				unbreakable_bond: true
			},
			realLifeChallenge: {
				id: 'ash_express_gratitude',
				type: 'social',
				title: 'Express Deep Gratitude',
				description: 'Like Ash\'s fierce devotion, express appreciation for your partner\'s presence in your life',
				instructions: 'Tell your partner specific things you\'re grateful for about them and your relationship. Be detailed and sincere - not just "I love you" but why, what they do, how they make your life better.',
				durationMinutes: 20,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, charisma: 2 },
					message: 'Expressing gratitude deepened your bond, just like Ash\'s protective devotion.'
				}
			}
		}
	]
};

export const AshRomancePath: Scene = {
	id: 'ash_romance_path',
	text: `Ash stares at you like you've said something dangerous. "Care about me?" They laugh bitterly. "I'm a mercenary. Killer for hire. Rough, scarred, damaged. You could have anyone - why would you want this?"

You step closer, refusing to let them push you away. "Because you're loyal, protective, honest. Because underneath the armor, you care deeply. Because you make me feel safe."

Ash's defenses crumble. They pull you into a fierce embrace. "Fuck. Okay. Okay." Their voice breaks. "I care too. More than I should. More than I wanted to." They hold you like you might disappear. "I'll protect you with everything I have. Not because it's a job. Because you're mine to protect. And I don't fail twice."`,
	choices: [
		{
			id: 'affirm-devotion',
			text: 'Affirm your devotion - you chose each other',
			effects: { empathy: 7, courage: 6 },
			hiddenEffects: {
				ash_bond: 35,
				ash_romance_level: 2,
				fierce_devotion: true,
				ash_healing: true
			},
			realLifeChallenge: {
				id: 'ash_express_gratitude',
				type: 'social',
				title: 'Express Deep Gratitude',
				description: 'Like Ash\'s fierce devotion, express appreciation for your partner\'s presence in your life',
				instructions: 'Tell your partner specific things you\'re grateful for about them and your relationship. Be detailed and sincere - not just "I love you" but why, what they do, how they make your life better.',
				durationMinutes: 20,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, charisma: 2 },
					message: 'Expressing gratitude deepened your bond, just like Ash\'s protective devotion.'
				}
			}
		}
	]
};

export const SageRomanceContinue: Scene = {
	id: 'sage_romance_continue',
	text: `Your romantic partnership with Sage blossoms as you work together on reforms. Every intellectual debate becomes charged with affection. Every shared success a reason to celebrate together.

"I never thought I'd have this," Sage admits one evening. "Someone who values my mind AND my heart. Someone who sees my ideas as worthy and me as lovable." He kisses you softly. "You've given me everything I didn't dare hope for."

Your relationship becomes a model for the reforms you're building - intellectual equals, mutual respect, partnership in all things.`,
	choices: [
		{
			id: 'continue-together',
			text: 'Continue building your shared future',
			effects: { wisdom: 6, empathy: 6 },
			hiddenEffects: {
				sage_bond: 20,
				partnership_complete: true,
				reform_champions: true
			}
		}
	]
};

export const ValeBonding2: Scene = {
	id: 'vale_bonding_2',
	text: `Working with Vale becomes routine - and thrilling. Every mystery you solve together, every conspiracy you uncover, deepens the partnership. Vale opens up gradually, sharing stories of their travels, the things they've seen, why they became a wanderer.

"I never stayed anywhere because nothing felt worth staying for," Vale admits. "But investigating with you... it's different. You make the search for truth meaningful instead of just interesting."

Whether your relationship develops romantically or remains as trusted adventure partners, the bond is real and growing.`,
	choices: [
		{
			id: 'continue-investigating',
			text: 'Continue investigating mysteries together',
			effects: { wisdom: 6, courage: 5 },
			hiddenEffects: {
				vale_bond: 20,
				investigation_partners: true,
				vale_stays: true
			}
		}
	]
};

export const ValeRomanceContinue: Scene = {
	id: 'vale_romance_continue',
	text: `Your romance with Vale is full of adventure and discovery. Every investigation becomes foreplay, every mystery solved a celebration. Vale's wanderlust transforms from restless searching to joyful exploration with a partner.

"I finally understand," Vale says, holding you close after solving a particularly dangerous mystery. "I wasn't looking for answers. I was looking for someone to search with. Someone who makes the journey matter more than the destination."

Your relationship is adventure incarnate - dangerous, thrilling, deeply connected.`,
	choices: [
		{
			id: 'embrace-adventure',
			text: 'Embrace a lifetime of adventure together',
			effects: { courage: 7, empathy: 6 },
			hiddenEffects: {
				vale_bond: 25,
				adventuring_romance: true,
				vale_found_home: true
			}
		}
	]
};

export const AshRomanceContinue: Scene = {
	id: 'ash_romance_continue',
	text: `Your romance with Ash is fierce and protective. They love you like a warrior loves their cause - completely, devotedly, ready to die for you without hesitation.

"You healed something I thought was permanently broken," Ash admits during a quiet moment. "Made me believe I deserve connection again. Deserve love, not just duty."

They pull you close, scarred hands gentle. "I failed my village. But with you, I've found something worth more than redemption - a future. A reason to live, not just survive."

Your relationship is forged in fire, tempered by protection, and absolutely unbreakable.`,
	choices: [
		{
			id: 'affirm-future',
			text: 'Affirm your future together',
			effects: { empathy: 7, courage: 7 },
			hiddenEffects: {
				ash_bond: 30,
				ash_fully_healed: true,
				warrior_romance_complete: true
			}
		}
	]
};

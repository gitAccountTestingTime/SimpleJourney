import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Finn
 * Progression: Reluctant Artist → Trusted Friend → Romantic Interest (optional)
 * Themes: Class solidarity, artistic rebellion, workers' rights, beauty despite pain
 */

export const FinnBonding1: Scene = {
	id: 'finn_bonding_1',
	text: `You find Finn in a forgotten manor room, sketching in secret. His drawings are breathtaking - scenes of Ironforge mines, workers' exhausted faces, beauty in suffering. He jumps when you enter, trying to hide his work.

"Your Highness," he says with poorly concealed resentment. "Lost?" There's that chip on his shoulder again, expecting judgment or dismissal.

But you saw the art. Saw the talent and pain captured there. "Those drawings," you say carefully. "They're incredible."

Finn's jaw tightens. "Don't pretend to understand. You're nobility. What do you know about the suffering I draw?" Angry, defensive, hurting.`,
	choices: [
		{
			id: 'ask-about-art',
			text: 'Ask about the art sincerely - what inspired these scenes?',
			next: 'finn_bonding_1b',
			effects: { empathy: 4, wisdom: 3 },
			hiddenEffects: {
				finn_bond: 12,
				finn_slightly_softened: true,
				genuine_interest: true
			}
		},
		{
			id: 'acknowledge-anger',
			text: 'Acknowledge his anger and your privilege honestly',
			next: 'finn_bonding_1b',
			effects: { wisdom: 5, empathy: 4 },
			hiddenEffects: {
				finn_bond: 18,
				finn_surprised: true,
				honest_acknowledgment: true,
				respect_earned: true
			}
		},
		{
			id: 'defend-genuinely',
			text: 'Defend your genuine interest - not all nobility is the enemy',
			next: 'finn_bonding_1b',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				finn_bond: 10,
				finn_skeptical: true,
				must_prove_self: true
			}
		}
	]
};

export const FinnBonding1B: Scene = {
	id: 'finn_bonding_1b',
	text: `Finn stares at you, seeming to weigh something. Then, slowly, he shows you the drawings properly. "This is my father," he says, pointing to a sketch of a man with twisted, ruined hands. "Master blacksmith. Best in Ironforge. Duke Thorin wanted a demonstration - forge a ceremonial blade, perfect artistry, ridiculous deadline."

His voice hardens. "My father tried. Worked three days straight. The metal was too cold, brittle. The blade shattered during tempering. Duke Thorin was embarrassed in front of guests. So he ordered my father's hands broken. 'Failed hands don't deserve their skill.'"

Finn's own hands clench. "I was twelve. Watched them do it. Heard his screams. He never forged again. Died five years later, hands still useless, spirit broken. Because some noble was insulted."

He looks at you with raw pain and anger. "That's what I draw. That's what your kind does to mine. Pretty words about reform don't bring back my father's hands."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { honest_acknowledgment: true }
			},
			text: `Seeing your genuine horror and responsibility, Finn's anger cracks. "You really don't know, do you? Sitting up in your castle, you don't see it. The beatings, the exploitation, the casual cruelty." His voice breaks. "My father wasn't even unusual. That's just... life for common folk under noble rule."

He wipes his eyes roughly. "I wanted to hate you completely. But you actually listen. Actually seem to care. And that makes it harder. Because if I let myself believe nobles can change, and I'm wrong..." He stops, vulnerable and terrified of hope.`
		}
	],
	choices: [
		{
			id: 'promise-change',
			text: 'Promise genuine change - no more broken hands, no more cruelty',
			next: 'assassin_confession',
			effects: { wisdom: 6, courage: 5 },
			hiddenEffects: {
				finn_bond: 25,
				finn_fragile_hope: true,
				serious_commitment: true,
				finn_romance_seed: true
			}
		},
		{
			id: 'ask-to-teach',
			text: 'Ask him to teach you - show you what you don\'t see',
			next: 'assassin_confession',
			effects: { empathy: 6, wisdom: 4 },
			hiddenEffects: {
				finn_bond: 22,
				teaching_role: true,
				finn_respects_humility: true
			}
		},
		{
			id: 'honor-father',
			text: 'Ask to honor his father\'s memory properly',
			next: 'assassin_confession',
			effects: { empathy: 7, wisdom: 3 },
			hiddenEffects: {
				finn_bond: 28,
				finn_breaks_down: true,
				father_honored: true,
				deep_gratitude: true,
				finn_romance_possible: true
			}
		},
		{
			id: 'share-grief',
			text: 'Share your own loss - grief recognizes grief',
			next: 'assassin_confession',
			effects: { empathy: 8 },
			hiddenEffects: {
				finn_bond: 30,
				mutual_grief: true,
				shared_understanding: true,
				walls_crumbling: true
			}
		}
	]
};

export const FinnBonding2: Scene = {
	id: 'finn_bonding_2',
	text: `Finn takes you to Ironforge's workers' quarter - not the grand forges you'd see on official visits, but the cramped slums where laborers live. Children with coal-stained faces. Elderly workers with ruined lungs. Widows of men who died in cave-ins.

"This is real," Finn says quietly. "Not the pretty version nobles get shown. This is what funds Duke Thorin's wine collection and Lady Brightwater's gowns." He's not angry now, just tired. Showing you truth.

An elderly woman recognizes Finn, embraces him warmly. He introduces you awkwardly, watching to see if you'll maintain noble distance or actually engage with common folk.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { father_honored: true, mutual_grief: true }
			},
			text: `As you walk through the quarters, Finn takes your hand without thinking. Then realizes and starts to pull away - crossing class boundaries - but you hold on.

"My father would have liked you," Finn admits quietly. "He believed in the old stories. Noble rulers who actually cared about common folk, who fought for justice, who saw people as people." His voice catches. "I stopped believing those stories after they broke him. But maybe..." He looks at you with fragile hope. "Maybe I can believe again."

The trust in his eyes is precious and terrifying - born from showing you his deepest wound and having it honored, not exploited.`
		},
		{
			conditions: {
				hasHiddenAttributes: { serious_commitment: true }
			},
			text: `"You promised change," Finn reminds you, gesturing to the poverty around you. "This is what needs changing. Not just grand political reforms - actual lives. Housing, wages, safety protections, dignity."

He stops before a memorial wall - names of workers who died in Duke Thorin's mines. "These are people. Every one had a family, dreams, talents. They died making nobles richer." He turns to you. "Can you actually help them? Or are you another noble with good intentions but no follow-through?"

The challenge is real - prove yourself or lose his trust forever.`
		}
	],
	choices: [
		{
			id: 'make-connections',
			text: 'Talk with workers, learn names, make genuine connections',
			next: 'finn_bonding_3',
			effects: { empathy: 6, charisma: 4 },
			hiddenEffects: {
				finn_bond: 20,
				workers_trust: true,
				finn_impressed: true,
				common_folk_ally: true
			}
		},
		{
			id: 'immediate-aid',
			text: 'Provide immediate aid with your own resources',
			next: 'marina_ocean_depths',
			effects: { empathy: 5, courage: 5 },
			hiddenEffects: {
				finn_bond: 18,
				direct_action: true,
				finn_grateful: true,
				workers_helped: true
			}
		},
		{
			id: 'plan-reforms',
			text: 'Plan concrete reforms with Finn as advisor',
			next: 'marina_ocean_depths',
			effects: { wisdom: 6, empathy: 4 },
			hiddenEffects: {
				finn_bond: 22,
				finn_advisor_role: true,
				partnership_forming: true,
				serious_planning: true
			}
		},
		{
			id: 'ask-help-bridge',
			text: 'Ask Finn to help you bridge the class divide',
			next: 'marina_ocean_depths',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				finn_bond: 25,
				bridge_builder: true,
				finn_essential: true,
				equal_partnership: true,
				romantic_tension: true
			}
		}
	]
};

export const FinnBonding3: Scene = {
	id: 'finn_bonding_3',
	text: `Late one night, you find Finn on the manor roof, sketching by moonlight. He's drawing you - not idealized or formal, but real. Tired from the day, determined, human.

"I sketch what I care about," Finn says without looking up. "Started with my father. Then the workers. Things that matter." He shows you the drawing. "And now you. Not sure when that happened."

He sets down the charcoal, hands trembling slightly. "I've spent years hating nobility. Building walls, nursing anger, refusing to see individuals because it was safer to hate the class." He finally looks at you. "But you're making that impossible. You actually care. Actually try. Actually see people as people."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { equal_partnership: true, finn_romance_seed: true }
			},
			text: `"This is terrifying," Finn admits, voice rough with emotion. "I'm falling for you. Common-born artist falling for royalty - that's a disaster waiting to happen. Your nobles will never accept it. My people will think I've betrayed them. It's politically stupid and socially impossible."

He stands, crossing to you with desperate courage. "But I can't stop. Can't unsee you. Can't stop caring about your laugh, your determination, the way you actually listen when workers talk. Can't stop wanting..." He stops, swallows hard. "Wanting you."

His hand reaches toward your face but stops, uncertain. "Tell me I'm not alone in this. Or tell me to stop. But please, tell me something, because this uncertainty is killing me."

The vulnerability in his eyes is raw and real - everything he's fought against allowing himself to feel.`
		},
		{
			conditions: {
				hasHiddenAttributes: { mutual_grief: true }
			},
			text: `"You understand loss," Finn says quietly. "Real loss. Not abstract grief but the kind that carves holes in you. That's rare in nobility." He shows you more sketches - your parents, drawn from descriptions, honored in art.

"I'm drawing your family's memorial," he explains. "Because you honored mine. Because grief recognizes grief." Tears fall on the pages. "Because somewhere along the way, your pain became mine to carry too. And that's... that's not just sympathy. That's..." He can't finish, but the implication hangs heavy.`
		}
	],
	choices: [
		{
			id: 'acknowledge-feelings',
			text: 'Acknowledge your growing feelings for him too',
			next: 'marina_ocean_depths',
			effects: { empathy: 7, charisma: 6 },
			hiddenEffects: {
				finn_bond: 35,
				finn_romance: true,
				mutual_feelings: true,
				finn_relationship: 'romantic'
			}
		},
		{
			id: 'value-connection',
			text: 'Express how much his perspective and connection mean',
			next: 'marina_ocean_depths',
			effects: { empathy: 6, wisdom: 4 },
			hiddenEffects: {
				finn_bond: 25,
				finn_valued: true,
				deep_friendship: true
			}
		},
		{
			id: 'need-time',
			text: 'Admit feelings but need time to navigate complications',
			next: 'marina_ocean_depths',
			effects: { wisdom: 6, empathy: 5 },
			hiddenEffects: {
				finn_bond: 20,
				finn_relationship: 'developing',
				slow_burn: true,
				finn_understands: true
			}
		},
		{
			id: 'deflect-friendship',
			text: 'Value him but maintain friendship boundaries',
			next: 'marina_ocean_depths',
			effects: { empathy: 5, wisdom: 4 },
			hiddenEffects: {
				finn_bond: 18,
				finn_relationship: 'friend',
				finn_disappointed_accepts: true
			}
		}
	]
};

export const FinnRomancePath: Scene = {
	id: 'finn_romance_path',
	text: `"You... feel it too?" Finn looks stunned, like he'd prepared for rejection. "This impossible, complicated, socially-catastrophic thing between us?"

When you confirm it, he laughs - half joy, half disbelief. "Gods, we're either brave or stupid. Probably both." He cups your face with charcoal-stained hands. "Your nobles will hate this. My people will question it. We'll face judgment from every direction."

"But," he continues softly, "maybe that's worth it. For this. For someone who actually sees me - not common-born or angry or charity case - but me. Artist, dreamer, fighter." He kisses you gently, reverently. "Someone I see just as clearly. Not crown or title or symbol, but the person who walks through workers' quarters and remembers names. Who honors dead blacksmiths. Who makes me believe change is possible."

He pulls you close. "We'll fight for this. Together. Prove that class barriers don't have to define love. That nobles and common folk can be equals." His smile is fierce. "And maybe, in fighting for us, we'll fight for everyone else too."`,
	choices: [
		{
			id: 'affirm-partnership',
			text: 'Affirm equal partnership - change the world together',
			next: 'finn_romance_continue',
			effects: { courage: 7, empathy: 6 },
			hiddenEffects: {
				finn_bond: 40,
				finn_romance_level: 2,
				revolutionary_romance: true,
				symbol_of_change: true
			},
			realLifeChallenge: {
				id: 'finn_partnership_action',
				type: 'social',
				title: 'Act of Partnership',
				description: 'Like building an equal partnership with Finn, demonstrate partnership with your real-life partner',
				instructions: 'Do something thoughtful for your partner without being asked - handle a chore they dislike, prepare their favorite meal, or help with something important to them. Focus on actions that show you notice and value them as equals.',
				durationMinutes: 60,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, charisma: 2 },
					message: 'Partnership actions strengthened your bond, just like with Finn.'
				}
			}
		},
		{
			id: 'promise-fight',
			text: 'Promise to fight for this relationship against all opposition',
			next: 'finn_romance_continue',
			effects: { courage: 8, charisma: 5 },
			hiddenEffects: {
				finn_bond: 38,
				finn_romance_level: 2,
				devoted_love: true,
				finn_overwhelmed: true
			}
		}
	]
};

export const FinnArtisticCollaboration: Scene = {
	id: 'finn_artistic_collaboration',
	text: `Finn proposes creating art together - a mural depicting kingdom history from common folks' perspective. Not sanitized noble versions but real stories. Farmworkers, miners, healers, soldiers - the people who built everything while nobles took credit.

"This is controversial," Finn warns. "Nobles won't like their precious history challenged. But it's truth. And art should tell truth, even uncomfortable truth."

Working together, you learn his artistic process. How he channels pain into beauty, transforms suffering into meaning. He teaches you to draw, patient and encouraging, hands guiding yours.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_romance: true }
			},
			text: `Creating art together becomes intimacy. Finn's hands on yours, guiding lines. His breath warm on your neck as he leans over to check details. Moments when you catch each other staring, work forgotten.

"Never thought I'd teach royalty to draw," Finn murmurs, lips brushing your ear. "Never thought I'd fall in love with royalty either, but here we are." He turns you to face him. "You make me want to create beautiful things again. Not just pain and anger, but hope. You inspire that."

The mural becomes your love story - two worlds meeting, bridging gaps through art and understanding.`
		}
	],
	choices: [
		{
			id: 'complete-together',
			text: 'Complete the mural together - public declaration of partnership',
			next: 'finn_mural_complete',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				finn_bond: 25,
				mural_finished: true,
				public_statement: true,
				workers_inspired: true
			},
			realLifeChallenge: {
				id: 'finn_creative_project',
				type: 'creative',
				title: 'Create Art Together',
				description: 'Like painting the mural with Finn, create something artistic with your partner',
				instructions: 'Work on a creative project together - paint, draw, write a story, make music, or craft something. The result matters less than the process of creating together.',
				durationMinutes: 60,
				verificationMethod: 'photo',
				rewards: {
					stats: { charisma: 3, empathy: 3, wisdom: 2 },
					message: 'Creating together brought you closer, just like working with Finn on the mural.'
				}
			}
		}
	]
};

export const FinnWorkersRally: Scene = {
	id: 'finn_workers_rally',
	text: `Workers organize a rally demanding reforms. Duke Thorin wants you to suppress it with force. But Finn is there, leading with his art - banners, signs, powerful imagery demanding dignity.

You arrive, and workers tense, expecting violence. Finn steps forward, standing between you and the crowd. "Don't," he says quietly to you. "These are my people. Don't make me choose between them and you."

The moment crystallizes everything - class loyalty versus personal connection. Workers watch. Nobles watch. What you do here defines who you actually are.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_romance: true }
			},
			text: `Finn's eyes plead with you silently. "I love you," he says loud enough for everyone to hear, shocking both nobles and workers. "But I love them too. My people. They're starving while nobles feast. I can't abandon them for romance. I won't."

His voice breaks. "Please. Don't make me lose both. Support them. Stand with us. Show everyone that love across classes means something. That you're different."

It's a public declaration and a public test - prove your love means action, not just words.`
		}
	],
	choices: [
		{
			id: 'join-rally',
			text: 'Join the rally publicly - stand with workers and Finn',
			next: 'finn_triumph',
			effects: { courage: 10, empathy: 7 },
			hiddenEffects: {
				finn_bond: 45,
				workers_rally_success: true,
				nobles_shocked: true,
				revolutionary_leader: true,
				finn_vindicated: true
			}
		},
		{
			id: 'negotiate-reforms',
			text: 'Negotiate publicly - grant reforms, show leadership',
			next: 'finn_triumph',
			effects: { wisdom: 8, charisma: 7 },
			hiddenEffects: {
				finn_bond: 40,
				reforms_granted: true,
				diplomatic_victory: true,
				workers_respect: true
			}
		}
	]
};

export const FinnRomanceContinue: Scene = {
	id: 'finn_romance_continue',
	text: `Your romance with Finn becomes inseparable from the reforms you're building together. Every political victory is celebrated with passionate kisses, every setback faced with mutual support and revolutionary determination.

"You're not just my partner," Finn says, paint-stained fingers tracing your jawline. "You're proof that what I'm fighting for is possible. A noble who sees commoners as equals, who fights beside us instead of above us." He kisses you fiercely. "Our love is revolutionary. It breaks every barrier they said was unbreakable."

Together you become symbols of the change you're creating - proof that class divisions can be overcome through genuine connection.`,
	textVariants: [
		{
			conditions: { hasFlags: ['public_revolutionary_love'] },
			text: `Your romance with Finn becomes a rallying cry for reformers across the kingdom. By openly loving across class lines, you've given hope to countless others who thought such love impossible.

"They call us the Revolutionary Lovers," Finn says with pride. "Noble and commoner, loving openly, fighting for change together." He holds you close at a workers' rally, your presence together more powerful than any speech. "My father died for reforms that went nowhere. But us? We're making his dream real. And we're doing it together, loving each other the whole way."

Your love is political and personal, revolutionary and romantic, changing the kingdom one heart at a time.`
		},
		{
			conditions: { hasFlags: ['equal_partnership'] },
			text: `Your romance with Finn is built on absolute equality despite different class backgrounds. He treats you as an equal, you honor his perspective and experiences, and together you forge something entirely new.

"You don't condescend," Finn marvels. "You don't act like you're doing me a favor by loving me despite my common birth." He kisses you softly. "You just... love me. As Finn. The artist, the revolutionary, the man who lost his father but found purpose." His voice breaks. "That's everything I didn't dare hope for."

Your love transcends class through mutual respect, shared values, and genuine equality.`
		}
	],
	choices: [
		{
			id: 'embrace-revolution',
			text: 'Embrace your revolutionary partnership',
			effects: { courage: 7, charisma: 7 },
			hiddenEffects: {
				finn_bond: 35,
				revolutionary_romance: true,
				finn_endgame: 'romantic_partner'
			}
		}
	]
};

export const FinnTriumph: Scene = {
	id: 'finn_triumph',
	text: `Your choice - whether joining the rally or negotiating reforms - proves you're different from other nobles. The workers erupt in cheers. Finn stares at you with wonder and love.

"You did it," he says, tears streaming. "You actually stood with us. Risked everything - noble support, political capital, maybe even the throne - for common people." He pulls you into an embrace that the entire crowd sees. "Thank you. For proving me right to believe in you."

The rally ends not in violence but in hope. Real reforms begin. And your relationship with Finn - whether romantic, close friendship, or developing - becomes a symbol of what's possible when class barriers fall.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_romance: true }
			},
			text: `"I love you," Finn says publicly, unapologetically. "Common artist loving royalty, and I don't care who knows. You've shown that love across classes means something. That we can bridge divides together."

He kisses you in front of everyone - workers, nobles, witnesses to history. "Our love is revolutionary. Not just personally but politically. We're proof that the old barriers can break. That's terrifying and amazing and I wouldn't change it for anything."`
		}
	],
	choices: [
		{
			id: 'embrace-change',
			text: 'Embrace the change you\'ve started together',
			effects: { courage: 8, empathy: 7 },
			hiddenEffects: {
				finn_bond: 30,
				revolutionary_partnership: true,
				symbol_of_change: true,
				workers_champion: true
			}
		}
	]
};

export const FinnRelationshipResolution: Scene = {
	id: 'finn_relationship_resolution',
	text: `Your relationship with Finn settles into something meaningful, whether romantic or not. More importantly, your connection has sparked real change - workers' rights improving, class barriers beginning to crumble, art and activism merging.

"You gave me hope," Finn says. "Not just personally but for everyone like me. You showed that nobles can change, can care, can see common folk as equals." He grips your shoulder. "Whatever we are to each other - lovers, friends, partners in revolution - you've made my father's death mean something. His broken hands led to this moment of change. That's powerful."`,
	choices: [
		{
			id: 'continue-fighting',
			text: 'Continue fighting for change together',
			effects: { courage: 6, empathy: 6 },
			hiddenEffects: {
				finn_bond: 25,
				partnership_defined: true,
				ongoing_revolution: true
			}
		}
	]
};

export const FinnMuralComplete: Scene = {
	id: 'finn_mural_complete',
	text: `The mural is finished - a breathtaking depiction of kingdom history from common people's perspective. Farmworkers, miners, healers, soldiers - the people who built everything while nobles took credit. And at the center, subtly: you and Finn, working together, bridging worlds.

"This is truth," Finn says with satisfaction. "Our truth. Not sanitized noble history but real stories." He looks at you with profound affection. "And you helped create it. That means everything."

The mural becomes famous, controversial, a symbol of changing times. And your connection with Finn - romantic or platonic - is immortalized in art.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_romance: true }
			},
			text: `"Look," Finn points to the center figures - you and him, hands touching, creating together. "That's us. Our love story painted into kingdom history. Revolutionary romance immortalized in art."

He kisses you softly. "Generations will see this. Common-born artist and noble heir, choosing each other, choosing change. We're not just living a love story - we're creating history."`
		}
	],
	choices: [
		{
			id: 'admire-together',
			text: 'Admire the completed work together',
			effects: { empathy: 6, wisdom: 5 },
			hiddenEffects: {
				finn_bond: 20,
				mural_legacy: true,
				artistic_partnership: true
			}
		}
	]
};

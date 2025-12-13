import { Scene } from '../../story-manager';

// Act 4 - All Ending Variations

export const TraditionalCoronation: Scene = {
	id: 'traditional_coronation',
	text: `The Royal Cathedral stands magnificent, filled with nobility and common folk alike. Ancient tradition guides every step of the ceremony as you approach the throne.

The Crown of Ascension gleams in candlelight. The Archbishop intones centuries-old words. Seraphine stands prominently, representing the noble houses that support this restoration.

As the crown is placed upon your head, you feel its weight - both literal and symbolic. You are now the rightful monarch, continuing a bloodline that stretches back centuries.

The realm has stability. Tradition is preserved. But the question remains: what kind of monarch will you be?`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: 70 }
			},
			text: `As the crown settles on your head, Seraphine steps forward in her role as Grand Advisor. But her eyes betray deeper emotion - love, pride, relief.

"Your Majesty," she says formally for the crowd, then adds more softly, "My love. You've fulfilled every duty, overcome every challenge. And I'm honored to stand beside you - as advisor, as partner, as equal in all but title."

Later, in private, she takes your hands. "We'll build something beautiful together. Traditional in form but progressive in spirit. The best of the old and new." She smiles. "Just like us."`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance: 70 }
			},
			text: `Rowan stands apart from the ceremony, uncomfortable in formal attire and courtly setting. They watch you be crowned with mixed emotions - happy for you, but aware this world isn't theirs.

After the ceremony, they find you on a balcony. "So you're a monarch now. Proper ruler and all." They smile sadly. "I can't be your official anything, you know. Can't stand the politics and constraints."

But they take your hand. "I'll stay. As your guardian, your secret. We'll have to steal moments between your duties. It'll be complicated and sometimes painful." They kiss you softly. "But you're worth it."`
		},
		{
			conditions: {
				hasHiddenAttributes: { progressive_traditional: true }
			},
			text: `Though traditional in ceremony, your coronation speech surprises the conservative nobles. You outline measured reforms, respectful changes, progressive policies wrapped in traditional language.

"We honor what worked in the past," you declare, "while adapting to meet future challenges. Tradition need not mean stagnation."

Even Sage, initially disappointed you didn't choose democracy, nods appreciatively. "You're threading a difficult needle," he admits. "Change without breaking. It might actually work."`
		}
	],
	choices: [
		{
			id: 'progressive-monarch',
			text: 'Rule progressively within traditional framework',
			next: 'epilogue_reflection',
			effects: { wisdom: 8, charisma: 7 },
			hiddenEffects: {
				ending_achieved: 'traditional_progressive',
				reforms_implemented: true,
				balanced_approach: true
			}
		},
		{
			id: 'conservative-monarch',
			text: 'Maintain pure traditional values',
			next: 'epilogue_reflection',
			effects: { wisdom: 5, courage: 4 },
			hiddenEffects: {
				ending_achieved: 'traditional_conservative',
				status_quo_maintained: true,
				stability_preserved: true
			}
		},
		{
			id: 'reluctant-monarch',
			text: 'Accept duty but remain personally conflicted',
			next: 'epilogue_reflection',
			effects: { wisdom: 7 },
			hiddenEffects: {
				ending_achieved: 'traditional_reluctant',
				burden_of_duty: true,
				personal_cost: true
			}
		}
	]
};

export const DemocraticFounding: Scene = {
	id: 'democratic_founding',
	text: `The new Assembly Hall buzzes with unprecedented energy. Elected representatives from all walks of life - nobles, merchants, craftspeople, even farmers - gather for the first session of parliament.

You stand not on a throne, but at a podium as First Citizen. The title you chose reflects your vision: leader among equals, not ruler above subjects.

Sage is ecstatic, tears streaming down his face as his dream becomes reality. "A government of, by, and for the people," he breathes. "I thought I'd die before seeing this day."

The first votes are cast. The first laws debated. Democracy, messy and beautiful, begins.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { sage_romance: 70 }
			},
			text: `Sage wins his election to parliament easily - his idealism and intellect convincing voters. As he takes his oath of office, he looks at you with pure joy and love.

"We're doing it," he says that evening, holding you close. "Building the world we dreamed of. You gave up absolute power to make this possible. That's the bravest, most loving thing anyone's ever done."

He kisses you softly. "I get to work beside you building a better world, and I get to love you. I'm the luckiest person in the realm."`
		},
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: 70 }
			},
			text: `Lyra represents elven interests in the new parliament - the first non-human ever to hold such position. Her presence symbolizes the revolutionary nature of this government.

"For two thousand years, I've watched human kingdoms," she tells the assembly in her first speech. "None ever invited us to participate as equals. This parliament represents hope I'd abandoned centuries ago."

To you privately: "You created something unprecedented. A government that sees beyond species and status. And you did it out of genuine belief in equality." She smiles. "That's why I love you - your ideals match your actions."`
		},
		{
			conditions: {
				hasHiddenAttributes: { marina_romance: 70 }
			},
			text: `Marina's election to represent merfolk interests marks another first - ocean dwellers given voice in surface government. She splits time between land and sea, a living bridge between worlds.

"This is exhausting," she admits cheerfully during a late-night session. "Democracy is so much talking! But it's beautiful too. Everyone gets to contribute."

She takes your hand. "Our relationship mirrors this government - two different worlds working to understand each other, compromise, build something new together. It's not always easy, but it's worth it."`
		}
	],
	choices: [
		{
			id: 'ceremonial-role',
			text: 'Take ceremonial figurehead role - let parliament truly lead',
			next: 'epilogue_reflection',
			effects: { wisdom: 10, charisma: 6 },
			hiddenEffects: {
				ending_achieved: 'democratic_ceremonial',
				pure_democracy: true,
				humble_leadership: true
			}
		},
		{
			id: 'active-leader',
			text: 'Stay actively involved as first citizen with real influence',
			next: 'epilogue_reflection',
			effects: { wisdom: 8, charisma: 8 },
			hiddenEffects: {
				ending_achieved: 'democratic_active',
				guided_democracy: true,
				influential_leader: true
			}
		},
		{
			id: 'retire-advise',
			text: 'Retire from politics but advise from background',
			next: 'epilogue_reflection',
			effects: { wisdom: 9 },
			hiddenEffects: {
				ending_achieved: 'democratic_retired',
				elder_statesman: true,
				peaceful_transition: true
			}
		}
	]
};

export const MilitaryOrder: Scene = {
	id: 'military_order',
	text: `The throne room has been transformed into a war room. Maps cover walls. Military commanders replace courtiers. Order and discipline define every interaction.

You've established strong central control with military backing. The question is: will you use this power justly, or will it corrupt you?

Kieran's loyalty becomes crucial. Does he believe in your vision of just order, or does he see you becoming the tyrant his uncle always was?`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_loyalty: 70, maintained_honor: true }
			},
			text: `Kieran kneels before you formally, but his eyes show trust and respect. "You've proven that strength can serve justice rather than tyranny. The military follows you because we believe in what you're building."

He rises, hand on heart. "I'm honored to serve as your Knight Commander. Together, we'll create an order that protects all people equally - not just nobles, not just humans, but everyone under our protection."

In private, if you've romanced him: "I was terrified you'd become like my uncle. But you stayed true to yourself. That's why I love you - your power never corrupted your heart."`
		},
		{
			conditions: {
				hasHiddenAttributes: { power_hunger_indicator: 5, ruthless_actions: 8 }
			},
			text: `Kieran approaches your throne slowly, his expression troubled. "I need to ask you something, and I need an honest answer. Are you building this military order to protect the realm, or to control it?"

His hand rests on his sword hilt. "I've followed you this far. But if you've become what we fought against..." His voice hardens. "I swore an oath to protect this kingdom. Even from its ruler, if necessary."

This is a test. The wrong answer could turn your most loyal warrior into your most dangerous enemy.`
		},
		{
			conditions: {
				hasHiddenAttributes: { blackwood_alliance: true, kieran_loyalty: 40 }
			},
			text: `General Blackwood stands beside your throne, satisfaction evident. "Well played, Your Majesty. With military power secured, we can impose real order. No more debate, no more compromise - just effective rule."

Kieran stands apart, conflicted and troubled. He catches your eye, silently asking: Is this really what you wanted? Have you become his uncle's puppet?

The military order is established, but at what cost to your relationships and your soul?`
		}
	],
	choices: [
		{
			id: 'just-order',
			text: 'Create just military order - strength in service of protection',
			next: 'epilogue_reflection',
			effects: { courage: 9, wisdom: 7 },
			hiddenEffects: {
				ending_achieved: 'military_just',
				honorable_strength: true,
				kieran_loyal: true,
				protected_realm: true
			}
		},
		{
			id: 'authoritarian-control',
			text: 'Embrace authoritarian control - order through dominance',
			next: 'epilogue_reflection',
			effects: { courage: 7, wisdom: 3 },
			hiddenEffects: {
				ending_achieved: 'military_authoritarian',
				tyranny_begun: true,
				kieran_conflicted: true,
				companions_leave: true
			}
		},
		{
			id: 'puppet-regime',
			text: 'Become Blackwood\'s puppet (only if allied with him)',
			next: 'epilogue_reflection',
			effects: { courage: 4 },
			hiddenEffects: {
				ending_achieved: 'military_puppet',
				blackwood_controls: true,
				power_lost: true,
				kieran_betrayed: true
			}
		}
	]
};

const balconyCelebration = `From the palace balcony, you look out over a celebration unlike any in history. Humans dance with elves. Dwarves share ale with fae. Dragons fly overhead in joyful display. Merfolk have emerged from harbors to join the festivities.`;

const complexSystem = `The new system is complex - constitutional monarchy with elected parliament, military reformed to serve all equally, and magical races holding equal representation. It shouldn't work, but somehow, miraculously, it does.`;

const companionsGathered = `All your companions gather on the balcony with you. Every relationship you built, every bridge you constructed, every sacrifice you made - it all led to this moment.`;

const rowanWonder = `"You actually did it," Rowan says with wonder. "Created a place where even I feel I belong."`;

const goldenAge = `The future won't be easy. Building true unity will take decades, maybe centuries. But you've laid the foundation. The golden age begins here.`;

export const CompromiseAchieved: Scene = {
	id: 'compromise_achieved',
	text: `${balconyCelebration}

${complexSystem}

${companionsGathered}

${rowanWonder}

${goldenAge}`,
	textVariants: [
		{
			conditions: { hasFlags: ['all_fragments_obtained:true', 'all_races_united:true'], hasHiddenAttributes: { all_companions_loyal: true, companion_bonds: 400 } },
			text: `${balconyCelebration}

Each companion stands with you - Seraphine, Vale, Rowan, Kieran, Lyra, Finn, Marina, Shadow, Zephyr, Thorne, Sage. Not a single ally lost, not a single bridge burned. Every person you met, you connected with genuinely.

${complexSystem}

"This is what love looks like," Lyra says softly. "Not romantic love alone, but the love of genuine connection multiplied across entire civilizations. You loved us each individually, and taught us to love each other."

${companionsGathered}

${rowanWonder}

Finn raises a flask. "To the heir who became the greatest diplomat in history by simply being kind, honest, and brave."

${goldenAge}`
		},
		{
			conditions: { hasHiddenAttributes: { any_romance: 70 } },
			text: `${balconyCelebration}

Your romantic partner stands beside you, hand in yours. Together you built not just a kingdom, but a life of shared purpose and deep love.

${complexSystem}

${companionsGathered}

"We did this together," your love says. "Every choice, every sacrifice, every victory. Partnership in the truest sense."

${rowanWonder}

${goldenAge}

And you'll face that future together, as partners in every way that matters.`
		}
	],
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: 70 }
			},
			text: `Seraphine takes your hand as you watch the celebration. "I never thought I'd see tradition and progress unite so beautifully. You've honored the past while building the future."

She leans against you. "And I get to help you build it. As your partner in governance and in life. The noble houses accept our relationship now - they see that love between equals strengthens rather than weakens rule."

She kisses you softly. "Welcome to our kingdom. Emphasis on 'our.'"`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: 70 }
			},
			text: `Kieran stands in dress uniform, finally at peace with himself. "I found what I was seeking all along - a cause worthy of my honor, and someone worthy of my love."

He kneels formally, then stands and takes your hand. "You've created a knightly order that serves justice, not just power. Given me purpose that doesn't conflict with my heart." He smiles. "And you love me despite all my conflicted loyalty and honor-bound nonsense."

The crowd below cheers as he kisses you publicly, scandalizing traditionalists but delighting the people.`
		}
	],
	choices: [
		{
			id: 'perfect-unity',
			text: 'Celebrate perfect unity achievement (requires all conditions met)',
			next: 'epilogue_reflection',
			effects: { wisdom: 12, charisma: 12, courage: 10 },
			hiddenEffects: {
				ending_achieved: 'unity_perfect',
				golden_age_achieved: true,
				legendary_ruler: true,
				best_ending: true
			}
		},
		{
			id: 'fragile-unity',
			text: 'Accept fragile unity - work continues',
			next: 'epilogue_reflection',
			effects: { wisdom: 9, charisma: 8 },
			hiddenEffects: {
				ending_achieved: 'unity_fragile',
				ongoing_challenges: true,
				hopeful_future: true
			}
		}
	]
};

export const KingdomFractures: Scene = {
	id: 'kingdom_fractures',
	text: `The attempt at unity failed catastrophically. Factions couldn't overcome their differences. Magical races retreated in disappointment. Civil war erupted across the realm.

You stand on a battlefield, surrounded by death and destruction. Everything you tried to build has collapsed into violence and chaos.

Companions who survived are scattered - some fighting on different sides, some trying desperately to broker peace, some protecting you as everything falls apart.

This is the price of failure. The kingdom you inherited lies in ruins.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_loyalty: 70 }
			},
			text: `Kieran fights beside you even as the kingdom burns. "This isn't your fault," he says between clashes. "You tried. You tried harder than anyone to bring peace. Sometimes..." He blocks an attack. "Sometimes people aren't ready for the better world you offered."

Even in failure, his loyalty never wavers. "If we survive this, we'll rebuild. Maybe not the kingdom, but something. As long as we're together."`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 70 }
			},
			text: `Rowan appears through the chaos. "We need to leave. Now. This kingdom is finished - civil war will burn for years. But you don't have to die with it."

They extend a hand. "Come with me. We'll disappear into the wild, survive, maybe find peace somewhere. You tried to save them. They refused. That's not on you."

It's a way out - abandoning the kingdom to save yourself and those you love.`
		}
	],
	choices: [
		{
			id: 'fight-on',
			text: 'Fight on - try to end the war even if it kills you',
			next: 'epilogue_reflection',
			effects: { courage: 10 },
			hiddenEffects: {
				ending_achieved: 'civil_war_martyr',
				died_trying: true,
				tragic_hero: true
			}
		},
		{
			id: 'flee-companions',
			text: 'Flee with loyal companions - survive and rebuild elsewhere',
			next: 'epilogue_reflection',
			effects: { wisdom: 7, courage: 5 },
			hiddenEffects: {
				ending_achieved: 'civil_war_exile',
				kingdom_lost: true,
				companions_saved: true,
				survival: true
			}
		},
		{
			id: 'negotiate-peace',
			text: 'One last attempt to negotiate peace',
			next: 'epilogue_reflection',
			effects: { charisma: 9, wisdom: 7 },
			hiddenEffects: {
				ending_achieved: 'civil_war_peacemaker',
				fragile_ceasefire: true,
				partial_redemption: true
			}
		}
	]
};

export const WandererPath: Scene = {
	id: 'wanderer_path',
	text: `You walk away from the throne, from duty, from the weight of rulership. The open road stretches before you, full of possibility and freedom.

Behind you, the kingdom finds its own path. You don't know if it will thrive or fail without you. But you've chosen personal happiness over obligation.

Rowan walks beside you, finally completely happy. "This is what I always wanted for you - to be free. No crowns, no duty, just the horizon and each other."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance: 70 }
			},
			text: `Rowan takes your hand as you walk the forest path together. "You know what? I think you made the right choice. Some people aren't meant to be caged by duty, even royal duty."

They grin. "Now we get to adventure together forever. See everything, go everywhere, be free." They pull you close. "And I get you all to myself, without having to share you with an entire kingdom."

Their kiss tastes like freedom and joy. This is the happy ending Rowan always wanted.`
		},
		{
			conditions: {
				hasHiddenAttributes: { thorne_romance: 70 }
			},
			text: `Thorne's dragon form circles overhead as you travel. In the evenings, he takes human shape and walks with you.

"For centuries, I wandered alone," he says. "Having someone to share the endless years with... it changes everything." He looks at you with ancient, loving eyes. "You gave up an empire for freedom. I find that more worthy than any crown."

Together, you'll explore the world for as long as your life lasts - and perhaps beyond, if magic can extend it.`
		},
		{
			conditions: {
				hasHiddenAttributes: { kingdom_prospers: true }
			},
			text: `News reaches you months later - the kingdom found peace without you. Your abdication removed you as a point of conflict, allowing factions to compromise.

It's bittersweet. You weren't needed after all. But maybe that's okay. Maybe the best rulers are the ones who know when to step aside.

At least you're happy, even if you sometimes wonder what might have been.`
		}
	],
	choices: [
		{
			id: 'peaceful-wandering',
			text: 'Embrace peaceful wandering - find joy in freedom',
			next: 'epilogue_reflection',
			effects: { wisdom: 8, charisma: 6 },
			hiddenEffects: {
				ending_achieved: 'wanderer_peaceful',
				found_happiness: true,
				duty_abandoned: true
			}
		},
		{
			id: 'wandering-regret',
			text: 'Wander but carry regret about abandoning responsibility',
			next: 'epilogue_reflection',
			effects: { wisdom: 9 },
			hiddenEffects: {
				ending_achieved: 'wanderer_regret',
				haunted_by_choice: true,
				melancholy_freedom: true
			}
		}
	]
};

export const ArchmageRuler: Scene = {
	id: 'archmage_ruler',
	text: `The Starfall Ruins transform into a new capital - a place where magic flows freely and all races walk as equals. You've become something unprecedented: a magical sovereign who unites realms through power and wisdom rather than conquest.

The Crystal Heart pulses at the center of the city, its restored power channeling through you. Your mastery of blood magic, elemental control, rune craft, and spirit communion has reached legendary levels.

Representatives of all five magical races bow not out of fear, but genuine respect. You've proven that power can serve wisdom rather than corruption.

This is the rarest ending - the magical renaissance that scholars dreamed of for millennia.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: 70 }
			},
			text: `Lyra stands beside you as equal partner in this magical sovereignty. Together, your combined mastery of blood magic and elven mysticism creates wonders never before seen.

"We're going to live for centuries together," she says with joy and wonder. "Your blood magic and my elven longevity - they've merged. You won't age normally anymore."

She kisses you deeply. "I've lost everyone I loved to time. But not you. Never you. We have eternity to build this dream together."`
		},
		{
			conditions: {
				hasHiddenAttributes: { thorne_romance: 70 }
			},
			text: `Thorne in dragon form circles your magical city, a living symbol of the dragon-human alliance. When he takes human shape beside you, there's profound satisfaction in his ancient eyes.

"In three thousand years, I never thought I'd see this - all races united, magic flourishing, humans reaching their true potential." He takes your hand. "And I never thought I'd find a mortal worth loving who wouldn't die after a mere century."

Your magical power has altered your lifespan. You'll live for ages alongside him, perhaps forever. The impossible romance becomes eternal.`
		}
	],
	choices: [
		{
			id: 'magical-utopia',
			text: 'Build magical utopia - perfect synthesis of power and wisdom',
			next: 'epilogue_reflection',
			effects: { wisdom: 15, courage: 10, charisma: 12 },
			hiddenEffects: {
				ending_achieved: 'archmage_perfect',
				magical_renaissance: true,
				legendary_ending: true,
				immortality_achieved: true
			}
		},
		{
			id: 'magical-burden',
			text: 'Accept burden of magical sovereignty - power is lonely',
			next: 'epilogue_reflection',
			effects: { wisdom: 12, courage: 8 },
			hiddenEffects: {
				ending_achieved: 'archmage_burdened',
				powerful_but_isolated: true,
				price_of_power: true
			}
		}
	]
};

export const ShadowThrone: Scene = {
	id: 'shadow_throne',
	text: `The palace has transformed into something dark and terrible. Shadow magic permeates every stone. The corruption you embraced has consumed you, turning you into the very thing you once fought against.

You sit on a throne of darkness, power beyond measure at your fingertips, but utterly alone. Every companion who loved you has either fled, died trying to stop you, or been twisted into something unrecognizable.

This is the price of choosing power over principle, corruption over compassion. You've become the tyrant the realm feared.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shadow_romance: 70, shadow_redeemed: 100 }
			},
			text: `Shadow stands beside your dark throne, the only one who remained. But even they look troubled, conflicted.

"I hoped you'd be different," they say quietly. "I thought you could wield darkness without being consumed. But you've become what I was - what I'm still trying to escape."

They look at you with a mixture of love and horror. "I can't save you if you don't want to be saved. And I can't become this again, even for you."

Even your darkest companion, your partner in shadows, is preparing to leave. You'll be alone with your power.`
		}
	],
	choices: [
		{
			id: 'embrace-darkness',
			text: 'Embrace the darkness completely - become shadow sovereign',
			next: 'epilogue_reflection',
			effects: { courage: 12 },
			hiddenEffects: {
				ending_achieved: 'shadow_complete',
				fully_corrupted: true,
				dark_god: true,
				everyone_gone: true
			}
		},
		{
			id: 'final-redemption',
			text: 'One last attempt at redemption - can corruption be reversed?',
			next: 'epilogue_reflection',
			effects: { courage: 10, wisdom: 8 },
			hiddenEffects: {
				ending_achieved: 'shadow_redemption',
				fighting_corruption: true,
				desperate_salvation: true
			}
		}
	]
};

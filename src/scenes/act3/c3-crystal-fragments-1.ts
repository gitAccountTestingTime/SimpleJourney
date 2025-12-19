import { Scene } from '../../story-manager';

const shadowInterrogation = `The assassin - a woman named Shadow - sits in the secure room, defiant despite her chains. She's professional enough to accept capture with grace, but reveals nothing easily. The room itself is stark: stone walls, a single barred window allowing pale morning light, iron manacles anchored to the floor. Shadow wears the marks of combat - bruises blooming across her jaw, blood dried at her temple, but her eyes remain sharp, calculating. She watches you enter with the studied calm of someone trained to endure interrogation, torture, even death without breaking protocol.`;

const shadowDefiance = `"You want to know who hired me?" she says coldly, voice carrying the flat affect of professional detachment. "Political factions don't leave receipts, Your Highness. They communicate through intermediaries, coded messages, untraceable payments in foreign currencies. Even if I wanted to tell you - and I'm not saying I do - I couldn't name names because I never learned them. That's how the game works. Plausible deniability all the way down." Her smile is thin, humorless. "I'm a weapon. Weapons don't question who wields them."`;

const shadowShift = `But as you talk, something shifts. Your choices matter - mercy or cruelty, understanding or condemnation, judgment or curiosity. Shadow is a person, not just a weapon. Someone broken by circumstances, trained to kill from childhood, never shown another path until survival and assassination became synonymous. The professional mask she wears so carefully begins to crack at the edges. You see glimpses beneath: exhaustion, resignation, perhaps even a flicker of hope she's too disciplined to fully acknowledge. She expected torture or execution. Instead, you're treating her like a human being capable of choice, of change, of redemption.`;

const factionBetrayal = `Evidence suggests faction betrayal - contracts traced to Valorian nobility, payments from reformist sympathizers, or military intelligence gone rogue, depending on which alliances you've threatened most. Someone in the complex political web surrounding your ascension fears you enough to want you dead. Shadow is just the tool they used, expendable the moment she failed. That reality settles between you like cold steel: you're not just fighting external threats like Shadow Beasts, but internal treachery from those who should be allies.`;

const shadowHumanity = `The question becomes: what do you do with someone trained to kill, who followed orders, who now sits before you vulnerable and awaiting judgment? Do you see the weapon or the person? Do you respond with justice, mercy, pragmatism, or vengeance? Shadow watches your face carefully, reading your micro-expressions, trying to determine whether she'll leave this room alive.`;

const getAssassinConfessionText = (): string => {
	return `${shadowInterrogation}\n\n${shadowDefiance}\n\n${shadowShift}\n\n${factionBetrayal}\n\n${shadowHumanity}`;
};

// Act 3 - Interrogation and Crystal Quest Beginning

export const AssassinConfession: Scene = {
	id: 'assassin_confession',
	get text() {
		return getAssassinConfessionText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['helped_commoners:true', 'compassion_for_people:10'] },
			text: `${shadowInterrogation}\n\nShadow watches you warily, expecting torture or execution - the standard response from nobility to failed assassins. Instead, you speak to her as a person, with the same genuine curiosity and compassion you showed to struggling commoners in the market. Your reputation for seeing individuals rather than categories precedes you even into interrogation rooms.\n\n"How did you become an assassin?" you ask, pulling a chair closer and sitting at eye level rather than looming over her in dominance display.\n\nShe's caught off-guard by the simple humanity of the question. "Does it matter?" Her voice wavers slightly, professional detachment cracking.\n\n"Yes," you say simply. "Because I can see you're more than just a killer. The same way the market baker was more than just a thief when hunger drove him to steal bread. Context matters. Choices matter. But so do the circumstances that constrain our choices."\n\nFor the first time, her mask cracks completely. "I was twelve when the assassins' guild found me sleeping in an alley, half-starved, covered in bruises from the street gang that controlled that territory. They offered food, shelter, purpose - a family of sorts. I didn't know there were other choices." She looks away, jaw tight with old pain. "By the time I realized killing wasn't the only skill worth learning, I'd done things that couldn't be undone. Things that marked me permanently."\n\nThe vulnerability costs her visibly. She's revealing weakness to someone who could exploit it. But your compassion for common people has created unexpected safety.\n\n${factionBetrayal}`
		},
		{
			conditions: { hasHiddenAttributes: { compassion_for_people: 15 } },
			text: `${shadowInterrogation}\n\nShadow watches you warily, expecting torture or execution - the brutal efficiency she'd employ herself in your position. Instead, you speak to her as a person, with genuine curiosity that transcends political calculation. Your capacity for compassion, demonstrated consistently throughout your journey, creates cognitive dissonance with everything she knows about nobility.\n\n"How did you become an assassin?" you ask, voice gentle despite the circumstances.\n\nShe's caught off-guard. "Does it matter?" The question emerges defensive, uncertain.\n\n"Yes," you say simply. "Because I can see you're more than just a killer. Everyone has a story. Everyone made choices within contexts they didn't fully control. I want to understand yours."\n\nFor the first time, her professional mask cracks completely. "I was twelve when the assassins' guild found me sleeping in an alley. They offered food, shelter, purpose - things I'd never had consistently. I didn't know there were other choices." She looks away, vulnerability naked on her face. "By the time I realized killing wasn't the only path, I'd done things that couldn't be undone. Things that define me now."\n\n${shadowShift}\n\n${factionBetrayal}`
		},
		{
			conditions: { hasFlags: ['military_path_confirmed:true', 'pragmatic_ruler:true'] },
			text: `${shadowInterrogation}\n\nKieran stands beside you during the interrogation, military bearing radiating controlled threat. They study Shadow with professional assessment, recognizing techniques, evaluating training. "Professional work," Kieran observes coldly. "Military-trained, possibly one of the elite shadow units before they went rogue or were disbanded. She knows counter-interrogation tactics, pain tolerance protocols, operational security. This won't be easy."\n\n${shadowDefiance}\n\nShadow's eyes flick to Kieran with recognition - one weapon acknowledging another. "You know the type," she says to them directly. "We follow orders, complete missions. Personal feelings don't matter. Morality is a luxury for people who have choices."\n\n"They should matter," you say, surprising both of them with the conviction in your voice. "You're still a person, not just a weapon. Having discipline doesn't mean surrendering humanity. Following orders doesn't absolve you of responsibility for choosing to follow them."\n\nShadow looks genuinely confused by your compassion despite your military alliance. She expected pragmatic ruthlessness from a military-aligned ruler, not philosophical complexity about personhood and accountability. Kieran shifts slightly beside you, their own relationship with duty and emotion complicated.\n\n${factionBetrayal}`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${shadowInterrogation}\n\nSage watches the interrogation with scholarly interest, but his expression carries familiar pain - he understands systemic failure intimately. "The assassins' guild recruits exclusively from the desperate," he murmurs to you quietly. "Street children, orphans, those society abandoned completely. They offer structure, purpose, belonging - the very things our society denies marginalized people. Then we act surprised when they become weapons instead of citizens." His voice hardens with reformist conviction. "The Reformists want to change that systemic abandonment. To create real alternatives."\n\n${shadowDefiance}\n\nYou lean forward, voice intense with ideological commitment. "What if there was another way? What if we could build a society that offered people like you real choices - education, apprenticeships, community support - not just survival through violence or death through starvation?"\n\nShadow's defiance wavers, hope and cynicism warring visibly. "Nice dream. Doesn't work in the real world. I've seen too much to believe in fairy tales."\n\n"Let me prove it does," you say with absolute conviction. "Starting with you. Be the first person to benefit from the new system we're building. Show others that redemption isn't just theoretical."\n\nSage nods approvingly at your reformist principles applied practically.\n\n${factionBetrayal}`
		}
	],
	choices: [
		{
			id: 'show-mercy',
			text: `Show mercy and offer genuine redemption - demonstrate that your kingdom values second chances and sees people beyond their worst actions`,
			next: 'crystal_quest_begins',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				shadow_spared: true,
				shadow_redeemed: 10,
				faction_betrayal_known: true,
				merciful_leader: true,
				shadow_loyalty_seed: true
			}
		},
		{
			id: 'investigation',
			text: `Focus on thorough investigation to identify betrayers - use Shadow's information to root out internal treachery before it strikes again`,
			next: 'crystal_quest_begins',
			effects: { wisdom: 5 },
			hiddenEffects: {
				shadow_spared: true,
				faction_betrayal_known: true,
				investigation_thorough: true,
				strategic_mind: true
			}
		},
		{
			id: 'leverage',
			text: `Use assassination evidence as political leverage - turn betrayal into strategic advantage against the faction that hired her`,
			next: 'crystal_quest_begins',
			effects: { wisdom: 3, charisma: 2 },
			hiddenEffects: {
				shadow_spared: true,
				faction_betrayal_known: true,
				political_leverage_gained: true,
				pragmatic_leader: true
			}
		},
		{
			id: 'forgive',
			text: `Forgive both Shadow and the betraying faction - seek reconciliation and demonstrate that your rule prioritizes unity over vengeance`,
			next: 'crystal_quest_begins',
			effects: { charisma: 5 },
			hiddenEffects: {
				shadow_spared: true,
				shadow_redeemed: 15,
				faction_betrayal_known: true,
				forgiving_leader: true,
				faction_tensions_eased: true
			}
		},
		{
			id: 'execute',
			text: `Execute Shadow immediately - send clear message that assassination attempts will be met with absolute justice and zero tolerance`,
			next: 'crystal_quest_begins',
			effects: { courage: 3 },
			hiddenEffects: {
				shadow_dead: true,
				faction_betrayal_known: true,
				ruthless_leader: true,
				shadow_redemption_impossible: true
			}
		}
	]
};

const lyraArchives = `In the royal archives, Lyra spreads ancient texts before you - illuminated manuscripts centuries old, maps drawn on vellum that crackles with age, diagrams of the Crystal Heart showing its original unified structure. Dust motes dance in shafts of afternoon light streaming through high windows. The air smells of old paper, leather bindings, and the faint metallic tang of preservation spells. Her expression is grave, weighted with knowledge that should have remained theoretical but now demands urgent action.`;

const crystalHistory = `"The Crystal Heart was shattered twenty years ago," she explains, fingers tracing the fracture lines on an ancient diagram. "Five fragments scattered across the realm in a catastrophic magical explosion that killed hundreds and destabilized the barrier between our world and the Shadowrealm. Without it functioning as unified whole, that barrier weakens daily - imperceptibly at first, but now accelerating exponentially. Eventually, it will collapse completely." Her voice carries absolute certainty. "When that happens, Shadow Beasts won't be isolated incursions. They'll be an invasion. An extinction-level threat that no army can stop."`;

const fragmentLocations = `She points to locations marked on a detailed map, each site carefully annotated with historical notes and warnings:\n\n"The **Elven Fragment** rests with my people in Moonwhisper Grove, deep in the Silverwood Forest. They won't surrender it easily - not after centuries of human betrayal, broken treaties, and violence justified by human 'necessity.' You'll need to prove yourself worthy of trust that's been shattered as thoroughly as the Crystal Heart itself.\n\nThe **Dwarven Fragment** is held in Ironpeak Mountains, secured in the royal treasury. Finn's people value fair trade above all else - they'll negotiate honestly, but they won't simply give away something precious without equivalent exchange or demonstration of honor.\n\nThe **Dragon Fragment** is guarded by Thorne Drake and his kin in Dragon's Spine Mountains. Dragons respect only strength and wisdom - you'll need to prove both, likely through challenges that could kill you if you fail.\n\nThe **Fae Fragment** lies within the Shimmerwood, where reality bends to fae whims and truth is currency more valuable than gold. Fae don't think like humans. They value entertainment, cleverness, and keeping promises literally rather than in spirit.\n\nThe **Merfolk Fragment** rests beneath the waves in the Coral Palace. The sea-folk are furious about surface-dwellers polluting their waters, destroying reefs, treating oceans as dumps. They have every reason to let the surface world burn."`;

const lyraChallenge = `She meets your eyes directly, ancient wisdom and hard-won experience evident in her gaze. "Each fragment requires not just retrieval, but earning the trust of its guardians. This journey will test everything you are - your character, your convictions, your capacity for growth. Political alliances won't save you here. Only genuine respect, real understanding, and proven worthiness will matter."`;

const questWeight = `The weight of what she's describing settles over you: a journey across the realm, diplomatic challenges with races who have legitimate grievances against humanity, trials that could kill you, and the constant pressure of time running out as Shadow Beasts grow stronger. This is the true test of your readiness to rule - not managing human politics, but building bridges across fundamental divides.`;

const getCrystalQuestBeginsText = (): string => {
	return `${lyraArchives}\n\n${crystalHistory}\n\n${fragmentLocations}\n\n${lyraChallenge}\n\n${questWeight}`;
};

export const CrystalQuestBegins: Scene = {
	id: 'crystal_quest_begins',
	get text() {
		return getCrystalQuestBeginsText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['shadow_spared:true', 'merciful_leader:true'] },
			text: `${lyraArchives}\n\nLyra studies you with new respect, her ancient eyes reflecting something she hasn't felt toward a human in two centuries. "You showed mercy to the assassin," she says quietly. "Compassion even to those who tried to harm you, who represented everything dangerous about political intrigue. You looked past the weapon to see the person." She pauses, choosing words carefully. "That will matter when you face the magical races. They don't judge based on political promises or diplomatic platitudes. They judge hearts, intentions, the truth of who you are beneath social performance. Your mercy has already demonstrated character they'll recognize."\n\n${crystalHistory}\n\n${fragmentLocations}\n\n"Your mercy has already opened doors," she continues with conviction. "Use that compassion wisely. Show them the same genuine humanity you showed Shadow, and they'll see you're different from the humans who came before - the ones who broke treaties, justified violence, treated other races as resources rather than people."\n\n${questWeight}`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true', 'diplomatic_focus:true'] },
			text: `${lyraArchives}\n\nLyra smiles slightly - a rare expression that transforms her usually solemn features. "You prioritized alliance with magical races from the very beginning, when most heirs would have focused exclusively on human faction politics. That foresight, that willingness to see beyond human-centric worldview, will serve you now more than any military advantage or economic leverage."\n\n${crystalHistory}\n\n${fragmentLocations}\n\n"You already understand what truly matters," she says with approval. "Respect, genuine alliance, recognition of personhood beyond species boundaries - not just human political convenience. My people will see that understanding. They'll recognize that your diplomatic focus wasn't performance but genuine valuing of non-human perspectives."\n\n${lyraChallenge}\n\n${questWeight}`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${lyraArchives}\n\n"Your independent path has earned curiosity, if not yet full trust," Lyra observes thoughtfully. "The magical races appreciate that you rejected human faction games - the endless political maneuvering, the treating of people as chess pieces, the prioritizing of power over principles. They see someone willing to forge their own path rather than conforming to expectations."\n\n${crystalHistory}\n\n${fragmentLocations}\n\n"Prove your independence was about serving the realm rather than personal power," she continues, "and they'll listen. Show them your rejection of faction politics extends to genuine respect for non-human autonomy, and you'll have earned their attention if not yet their trust."\n\n${lyraChallenge}\n\n${questWeight}`
		}
	],
	choices: [
		{
			id: 'diplomatic',
			text: `Prioritize diplomatic approach focused on earning genuine trust - demonstrate respect, listen to grievances, and build real relationships rather than transactional exchanges`,
			next: 'moonwhisper_trial',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				crystal_quest_active: true,
				diplomatic_approach: true,
				lyra_respect: 15,
				'first_fragment:elven': true
			}
		},
		{
			id: 'lyra-guidance',
			text: `Seek Lyra's detailed guidance on each race's culture, customs, and grievances - learn proper protocols, understand historical context, and demonstrate respect through education`,
			next: 'moonwhisper_trial',
			effects: { wisdom: 5 },
			hiddenEffects: {
				crystal_quest_active: true,
				lyra_respect: 20,
				learned_racial_customs: true,
				'first_fragment:elven': true
			}
		},
		{
			id: 'start-elven',
			text: `Start with Moonwhisper Grove - prove yourself to the elves first and let that reputation build credibility with other magical races`,
			next: 'moonwhisper_trial',
			effects: { wisdom: 3 },
			hiddenEffects: {
				crystal_quest_active: true,
				'first_fragment:elven': true,
				lyra_trust_building: true
			}
		},
		{
			id: 'strategic-order',
			text: `Plan strategic order based on current alliances and relationship strengths - leverage existing connections to build momentum across fragment quests`,
			next: 'moonwhisper_trial',
			effects: { wisdom: 6 },
			hiddenEffects: {
				crystal_quest_active: true,
				strategic_planning: true,
				'first_fragment:elven': true
			}
		}
	]
};

const groveBeauty = `Moonwhisper Grove is breathtaking in ways that transcend mere aesthetic beauty. Ancient trees sing with living magic, their branches forming living cathedrals that soar hundreds of feet overhead. Bioluminescent flowers bloom in colors that don't exist in human spectrum, casting ethereal light that shifts with your emotions. The air itself shimmers with enchantment so thick you can taste it - sweet, metallic, alive. Streams flow upward defying gravity, their waters carrying memories of centuries past. This is the heart of elven civilization, unchanged for millennia, and you're the first human allowed here in decades. The privilege feels simultaneously humbling and terrifying.`;

const councilAssembles = `The Elven Council assembles in a clearing where moonlight falls perpetually despite the afternoon sun. Seven elders arranged in a semicircle, each radiating centuries of accumulated wisdom and grievance. Lyra presents you formally with ritualistic courtesy, but their faces remain cold, skeptical - expressions that have hardened over centuries of human betrayal. The eldest, a woman whose silver hair cascades to the ground, speaks with voice like wind through leaves: "We remember human treachery. We remember broken promises, violated treaties, violence justified by human 'necessity.' Why should we trust you with a fragment of the Crystal Heart when humans shattered it in the first place?"`;

const painfulHistory = `Another elder adds, voice heavy with unhealed grief: "During the last war - merely twenty years ago by human reckoning, yesterday by ours - humans slaughtered an entire elven settlement for timber rights and mineral deposits. Three hundred souls extinguished for resources they could have simply asked to trade for. Lyra lost her entire magical circle in that massacre." The elder's eyes find Lyra, who stands rigid with remembered trauma. "We do not forget. We cannot forget. Our lifespans make forgiveness nearly impossible when the wounds remain fresh."`;

const lyraSupport = `Lyra stands beside you, supportive but deliberately silent. This is your test to pass, your character to prove. She's already vouched for you simply by bringing you here - a risk to her standing she's consciously accepting. But she won't speak for you now. Words must be yours, choices must be yours, worthiness must be demonstrated rather than borrowed.`;

const trialOffer = `"We offer three trials," the eldest continues with formal gravity. "Choose one. Pass it, and we will consider your worthiness - though passing doesn't guarantee the fragment, merely continued conversation. Fail, and you leave empty-handed - if you leave at all. The trials can be fatal to those unprepared or unworthy."`;

const getMoonwhisperTrialText = (): string => {
	return `${groveBeauty}\n\n${councilAssembles}\n\n${painfulHistory}\n\n${lyraSupport}\n\n${trialOffer}`;
};

export const MoonwhisperTrial: Scene = {
	id: 'moonwhisper_trial',
	get text() {
		return getMoonwhisperTrialText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['humble:true', 'cultural_humility:true', 'learning_blood_magic:true'] },
			text: `${groveBeauty}\n\nYour humble approach when first meeting Lyra, your willingness to learn blood magic without demanding accommodations, your genuine respect for elven customs - none of this has been forgotten. The Council knows you accepted their teaching with humility rare in humans, especially royalty accustomed to deference.\n\n${councilAssembles}\n\nThe eldest studies you with consideration rather than pure hostility. "Lyra says you learned from her with humility rare in humans - that you honored our ways rather than demanding we adapt to yours. That you asked permission, showed respect, acknowledged your ignorance without shame. These are not common human traits, particularly among nobility."\n\n${painfulHistory}\n\n${lyraSupport} But there's warmth in her eyes, pride even - your respect matters deeply to her, validates her choice to teach you.\n\n"We will test you," the eldest says, voice fractionally warmer, "but we do so with hope, not just skepticism. Your earlier humility suggests capacity for growth we didn't expect."`
		},
		{
			conditions: { hasFlags: ['rowan-help:true', 'team_approach:true', 'cultural_awareness:true'] },
			text: `${groveBeauty}\n\nRowan walks beside you, their half-elven heritage evident in how they move through the grove - belonging naturally to spaces that feel alien to you. The trees respond to their presence, branches bending closer, flowers blooming brighter. The Elven Council notices every detail.\n\n${councilAssembles}\n\n"You brought Rowan Thornheart," an elder observes with careful neutrality. "Half-elven, raised by humans, caught between worlds as all mixed-heritage children are. Yet you value their connection to both worlds rather than demanding they choose sides. You collaborate with them as equals rather than subordinates. That shows wisdom rare in human nobility, who typically see mixed-heritage folk as lesser."\n\n${painfulHistory}\n\nRowan squeezes your hand supportively, their own emotions complex - gratitude for your acceptance, anxiety about whether their people will see them as elven enough, hope that their existence can bridge the divide.\n\n${trialOffer}`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true', 'diplomatic_focus:true'] },
			text: `${groveBeauty}\n\nWord of your commitment to magical races has reached even this isolated sanctuary. News travels through magical networks humans barely comprehend - whispered through wind, carried in water, sung between trees. The Council's coldness is tempered by genuine curiosity about whether the stories could possibly be true.\n\n${councilAssembles}\n\n"We have heard," the eldest says with measured hope, "that you rejected human faction politics entirely to build genuine alliance with our peoples. That you prioritized diplomacy with non-humans over accumulating human political power. If true - and we remain skeptical, for humans lie effortlessly - that changes much."\n\n${painfulHistory}\n\n${lyraSupport}\n\n"Prove your intentions are genuine," the eldest continues, "demonstrate that your diplomatic focus extends beyond political strategy to actual respect for non-human personhood, and we may offer more than just a fragment. We may offer true partnership - the kind humans haven't earned in centuries."`
		},
		{
			conditions: { hasHiddenAttributes: { lyra_respect: 25 } },
			text: `${groveBeauty}\n\nThe Elven Council is cold, faces carved from skepticism hardened over centuries. But when Lyra speaks on your behalf, her voice carries weight that transcends ordinary testimony. She's not just vouching professionally - she's staking her honor.\n\n"I have traveled with this one," she says, voice ringing with conviction that silences murmurs. "I have seen their heart in moments of crisis when performance gives way to truth. They are not like the humans who came before - not like those who broke treaties, justified violence, treated us as resources rather than people." She meets your eyes directly, then turns to the Council with absolute certainty. "I stake my reputation - my very honor, accumulated over two centuries - on their worthiness."\n\nThe Council murmurs with surprise. This is significant beyond human comprehension. Lyra rarely vouches for anyone, and never for humans. Her standing in elven society, earned through scholarship and wisdom, now hangs on your character.\n\nThe eldest nods slowly, gravely. "Very well. We will test them. But know, Lyra Starsong, if they fail or betray us, your standing falls with theirs. You will share their dishonor."\n\nShe doesn't hesitate. "I accept that risk gladly."`
		}
	],
	choices: [
		{
			id: 'nature-trial',
			text: `Accept trial of nature magic - prove genuine respect for living things and natural balance through direct magical communion with the grove`,
			next: 'lyra_confession',
			effects: { wisdom: 4 },
			hiddenEffects: {
				'elven_trial_chosen:nature': true,
				lyra_respect: 10,
				rowan_bond: 10,
				nature_affinity: true
			}
		},
		{
			id: 'truth-trial',
			text: `Accept trial of absolute truth - let elven magic read your heart directly and reveal all intentions, even those you hide from yourself`,
			next: 'lyra_confession',
			effects: { courage: 5 },
			hiddenEffects: {
				'elven_trial_chosen:truth': true,
				lyra_respect: 15,
				heart_proven_pure: true,
				brave_vulnerability: true
			}
		},
		{
			id: 'alternative',
			text: `Negotiate for alternative proof of worthiness - propose demonstrating value through actions rather than magical trials`,
			next: 'lyra_confession',
			effects: { charisma: 4 },
			hiddenEffects: {
				'elven_trial_chosen:negotiated': true,
				lyra_respect: 8,
				diplomatic_skill: true
			}
		},
		{
			id: 'lyra-vouch',
			text: `Ask Lyra to vouch for you directly - accept the risk to her reputation and demonstrate trust in the relationship you've built`,
			next: 'lyra_confession',
			effects: { charisma: 3 },
			hiddenEffects: {
				'elven_trial_chosen:vouched': true,
				lyra_respect: 20,
				lyra_risked_status: true,
				lyra_trust_deep: true
			}
		}
	]
};

const trialCompletion = `After the trial - which you passed through determination, honesty, Lyra's faith in you, or sheer force of character - the elven emissary leads you to a private glade. The Crystal Fragment glows softly in your hands, pulsing with warmth that resonates through your bones. Finally earned. Finally trusted enough to be given freely rather than taken by force or manipulation.`;

const memorialGlade = `Lyra stands by a memorial carved into living wood, ancient oak that has grown around the sculpture to incorporate grief into its very structure. Names are etched there - dozens of them, elven script flowing like water frozen mid-cascade. Each name represents a life, a person, a future that was stolen. The memorial breathes with preservation magic, ensuring the names will never fade even as centuries pass.`;

const lyraGrief = `"My magical circle," she says quietly, fingers tracing names with reverent gentleness. "We were here, in this very grove, when the humans attacked. They wanted the ancient trees for lumber - millenia-old giants reduced to timber prices in human ledgers. They didn't care who stood in their way. Didn't care that we offered to negotiate, to sell harvesting rights to dead wood, to establish sustainable practices." Her voice is steady through discipline, but pain underlies every word like groundwater beneath stone.`;

const lostLove = `"I survived because I was gathering herbs in the outer forest. When I returned..." She trails off, unable to vocalize what she found. Her hand settles on one name carved deeper than others. "His name was Aelon. We were to be married - had already exchanged promises, were planning the bonding ritual. He was a healer, dedicated to preserving life. He died trying to protect children." Tears finally fall, silent and ancient.`;

const vulnerableMoment = `She turns to you, eyes glistening with two hundred years of unprocessed grief. "For two centuries, I've carried this. I thought I'd never trust a human again - thought it was impossible, that the wound was too deep to heal. And then you came along and challenged everything I believed about your species, about whether bridges could be rebuilt, about whether hope was justified or just naivety dressed in optimism." Her voice breaks. "You're making me believe again. And that terrifies me."`;

const getLyraConfessionText = (): string => {
	return `${trialCompletion}\n\n${memorialGlade}\n\n${lyraGrief}\n\n${lostLove}\n\n${vulnerableMoment}`;
};

export const LyraConfession: Scene = {
	id: 'lyra_confession',
	get text() {
		return getLyraConfessionText();
	},
	choices: [
		{
			id: 'empathy',
			text: `Listen with deep empathy and hold space for her grief - let her share fully without rushing to fix or minimize the pain`,
			next: 'ironpeak_negotiation',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				elven_shard_obtained: true,
				lyra_romance: 25,
				lyra_healing_begins: true,
				emotional_connection: true
			}
		},
		{
			id: 'apologize',
			text: `Apologize sincerely for humanity's wrongs - acknowledge the harm without defensiveness and accept responsibility for systemic violence`,
			next: 'ironpeak_negotiation',
			effects: { charisma: 4 },
			hiddenEffects: {
				elven_shard_obtained: true,
				lyra_romance: 20,
				lyra_appreciates_accountability: true
			}
		},
		{
			id: 'share-loss',
			text: `Share your own losses and pain - offer reciprocal vulnerability and create connection through mutual understanding of grief`,
			next: 'ironpeak_negotiation',
			effects: { charisma: 5 },
			hiddenEffects: {
				elven_shard_obtained: true,
				lyra_romance: 30,
				shared_grief: true,
				deep_understanding: true
			}
		},
		{
			id: 'offer-hope',
			text: `Offer hope for a better future together - acknowledge the past while focusing on building something new that honors those lost`,
			next: 'ironpeak_negotiation',
			effects: { charisma: 4, wisdom: 2 },
			hiddenEffects: {
				elven_shard_obtained: true,
				lyra_romance: 28,
				lyra_sees_future: true,
				hope_kindled: true
			}
		}
	]
};

const dwarvenHalls = `The dwarven halls of Ironpeak are marvels of engineering and artistry that demonstrate mastery humans can barely comprehend. Massive pillars carved from living stone support vaulted ceilings hundreds of feet overhead, each pillar telling story through intricate relief work. The ceilings themselves are inlaid with precious gems arranged in constellations that cast rainbow light across polished floors. Everything is functional and beautiful simultaneously - dwarven philosophy embodied in architecture. Water channels flow through carved aqueducts. Ventilation systems circulate fresh air from deep within the mountain. Finn escorts you proudly through his homeland, pointing out engineering features with infectious enthusiasm.`;

const dwarfKingNegotiation = `The Dwarf King sits upon a throne of polished granite shot through with veins of gold, radiating practical authority rather than ostentatious display. Unlike the elves' emotional wounds requiring healing, the dwarves approach this matter transactionally - not coldly, but with cultural framework that values fair exchange above sentiment. Honor matters immensely, but so does equivalent value.`;

const kingGreeting = `"Your Highness," the King greets with business-like courtesy that nonetheless conveys respect. "The Crystal Fragment in our possession is valuable - both practically and symbolically. We dwarves don't simply give away treasures, not because of greed but because value must be recognized through proper exchange. Fair trade is sacred principle. What do you offer in exchange?"`;

const finnAdvice = `Finn whispers urgently beside you: "They'll respect a good bargain, but they value honor above profit. Don't try to cheat them or undervalue what you're asking for. Honest negotiation is deeply cultural. Lowballing offends, but so does overvaluing without justification."`;

const negotiationOptions = `The options are clear: royal treasury access and ongoing trade benefits, long-term fair trade agreements, resolution of the dwarf-elf border dispute that's festered for decades, proving yourself worthy through traditional dwarven challenges of skill and endurance, or asking Finn to stake his reputation on your character.`;

const getIronpeakNegotiationText = (): string => {
	return `${dwarvenHalls}\n\n${dwarfKingNegotiation}\n\n${kingGreeting}\n\n${finnAdvice}\n\n${negotiationOptions}`;
};

export const IronpeakNegotiation: Scene = {
	id: 'ironpeak_negotiation',
	get text() {
		return getIronpeakNegotiationText();
	},
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_friendship: 25 }
			},
			text: `${dwarvenHalls}\n\nThe Dwarf King regards you seriously, shrewd assessment weighing your character against reputation. But before formal negotiations begin, Finn steps forward boldly - an unprecedented breach of protocol that makes the King's advisors stiffen with alarm. This isn't how these proceedings work.\n\n"Your Majesty," Finn says, voice steady despite the enormity of what he's proposing, "I've traveled with the heir. I've seen their character in moments of crisis when social masks fall away. They're worth the risk." He turns to you briefly, then back to the King with absolute conviction. "I'll stake my master craftsman status on their worthiness. If they fail or betray us, strip my title. Reduce me to apprentice status. Exile me if necessary."\n\nThe King's eyebrows rise dramatically. This is significant beyond human comprehension - master craftsman status represents decades of training, masterwork creations, social standing that defines identity. "That's quite a risk, young Ironforge. Your father won't be pleased if you lose your status. Your family reputation hangs on this."\n\nFinn stands firm, jaw set with determination. "Some things matter more than status, Your Majesty. Like preventing the Shadowrealm from consuming us all. Like believing people can be better than their ancestors' mistakes."`
		}
	],
	choices: [
		{
			id: 'treasury',
			text: `Offer royal treasury access and substantial trade benefits - provide economic partnership that benefits both kingdoms long-term`,
			next: 'ironpeak_celebration',
			effects: { charisma: 3 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 10,
				dwarf_faction_rep: 30,
				economic_alliance: true
			}
		},
		{
			id: 'trade-agreement',
			text: `Promise comprehensive long-term fair trade agreements with guaranteed market access and mutual tariff reductions`,
			next: 'ironpeak_celebration',
			effects: { wisdom: 4 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 15,
				dwarf_faction_rep: 35,
				fair_trade_established: true
			}
		},
		{
			id: 'border-dispute',
			text: `Offer to mediate and resolve the centuries-old dwarf-elf border dispute using your connections with both peoples`,
			next: 'ironpeak_celebration',
			effects: { wisdom: 5, charisma: 3 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 20,
				dwarf_faction_rep: 40,
				lyra_respect: 15,
				diplomatic_master: true
			}
		},
		{
			id: 'craftsmanship',
			text: `Challenge to traditional dwarven craftsmanship contest - earn the fragment through skill and respect for dwarven culture`,
			next: 'ironpeak_celebration',
			effects: { wisdom: 3 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 25,
				finn_romance: 20,
				dwarf_faction_rep: 35,
				earned_through_skill: true
			}
		},
		{
			id: 'finn-help',
			text: `Ask Finn to negotiate on your behalf and stake his reputation - trust him to advocate for you with his people`,
			next: 'ironpeak_celebration',
			effects: { charisma: 2 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 30,
				finn_risked_standing: true,
				finn_loyalty_deep: true,
				dwarf_faction_rep: 30
			}
		}
	]
};

const negotiationSuccess = `The negotiation is a success! The Dwarf King grants you the Crystal Fragment with genuine respect, not just transactional courtesy. "You've proven yourself worthy, Your Highness," he says warmly, clasping your forearm in traditional dwarven greeting that signifies equals. "May this alliance bring prosperity to both our peoples for generations to come."`;

const finnApproach = `As the formal proceedings end and advisors disperse to draft official agreements, Finn approaches with a mischievous grin that transforms his usual serious demeanor. "The workers in the forges want to do something special," he explains, voice carrying excitement. "They heard about the diplomatic feast - word travels fast through the guilds - and they want to celebrate this alliance properly. Dwarven style."`;

const dessertProposal = `He leans in conspiratorially, eyes sparkling. "They're planning a special dessert as a gift - from the common dwarven folk to show their support for this alliance. Not official politics, just genuine appreciation. But they think it would mean more if you helped make it personally. Shows unity between leaders and workers, humans and dwarves, nobility and craftspeople." His enthusiasm is infectious.`;

const meaningfulGesture = `Finn's expression turns sincere, the humor giving way to something deeper. "Baking together - nobles and workers, different races side by side, getting flour in each other's hair and laughing about burnt edges - sends a powerful message about what this alliance really means. That we're partners, not just political entities. That we value each other as people, not just strategic assets." He pauses. "It would matter. To them. To all of us."\n\nThe dwarven kitchen staff watches hopefully from a respectful distance, flour-dusted hands fidgeting with aprons, eager but patient.`;

const getIronpeakCelebrationText = (): string => {
	return `${negotiationSuccess}\n\n${finnApproach}\n\n${dessertProposal}\n\n${meaningfulGesture}`;
};

export const IronpeakCelebration: Scene = {
	id: 'ironpeak_celebration',
	get text() {
		return getIronpeakCelebrationText();
	},
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { feast_prepared: true } },
			text: `${negotiationSuccess} He specifically mentions your earlier feast, eyes warm with approval. "You honored our customs with genuine care and personal effort," he says, voice carrying weight beyond diplomatic platitudes. "You didn't just order servants to prepare appropriate dishes - you learned our traditions yourself, prepared food with your own hands, demonstrated that cultural respect matters more to you than maintaining noble distance. That meant more than any political promise or economic benefit could."

${finnApproach} Finn beams with pride as the formal proceedings end, practically vibrating with satisfaction. "See? I told you food matters to my people. We express love through cooking, build community through shared meals, demonstrate respect through honoring traditional recipes." He grins mischievously. "And speaking of which... the workers in the forges heard about what you did and want to celebrate properly with you - as equals, as friends."

"They're planning a special dessert as a gift," he continues, "from the common folk to the heir who actually gets their hands dirty and doesn't think manual labor is beneath royal dignity. They want you to help bake it with them. After seeing you prepare that feast, they trust you're genuine rather than performing for political advantage."

${meaningfulGesture} "This is about more than dessert," Finn says seriously. "It's about showing that nobles and workers, humans and dwarves, royalty and craftspeople can truly work side by side as equals. That class divisions and species differences don't matter when we're building something together - whether it's a dessert or a better world."

The dwarven kitchen staff watches hopefully, flour-dusted and eager - already half in love with this noble who cooks, who sees them as people rather than servants.`
		}
	],
	choices: [
		{
			id: 'bake-together',
			text: `Bake dessert together with the dwarven workers - demonstrate solidarity across class and species boundaries through shared creative labor`,
			next: 'dessert_diplomacy',
			effects: { empathy: 6, charisma: 4 },
			hiddenEffects: {
				worker_solidarity: true,
				finn_delighted: true,
				dwarf_commoners_love: true,
				cross_cultural_bond: true
			}
		},
		{
			id: 'politely-decline',
			text: `Graciously decline the baking invitation - prioritize efficiency by moving immediately to the next fragment quest`,
			next: 'dragon_trial',
			effects: { wisdom: 2 },
			hiddenEffects: {
				missed_connection: true,
				finn_slightly_disappointed: true
			}
		}
	]
};

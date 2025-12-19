import { Scene } from '../../story-manager';

// Companion Personal Quests - Finn, Zephyr, Thorne, Marina, Shadow

const finnWorkshop = `Finn's workshop glows with forge-light as they work on something magnificent, heat radiating in waves that make the air shimmer and dance. The entire space thrums with focused creative energy - that specific atmosphere that surrounds master craftspeople when they're attempting something beyond their usual work, pushing their skills to absolute limits. Sweat beads on their brow despite cooling runes etched around the forge, trickling down face flushed with exertion and intensity. Their hands move with practiced precision that comes from decades of experience, each hammer strike perfectly placed, each adjustment minutely calculated. When they see you, their usual cheerful demeanor - the jokes and easy laughter that normally characterize their presence - is replaced by intense focus bordering on obsession.`;

const masterpiece = `"This is it," Finn says, voice rough from hours breathing forge smoke, gesturing to the workbench with hands that tremble slightly from exhaustion and excitement combined. "My masterpiece. The piece that will define my legacy as a craftsman, the work that future generations of dwarven smiths will study and reference." Their eyes shine with fierce pride mixed with anxiety. "Everything I've learned, every technique I've mastered, every innovation I've discovered - it's all going into this single creation. This is what I was meant to forge."`;

const shimmeringSword = `On the bench lies an unfinished weapon that already radiates power even in its incomplete state - a sword that seems to shimmer with inner light, as if the metal itself is barely containing magical forces woven into its structure. Runes are already etched along the blade in patterns you recognize from ancient texts: protection, sharpness, endurance, banishment. The craftsmanship visible even in this unfinished state is extraordinary - every line perfect, every curve flowing with mathematical precision and artistic grace. This is clearly the work of someone pouring their soul into creation.`;

const forgedForYou = `"I'm forging this for you," Finn continues, meeting your eyes with intensity that makes the declaration feel like vow or covenant rather than simple statement. "A blade that can cut through Shadow Beasts like they're paper, channel your magic without resistance, never break no matter what forces it faces. Something worthy of the heir who will save the realm, who deserves weapon equal to their courage and purpose." They hesitate, joy dimming as practical reality intrudes on creative passion. "But I've hit a problem. The final enchantment - the magic that will bind all these properties together and make this truly legendary instead of merely excellent - it requires... a sacrifice."`;

const sacrificeExplained = `Finn looks profoundly uncomfortable, as if the next words physically pain them to speak. "Traditional dwarven craft demands the smith give something precious to the work. Usually it's just time, or blood mixed in the metal, or months of life spent in meditation and focus. But for something this powerful? For weapon of true legendary quality?" They meet your eyes, and you see in their expression the weight of decision already made but not yet acted upon. "I'd need to give up my master craftsman title. Bind all my skill, all my knowledge, all my creative potential into this one creation. Channel everything I am into this single blade." Their voice drops to almost whisper. "I'd never craft anything of note again. Every future work would be lesser, diminished, because I'd given the core of my ability to this sword. It would be end of my career as artist and beginning of long decline into mediocrity."`;

const getFinnMasterpieceText = (): string => {
	return `${finnWorkshop}

${masterpiece}

${shimmeringSword}

${forgedForYou}

${sacrificeExplained}`;
};

export const FinnMasterpiece: Scene = {
	id: 'finn_masterpiece',
	get text() {
		return getFinnMasterpieceText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['values_craftsmanship:true', 'appreciates_artistry:true'] },
			text: `${finnWorkshop}

${masterpiece}

Finn's eyes shine with fierce pride. "You've always respected the craft. Understood that true artistry takes time, skill, heart." They gesture to the sword. "That's why this has to be perfect. You deserve nothing less."

${shimmeringSword}

${forgedForYou}

"You see the art in what I do," Finn says, voice thick with emotion. "Most people just see weapons, tools. But you... you understand." ${sacrificeExplained.slice(26)}`
		},
		{
			conditions: { hasHiddenAttributes: { finn_friendship: 35 } },
			text: `${finnWorkshop}

Finn looks up, and their expression shifts to something deeply vulnerable. "You've become my best friend. More than that - family." Their hands tremble slightly. "This isn't just about forging a great weapon. It's about giving you everything I have to offer."

${masterpiece}

${shimmeringSword}

"I would give up everything for you," Finn says quietly. "My title, my future, my craft. Because you're worth more to me than any of it." They hesitate. "But I need you to understand what I'm offering."

${sacrificeExplained}`
		}
	],
	choices: [
		{
			id: 'accept-sacrifice',
			text: 'Accept the blade - honor their incredible sacrifice by wielding it with purpose worthy of what it cost. Bear the weight of knowing that someone gave up their creative future so you could have weapon capable of saving the kingdom. Let their sacrifice have meaning through your actions.',
			next: 'marina_ocean_depths',
			effects: { courage: 5 },
			hiddenEffects: {
				finn_friendship: 50,
				finn_romance: 45,
				legendary_blade_obtained: true,
				finn_sacrificed_craft: true,
				burden_of_gift: true
			}
		},
		{
			id: 'refuse-sacrifice',
			text: 'Refuse the sacrifice - tell them their future as craftsman matters more than any single weapon. Their ongoing ability to create beauty and function, to forge weapons for many heroes rather than one perfect blade for you, has more value than this moment. Their art should continue.',
			next: 'marina_ocean_depths',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				finn_friendship: 55,
				finn_romance: 50,
				finn_craft_preserved: true,
				selfless_choice: true
			}
		},
		{
			id: 'find-alternative',
			text: 'Research alternative enchantment together - use combined knowledge to find method that doesn\'t require sacrificing their mastery. Perhaps ancient texts hold forgotten techniques, or other magical traditions offer different approaches. Work as partners to solve the problem creatively rather than accepting false dichotomy.',
			next: 'marina_ocean_depths',
			effects: { wisdom: 5 },
			hiddenEffects: {
				finn_friendship: 48,
				finn_romance: 48,
				alternative_enchantment: true,
				collaborative_crafting: true
			}
		},
		{
			id: 'share-burden',
			text: 'Offer to share the sacrifice - bind part of yourself into the blade alongside their skill. If the weapon requires sacrifice of something precious, let it take from both of you. Create true partnership weapon, forged not just by them for you, but by both of you together. Share cost and meaning equally.',
			next: 'marina_ocean_depths',
			effects: { courage: 6, charisma: 4 },
			hiddenEffects: {
				finn_friendship: 60,
				finn_romance: 60,
				legendary_blade_obtained: true,
				shared_sacrifice: true,
				profound_partnership: true,
				player_bound_to_blade: true
			}
		}
	]
};

const marinaJourney = `Marina takes you to a part of the ocean most surface-dwellers never see - the deep trenches where light doesn't reach, where pressure would crush unprotected human instantly into paste, where the laws of surface world feel distant and theoretical. She's cast powerful protective magic around you, bubble of enchantment that regulates pressure and provides breathable water-air mixture, but even through magical protection you can feel the hostile immensity of the deep pressing against fragile boundaries keeping you alive. Here, in the crushing darkness far below where sunlight can penetrate, bioluminescent life creates an alien beauty: creatures that glow with their own cold light, trailing luminescence through black water like living constellations, entire ecosystems existing in perpetual midnight adapted to conditions that would kill surface life in moments.`;

const deepHome = `"This is where I grew up," Marina says, her voice carrying strangely underwater - the magic translating her speech into vibrations you can somehow understand despite the impossible physics involved. "My pod lived here, in the deep cold, before..." She trails off, unable or unwilling to complete the sentence. The way she moves through this space - navigating by instinct through complete darkness, recognizing landmarks invisible to your surface-adapted eyes - speaks of profound intimacy with environment that was once home and is now graveyard.`;

const ruins = `You see the ruins of a merfolk settlement, structures revealed by Marina's conjured light like archaeological discovery unveiling lost civilization. Structures of coral and shell, grown and shaped rather than built through conventional construction - organic architecture that speaks of fundamentally different relationship with environment than surface species maintain. Now abandoned and overgrown with deep-sea vegetation, colonized by scavenger creatures that have made homes in spaces once occupied by thriving community. Marina swims through them like a ghost visiting a graveyard, touching walls that once echoed with voices she knew, passing through chambers where she learned to swim, to hunt, to be merfolk. Every movement carries weight of memory and loss.`;

const shadowDestruction = `"Shadow Beasts came from a deep-sea rift," she explains, voice flat with trauma too great for adequate emotional expression. "Eruption of corrupted magic from somewhere even deeper than we lived. They destroyed my entire pod before anyone understood what was happening - not raiders we could fight, not natural predators we could evade, but nightmare creatures that shouldn't exist in any natural ecosystem." Her hands clench into fists, water swirling around them in response to unconscious magical expression. "I survived because I was out hunting in different territory. Solo practice run to prove I was ready for adult hunting parties. By the time I returned, everyone was gone. My parents, my siblings, my friends, my teachers, everyone I'd ever known - all dead or scattered to currents, settlement destroyed, home transformed into monument to catastrophic loss I couldn't prevent because I wasn't there."`;

const marinaPain = `She turns to you, and even underwater you can see the pain in her eyes - grief that's had years to mature but hasn't diminished, only transformed into different kind of ache. "I've spent years hunting Shadow Beasts with single-minded obsession, trying to protect others from what I couldn't protect my family from. Every beast I kill is one that won't destroy another pod, won't turn another child into orphaned survivor haunted by guilt and grief. But it's never enough." Her voice hardens with frustration at futility of endless task. "The rift is still open, deeper than even we merfolk dare to go - maybe a mile down from here, in pressures and darkness that challenge even our adaptations. Something down there keeps spawning them, keeps sending corruption up into inhabited waters. As long as that source exists, the killing never stops. I can hunt for decades and accomplish nothing except temporary reduction in symptoms."`;

const dangerousProposal = `Marina's voice hardens with determination that carries undertones of desperation and perhaps death wish disguised as heroism. "I want to close that rift permanently. End the source rather than endlessly fighting the consequences. But it would mean diving to depths that might kill me even with all my magic and natural adaptations. Even with magical protection, pressures down there could crush me. Temperature is near freezing. The rift itself radiates corruption that could overwhelm protective spells." She looks at you searchingly, vulnerable in ways she rarely allows herself to be. "Would you come with me? Risk death in the most hostile environment imaginable to help me end this once and for all? I can't order you, can barely justify asking you. But I don't want to die alone in the dark. And if there's any chance of success, it's higher with you there."`;

const getMarinaOceanDepthsText = (): string => {
	return `${marinaJourney}

${deepHome}

${ruins}

${shadowDestruction}

${marinaPain}

${dangerousProposal}`;
};

export const MarinaOceanDepths: Scene = {
	id: 'marina_ocean_depths',
	get text() {
		return getMarinaOceanDepthsText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['compassion_for_loss:true', 'protects_innocents:true'] },
			text: `${marinaJourney}

${deepHome}

Marina watches you take in the alien beauty with something like relief. "You've protected innocents throughout your journey. Saved people no one else cared about." Her voice softens. "Maybe you can understand why this matters so much to me."

${ruins}

${shadowDestruction}

"You know what it's like to lose people," Marina says quietly. "To feel responsible for those you couldn't save." ${marinaPain.slice(62)}

${dangerousProposal}`
		},
		{
			conditions: { hasHiddenAttributes: { marina_friendship: 35 } },
			text: `${marinaJourney}

${deepHome}

Marina's hand finds yours underwater. "I've never brought anyone here. This place is too personal, too painful." She looks at you. "But you've become family to me. The first family I've had since..."

${ruins}

${shadowDestruction}

Marina's grip tightens. "I trust you with this. With my history, my pain, my mission." ${marinaPain.slice(62)}

"I don't want to do this alone," Marina admits. "I've been alone too long. Will you face this with me?"`
		}
	],
	choices: [
		{
			id: 'dive-together',
			text: 'Dive to the rift together - face the danger as partners who share risks equally. Whatever waits in the crushing darkness, whatever threats the rift presents, you\'ll confront them together. She shouldn\'t have to face this alone, shouldn\'t have to choose between completing her mission and surviving. Partnership means sharing the dangerous moments.',
			next: 'shadow_reckoning',
			effects: { courage: 6 },
			hiddenEffects: {
				marina_friendship: 55,
				marina_romance: 55,
				rift_sealed: true,
				ocean_hero: true,
				marina_avenged_family: true
			}
		},
		{
			id: 'find-safe-way',
			text: 'Find safer way - research magic to seal rift from distance without suicidal dive. Consult scholars, examine ancient texts, collaborate with magical experts to develop method that accomplishes goal without requiring you both to risk death. Sometimes wisdom means finding third option between inaction and martyrdom.',
			next: 'shadow_reckoning',
			effects: { wisdom: 6 },
			hiddenEffects: {
				marina_friendship: 45,
				marina_romance: 40,
				rift_sealed: true,
				careful_approach: true
			}
		},
		{
			id: 'protective',
			text: 'Refuse to let her risk death - insist you\'ll go alone if the mission must happen. You can\'t lose her to quest for closure that might be driven more by survivor\'s guilt than strategic necessity. This might be controlling rather than protective, might deny her agency, but the thought of her dying in the darkness is unbearable.',
			next: 'shadow_reckoning',
			effects: { courage: 5, charisma: 3 },
			hiddenEffects: {
				marina_friendship: 50,
				marina_romance: 50,
				marina_conflicted: true,
				protective_but_controlling: true
			}
		},
		{
			id: 'honor-family',
			text: 'Help create memorial for her pod first before attempting the rift mission. Honor the dead with ritual and remembrance, give her chance to process grief in healthy way rather than channeling it into potentially suicidal heroics. Sometimes healing needs to come before action, closure before vengeance.',
			next: 'shadow_reckoning',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				marina_friendship: 52,
				marina_romance: 52,
				pod_memorial_created: true,
				healing_before_action: true,
				marina_finding_peace: true
			}
		}
	]
};

const shadowNight = `Shadow finds you on a moonless night when darkness is most complete, their form barely distinguishable from the darkness itself - almost as if they're part of the shadows rather than merely hidden by them. Even knowing they're there, your eyes struggle to focus on them, their presence more felt than seen. Their expression is harder to read than usual, which given their typical inscrutability suggests emotional turmoil so profound they can't maintain even their practiced mask of controlled detachment.`;

const needToConfess = `"I need to tell you something," they say quietly, voice carrying weight that suggests confession rather than conversation. "About who I really am. What I've done. The truth I've been hiding since the moment we met." There's finality in their tone, as if this revelation will either destroy everything between you or transform it into something more authentic but possibly more painful.`;

const rooftopReveal = `They lead you to a rooftop overlooking the city, choosing location with symbolic significance: high enough to see everything, isolated enough for privacy, open enough that lies feel harder to sustain under vast sky. The city spreads below, thousands of lives continuing unaware of the confession about to unfold. "My real name is Cassandra Nightshade," they say, voice steady despite visible tension in their posture. "Twenty years ago, I was a royal guard - sworn to protect your parents, the king and queen. I wore the uniform, took the oaths, stood watch outside their chambers and walked beside them through the palace halls. I was their shield, their sword, their last line of defense against threats to the crown."`;

const assassinationNight = `Your breath catches as implications hit you with physical force. Shadow - Cassandra - continues, voice heavy with guilt that's had two decades to mature into self-loathing so profound it's become foundational to their identity.

"The night they were assassinated, I was their primary protector. I should have seen it coming - the pattern of threats that escalated, the intelligence suggesting coordinated plot, the small details that didn't quite align. Should have prevented it with better vigilance, better strategic thinking, better anything." Their hands shake despite efforts at control. "I failed them. Let them die while I was distracted by decoy threat, fooled by misdirection that more experienced guard might have recognized. I was in the wrong corridor, responding to false alarm, when the real assassins struck. By the time I realized the mistake and ran back, it was too late. They were already dead, and I was standing there with blood on my hands from trying futilely to stop bleeding that had already stolen their lives."`;

const becameShadow = `They turn to face you fully, and in the darkness you can see moisture gathering in eyes that usually remain dry no matter what horrors they witness. "After their deaths, I couldn't face what I'd failed to protect. Couldn't look at myself in mirror, couldn't wear the uniform, couldn't exist as Cassandra Nightshade who had broken most sacred oath and let her sovereign die. So I became Shadow - discarded my name, my identity, my entire sense of self, and rebuilt from ruins into something new and terrible." Their voice drops to whisper. "An assassin, a killer who moved through darkness taking lives. I told myself I was eliminating threats to the kingdom, protecting from shadows what I'd failed to protect in light. But really I was just drowning in guilt and self-hatred, punishing myself by becoming monster, seeking death through increasingly dangerous contracts while being too cowardly to actually end my own life directly."`;

const redemptionQuestion = `Shadow's voice breaks, careful control finally shattering completely. "When you spared me after my assassination attempt, when you offered redemption instead of execution I absolutely deserved... I didn't think I deserved it. I still don't deserve it. No amount of service can balance scales weighted with royal blood." They meet your eyes, and you see in their expression naked hope warring with conviction that hope itself is betrayal. "But I want to try. For you. Because you're what I failed to save twenty years ago - the child who lost parents because I wasn't good enough, strong enough, vigilant enough to keep them alive. And somehow, impossibly, you're giving me second chance. Chance to protect what I should have protected then. Chance to be guard I should have been."`;

const finalQuestion = `Tears stream down their face, grief and guilt no longer containable behind assassin's mask of cold control. "Can someone like me really be redeemed? Can twenty years of killing erase the one death that mattered most? Or am I too broken, too stained with blood, too fundamentally corrupted by guilt and self-hatred to ever become anything except monster wearing human face? Tell me honestly - is redemption real, or is it just comforting lie we tell ourselves to avoid facing that some sins are unforgivable?"`;

const getShadowReckoningText = (): string => {
	return `${shadowNight}

${needToConfess}

${rooftopReveal}

${assassinationNight}

${becameShadow}

${redemptionQuestion}

${finalQuestion}`;
};

export const ShadowReckoning: Scene = {
	id: 'shadow_reckoning',
	get text() {
		return getShadowReckoningText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['mercy_to_enemies:true', 'believes_in_redemption:true'] },
			text: `${shadowNight}

${needToConfess}

${rooftopReveal}

Shadow's voice shakes. "You showed mercy when you could have killed. You believed people could change, could be redeemed." They look at you desperately. "I watched you spare others. Offer second chances. And I thought... maybe..."

${assassinationNight}

${becameShadow}

"You practice what you preach," Shadow whispers. "You didn't just talk about mercy - you showed it to me. An assassin who tried to kill you." ${redemptionQuestion.slice(16)}

${finalQuestion}`
		},
		{
			conditions: { hasHiddenAttributes: { shadow_redeemed: 15 } },
			text: `Shadow's confession hits you like a physical blow. This person - this assassin who tried to kill you, who you've come to trust - was supposed to protect your parents.

"I loved them," Shadow admits, voice raw with pain. "Your mother was kind to me. Your father taught me to use a sword properly. They were good people, and I failed them."

They look at you with desperate hope and terrible fear. "I know I don't deserve your forgiveness. But I've fallen in love with you. Not because you're their child - because of who you are. Your mercy, your strength, your willingness to see good in someone like me."

Shadow's voice shakes. "Tell me I'm not beyond saving. Tell me there's a path forward that doesn't end with me hating myself until I die."`
		}
	],
	choices: [
		{
			id: 'forgive-completely',
			text: 'Forgive them completely - redemption is real and they\'ve already proven they\'ve changed. The person who failed your parents is not the same person standing before you now. Twenty years of service, of protecting others, of choosing differently - that matters. That proves transformation is possible. They deserve to be free from guilt that serves no purpose except ongoing punishment.',
			next: 'climax_preparation',
			effects: { wisdom: 6, charisma: 5 },
			hiddenEffects: {
				shadow_redeemed: 100,
				shadow_romance: 60,
				shadow_healing_complete: true,
				profound_forgiveness: true,
				shadow_loyalty_absolute: true
			}
		},
		{
			id: 'working-toward',
			text: 'Acknowledge pain but affirm they\'re working toward redemption - it\'s a journey, not a destination. They haven\'t "earned" forgiveness yet because that\'s not how it works, but they\'re becoming person worthy of it. The effort matters. The daily choice to be better, to protect instead of destroy, to serve instead of punish themselves - that\'s redemption in progress.',
			next: 'climax_preparation',
			effects: { wisdom: 5, charisma: 4 },
			hiddenEffects: {
				shadow_redeemed: 80,
				shadow_romance: 50,
				shadow_healing_progress: true,
				realistic_hope: true
			}
		},
		{
			id: 'honor-parents',
			text: 'Honor parents\' memory by helping Shadow become who they should have been - the loyal guard, the protector, the person who stands watch and never fails. Your parents would want their guard to heal, to find purpose, to transform guilt into strength. Best way to honor what was lost is to ensure the sacrifice leads to something meaningful rather than perpetual suffering.',
			next: 'climax_preparation',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				shadow_redeemed: 90,
				shadow_romance: 55,
				parents_honored: true,
				shadow_purpose_renewed: true
			}
		},
		{
			id: 'love-confession',
			text: 'Confess you love who they\'ve become, not who they were - the transformation from broken guard into dedicated protector is exactly what redemption looks like. You love their courage in facing guilt instead of running from it, their dedication to being better, their vulnerability in seeking forgiveness. Love them not despite their past but including it, as foundation that shaped person worthy of loving.',
			next: 'climax_preparation',
			effects: { charisma: 7 },
			hiddenEffects: {
				shadow_redeemed: 100,
				shadow_romance: 70,
				shadow_love_mutual: true,
				redemption_through_love: true,
				shadow_transformed: true
			}
		}
	]
};

const betweenWorlds = `Zephyr asks to meet you in a place between worlds - a shimmer in reality where the mortal realm touches the Fae realm, occupying space that is simultaneously both locations and neither, existing in quantum superposition that mortal physics can't adequately explain. The journey there itself is disorienting: reality becomes malleable, solid ground feeling sometimes firm and sometimes like walking on mist, colors bleeding between wavelengths that human eyes shouldn't be able to perceive. Here, they can be fully themselves without maintaining either human or Fae glamour, without the constant exhausting effort of choosing which aspects of their nature to suppress or emphasize for audience that can't handle full truth of their existence.`;

const trueForm = `What you see takes your breath away in ways that transcend simple physical beauty and enter realm of existential wonder. Zephyr's form shifts constantly - sometimes appearing male with angular features and strong jaw, sometimes female with delicate bone structure and curved lines, sometimes neither or both simultaneously in ways that defy binary categorization. Their features flow like water or mercury, beautiful and alien and utterly unique, never settling into single configuration because that's not what they are. Wings of crystallized starlight flicker in and out of existence as if they exist in multiple dimensions simultaneously and you're only seeing the aspects that intersect with your perceptual reality. Eyes that are sometimes green, sometimes gold, sometimes colors you don't have names for. Skin that shifts between warm human tones and something more ethereal, as if they're partially made of moonlight and dreams given physical form.`;

const whatIAm = `"This is what I really am," Zephyr says, their voice echoing with harmonics - multiple tones layered together creating sound that is simultaneously soprano and baritone, human and not, singular and chorus. "Neither human enough for your world where categories and boundaries matter, nor Fae enough for theirs where I'm considered diluted and impure. A creature of boundaries and transitions, existing in spaces between definitions, comfortable only where normal rules don't apply." There's pain in the admission, centuries of not-quite-belonging crystallized into self-description.`;

const fearOfOther = `They look at you with vulnerable hope warring against expectation of disappointment. "Most people can't handle seeing this. My true nature frightens them - too changeable, too other, too impossible to categorize in ways that make them comfortable. They want me to pick a form and stick with it, be one thing they can understand and define and box into categories that make sense. 'Choose to be man or woman, human or Fae, mortal or magical.' But I can't choose what I'm not. This fluidity, this constant transition, this refusal to be pinned down - it's not affectation or indecision. It's the truth of my existence."`;

const youAccepted = `Zephyr's form stabilizes slightly as they step closer, becoming briefly more solid and defined as if your presence provides anchor point in their constant flux. "But you've never asked me to be less than I am. You've accepted all my contradictions - my shifting pronouns, my fluid presentations, my refusal to commit to single identity or allegiance or even physical form. Never demanded I make myself simpler for your convenience." Their voice softens, layers of harmonics resolving briefly into single pure tone. "I think I love you for that. For seeing me - all of me, in all my impossible complicated shifting glory - and not looking away, not asking me to change, not treating my nature as problem to be solved or disorder to be cured."`;

const danceProposal = `They extend a hand that's sometimes solid and sometimes translucent, fingers that blur between definitions. "Would you dance with me? Not in your world where mortal physics apply, or the Fae realm where their rules dominate, but here, in between, in the space where I truly belong?" Their eyes search yours with intensity that transcends their shifting appearance. "It would bind us together in a way nothing else could - soul-bond that exists in liminal space, partnership that transcends categories. You'd see the world as I do - all its possibilities and impossibilities, all the spaces between things, all the potential forms reality could take. You'd understand what it means to exist outside definitions." The offer carries weight of profound intimacy and irreversible transformation. "But it means accepting that some things, some people, some loves - they can't be categorized or contained. They just are, in all their shifting complexity."`;

const getZephyrNatureText = (): string => {
	return `${betweenWorlds}

${trueForm}

${whatIAm}

${fearOfOther}

${youAccepted}

${danceProposal}`;
};

export const ZephyrNature: Scene = {
	id: 'zephyr_nature',
	get text() {
		return getZephyrNatureText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['magical_races_equal:true', 'accepts_difference:true'] },
			text: `${betweenWorlds}

${trueForm}

Zephyr watches your reaction carefully, searching for fear or disgust. When they see only wonder, their entire form brightens. "You fought for magical races to be seen as equals. You rejected prejudice and fear."

${whatIAm}

${fearOfOther}

"But you never saw difference as something to fix or fear," Zephyr says, voice thick with emotion. "You celebrated it. Made it strength." ${youAccepted.slice(63)}

${danceProposal}`
		},
		{
			conditions: { hasHiddenAttributes: { zephyr_friendship: 35 } },
			text: `${betweenWorlds}

${trueForm}

"I've hidden this from you until now," Zephyr admits. "Because I was terrified. Every other person I've shown this to has recoiled, rejected me, or tried to make me 'normal'." Their form shimmers with anxiety. "But you've earned my trust. Completely."

${whatIAm}

"You're the first person I've wanted to share this with," Zephyr says. "The first person who might truly see me and not run." ${youAccepted.slice(63)}

${danceProposal}`
		}
	],
	choices: [
		{
			id: 'dance-between',
			text: 'Dance in the space between - embrace their true nature completely by joining them in liminal realm where they exist most authentically. Accept the transformation this will bring, the permanent shift in how you perceive reality, the soul-bond that transcends categories. Show through action, not just words, that you truly accept all of who they are.',
			next: 'thorne_memories',
			effects: { courage: 6, charisma: 5 },
			hiddenEffects: {
				zephyr_friendship: 60,
				zephyr_romance: 65,
				fae_touched: true,
				sees_between_worlds: true,
				zephyr_bond_complete: true
			}
		},
		{
			id: 'celebrate-unique',
			text: 'Celebrate their uniqueness as perfection - tell them their fluidity isn\'t flaw or confusion but extraordinary gift. They don\'t need to be "fixed" or simplified or made comprehensible to limited minds. Their constant transformation, their refusal to be contained by categories - that\'s not despite which you love them but the core of why they\'re amazing.',
			next: 'thorne_memories',
			effects: { charisma: 6 },
			hiddenEffects: {
				zephyr_friendship: 55,
				zephyr_romance: 60,
				zephyr_affirmed: true,
				acceptance_complete: true
			}
		},
		{
			id: 'stay-mortal',
			text: 'Appreciate them but stay in mortal realm - you can love and accept them without literally transforming your existence. Sometimes acceptance means respecting boundaries and differences rather than trying to merge completely. You can honor their nature while maintaining your own, loving across boundaries rather than erasing them.',
			next: 'thorne_memories',
			effects: { wisdom: 4 },
			hiddenEffects: {
				zephyr_friendship: 45,
				zephyr_romance: 40,
				boundary_maintained: true,
				zephyr_disappointed: true
			}
		},
		{
			id: 'love-all-forms',
			text: 'Confess you love all their forms - the masculine and feminine and neither and both, the solid and translucent, the human and Fae and everything between. Their changeability isn\'t obstacle to love but essential part of what makes them who they are. You don\'t love them despite the shifting - you love them including and because of it. Every form is them, and you love them all.',
			next: 'thorne_memories',
			effects: { charisma: 7 },
			hiddenEffects: {
				zephyr_friendship: 62,
				zephyr_romance: 70,
				zephyr_love_mutual: true,
				impossible_love_realized: true,
				zephyr_fully_seen: true
			}
		}
	]
};

const hiddenCavern = `Thorne takes you to a hidden cavern deep in Dragon's Spine, accessible only through passages so narrow and treacherous that most would consider them impassable. The journey itself feels like pilgrimage - long, difficult, requiring trust that he knows where he's leading you. The walls are covered with carved names and dates - hundreds of them, thousands stretching back millennia, each one carefully etched with draconic precision. The accumulated weight of them is overwhelming: centuries upon centuries of relationships documented in stone, memorial to connections made and lost across span of time that human mind struggles to comprehend. This is shrine to impermanence, testament to love's persistence in face of mortality's inevitability.`;

const lovedOnes = `"These are the mortals I've loved," Thorne says quietly, voice carrying weight of accumulated grief that would crush most beings. "Friends, companions, and sometimes... more." His hand traces names with gentleness that contradicts his draconic strength, touching each carved letter as if reconnecting with memory preserved in stone. "Every name here represents someone who mattered to me. Someone who changed me, taught me, made centuries of existence feel less lonely for brief time we had together."`;

const ancientWeight = `His voice carries the weight of ages, each word heavy with specific losses he's naming and thereby honoring. "Here - Elaria the Bold. We fought Shadow Beasts together for fifty years before age took her. I watched her go from fierce young warrior to wise elder, watched her train the next generation, watched her die surrounded by grandchildren who never knew she'd once saved kingdoms. Here - Marcus the Wise, philosopher who taught me that compassion isn't weakness but strength I'd overlooked in centuries of prioritizing power. We debated ethics and purpose for thirty years before illness claimed him. Here - Seraphina Moonwhisper, an elf who made me laugh even after eight centuries of life had made me think nothing could surprise or delight me anymore. Three hundred years together before she chose to fade, deciding even elven immortality had run its meaningful course." Each name conjures full life, complete relationship, particular grief.`;

const eachName = `He touches each name with reverent care that speaks of ritual performed countless times, fingers knowing paths worn into stone by centuries of remembrance. "I've loved and lost more times than you can imagine. Each time, I swore it would be the last. That I couldn't endure that pain again, couldn't survive another goodbye, couldn't keep carving names into walls that grow heavier with each addition." He turns to you, and his ancient eyes are bright with unshed tears - moisture gathering in eyes that have witnessed empires rise and fall, that have seen countless mortal lifetimes flicker past like mayflies. "And yet here I am, falling for you despite every lesson grief has taught me. Despite knowing exactly how this ends, knowing I'll be carving your name here too someday, knowing that each moment of joy now is down payment on centuries of loneliness afterwards."`;

const fallingAgain = `"A mortal who will be gone in a heartbeat of dragon-time," he continues, voice breaking around words that acknowledge terrible arithmetic of mismatched lifespans. "You'll live maybe eighty years if you're fortunate. For me, that's barely longer than season. I'll spend more time remembering you than I'll spend knowing you. The grief will outlast the joy by factor of hundreds." His form flickers, human facade weakening to show draconic truth beneath. "Part of me wants to run. To protect myself from the inevitable grief by refusing to love, by maintaining distance, by treating you as temporary companion rather than someone who matters. By not adding another name to these walls."`;

const worthIt = `Thorne steps closer, his human form flickering more dramatically to show glimpses of scales and power beneath mortal disguise - as if his emotions are too strong to contain within limited human expression. "But another part - the part I'm trying to listen to - thinks that even one lifetime with you would be worth centuries of grief afterwards. That love doesn't become less valuable because it ends. That fifty years of knowing you, watching you grow and change and face challenges, sharing your journey - that matters more than five centuries of safe loneliness." His voice strengthens with conviction fighting against fear. "That meaning isn't measured in duration but in depth. That maybe the point isn't to avoid pain but to embrace joy while it exists, to love completely while love is possible, to accept that beautiful things are often temporary and temporary things can still be beautiful."`;

const pleaForHope = `He takes your hand carefully, as if you might shatter under draconic strength misapplied - treating you like precious fragile thing worth protecting even from himself. "Tell me I'm not a fool for hoping. Tell me there's meaning in loving something mortal and beautiful and temporary. Tell me that centuries of grief afterwards won't retroactively poison decades of joy now." His voice drops to desperate whisper. "Tell me I should carve your name on these walls someday not as tragedy but as celebration - evidence that I loved well, that you mattered, that our time together had meaning even though it ended. Tell me that choosing love despite knowing the cost is wisdom rather than weakness, courage rather than foolishness."`;

const getThorneMemoriesText = (): string => {
	return `${hiddenCavern}

${lovedOnes}

${ancientWeight}

${eachName}

${fallingAgain}

${worthIt}

${pleaForHope}`;
};

export const ThorneMemories: Scene = {
	id: 'thorne_memories',
	get text() {
		return getThorneMemoriesText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['wisdom-trial:true', 'philosophical_thinking:true'] },
			text: `${hiddenCavern}

${lovedOnes}

Thorne looks at you with something like desperate hope. "You chose the path of wisdom in the dragon trial. You understand that some questions don't have easy answers."

${ancientWeight}

${eachName}

"You think deeply," Thorne continues. "You question. So tell me - philosophically, objectively - is it wisdom to love what cannot last? Or is it folly dressed up as bravery?"

${fallingAgain}

${worthIt}

"Use that philosophical mind of yours," he pleads. ${pleaForHope.slice(33)}`
		},
		{
			conditions: { hasHiddenAttributes: { thorne_respect: 40 } },
			text: `${hiddenCavern}

${lovedOnes}

Thorne's hand trembles as he traces the names. "I've never brought anyone here. Never let anyone see the full weight of my grief, my history." He looks at you. "But you've earned my trust. My respect. My..."

${ancientWeight}

${eachName}

He steps closer, vulnerable in a way you've never seen. "I respect you more than I've respected any mortal in centuries. You challenge me, match me, see through my facades." ${fallingAgain.slice(35)}

${worthIt}

${pleaForHope}`
		}
	],
	choices: [
		{
			id: 'mortal-beauty',
			text: 'Beauty is more precious because it\'s fleeting - the temporary nature of mortal life isn\'t flaw but essential part of what makes it meaningful. Flowers matter because they bloom for season, not forever. Love gains intensity from its impermanence. Your mortal lifespan isn\'t something to overcome but quality that makes relationship valuable precisely because it can\'t last forever.',
			next: 'climax_preparation',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				thorne_respect: 55,
				thorne_romance: 60,
				thorne_accepts_mortality: true,
				philosophical_alignment: true
			}
		},
		{
			id: 'worth-pain',
			text: 'Love is worth the pain of eventual loss - choosing to love despite knowing the grief that follows is courage, not foolishness. The centuries of pain afterwards won\'t erase the decades of joy now. Grief is price we pay for love, and it\'s worth paying. You\'d rather have fifty years together and five centuries grieving than eternal safety through emotional distance.',
			next: 'climax_preparation',
			effects: { courage: 6, charisma: 4 },
			hiddenEffects: {
				thorne_respect: 52,
				thorne_romance: 58,
				thorne_chooses_love: true,
				brave_hearts: true
			}
		},
		{
			id: 'find-way',
			text: 'Promise to find a way to extend your lifespan - refuse to accept mismatched mortality as inevitable. Research ancient magic, bargain with Fae, seek elven life-extension rituals, pursue any possibility of sharing centuries together rather than mere decades. Fight fate instead of accepting it. Maybe love is worth not just enduring the pain but refusing to surrender to it.',
			next: 'climax_preparation',
			effects: { wisdom: 5, courage: 4 },
			hiddenEffects: {
				thorne_respect: 48,
				thorne_romance: 55,
				life_extension_quest: true,
				fighting_fate: true
			}
		},
		{
			id: 'love-confession',
			text: 'Love him too much to let fear win - tell him you\'re falling for him too, that your mortal heart can love just as deeply as his ancient draconic one, that the time you have together matters more than the time afterwards. Fifty years of joy and five centuries of grief is better than never loving at all. Carve your name proudly when the time comes, as celebration not tragedy.',
			next: 'climax_preparation',
			effects: { charisma: 7, courage: 5 },
			hiddenEffects: {
				thorne_respect: 60,
				thorne_romance: 70,
				thorne_love_mutual: true,
				defying_time: true,
				thorne_bond_eternal: true
			}
		}
	]
};

import { Scene } from '../../story-manager';

// Companion Personal Quests - Finn, Zephyr, Thorne, Marina, Shadow

const finnWorkshop = `Finn's workshop glows with forge-light as they work on something magnificent. Sweat beads on their brow, and their hands move with practiced precision. When they see you, their usual cheer is replaced by intense focus.`;

const masterpiece = `"This is it," Finn says, gesturing to the workbench. "My masterpiece. The piece that will define my legacy as a craftsman."`;

const shimmeringSword = `On the bench lies an unfinished weapon - a sword that seems to shimmer with inner light, runes already etched along the blade.`;

const forgedForYou = `"I'm forging this for you," Finn continues. "A blade that can cut Shadow Beasts, channel magic, never break. Something worthy of the heir who will save the realm." They hesitate. "But I've hit a problem. The final enchantment requires... a sacrifice."`;

const sacrificeExplained = `Finn looks uncomfortable. "Traditional dwarven craft demands the smith give something precious to the work. Usually it's just time, or blood mixed in the metal. But for something this powerful?" They meet your eyes. "I'd need to give up my master craftsman title. Bind all my skill into this one creation. I'd never craft anything of note again."`;

export const FinnMasterpiece: Scene = {
	id: 'finn_masterpiece',
	text: `${finnWorkshop}

${masterpiece}

${shimmeringSword}

${forgedForYou}

${sacrificeExplained}`,
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
			text: 'Accept the blade - honor their incredible sacrifice',
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
			text: 'Refuse - their future matters more than a weapon',
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
			text: 'Research alternative enchantment together',
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
			text: 'Offer to share the sacrifice - bind part of yourself too',
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

const marinaJourney = `Marina takes you to a part of the ocean most surface-dwellers never see - the deep trenches where light doesn't reach. Here, in the crushing darkness, bioluminescent life creates an alien beauty.`;

const deepHome = `"This is where I grew up," Marina says, her voice carrying strangely underwater. "My pod lived here, in the deep cold, before..." She trails off.`;

const ruins = `You see the ruins of a merfolk settlement. Structures of coral and shell, now abandoned and overgrown. Marina swims through them like a ghost visiting a graveyard.`;

const shadowDestruction = `"Shadow Beasts came from a deep-sea rift," she explains. "They destroyed my entire pod. I survived because I was out hunting." Her hands clench. "By the time I returned, everyone was gone. My parents, my siblings, my friends. All dead or scattered."`;

const marinaPain = `She turns to you, and even underwater you can see the pain in her eyes. "I've spent years hunting Shadow Beasts, trying to protect others from what I couldn't protect my family from. But it's never enough. The rift is still open, deeper than even we merfolk dare go. Something down there keeps spawning them."`;

const dangerousProposal = `Marina's voice hardens with determination. "I want to close that rift permanently. But it would mean diving to depths that might kill me. Even with magic protection, it's incredibly dangerous." She looks at you searchingly. "Would you come with me? Help me end this once and for all?"`;

export const MarinaOceanDepths: Scene = {
	id: 'marina_ocean_depths',
	text: `${marinaJourney}

${deepHome}

${ruins}

${shadowDestruction}

${marinaPain}

${dangerousProposal}`,
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
			text: 'Dive to the rift together - face the danger as partners',
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
			text: 'Find safer way - research magic to seal rift from distance',
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
			text: 'Refuse to let her risk death - you\'ll go alone',
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
			text: 'Help create memorial for her pod first',
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

const shadowNight = `Shadow finds you on a moonless night, their form barely distinguishable from the darkness itself. Their expression is harder to read than usual.`;

const needToConfess = `"I need to tell you something," they say quietly. "About who I really am. What I've done."`;

const rooftopReveal = `They lead you to a rooftop overlooking the city. "My real name is Cassandra Nightshade. Twenty years ago, I was a royal guard - sworn to protect your parents, the king and queen."`;

const assassinationNight = `Your breath catches. Shadow - Cassandra - continues, voice heavy with guilt.

"The night they were assassinated, I was their primary protector. I should have seen it coming. Should have prevented it." Their hands shake. "I failed them. Let them die while I was distracted, fooled by a decoy threat."`;

const becameShadow = `They turn to face you fully. "After their deaths, I couldn't face what I'd failed to protect. So I became Shadow - an assassin, a killer. I told myself I was eliminating threats to the kingdom, but really I was just drowning in guilt and self-hatred."`;

const redemptionQuestion = `Shadow's voice breaks. "When you spared me after my assassination attempt, when you offered redemption... I didn't think I deserved it. I still don't." They meet your eyes. "But I want to try. For you. Because you're what I failed to save twenty years ago, and somehow you're giving me a second chance."`;

const finalQuestion = `Tears stream down their face. "Can someone like me really be redeemed? Or am I too broken, too stained with blood?"`;

export const ShadowReckoning: Scene = {
	id: 'shadow_reckoning',
	text: `${shadowNight}

${needToConfess}

${rooftopReveal}

${assassinationNight}

${becameShadow}

${redemptionQuestion}

${finalQuestion}`,
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
			text: 'Forgive them completely - redemption is real',
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
			text: 'Acknowledge pain but affirm they\'re working toward redemption',
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
			text: 'Honor parents by helping Shadow become who they should have been',
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
			text: 'Confess you love who they\'ve become, not who they were',
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

const betweenWorlds = `Zephyr asks to meet you in a place between worlds - a shimmer in reality where the mortal realm touches the Fae realm. Here, they can be fully themselves without maintaining either human or Fae glamour.`;

const trueForm = `What you see takes your breath away. Zephyr's form shifts constantly - sometimes appearing male, sometimes female, sometimes neither or both. Their features flow like water, beautiful and alien and utterly unique. Wings of crystallized starlight flicker in and out of existence.`;

const whatIAm = `"This is what I really am," Zephyr says, their voice echoing with harmonics. "Neither human enough for your world, nor Fae enough for theirs. A creature of boundaries and transitions."`;

const fearOfOther = `They look at you with vulnerable hope. "Most people can't handle seeing this. My true nature frightens them - too changeable, too other. They want me to pick a form and stick with it. Be one thing."`;

const youAccepted = `Zephyr's form stabilizes slightly as they step closer. "But you've never asked me to be less than I am. You've accepted all my contradictions." Their voice softens. "I think I love you for that. For seeing me - all of me - and not looking away."`;

const danceProposal = `They extend a hand that's sometimes solid, sometimes translucent. "Would you dance with me? Not in your world or the Fae realm, but here, in between? It would bind us together in a way nothing else could. You'd see the world as I do - all its possibilities and impossibilities."`;

export const ZephyrNature: Scene = {
	id: 'zephyr_nature',
	text: `${betweenWorlds}

${trueForm}

${whatIAm}

${fearOfOther}

${youAccepted}

${danceProposal}`,
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
			text: 'Dance in the space between - embrace their true nature',
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
			text: 'Celebrate their uniqueness as perfection',
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
			text: 'Appreciate them but stay in mortal realm',
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
			text: 'Confess you love all their forms - changeability and all',
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

const hiddenCavern = `Thorne takes you to a hidden cavern deep in Dragon's Spine. The walls are covered with carved names and dates - hundreds of them, thousands, stretching back millennia.`;

const lovedOnes = `"These are the mortals I've loved," Thorne says quietly. "Friends, companions, and sometimes... more."`;

const ancientWeight = `His voice carries the weight of ages. "Here - Elaria the Bold. We fought Shadow Beasts together for fifty years before age took her. Here - Marcus the Wise, who taught me that compassion isn't weakness. Here - Seraphina Moonwhisper, an elf who made me laugh even after eight centuries of life."`;

const eachName = `He touches each name with reverent care. "I've loved and lost more times than you can imagine. Each time, I swore it would be the last. That I couldn't endure that pain again." He turns to you, and his ancient eyes are bright with unshed tears.`;

const fallingAgain = `"And yet here I am, falling for you. A mortal who will be gone in a heartbeat of dragon-time." His voice breaks. "Part of me wants to run. To protect myself from the inevitable grief. But another part..."`;

const worthIt = `Thorne steps closer, his human form flickering to show glimpses of scales and power beneath. "Another part thinks that even one lifetime with you would be worth centuries of grief afterwards. That love doesn't become less valuable because it ends."`;

const pleaForHope = `He takes your hand carefully, as if you might shatter. "Tell me I'm not a fool for hoping. Tell me there's meaning in loving something mortal and beautiful and temporary."`;

export const ThorneMemories: Scene = {
	id: 'thorne_memories',
	text: `${hiddenCavern}

${lovedOnes}

${ancientWeight}

${eachName}

${fallingAgain}

${worthIt}

${pleaForHope}`,
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
			text: 'Beauty is more precious because it\'s fleeting',
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
			text: 'Love is worth the pain of eventual loss',
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
			text: 'Promise to find a way to extend your lifespan',
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
			text: 'Love him too much to let fear win',
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

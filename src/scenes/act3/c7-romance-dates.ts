import { Scene } from '../../story-manager';

// Romance Date Scenes - Intimate bonding moments

const hilltopStars = `Lyra takes you to a hilltop far from the palace, away from city lights. The stars are breathtaking, stretching across the sky in brilliant swaths.`;

const elfNavigation = `"Elves navigate by stars," Lyra explains softly. "Every constellation tells a story spanning millennia. See there?" She points. "The Wanderer's Path. It's been guiding lost travelers for five thousand years."`;

const closeProximity = `She's closer to you than usual, her shoulder touching yours as you both lie on the grass looking up. "There's a constellation my people call the Eternal Dance," she continues. "Two stars orbiting each other, bound by gravity across the void."`;

const soulStars = `Lyra turns to look at you, starlight reflecting in her eyes. "Ancient elves believed that some souls are like those stars. Destined to orbit each other, drawn together by forces greater than themselves." Her voice drops to a whisper. "I used to think that was romantic nonsense. But then I met you."`;

const momentStretches = `The moment stretches between you, filled with possibility and the sound of night wind through grass.`;

export const LyraStargazing: Scene = {
	id: 'lyra_stargazing',
	text: `${hilltopStars}

${elfNavigation}

${closeProximity}

${soulStars}

${momentStretches}`,
	textVariants: [
		{
			conditions: { hasFlags: ['blood_magic_training:true', 'lyra_teaches_magic:true'], hasHiddenAttributes: { lyra_respect: 40 } },
			text: `${hilltopStars}

Lyra's hand finds yours as you lie in the grass together. "We've shared so much. I taught you blood magic - the deepest secrets of my people. You trusted me with your very essence."

${elfNavigation}

"Teaching you magic created a bond," she says softly. "Elves don't share that knowledge lightly. It requires complete trust, complete intimacy." ${closeProximity.slice(56)}

${soulStars}

${momentStretches}`
		},
		{
			conditions: { hasHiddenAttributes: { lyra_romance: 50 } },
			text: `${hilltopStars}

${elfNavigation}

Lyra takes your hand deliberately, fingers interlacing with yours. "We've been dancing around this for so long. The tension, the almost-moments, the way we look at each other."

${closeProximity}

She shifts closer, her breath warm against your ear. "I'm an elf. I've lived two hundred years. I know what love feels like, and I know what we have is real." ${soulStars.slice(64)}

"No more hesitation," she whispers. ${momentStretches.slice(4)}`
		}
	],
	choices: [
		{
			id: 'kiss',
			text: 'Kiss her under the stars',
			next: 'rowan_wilderness',
			effects: { charisma: 5 },
			hiddenEffects: {
				lyra_romance: 70,
				first_kiss_lyra: true,
				'romantic_milestone:first_kiss': true,
				star_blessed: true
			},
			realLifeChallenge: {
				id: 'lyra_starlight_kiss',
				type: 'social',
				title: 'Starlit Affection',
				description: 'Like kissing Lyra under the eternal stars, share a romantic moment with your partner',
				instructions: 'Find a quiet moment with your partner and share a kiss. Let it be tender and meaningful, celebrating the bond you share.',
				durationMinutes: 1,
				verificationMethod: 'honor',
				rewards: {
					stats: { charisma: 3, empathy: 2 },
					message: 'Your romantic gesture mirrored the eternal dance of souls, just like Lyra described.'
				}
			}
		},
		{
			id: 'hold-hand',
			text: 'Take her hand - no need to rush',
			next: 'rowan_wilderness',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				lyra_romance: 65,
				gentle_progression: true,
				lyra_appreciated_patience: true
			}
		},
		{
			id: 'philosophy',
			text: 'Discuss the philosophy of eternal bonds',
			next: 'rowan_wilderness',
			effects: { wisdom: 5 },
			hiddenEffects: {
				lyra_romance: 68,
				intellectual_intimacy: true,
				deep_understanding: true
			}
		}
	]
};

const campingTrip = `Rowan suggests a camping trip - just the two of you, in the deep wilderness beyond civilization. No palace politics, no schemes, just survival and freedom.`;

const campfireRelaxed = `The first night, sitting by the campfire, Rowan is more relaxed than you've ever seen them. They've caught fish for dinner and are expertly preparing them over the flames.`;

const realSelf = `"This is who I really am," Rowan says, gazing into the fire. "Not the formal royal guardian. Just someone who loves the wild, loves freedom, loves the simplicity of fire and stars and honest work."`;

const seeingReal = `They look at you across the flames. "When I'm with you out here, I don't have to be anyone's protector or anyone's soldier. I can just... be." Their smile is genuine, unguarded. "You see the real me. Not many people do."`;

const sharedBlankets = `Later, under shared blankets against the cold, Rowan's hand finds yours. "I've never wanted to tie myself to anyone," they admit quietly. "Always needed to stay free. But with you... freedom feels different. Like maybe being together could be its own kind of freedom."`;

export const RowanWilderness: Scene = {
	id: 'rowan_wilderness',
	text: `${campingTrip}

${campfireRelaxed}

${realSelf}

${seeingReal}

${sharedBlankets}`,
	textVariants: [
		{
			conditions: { hasFlags: ['rowan_origins_visited:true', 'promised_change:true'], hasHiddenAttributes: { rowan_bond: 50 } },
			text: `${campingTrip}

Rowan leads you through wilderness paths with easy confidence. "You came with me to my destroyed village. Saw where I came from, what shaped me." Their voice softens. "Now I want to share what heals me. The wild places where I find peace."

${campfireRelaxed}

${realSelf}

"You promised to change the system that failed my family," Rowan says. "You saw my pain and didn't turn away." ${seeingReal.slice(36)}

${sharedBlankets}`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_romance: 55 } },
			text: `${campingTrip}

${campfireRelaxed}

Rowan looks at you with open affection. "I've been waiting for this. Time alone with you, away from duties and roles."

${realSelf}

${seeingReal}

${sharedBlankets}

Their thumb traces circles on your hand. "I love you. I've been trying not to, trying to stay professional, but I can't anymore." Their eyes search yours. "Tell me you feel it too."`
		}
	],
	choices: [
		{
			id: 'confession',
			text: 'Confess you feel the same - freedom together',
			next: 'kieran_sparring',
			effects: { charisma: 6, courage: 3 },
			hiddenEffects: {
				rowan_bond: 70,
				rowan_romance: 70,
				mutual_understanding: true,
				wilderness_bond: true,
				rowan_committed: true
			}
		},
		{
			id: 'kiss',
			text: 'Answer with a kiss',
			next: 'kieran_sparring',
			effects: { charisma: 5 },
			hiddenEffects: {
				rowan_bond: 68,
				rowan_romance: 72,
				first_kiss_rowan: true,
				passion_kindled: true
			}
		},
		{
			id: 'appreciate',
			text: 'Express gratitude for seeing their true self',
			next: 'kieran_sparring',
			effects: { charisma: 4, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 65,
				rowan_romance: 66,
				deep_appreciation: true,
				rowan_valued: true
			}
		}
	]
};

const morningSparring = `Kieran invites you to private sparring sessions in the early morning, before the rest of the palace wakes. It's become a ritual - just the two of you, trading blows in the training yard as dawn breaks.`;

const collapseGround = `Today, after a particularly intense bout, you both collapse on the ground, breathing hard and laughing. Kieran's usual stern composure is gone, replaced by genuine joy.`;

const gettingGood = `"You're getting good," Kieran admits, still catching their breath. "Really good. You almost had me there."`;

const favoriteTime = `They turn their head to look at you, both of you still lying on the ground. "These mornings... they're my favorite part of the day. No duties, no watching over my shoulder, just..." They trail off, their hand moving closer to yours on the ground.`;

const justUs = `"Just us," Kieran finishes quietly. "No captain and heir. Just two people who..." Their jaw tightens, as if they're fighting some internal battle. "I'm trying to maintain professional distance. But it's getting harder every day."`;

const vulnerability = `Their fingers brush against yours. "Tell me to stop. Tell me this is inappropriate, and I'll lock these feelings away. Or..." They meet your eyes, vulnerable and hopeful. "Or tell me you feel it too."`;

export const KieranSparring: Scene = {
	id: 'kieran_sparring',
	text: `${morningSparring}

${collapseGround}

${gettingGood}

${favoriteTime}

${justUs}

${vulnerability}`,
	textVariants: [
		{
			conditions: { hasFlags: ['kieran_dilemma_resolved:true', 'stood_with_kieran:true'], hasHiddenAttributes: { kieran_loyalty: 55 } },
			text: `${morningSparring}

${collapseGround}

Kieran's expression softens with deep emotion. "You stood with me when I faced my uncle. Helped me navigate the impossible choice between family and duty."

${gettingGood}

"You've proven I can trust you with everything," Kieran says. "My loyalty, my heart, my future." ${favoriteTime.slice(51)}

${justUs}

${vulnerability}`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_romance: 60 } },
			text: `${morningSparring}

${collapseGround}

Kieran reaches out, brushing sweat-dampened hair from your forehead with surprising tenderness. "I've been in love with you for weeks. Maybe longer."

${gettingGood}

Their hand cups your cheek. "I know all the reasons this is complicated. But I don't care anymore." ${favoriteTime.slice(51)}

"I need you to know," Kieran says urgently. "Not as captain to heir. Not as bodyguard to charge. As Kieran to you. I'm completely, hopelessly in love with you."`
		}
	],
	choices: [
		{
			id: 'kiss',
			text: 'Close the distance - kiss them',
			next: 'sage_library_date',
			effects: { charisma: 6, courage: 4 },
			hiddenEffects: {
				kieran_loyalty: 75,
				kieran_romance: 75,
				first_kiss_kieran: true,
				kieran_barrier_broken: true,
				passionate_love: true
			}
		},
		{
			id: 'confess',
			text: 'Confess you\'ve been fighting the same feelings',
			next: 'sage_library_date',
			effects: { charisma: 5 },
			hiddenEffects: {
				kieran_loyalty: 72,
				kieran_romance: 73,
				mutual_confession: true,
				kieran_relieved: true
			}
		},
		{
			id: 'professional',
			text: 'Acknowledge feelings but suggest staying professional',
			next: 'sage_library_date',
			effects: { wisdom: 5 },
			hiddenEffects: {
				kieran_loyalty: 65,
				kieran_romance: 60,
				slow_burn_continues: true,
				kieran_disappointed: true,
				professional_maintained: true
			}
		}
	]
};

const restrictedArchives = `Sage invites you to explore a restricted section of the royal archives - ancient texts most people never see. Their excitement is infectious as they shows you rare manuscripts and forgotten histories.`;

const ancientManuscript = `"Look at this!" Sage exclaims, carefully opening a leather-bound tome. "It's a first-hand account of the kingdom's founding. Written by Queen Lyanna herself!"`;

const sagePassion = `They're so animated, so genuinely passionate about knowledge, that you can't help but smile. Sage notices and blushes slightly.`;

const apology = `"Sorry, I'm probably boring you," they say, embarrassed. "I get too enthusiastic about books."`;

const reassurance = `You assure them it's not boring at all. Sage's smile brightens the dim archives.`;

const sageCloseProximity = `"You're the only person who doesn't think I'm strange for loving this stuff," Sage says softly, moving closer. "Most nobles think scholarship is boring or unimportant. But you actually listen when I talk about history and magic and..." They trail off, realizing how close you've gotten.`;

const blurtedConfession = `"I'm falling in love with you," Sage blurts out, then immediately looks mortified. "I mean - I know I'm not exciting like the other companions. I'm just a scholar who rambles about books. But I can't help how I feel."`;

export const SageLibraryDate: Scene = {
	id: 'sage_library_date',
	text: `${restrictedArchives}

${ancientManuscript}

${sagePassion}

${apology}

${reassurance}

${sageCloseProximity}

${blurtedConfession}`,
	textVariants: [
		{
			conditions: { hasFlags: ['values_knowledge:true', 'intellectual_pursuits:true'] },
			text: `${restrictedArchives}

Sage's eyes light up when they see your genuine interest. "You actually care about this! Not just tolerating it, but truly fascinated." They beam with joy.

${ancientManuscript}

"You've always valued knowledge," Sage says warmly. "Asked deep questions, pursued understanding. That's... that's incredibly attractive." They blush at their own words.

${sagePassion}

${apology}

You remind them of conversations you've had, intellectual debates you've enjoyed. ${reassurance.slice(45)}

${sageCloseProximity}

${blurtedConfession}`
		},
		{
			conditions: { hasHiddenAttributes: { sage_affection: 50 } },
			text: `${restrictedArchives}

${ancientManuscript}

${sagePassion}

Sage suddenly takes your hand, nervous but determined. "I need to tell you something before I lose my courage."

"You make me feel seen," they say earnestly. "Not as 'boring Sage' or 'the scholar.' As a person worth knowing, worth... loving." They meet your eyes. "And I do. Love you. Completely."`
		}
	],
	choices: [
		{
			id: 'love-return',
			text: 'Tell them you love them too',
			next: 'finn_forge_date',
			effects: { charisma: 6 },
			hiddenEffects: {
				sage_affection: 75,
				sage_romance: 75,
				sage_love_mutual: true,
				sage_overjoyed: true,
				intellectual_love: true
			}
		},
		{
			id: 'kiss',
			text: 'Show them with a kiss',
			next: 'finn_forge_date',
			effects: { charisma: 5 },
			hiddenEffects: {
				sage_affection: 72,
				sage_romance: 73,
				first_kiss_sage: true,
				sage_confident: true
			}
		},
		{
			id: 'appreciate',
			text: 'Tell them their passion is beautiful',
			next: 'finn_forge_date',
			effects: { charisma: 4, wisdom: 2 },
			hiddenEffects: {
				sage_affection: 70,
				sage_romance: 68,
				sage_valued: true,
				gentle_encouragement: true
			}
		}
	]
};

export const FinnForgeDate: Scene = {
	id: 'finn_forge_date',
	text: `Finn invites you to their personal forge for an evening of crafting. They've set up a special project - teaching you to make something with your own hands.

"Everyone should know how to create," Finn says cheerfully, guiding your hands on the hammer. "Not just rule or fight, but actually make something useful and beautiful."

The forge is warm, Finn's presence solid and reassuring behind you as they correct your grip. "That's it! You're a natural!"

Hours pass in companionable work. When you finally finish - a simple but well-made knife - Finn beams with pride. "Your first creation! It's tradition to mark it with the maker's sign." They show you how to etch a small symbol into the handle.

Later, sharing ale and sitting on the forge step, Finn grows more serious. "You know what I love about you?" they say, a bit tipsy and very sincere. "You never treat me like I'm simple just because I work with my hands. You see the art in craft, the skill in making."

Finn's hand finds yours, calloused and warm. "I could be happy spending my life this way. Building things, sharing ale, sitting beside someone I..." They pause, courage gathering. "Someone I love. If they'd have me."`,
	choices: [
		{
			id: 'acceptance',
			text: 'Tell them you\'d be honored to be theirs',
			next: 'zephyr_sky_dance',
			effects: { charisma: 6 },
			hiddenEffects: {
				finn_friendship: 75,
				finn_romance: 75,
				finn_love_mutual: true,
				craftsman_bond: true,
				simple_happiness: true
			}
		},
		{
			id: 'kiss',
			text: 'Kiss them with forge-fire warmth',
			next: 'zephyr_sky_dance',
			effects: { charisma: 5 },
			hiddenEffects: {
				finn_friendship: 72,
				finn_romance: 73,
				first_kiss_finn: true,
				passionate_moment: true
			}
		},
		{
			id: 'toast',
			text: 'Toast to partnership and love',
			next: 'zephyr_sky_dance',
			effects: { charisma: 4 },
			hiddenEffects: {
				finn_friendship: 70,
				finn_romance: 70,
				dwarf_traditions_honored: true,
				finn_happy: true
			}
		}
	]
};

export const ZephyrSkyDance: Scene = {
	id: 'zephyr_sky_dance',
	text: `Zephyr comes to you at midnight with mischief in their eyes and asks you to trust them. Before you can question, they've pulled you out onto a balcony and wrapped you in shimmering magic.

Suddenly, you're floating. Actually floating, lifted by Fae magic into the night sky above the palace.

"Don't be afraid!" Zephyr laughs, soaring beside you. "I won't let you fall!"

They take your hands and dance with you in the air, spinning and swooping under the moon. It's impossible, exhilarating, absolutely magical. Zephyr's joy is contagious, and soon you're both laughing breathlessly.

When you finally slow, hovering high above the sleeping city, Zephyr pulls you close. "This is how I see the world," they say softly. "Full of impossible possibilities. Full of magic and wonder."

Their form shifts slightly - neither fully one thing nor another, perfectly themselves. "You make me believe I don't have to hide. That impossible things - like a half-Fae falling for a mortal heir - can work out somehow."

The moon illuminates Zephyr's face as they lean closer. "Would you take an impossible chance on me?"`,
	choices: [
		{
			id: 'kiss-in-air',
			text: 'Kiss them while floating under the moon',
			next: 'thorne_dragon_flight',
			effects: { courage: 5, charisma: 5 },
			hiddenEffects: {
				zephyr_friendship: 75,
				zephyr_romance: 75,
				first_kiss_zephyr: true,
				magical_moment: true,
				impossible_love: true
			}
		},
		{
			id: 'embrace-impossible',
			text: 'Say you believe in impossible things because of them',
			next: 'thorne_dragon_flight',
			effects: { charisma: 6 },
			hiddenEffects: {
				zephyr_friendship: 73,
				zephyr_romance: 73,
				zephyr_love_mutual: true,
				embracing_wonder: true
			}
		},
		{
			id: 'dance-more',
			text: 'Request another dance - savor the moment',
			next: 'thorne_dragon_flight',
			effects: { charisma: 4 },
			hiddenEffects: {
				zephyr_friendship: 70,
				zephyr_romance: 70,
				extended_joy: true,
				perfect_evening: true
			}
		}
	]
};

export const ThorneDragonFlight: Scene = {
	id: 'thorne_dragon_flight',
	text: `Thorne appears at your window in full dragon form - massive, magnificent, scales shimmering in moonlight. His voice rumbles directly into your mind: "Climb on. I want to show you something."

Flying on dragonback is indescribable. The power beneath you, the wind rushing past, the world spreading out below in breathtaking perspective. Thorne's presence in your mind is warm, protective, intimate in a way you've never experienced.

He takes you higher, through clouds, until you break into clear sky above them. The stars are impossibly bright, the moon huge and perfect. Cloud-tops stretch out like a silver sea.

"This is how dragons see the world," Thorne's mental voice is soft with wonder. "From above, with perspective of both distance and time. Your problems look smaller from up here, but also more beautiful. More precious because they're brief."

He spirals gently, giving you time to absorb the view. "I've flown this path for centuries, always alone. But with you here..." His emotion floods through the mental link - hope, fear, love. "Everything is different. The old view becomes new again."

Thorne lands on a mountain peak, transforming to human form so he can stand beside you. "I'm terrified of loving you," he admits. "But I'm more terrified of not trying." His ancient eyes meet yours. "Will you take this flight with me, even knowing it must end someday?"`,
	choices: [
		{
			id: 'eternal-moment',
			text: 'One moment together is worth eternity alone',
			next: 'marina_ocean_swim',
			effects: { wisdom: 6, charisma: 5 },
			hiddenEffects: {
				thorne_respect: 75,
				thorne_romance: 75,
				thorne_love_mutual: true,
				philosophical_bond: true,
				dragon_flight_bond: true
			}
		},
		{
			id: 'kiss',
			text: 'Kiss him under the stars on the mountain peak',
			next: 'marina_ocean_swim',
			effects: { charisma: 6, courage: 4 },
			hiddenEffects: {
				thorne_respect: 73,
				thorne_romance: 77,
				first_kiss_thorne: true,
				romantic_peak: true
			}
		},
		{
			id: 'promise',
			text: 'Promise to make every moment count',
			next: 'marina_ocean_swim',
			effects: { charisma: 5, wisdom: 4 },
			hiddenEffects: {
				thorne_respect: 72,
				thorne_romance: 73,
				commitment_made: true,
				carpe_diem_bond: true
			}
		}
	]
};

export const MarinaOceanSwim: Scene = {
	id: 'marina_ocean_swim',
	text: `Marina takes you swimming at night in a hidden cove. With her magic, you can breathe underwater and see clearly in the darkness. It's like entering another world.

She guides you through underwater caves filled with glowing creatures, shows you coral formations that took centuries to grow, introduces you to curious fish and shy octopi. Her joy in sharing her world with you is evident in every gesture.

Finally, you surface in a hidden grotto - a cave with an air pocket where bioluminescent algae makes everything glow soft blue. Marina pulls herself up onto a rock, tail still in the water, and you sit beside her.

"No one from the surface world has ever... gotten my world before," Marina says quietly. "They see the ocean as resource to exploit or danger to avoid. But you see it as I do - as beautiful, precious, alive."

She takes your hand, her fingers still slightly webbed and cool from the water. "I used to think I could never love someone from land. That they'd always want me to choose - stay on land or stay in the sea." She meets your eyes. "But you make me think we could have both. That love doesn't have to mean choosing."

Marina's expression is vulnerable, hopeful. "Could you love someone who's half in two worlds? Who needs ocean as much as air?"`,
	choices: [
		{
			id: 'love-confession',
			text: 'Tell her you love all of her - sea and surface both',
			next: 'seraphine_masquerade',
			effects: { charisma: 7 },
			hiddenEffects: {
				marina_friendship: 77,
				marina_romance: 77,
				marina_love_mutual: true,
				both_worlds_accepted: true,
				ocean_bond: true
			}
		},
		{
			id: 'kiss',
			text: 'Kiss her in the glowing grotto',
			next: 'seraphine_masquerade',
			effects: { charisma: 6 },
			hiddenEffects: {
				marina_friendship: 75,
				marina_romance: 75,
				first_kiss_marina: true,
				magical_grotto_moment: true
			}
		},
		{
			id: 'swim-together',
			text: 'Dive back underwater together - express love through action',
			next: 'seraphine_masquerade',
			effects: { courage: 4, charisma: 4 },
			hiddenEffects: {
				marina_friendship: 73,
				marina_romance: 73,
				shared_ocean: true,
				marina_joyful: true
			}
		}
	]
};

export const SeraphineMasquerade: Scene = {
	id: 'seraphine_masquerade',
	text: `Seraphine invites you to a private masquerade ball - just for two. She's arranged everything in a secluded palace wing: music, candles, masks, everything perfectly orchestrated.

"I wanted one evening," Seraphine explains as she ties an elegant mask over your eyes, "where we don't have to be heir and advisor. Where politics and duty don't exist. Just two people dancing."

She's breathtaking in her gown, her own mask making her look mysterious and ethereal. As you dance together, her usual perfect composure slowly melts away. She laughs genuinely, not her political laugh. She leans into you with real affection, not calculated strategy.

"This is the person I could have been," Seraphine admits quietly between songs. "If I hadn't been trained since birth to be a political tool. Someone who dances for joy, not advantage. Someone who..." She pauses, then continues with brave honesty. "Someone who loves freely."

She removes both your masks, wanting to see your real face. "I'm done pretending my feelings for you are strategic. I love you. Truly, deeply, in a way that makes absolutely no political sense." Her eyes shine with emotion. "And for once, I don't care about the calculation. I just want you."`,
	choices: [
		{
			id: 'love-confession',
			text: 'Tell her you love her too - the real her',
			next: 'shadow_rooftop',
			effects: { charisma: 7 },
			hiddenEffects: {
				seraphine_trust: 80,
				seraphine_romance: 80,
				seraphine_love_mutual: true,
				masks_removed: true,
				authentic_love: true
			}
		},
		{
			id: 'kiss',
			text: 'Kiss her as the music swells',
			next: 'shadow_rooftop',
			effects: { charisma: 6 },
			hiddenEffects: {
				seraphine_trust: 78,
				seraphine_romance: 78,
				first_kiss_seraphine: true,
				perfect_moment: true
			}
		},
		{
			id: 'dance-forever',
			text: 'Ask to dance like this forever',
			next: 'shadow_rooftop',
			effects: { charisma: 5 },
			hiddenEffects: {
				seraphine_trust: 75,
				seraphine_romance: 75,
				romantic_promise: true,
				seraphine_happy: true
			}
		}
	]
};

export const ShadowRooftop: Scene = {
	id: 'shadow_rooftop',
	text: `Shadow finds you on a moonlit rooftop - your meeting place has become a ritual. Tonight, they seem different. Less guarded, more present.

"I've spent twenty years in darkness," Shadow says, sitting beside you. "Literal and metaphorical. I forgot what it was like to want to see sunrise." They look at you. "Until you."

The city spreads below, peaceful in sleep. Shadow's hand finds yours - a rare physical contact from someone so used to staying apart.

"You're teaching me that redemption isn't just about stopping bad deeds," Shadow continues quietly. "It's about believing I deserve good things. Deserve happiness. Deserve..." They struggle with the words. "Deserve love."

Shadow turns to fully face you, vulnerability clear in their expression. "I'm damaged. I have nightmares. I'll probably always have darkness in me. But when I'm with you, I remember that darkness isn't all I am."

They cup your face gently, as if you're something precious. "Tell me I'm not wrong to hope. Tell me someone like me can love someone like you. Tell me this isn't just another dream I'll wake from."`,
	choices: [
		{
			id: 'love-confession',
			text: 'Tell them you love them - all of them, light and dark',
			next: 'climax_preparation',
			effects: { charisma: 7, wisdom: 4 },
			hiddenEffects: {
				shadow_redeemed: 100,
				shadow_romance: 80,
				shadow_love_mutual: true,
				complete_acceptance: true,
				shadow_healed: true
			}
		},
		{
			id: 'kiss',
			text: 'Kiss them under the stars',
			next: 'climax_preparation',
			effects: { charisma: 6, courage: 4 },
			hiddenEffects: {
				shadow_redeemed: 95,
				shadow_romance: 78,
				first_kiss_shadow: true,
				hope_realized: true
			}
		},
		{
			id: 'promise-light',
			text: 'Promise to be their light when darkness comes',
			next: 'climax_preparation',
			effects: { charisma: 6, wisdom: 3 },
			hiddenEffects: {
				shadow_redeemed: 92,
				shadow_romance: 76,
				shadow_not_alone: true,
				partnership_formed: true
			}
		}
	]
};

import { Scene } from '../../story-manager';

// Act 4 - Final Epilogue: Ten Years Later

export const EpilogueReflection: Scene = {
	id: 'epilogue_reflection',
	text: `**Ten Years Later**

You stand at the same balcony where your journey began, looking out over a kingdom transformed by your choices. A decade has passed since the moment that defined your reign.

Time has revealed the consequences of every decision, the fruit of every relationship, the legacy of every sacrifice. The kingdom reflects your vision - for better or worse.

As you reflect on these years, you consider: Was it worth it? Did you create the world you hoped for?`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'unity_perfect', seraphine_romance: 70 }
			},
			text: `The kingdom flourishes in unprecedented harmony. All races work together. Prosperity reaches every corner of the realm. The golden age you dreamed of has become reality.

Seraphine emerges onto the balcony, now your spouse and co-ruler. Two children - your heirs - play nearby, their laughter ringing pure and joyful.

"Ten years," she says, slipping her hand into yours. "And it keeps getting better. The parliament just passed the education reform - free schools for all children, human and magical races alike."

She kisses your cheek. "We built something beautiful. And it will outlast us by centuries."

Below, citizens of all races celebrate the anniversary of unification. Elves dance with humans. Dwarven merchants trade with fae artisans. Dragon ambassadors converse with merfolk diplomats.

You achieved the impossible dream. And you're deeply, completely happy.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'unity_perfect', kieran_romance: 70 }
			},
			text: `The United Kingdom thrives under your guidance. Kieran, now Lord Commander of a reformed military that serves all people equally, stands beside you in formal uniform.

"The last border skirmish ended three years ago," he reports with satisfaction. "With all races cooperating on defense, no external threat stands a chance. And internal crime has dropped by half - turns out people don't rebel when they feel heard."

He sets aside formality to embrace you. "You know what the best part is? I serve justice and love the ruler. No conflict between duty and heart." He smiles. "Though our son inheriting both your magical talent and my combat skills is going to make him either an incredible leader or unstoppable troublemaker."

Your child practices sword forms in the courtyard below, watched over by companions who've become extended family. This is the life you built together - honor, love, and peace.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'unity_perfect', lyra_romance: 70 }
			},
			text: `A century wouldn't be enough to build what you've achieved, but a decade has shown its foundation is solid. Lyra stands beside you, barely aged at all - elven longevity.

"The Magical Academy graduated its first class," she says with pride. "Human, elven, dwarven, and fae students learning together. My people haven't shared magical knowledge with outsiders in two thousand years. You changed everything."

She touches your face gently. "And the ritual worked - your lifespan extended. We'll have centuries together, not decades." Her eyes shine with tears of joy. "I won't lose you to time. We can build this dream through generation after generation."

Your children - half-elven, incredibly gifted in magic - represent the future you're creating. A world where bloodlines don't divide, but unite.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'democratic_ceremonial', sage_romance: 70 }
			},
			text: `From your modest home near the parliament building, you watch democracy flourish. You hold no official power now, but your influence as elder statesperson remains respected.

Sage bursts through the door, eyes alight with excitement. "The agricultural reform passed! And the vote wasn't even close - they're learning to compromise and cooperate."

As Chancellor of the new University, he's helped educate a generation in democratic ideals. And as your husband, he's given you a life of intellectual partnership and deep love.

"We did it," he says, holding you close. "Power to the people. Real representation. And we get to watch it grow from generation to generation." He kisses you. "Growing old together while the world gets better - I couldn't ask for more."`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'wanderer_peaceful', rowan_romance: 70 }
			},
			text: `The campfire crackles in wilderness far from any kingdom. You and Rowan have spent a decade wandering, adventuring, living free from duty and constraint.

"Best decision you ever made," Rowan says, stretched out contentedly under the stars. "Choosing happiness over obligation."

Word reaches you occasionally about the kingdom you left behind. It found its own path - sometimes good, sometimes troubled, but surviving without you.

"No regrets?" Rowan asks, already knowing the answer.

"None," you reply honestly. With them, you've seen wonders, had adventures, lived fully. This simple freedom means more than any crown.

Rowan grins and pulls you close. "Good. Because I plan to keep you for at least another decade. Maybe a lifetime, if you'll have me."

It's not the epic legacy you once imagined. But it's your legacy, and you're happy. That's enough.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'archmage_perfect', thorne_romance: 70 }
			},
			text: `From the heights of your magical capital, you survey a civilization transformed. Magic and technology blend seamlessly. All races contribute equally to a renaissance of art, science, and mysticism.

Thorne in dragon form lands beside you, then shifts to human shape. After three thousand years of life, he's found something he never expected - purpose beyond mere existence.

"The Arcane Council just proposed expanding the portal network to include the Fae Wildlands," he reports. "Even the fae are coming out of isolation to join your vision."

He takes your hand, and you feel the immortality magic has granted you. Your lifespan extended far beyond human norms - you'll live centuries, perhaps millennia alongside him.

"When we met, you were a lost noble with a dangerous bloodline," he reflects. "Now you're the Archmage Sovereign, architect of a magical golden age, my eternal partner." He smiles - a rare expression that makes him look young despite his ancient eyes. "Worth waiting three thousand years for."

Together, you watch your city of wonders sparkle under the sunset, knowing you have ages ahead to keep building this dream.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'traditional_progressive', rowan_romance: 70 }
			},
			text: `The kingdom maintains traditional structures but with progressive heart. Your reforms have improved lives while preserving stability.

Rowan visits rarely - they can't stand court life for long. But when they do appear, climbing through your window rather than using the door, their love is fierce and undiminished.

"Still don't understand why you chose the crown," they say, kissing you deeply. "But I understand why I chose you. You make even monarchy bearable by being so damn principled about it."

It's not ideal for either of you. Your relationship must be somewhat secret - tradition doesn't easily accept a monarch's unconventional romance. But the stolen moments are precious.

"Next month, disappear for a week," Rowan suggests. "Tell them you're on royal business. We'll actually be camping in the mountains, being normal people in love."

You agree. It's a compromise - duty and freedom, tradition and happiness, balanced precariously but balanced nonetheless.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'military_just', kieran_romance: 70 }
			},
			text: `The kingdom runs with military precision but serves justice faithfully. You and Kieran have created an order that protects without oppressing.

He stands beside you at attention, then relaxes into your embrace. "The patrol reports are all clear. Crime down, morale up, no internal conflicts. The system works."

His loyalty never wavered, and over the years, love has deepened into something unshakeable. Your marriage scandalizes traditionalists but inspires commoners - proof that honor and love can coexist.

"Our daughter starts knight training next month," he says with pride. "She's got your strategic mind and my combat instincts. Gods help any enemy who faces her."

You've built a military state, yes, but one guided by honor and justice. Not perfect, but far better than tyranny. And you've built it together, as partners in governance and in life.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'civil_war_exile' }
			},
			text: `The kingdom you tried to save tore itself apart. You and a handful of loyal companions fled, building a new life far from the ashes of your failed dream.

The small community you've established thrives modestly. Former nobles work alongside former servants. The companions who stayed with you have become family in the truest sense.

You failed at grand ambitions. But you saved the people you loved, and built something small but genuine.

"You know," says one of your companions over dinner, "we might have lost the kingdom. But we found something better - a place where people matter more than power."

It's a hard truth to accept. Your legacy is failure on the grand stage. But perhaps success in what actually matters - keeping loved ones safe and finding peace despite loss.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'shadow_complete' }
			},
			text: `The dark palace stands isolated, feared by all. You command immense power, but wield it in emptiness.

Every companion who loved you is gone - fled, dead, or twisted beyond recognition. The corruption you embraced consumed everything good in your life.

You sit on your shadow throne, sovereign of a realm of terror, and wonder if power was worth this absolute loneliness.

Some nights, you hear their voices - Lyra's laughter, Kieran's honor, Rowan's freedom, Sage's idealism. Ghosts of the life you could have had.

This is the price of choosing corruption. Absolute power, absolute isolation, absolute regret.

Was it worth it? In your darkest moments, you know the answer is no. But it's far too late to turn back now.`
		},
		{
			conditions: {
				hasHiddenAttributes: { unity_successful: true, all_companions_alive: true }
			},
			text: `The anniversary celebration fills the palace. All your companions attend - even those you didn't romance remain close friends and trusted advisors.

Seraphine manages diplomatic affairs with grace. Lyra leads the Magical Academy. Kieran commands reformed military forces. Sage serves as Chancellor. Rowan scouts borders and keeps you grounded. Finn oversees infrastructure. Marina maintains ocean alliances. Shadow runs intelligence networks, finally using skills for good. Thorne serves as dragon ambassador. Zephyr connects you to fae realms.

Each found their place in the world you built together. And whether you chose romance with one or remained friends with all, the bonds endure.

"Look what we created," your closest companion says, surveying the celebration of unity. "All of us, together. Different paths, different dreams, but one shared vision."

This is your legacy - not just a kingdom, but a family of allies who changed the world. And it's beautiful.`
		},
		{
			conditions: {
				hasHiddenAttributes: { fragile_peace: true }
			},
			text: `The kingdom holds together, but barely. Tensions simmer beneath the surface. Your compromise satisfies no one completely, but at least it prevents open war.

It's exhausting work, constantly mediating between factions, preventing conflicts, maintaining the delicate balance. You age faster than you should from the stress.

But it's better than civil war. Better than tyranny. Not the golden age you dreamed of, but functional governance that keeps people safe and fed.

"You're still here, still trying," observes a loyal companion. "That counts for something. Most rulers would have given up by now."

Perhaps that's enough - not perfection, but persistent effort toward something better. The work continues, one day at a time.`
		}
	],
	choices: [
		{
			id: 'satisfied',
			text: 'I am satisfied with my legacy - I did my best',
			next: 'final_reflection',
			effects: { wisdom: 10 },
			hiddenEffects: {
				final_sentiment: 'satisfied',
				peace_achieved: true
			}
		},
		{
			id: 'regretful',
			text: 'I have regrets - I would change much if I could',
			next: 'final_reflection',
			effects: { wisdom: 8 },
			hiddenEffects: {
				final_sentiment: 'regretful',
				lessons_learned: true
			}
		},
		{
			id: 'determined',
			text: 'The work continues - my legacy is still being written',
			next: 'final_reflection',
			effects: { courage: 8, wisdom: 7 },
			hiddenEffects: {
				final_sentiment: 'determined',
				ongoing_mission: true
			}
		},
		{
			id: 'proud',
			text: 'I am proud of everything we accomplished together',
			next: 'final_reflection',
			effects: { charisma: 10, wisdom: 8 },
			hiddenEffects: {
				final_sentiment: 'proud',
				triumphant_legacy: true
			}
		}
	]
};

export const FinalReflection: Scene = {
	id: 'final_reflection',
	text: `As the sun sets on another day in the kingdom shaped by your choices, you allow yourself a moment of quiet reflection.

The journey from uncertain heir to established ruler transformed you in ways you never imagined. Every choice, every relationship, every sacrifice shaped not just the kingdom, but your very soul.

Whatever path you chose, whatever ending you achieved, one truth remains: you changed the world. For better or worse, your mark on history is indelible.

The future stretches ahead, unknown and full of possibility. The story of your reign will be told for generations - a tale of blood magic, political intrigue, impossible romance, and the eternal question: what does it mean to rule well?

You've found your answer. And though others may judge it differently, you know in your heart whether you became the monarch you hoped to be.

**Thank you for playing.**`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'unity_perfect', final_sentiment: 'proud' }
			},
			text: `You achieved the impossible - genuine unity across all peoples and factions. The golden age historians will call your reign has truly begun.

As you look out over celebrations of the anniversary, surrounded by companions who became family and loved ones who share your life, profound satisfaction fills you.

"We did it," you whisper to yourself and to whatever gods might listen. "We actually did it."

The kingdom you leave to future generations is better than the one you inherited. The relationships you built enriched countless lives. The love you found sustains you through every challenge.

This is what heroism looks like - not dramatic battles (though you had those too), but the patient work of building bridges, earning trust, and choosing compassion even when power tempts.

Your story ends in triumph, surrounded by love, leaving a legacy that will shine for centuries.

**Perfect Ending Achieved: United Kingdom**

*You successfully united all factions and races, maintained relationships with all companions, chose wisely at every critical juncture, and built a golden age that will last for generations. Well played.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'archmage_perfect' }
			},
			text: `You transcended the limitations of mortality itself, becoming something between human and legend. The Archmage Sovereign whose magical renaissance reshaped civilization.

Your city of wonders glows beneath you, a testament to what happens when power serves wisdom rather than ego. All races contribute to this new golden age of magic.

And you have centuries, perhaps millennia, to see it flourish. The immortality magic granted means this isn't an ending, but a beginning.

"What will we do with eternity?" your immortal partner asks.

You smile. "Build wonders. Explore mysteries. Love deeply. Live fully." You gesture at the transformed world. "We've only just begun."

**Legendary Ending Achieved: Archmage Sovereign**

*You mastered all magical disciplines, achieved unity through wisdom rather than conquest, found eternal love, and transcended mortality to become legend. This is the rarest and most difficult ending to achieve. Extraordinary play.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'wanderer_peaceful' }
			},
			text: `You chose happiness over legacy, freedom over duty, love over power. The world judges such choices differently, but you sleep peacefully every night.

The campfire crackles. Your partner sleeps contentedly beside you. Tomorrow you'll wake and wander onward, experiencing life rather than ruling it.

"Some might call this running away," you muse quietly. "But it feels like running toward something better."

No crown weighs on your head. No decisions determine thousands of lives. Just you, your loved ones, and the freedom to live authentically.

History may forget you. But you'll remember these happy years with crystalline clarity.

**Freedom Ending Achieved: The Wanderer**

*You chose personal happiness over obligation to the throne. Not everyone's path, but yours was walked with intention and resulted in genuine fulfillment. Well played.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'shadow_complete' }
			},
			text: `Power absolute. Isolation complete. Corruption triumphant.

You sit alone in your dark palace, master of all you survey, loved by none. The choices that led here seemed reasonable at the time - just a little more power, just a little darker magic, just a few more compromises with your conscience.

Now you understand: the shadow promised strength but delivered loneliness. You conquered the kingdom but lost your soul. You gained everything and lost what matters.

Some nights, you imagine turning back time and choosing differently. But those are just fantasies. This is your reality - the price of choosing power over people, corruption over compassion.

**Dark Ending Achieved: Shadow Throne**

*You fully embraced corruption and became the tyrant you once opposed. This is a bad ending, but one achieved through consistent dark choices. You saw the path and walked it to its conclusion.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { civil_war_begun: true }
			},
			text: `The attempt at unity failed catastrophically. War still rages across the lands, and you live in exile with those companions who remained loyal.

It's not the ending you envisioned. You failed at the grand ambition, couldn't bridge divides too deep to cross, couldn't overcome centuries of mistrust with mere years of effort.

But you saved those closest to you. Built a small community based on genuine care rather than political necessity. Found some measure of peace despite overwhelming failure.

"We tried," a loyal companion reminds you. "Sometimes trying isn't enough, but it still matters that we did."

Your legacy is complex - ambition, failure, survival, small redemptions. History will judge harshly. But those who know you will remember you tried.

**Tragic Ending Achieved: Civil War and Exile**

*Unity failed and the kingdom fractured into war. You survived but couldn't save your grand vision. A bittersweet ending - failure tempered by survival and small personal victories.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { final_sentiment: 'satisfied' }
			},
			text: `As you reflect on your reign, satisfaction settles over you like a warm blanket. Not perfect, but good. Not effortless, but worthwhile.

You made mistakes - who doesn't? But you tried your best, stayed true to your principles, built relationships that mattered, and left the kingdom better than you found it.

"I'm satisfied," you say aloud to the sunset. "I did what I could with what I had. That's enough."

Your companion, whether romantic partner or dear friend, agrees quietly. You built something real together. That's the legacy that matters.

**The journey ends here. Your reign continues, but this story has reached its conclusion.**

*Thank you for playing. Your choices shaped a unique story, and your monarch found their path. Well done.*`
		}
	],
	choices: [
		{
			id: 'the-end',
			text: 'Reflect on the journey and close the book',
			next: 'credits',
			effects: {},
			hiddenEffects: {
				story_complete: true,
				journey_ended: true
			}
		}
	]
};

export const Credits: Scene = {
	id: 'credits',
	text: `**Simple Journey: A Tale of Blood and Crowns**

A story of inheritance, magic, love, and the weight of choices.

**Your Statistics:**

• Courage: [calculated]
• Charisma: [calculated]
• Wisdom: [calculated]

**Relationships Formed:** [count of companions with 50+ trust]
**Romances Pursued:** [active romance partners]
**Faction Alliances:** [final faction standings]
**Ending Achieved:** [ending type]

**Thank you for playing!**

This journey was shaped entirely by your choices. Every decision mattered, every relationship counted, every sacrifice had consequence.

Would you like to play again and see how different choices lead to different destinies?

*Note: This is a complex branching narrative with 200+ scenes and multiple distinct endings. Your playthrough revealed one path among many. There are romances you didn't pursue, endings you didn't see, secrets you didn't uncover.*

**The kingdom awaits your next reign.**`,
	choices: [
		{
			id: 'play-again',
			text: 'Begin a new journey',
			next: 'P1',
			effects: {},
			hiddenEffects: {
				new_game_plus: true
			}
		},
		{
			id: 'exit',
			text: 'Close the book',
			next: 'credits',
			effects: {},
			hiddenEffects: {
				story_ended: true
			}
		}
	]
};

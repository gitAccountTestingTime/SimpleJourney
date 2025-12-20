import { Scene } from '../../story-manager';

// Side Quest Scenes - Optional enrichment content

const hiddenPassage = `Exploring depths of Silverwood Manor - investigating family history with newfound urgency - you discover hidden passage behind your ancestors' portrait in the Long Gallery. The painting depicting Queen Elara Silverwood shifts slightly when you press specific point on ornate frame, revealing narrow doorway that has remained concealed for generations. Air grows cold immediately as you descend ancient stone steps, temperature dropping with each level deeper you go. Phantom torches flicker to life at your approach, magical flames that cast no heat but illuminate path carved through bedrock itself. Walls are covered in faded murals depicting Silverwood history - victories and tragedies recorded in pigment and stone, stories never included in official chronicles.`;

const sealedChamber = `At the bottom of seemingly endless descent, you find sealed chamber protected by wards that recognize your bloodline, allowing entry where others would be repelled or destroyed. Inside, space is larger than should be possible given manor's dimensions - ancient expansion magic creating pocket dimension outside normal space. Ancestral artifacts rest on pedestals arranged in careful circle, each pulsing with dormant magic that you can feel resonating with your own blood. Crowns worn by kings and queens who shaped kingdom's destiny, swords that defended realm against threats now forgotten, scrolls containing knowledge considered too dangerous for general scholarship, and mirror that shows not your reflection but shadowy figures from past - your ancestors watching, judging, waiting to see what choices their heir will make.`;

const ghostlyVoice = `Ghostly voice echoes from everywhere and nowhere simultaneously, speaking with authority of accumulated generations: "Heir of Silverwood, you stand where your ancestors stored their greatest treasures and darkest secrets. Each artifact in this chamber holds tremendous power, but also carries burden that broke some who wielded them. Crown grants authority but demands constant vigilance against corruption. Sword brings victory but thirsts for battle even when peace would serve better. Tome offers knowledge but reveals truths that cannot be unlearned. Choose wisely what you claim, understanding that power always has price. Our legacy includes both triumph and tragedy - which path will you walk?"`;

const warningChoice = `The artifacts arrayed before you could grant significant advantages in challenges ahead - making allies easier to command, battles easier to win, mysteries easier to solve. But touching them might awaken things best left sleeping, invoke obligations to long-dead ancestors, or bind you to patterns of behavior that served previous Silverwoods but might not serve you. Power beckons, but so does wisdom of restraint.`;

export const ManorMysteries: Scene = {
	id: 'manor_mysteries',
	text: `${hiddenPassage}

${sealedChamber}

${ghostlyVoice}

${warningChoice}`,
	textVariants: [
		{
			conditions: { hasFlags: ['ancient_tome_researched:true', 'values_history:true'] },
			text: `${hiddenPassage}

${sealedChamber}

You recognize some of these artifacts from your historical research. "The Crown of Command - Queen Elara used it to unite the warring houses. The Blessed Sword - King Aldric wielded it in the First War."

${ghostlyVoice}

"You know our history," the voice sounds approving. "You've sought to understand those who came before. That wisdom will guide your choice."

${warningChoice}`
		},
		{
			conditions: { hasHiddenAttributes: { wisdom: 25 } },
			text: `${hiddenPassage}

${sealedChamber}

${ghostlyVoice}

Your wisdom lets you sense the truth - these artifacts carry both power and curse. Your ancestors sealed them not just to preserve them, but to contain them.

"Each power came at great cost," the voice admits. "We paid prices you may not wish to pay. Choose knowing that all power has consequences."`
		}
	],
	choices: [
		{
			id: 'crown-of-command',
			text: `Take the ancient crown - Queen Elara's Crown of Command that united warring houses through sheer force of authority. Feel its weight settle on your head, power flowing through bloodline connection. Accept that commanding others comes with responsibility to lead well, that authority can become tyranny without wisdom to temper it. Claim legacy of rulers who shaped kingdom through strength of will.`,
			next: 'tournament_entry',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				ancient_crown_claimed: true,
				command_power: true,
				ancestors_blessing: true,
				corruption_risk: 1
			}
		},
		{
			id: 'sword-of-light',
			text: `Take the blessed sword - King Aldric's Blade that drove back Shadow during First War. Feel it sing in your grip, recognizing warrior blood in your veins. Accept that choosing martial power means accepting responsibility to protect, that blade thirsts for righteous combat and will call you to battle. Claim legacy of defenders who stood between kingdom and darkness.`,
			next: 'tournament_entry',
			effects: { courage: 6 },
			hiddenEffects: {
				blessed_sword_claimed: true,
				combat_enhanced: true,
				shadow_beast_bane: true
			}
		},
		{
			id: 'tome-of-knowledge',
			text: `Take the ancient tome - Archmagus Silverwood's collected research containing magic forgotten by modern scholars. Feel pages warm under your touch, knowledge eager to transfer across generations. Accept that some truths carry weight, that forbidden magic was forbidden for reasons, that wisdom includes knowing what knowledge is too dangerous. Claim legacy of scholars who pushed boundaries of understanding regardless of cost.`,
			next: 'tournament_entry',
			effects: { wisdom: 7 },
			hiddenEffects: {
				ancient_tome_claimed: true,
				forgotten_magic_learned: true,
				ancestors_knowledge: true
			}
		},
		{
			id: 'leave-sealed',
			text: `Leave everything sealed - recognize that some powers are too dangerous to wield, that your ancestors had reasons for hiding these artifacts beyond simple storage. That true wisdom sometimes means restraint rather than acquisition, that you can forge your own legacy without relying on inherited power. That breaking cycle of power-seeking might be greatest gift you can give to future generations. Choose your own path rather than walking in ancestral footsteps.`,
			next: 'tournament_entry',
			effects: { wisdom: 5 },
			hiddenEffects: {
				respected_boundaries: true,
				wise_restraint: true,
				manor_still_sealed: true
			}
		}
	]
};

const tournamentNews = `Word spreads through common quarters of underground fighting tournament held in warehouse district - unsanctioned event where anyone can prove their worth regardless of birth or title, noble or commoner judged solely by skill and courage. Rules are minimal, safety provisions nonexistent, but prize is significant: gold purse that could feed family for year, and something more valuable - genuine respect of city's warriors and working folk. Champions of tournament become legends in streets, their names spoken with admiration by people who usually have little reason to admire anyone. For heir to throne, entering such event would be unprecedented statement about willingness to meet subjects on equal ground.`;

const rowanWarning = `Rowan warns against it with genuine concern born from having seen tournament injuries before: "It is dangerous. No rules except do not kill - maiming allowed, permanent injury common. No safety measures, no healers standing by, no stopping fight if someone is clearly beaten. People get hurt badly there, sometimes permanently. Desperate fighters with nothing to lose are most dangerous opponents imaginable."`;

const kieranConflict = `Kieran is conflicted between tactical concerns and political opportunities: "Tournament builds reputation with fighters and common folk like nothing else could - proves you are not soft noble who hides behind guards. Winning would make you legend in streets, give you support base no amount of gold or proclamations could buy. But if you are injured, you would be vulnerable to your enemies. Mordain, nobles who oppose you, Shadow cultists - all would see your weakened state as opportunity. Timing is dangerous."`;

const opportunityRisk = `Tournament represents both unprecedented opportunity and significant risk - chance to prove yourself to people in way that transcends politics and pageantry, demonstrating courage and skill in arena they respect. But also exposing yourself to danger when stakes are already high, potentially injuring yourself before final confrontation with greater threats. Common folk would see participation as honoring them, or as foolish noble playing at being warrior. Everything depends on how you approach it.`;

export const TournamentEntry: Scene = {
	id: 'tournament_entry',
	text: `${tournamentNews}

${rowanWarning}

${kieranConflict}

${opportunityRisk}`,
	textVariants: [
		{
			conditions: { hasFlags: ['helped_commoners:true'], hasHiddenAttributes: { commoner_respect: 20 } },
			text: `${tournamentNews}

Word reaches you differently - common folk you've helped are excited. "The heir might actually fight alongside us! Not above us, with us!"

${rowanWarning}

${kieranConflict}

"The people already respect you," Kieran adds. "Entering this tournament could cement that bond. They'd see you're not just another noble who views them as beneath you."`
		},
		{
			conditions: { hasHiddenAttributes: { combat_capable: true } },
			text: `You've proven yourself in combat before - against Shadow Beasts, assassins, and training opponents. The tournament shouldn't be beyond your abilities.

Rowan notices your confidence and sighs. "You're going to do it anyway, aren't you? Fine. At least let me be in the crowd, ready to intervene if things go wrong."

Kieran nods approvingly. "Your combat skills have improved significantly. Just don't underestimate your opponents - desperation makes people dangerous."`
		}
	],
	choices: [
		{
			id: 'enter-openly',
			text: `Enter openly as the heir - make bold statement that you are not afraid to face common fighters on their terms, that title does not make you too proud to compete alongside them. Risk embarrassment if you lose, but potential glory if you win is immense. Show court and commons alike that Silverwood heir has courage to back up claims to leadership, that you trust your skills enough to test them publicly.`,
			next: 'merchant_plight',
			effects: { courage: 6, charisma: 4 },
			hiddenEffects: {
				tournament_champion: true,
				commoner_respect: 30,
				warrior_reputation: true,
				bold_heir: true
			}
		},
		{
			id: 'enter-disguised',
			text: `Enter disguised - prove worth is earned through skill rather than inherited through bloodline. Fight without title protecting you, win or lose based purely on ability. If you triumph and then reveal identity, impact will be profound - commons will see you earned their respect rather than demanding it. More humble approach that honors tournament tradition of judging person rather than position.`,
			next: 'merchant_plight',
			effects: { courage: 5, wisdom: 4 },
			hiddenEffects: {
				tournament_champion: true,
				commoner_respect: 35,
				earned_respect: true,
				humble_strength: true
			}
		},
		{
			id: 'sponsor-instead',
			text: `Sponsor the tournament - provide gold for prizes, healers for safety, legitimacy for event without personal risk of combat. Gain favor through generosity rather than proving combat skills. Safer politically and physically, but impact is lesser - commons will appreciate patronage but not respect you as warrior. Practical choice that acknowledges your skills lie elsewhere than personal combat.`,
			next: 'merchant_plight',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				tournament_sponsor: true,
				commoner_respect: 20,
				generous_patron: true
			}
		},
		{
			id: 'decline',
			text: `Decline participation - recognize that with Crystal Heart quest ongoing and enemies closing in, risking injury in tournament is poor tactical decision regardless of political benefits. Focus on more important matters, accept that you cannot pursue every opportunity. Wisdom of knowing what battles to fight and which to leave for others. Practical but potentially seen as cowardice by those who value physical courage above strategic thinking.`,
			next: 'merchant_plight',
			effects: { wisdom: 4 },
			hiddenEffects: {
				tournament_declined: true,
				priorities_clear: true
			}
		}
	]
};

const merchantDesperation = `Prominent merchant seeks your audience with desperation written in every line of her face - woman who has spent thirty years building trading company now watching it systematically destroyed. Her name is Helena Riversong, and she has served kingdom faithfully through three monarchs, always paying taxes honestly, always treating workers fairly, building reputation for integrity in industry known for corruption. But someone powerful has decided she must be eliminated, and they are succeeding. Her trading company has been sabotaged relentlessly over past six months: shipments stolen by bandits who somehow always know routes and timing, warehouses burned in fires too convenient to be accidental, workers intimidated by thugs bearing veiled threats, trade permits mysteriously delayed or denied by officials who refuse to explain. She is on verge of bankruptcy despite having done nothing wrong except succeed honestly in business nobles usually control through questionable means.`;

const plea = `"Your Highness," she pleads, voice shaking with mixture of anger and despair, "I have served this kingdom faithfully for thirty years. Built my business from single cart to company employing forty people. Paid every tax, followed every law, treated workers better than most nobles treat servants. But someone powerful is destroying me, and city guard will not investigate." She produces evidence with trembling hands - noble house's seal on threatening letters, testimony from workers who recognized attackers as wearing Blackthorn livery, financial records showing systematic sabotage pattern. "I know I am nobody compared to them. Just merchant, not noble. But I thought... I hoped... that maybe new heir would care about justice regardless of victim's social standing. Was I wrong?"`;

const investigation = `Your investigation - conducted with Seraphine's political expertise and Shadow's underworld connections - reveals House Blackthorn is indeed orchestrating entire campaign of sabotage. Their motivation is coldly pragmatic: eliminate competition and seize merchant routes Helena has spent decades building, consolidating trade power in noble hands where it can be manipulated for political gain. They have bribed city guard to ignore complaints, intimidated witnesses into silence, used legal technicalities to protect their operatives from prosecution. Confronting them directly would start serious conflict with powerful noble family that has allies throughout court, enemies you can ill afford when facing multiple threats. But ignoring situation means allowing innocent businesswoman who has done everything right to lose everything while her employees' families starve. Justice versus pragmatism, principles versus politics.`;

const advisorViews = `Seraphine advises with characteristic political calculation: "Politics requires careful maneuvering. We need leverage over Blackthorn, not confrontation. Expose them in way that makes them back down without open conflict - private pressure, strategic information release, forcing their hand without declaring war. Direct conflict now would divide nobles when we need unity against greater threats."

Finn offers with straightforward dwarven practicality: "Or we could just break into their warehouses tonight and recover stolen goods. Direct action. They stole from Helena, we take it back. They would not dare complain since doing so would require admitting they stole it first. Sometimes complicated problems have simple solutions involving properly applied force."

Rowan adds quietly with intensity born from personal history: "This is exactly kind of noble exploitation that destroyed my village. Powerful crushing powerless because they can, because no one stops them. If you let this stand, what are all your promises about justice worth? Helena is nobody important - which makes this test of whether you only protect people who matter politically, or actually care about fairness for everyone."`;

export const MerchantPlight: Scene = {
	id: 'merchant_plight',
	text: `${merchantDesperation}

${plea}

${investigation}

${advisorViews}`,
	textVariants: [
		{
			conditions: { hasFlags: ['stands_against_corruption:true', 'justice_focused:true'] },
			text: `${merchantDesperation}

You recognize this pattern - you've fought corruption before, stood up for those exploited by the powerful.

${plea}

Her eyes plead not just for help, but for justice. "I heard you actually care about fairness. That you don't let nobles abuse their power. Was I wrong to hope?"

${investigation}

${advisorViews}

Rowan adds quietly: "This is exactly the kind of noble exploitation that destroyed my village. If you let it stand, what were all your promises worth?"`
		},
		{
			conditions: { hasHiddenAttributes: { compassion_for_people: 20 } },
			text: `${merchantDesperation}

You can see her desperation isn't just about money - it's about her life's work, her employees' livelihoods, her sense of dignity.

${plea}

"I have forty workers depending on me," she adds, voice breaking. "If I fail, they lose everything. Their families starve."

${investigation}

The compassion you've shown throughout your journey makes this choice clear - you can't let innocent people suffer for noble greed.

${advisorViews}`
		}
	],
	choices: [
		{
			id: 'public-justice',
			text: `Publicly expose House Blackthorn - gather all evidence and present it before full court, forcing nobles to witness that even powerful houses are not above justice. Dramatic confrontation that risks making permanent enemy of Blackthorn and nobles who fear precedent of heir actually holding them accountable. But sends powerful message to commons that you mean what you say about fairness, that wealth and title do not grant immunity from consequences. Justice over politics, principles over pragmatism.`,
			next: 'haunted_tower',
			effects: { courage: 6, charisma: 4 },
			hiddenEffects: {
				merchant_saved: true,
				blackthorn_enemy: true,
				justice_reputation: 25,
				noble_faction_rep: -15,
				commoner_respect: 30
			}
		},
		{
			id: 'private-pressure',
			text: `Apply private diplomatic pressure - meet with House Blackthorn privately with evidence, make clear you know what they have done and give them choice to make restitution quietly or face public exposure. Allow them to save face by backing down without public humiliation, preserving noble unity while still achieving justice for Helena. Quieter resolution that achieves goals without creating unnecessary enemies. Seraphine's approach - demonstrating that politics can serve justice when wielded skillfully.`,
			next: 'haunted_tower',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				merchant_saved: true,
				blackthorn_neutral: true,
				diplomatic_skill_shown: true,
				seraphine_respect: 15
			}
		},
		{
			id: 'direct-action',
			text: `Lead recovery operation personally - take small team tonight, infiltrate Blackthorn warehouses, recover Helena's stolen goods with your own hands. Adventurous approach that proves you are not just politician giving orders but leader willing to take action. They cannot complain without admitting they stole goods first, trapped by their own criminal behavior. Risky but satisfying, showing common folk and companions alike that you practice what you preach about justice. Finn and Rowan would respect this choice immensely.`,
			next: 'haunted_tower',
			effects: { courage: 7 },
			hiddenEffects: {
				merchant_saved: true,
				blackthorn_enemy: true,
				goods_recovered: true,
				action_hero: true,
				finn_respect: 15,
				rowan_bond: 15
			}
		},
		{
			id: 'compensate',
			text: `Compensate Helena from royal treasury - give her enough gold to rebuild without confronting Blackthorn at all, buy peace by solving problem with money rather than justice. Pragmatic solution that helps victim without creating political conflict, but leaves criminals unpunished and sets precedent that nobles can act with impunity as long as crown pays for damages. Saves Helena but arguably fails larger principle, choosing expedient over right. Treasury depleted for questionable moral compromise.`,
			next: 'haunted_tower',
			effects: { charisma: 4 },
			hiddenEffects: {
				merchant_compensated: true,
				blackthorn_neutral: true,
				problem_avoided: true,
				treasury_depleted: true
			}
		}
	]
};

const abandonedTower = `On kingdom's northern edge stands ancient tower that has been abandoned for decades, shunned by locals who cross themselves when passing. Stone structure predates kingdom itself, built by civilization forgotten even by elven records, covered in weathered runes that no modern scholar can translate. Tower has dark reputation that keeps everyone away: locals claim it is haunted by something malevolent, reporting screams that echo from empty halls at night, lights visible in windows that should be dark, shadows that move with purpose behind crumbling walls. More disturbing, those who investigate never return - three separate expeditions over past twenty years simply vanished, last search party finding no trace of previous ones. Local magistrate has declared tower forbidden territory, but that has not stopped desperate or curious from attempting entry. Problem is getting worse: screams are getting louder, lights more frequent, and now villagers nearest tower are reporting nightmares, crops failing, livestock dying. Whatever haunts tower is growing stronger.`;

const lyraSenses = `Lyra senses powerful magic emanating from tower, face troubled as she concentrates: "This is not simple haunting. I sense active magical energy of type I have not encountered before - not death magic from necromancy, not curse from malicious spellcaster. Something else entirely. There is rift or tear between dimensions, or entity trapped between worlds crying out. Power signature suggests spirit magic mixed with dimensional anomaly. Whatever is in tower is not malevolent by nature, but it is in pain. Desperate. Dangerous because of suffering rather than evil intent."`;

const investigationOptions = `Your investigation options present different risk-reward balances:

- Personal exploration with companions: Direct approach that gets answers quickly but exposes you and friends to danger. Could encounter hostile magic, dimensional rifts, trapped entities that might attack out of fear. Courageous but risky.

- Magical research before action: Safer approach using Sage's library, elven lore from Lyra, dwarven historical records from Finn. Takes time but provides knowledge for informed decision. Might discover solution that avoids violence entirely, or reveal danger too great to face.

- Military quarantine: Pragmatic option that contains problem without solving it. Surround tower with guards to prevent access, wait for better opportunity. Leaves whatever is suffering in tower to continue suffering, and growing stronger.

- Seeking guidance from magical races: Consult dragons, fae, spirits themselves about what could cause this phenomenon. Thorne might recognize dimensional rifts, Zephyr might sense Fae involvement, spirit magic practitioners might communicate directly.

Tower's mystery could hold ancient magic worth learning, dangerous threats needing containment, or suffering souls deserving mercy. Everything depends on what is truly happening in those haunted halls.`;

export const HauntedTower: Scene = {
	id: 'haunted_tower',
	text: `${abandonedTower}

${lyraSenses}

${investigationOptions}`,
	textVariants: [
		{
			conditions: { hasFlags: ['magical_sensitivity:true', 'respects_spirits:true'] },
			text: `${abandonedTower}

You can feel the magic from here - not malevolent, but desperate. Anguished.

${lyraSenses}

"I sense something else," you add. "Not malice. Pain. Loneliness. Like something's been imprisoned there, crying out."

Lyra looks at you with new respect. "Your magical sensitivity has grown. You're right - this feels like a prison, not a threat."

${investigationOptions}`
		},
		{
			conditions: { hasHiddenAttributes: { spirit_magic_learned: true } },
			text: `With your spirit magic training, you can sense what Lyra cannot - there are indeed spirits in that tower, but they're not evil. They're crying for help.

"Someone trapped spirits there," you realize. "They're suffering, have been for decades. This isn't a haunting - it's a prison."`
		}
	],
	choices: [
		{
			id: 'explore-personally',
			text: `Explore tower with companions - gather your most trusted friends and face mystery directly. Lyra for magical expertise, Rowan for survival skills, Kieran for combat support. Direct approach that risks everyone but gets answers quickly, demonstrates courage and leadership by facing danger personally rather than sending others. Whatever is in tower - suffering spirit, dimensional rift, ancient guardian - you will confront it together. Discover truth firsthand rather than through research or secondhand reports.`,
			next: 'underground_network',
			effects: { courage: 7, wisdom: 3 },
			hiddenEffects: {
				tower_explored: true,
				spirits_freed: true,
				ancient_magic_discovered: true,
				lyra_respect: 15
			}
		},
		{
			id: 'magical-research',
			text: `Research thoroughly before acting - spend days in Sage's library cross-referencing historical accounts with elven lore and dwarven records, identify what type of magic could cause these symptoms before risking confrontation. Wisdom over courage, preparation over impulse. Sage would appreciate methodical approach, and knowledge gained might reveal solution that avoids violence entirely. Patient investigation that prioritizes understanding over action, possibly discovering tower's true history and appropriate response.`,
			next: 'underground_network',
			effects: { wisdom: 7 },
			hiddenEffects: {
				tower_explored: true,
				safe_approach: true,
				knowledge_gained: true,
				sage_affection: 15
			}
		},
		{
			id: 'free-spirits',
			text: `Use spirit magic to free trapped souls - if you have learned spirit magic, you can sense what others cannot: spirits imprisoned in tower are not evil entities but victims crying for release. Someone trapped them decades ago, magical prison weakening over time causing disturbances. You have power to break prison and grant peace to suffering souls who have been tormented for years. Compassionate magic that demonstrates understanding spiritual forces are not automatically threats, that some mysteries require empathy rather than violence. Spirits would be profoundly grateful for ending their torment.`,
			next: 'underground_network',
			effects: { wisdom: 8, charisma: 5 },
			hiddenEffects: {
				tower_explored: true,
				spirits_freed: true,
				spirits_grateful: true,
				spirit_allies_gained: true,
				compassionate_magic: true
			}
		},
		{
			id: 'quarantine',
			text: `Quarantine tower and deal with it later - station guards to prevent access, declare area forbidden, postpone investigation until after more pressing matters are resolved. Pragmatic choice acknowledging you cannot solve every problem immediately, that Crystal Heart quest and political threats take priority. But whatever is trapped in tower continues suffering, growing stronger, potentially becoming greater threat by time you return. Practical but arguably callous, choosing convenience over investigating cries for help.`,
			next: 'underground_network',
			effects: { wisdom: 3 },
			hiddenEffects: {
				tower_quarantined: true,
				problem_delayed: true,
				pragmatic_choice: true
			}
		}
	]
};

export const UndergroundNetwork: Scene = {
	id: 'underground_network',
	text: `You discover evidence of underground resistance movement operating in capital - network of commoners organizing beyond noble oversight, preparing for future that might require self-defense against oppression. They are not openly hostile yet, not planning immediate revolution, but they are building power structures parallel to official hierarchy: information networks that spread news nobles would prefer suppressed, mutual aid societies that protect members from exploitation, training groups teaching self-defense and leadership skills. Shadow brings you to secret meeting - testament to trust you have built with reformed assassin - where you meet their leader.

Elena is charismatic woman in her forties who lost family to noble exploitation, specifically Duke Mordain's land seizures that left her parents homeless and eventually dead from exposure. She carries anger with dignity, channels rage into purpose rather than blind violence. "We are not your enemy," Elena says carefully, measuring you with sharp eyes that have seen too much suffering caused by nobility. "But we are tired of waiting for rulers to care about common people, tired of hoping next monarch will be different. We are building our own power structure, our own protection network. When nobles abuse us - and they will because they always do - we will have means to defend ourselves rather than begging for justice that never comes."

She eyes you assessingly, seeing both promise and threat in young heir. "Question is - are you type of ruler who will see us as threat to authority, who will try to suppress us for daring to organize without permission? Or can you be ally, someone who actually wants commons to have voice and power rather than just pretending to care during speeches?" Her tone makes clear she has heard many promising words from nobles, seen few matching actions.

The underground network could become powerful support base if you embrace them - providing intelligence, grassroots loyalty, genuine connection to common people's needs and perspectives. Or they could become dangerous opposition if you make them enemy, forcing them into actual revolution when they currently only want recognition and security. Your response will determine whether they become allies building better kingdom together, or enemies fighting against yet another noble who feared power sharing. Shadow watches carefully, invested in outcome since they have friends in network and sees parallel to their own redemption story.`,
	choices: [
		{
			id: 'embrace-allies',
			text: `Embrace them as allies - tell Elena that organized commons with voice and power are exactly what kingdom needs, that you welcome their network as partners in building better future. Integrate their concerns into your platform, give them seat at table when decisions are made affecting their lives. Revolutionary approach that treats subjects as equals rather than subordinates, that sees power sharing as strength rather than weakness. Commons would give profound loyalty to ruler who actually supports their self-organization rather than fearing it.`,
			next: 'sacred_grove',
			effects: { charisma: 7, wisdom: 5 },
			hiddenEffects: {
				underground_alliance: true,
				commoner_respect: 40,
				reformist_faction_rep: 30,
				revolutionary_support: true,
				shadow_respect: 20
			}
		},
		{
			id: 'legitimize',
			text: `Legitimize them through official citizen council - go beyond accepting network to actually making them part of government structure. Create official position where common representatives have real authority over policies affecting them, not symbolic advisory role but actual decision-making power. Radical democratic reform that would shock conservative nobles but demonstrate commitment to genuine power sharing. Elena and her people would have what they truly want: recognition, legitimacy, voice that must be heard rather than begging for attention. Revolutionary idea that could transform kingdom's governance.`,
			next: 'sacred_grove',
			effects: { wisdom: 7, charisma: 5 },
			hiddenEffects: {
				underground_legitimized: true,
				commoner_respect: 45,
				reformist_faction_rep: 35,
				democratic_reform: true,
				revolutionary_idea: true
			}
		},
		{
			id: 'monitor',
			text: `Monitor them but stay neutral - neither embrace nor suppress, simply watch and wait to see what they become. Keep tabs through Shadow's connections, ensure they are not planning actual revolution, but do not interfere with their organizing. Cautious middle ground that avoids commitment either way, maintains options while gathering more information. Safe politically but earns neither their trust nor their enmity - they will see you as better than oppressive noble but not ally they hoped for. Missed opportunity for genuine connection.`,
			next: 'sacred_grove',
			effects: { wisdom: 4 },
			hiddenEffects: {
				underground_neutral: true,
				commoner_respect: 10,
				cautious_approach: true
			}
		},
		{
			id: 'suppress',
			text: `Suppress them in name of maintaining order - see organized commons as threat to stability, use authority to break up network before it becomes too powerful. Arrest leaders, intimidate members, demonstrate that organizing without noble permission will not be tolerated. Authoritarian action that conservative nobles would applaud but commons would despise, proving you are exactly type of ruler they feared. Elena and her people would become actual enemies rather than potential allies, driven underground truly hostile now. Creates resistance movement where before there was only defensive preparation.`,
			next: 'sacred_grove',
			effects: { courage: 4 },
			hiddenEffects: {
				underground_suppressed: true,
				commoner_respect: -30,
				military_faction_rep: 20,
				authoritarian_action: true,
				resistance_angry: true
			}
		}
	]
};

export const SacredGrove: Scene = {
	id: 'sacred_grove',
	text: `Deep in ancient forest stands grove sacred to druids and nature spirits for millennia - place where natural magic flows strongest, where barrier between material world and spirit realm grows thin, where trees have witnessed rise and fall of civilizations. Recently grove has been corrupted by force that makes Lyra and Rowan both flinch when sensing it: trees are dying from roots upward, leaves blackening and falling regardless of season, bark splitting to weep dark sap that smells of decay. Animals flee area in terror, birds fall silent, even insects avoid corrupted ground. Magic that once felt vital and nurturing now pulses with wrongness, nature itself crying out in pain.

"Shadow Beast taint," Lyra says grimly, recognizing corruption signature from previous encounters. "Dimensional rift must have opened nearby, leaking Shadow Realm influence into natural world. Grove is fighting contamination but losing, centuries of accumulated natural magic being twisted into something dark."

Rowan kneels by dying tree, hand on bark, tears streaming down face. "I can feel it dying. Feel its pain, its confusion. It has stood for thousand years protecting this land, now corrupted through no fault of its own. This is what Shadow does - takes beautiful living things and twists them into weapons against themselves."

Elderly druid elder explains with desperation aging them beyond their years: "This grove has protected kingdom for millennia, maintaining natural balance that keeps land fertile, seasons reliable, spiritual world and material world in proper relationship. If grove falls completely, balance tips toward Shadow. Crops will fail, weather will turn chaotic, barriers between dimensions will weaken everywhere. But cleansing requires immense magical power and personal sacrifice - taint is deep, fighting back violently against attempts to purge it. We lack strength for task, need help from someone with greater power."

Cleansing options present different approaches with varying costs:

- Blood magic ritual: Ancient druidic technique requiring caster's life force to fuel purification. Powerful but personally draining, leaving you weakened for days afterward. Direct sacrifice of your vitality to restore grove's, paying pain with pain.

- Collaborative race magic: If you have forged alliances with all five magical races, their combined power could cleanse grove through cooperation unprecedented in modern history. Elven natural affinity, dwarven earth connection, dragon primal magic, fae wild energy, merfolk water healing working in harmony. Symbolic as well as practical - races united healing land together.

- Seal the rift: Rather than purge existing taint, simply close dimensional tear preventing more corruption from spreading. Pragmatic solution that stops problem from worsening but leaves existing damage. Grove remains weakened but stable, contamination contained rather than eliminated.

- Natural regeneration: Trust nature's own resilience, provide protection and resources but let grove heal at own pace over years. Patient approach respecting natural processes, requiring no immediate sacrifice but accepting slow recovery. Trees that took centuries to grow need time to recover from corruption.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { all_races_united: true }
			},
			text: `With representatives of all five magical races united, you have unprecedented power available. The elder's eyes widen with hope.

"If elves, dwarves, dragons, fae, and merfolk work together... it might be possible to not just cleanse the grove, but transform it. Make it stronger than ever, a symbol of unity."

This could be a moment of legendary significance - the magical races cooperating on a scale not seen in centuries.`
		}
	],
	choices: [
		{
			id: 'blood-ritual',
			text: `Perform blood magic cleansing ritual - ancient druidic technique where you channel your own life force through grove, burning away corruption with power drawn from your vitality. Will leave you weakened for days, possibly vulnerable when you can least afford weakness. But demonstrates willingness to sacrifice personally for greater good, to pay cost with your own body rather than asking others to suffer. Lyra and druids would guide ritual, ensuring you do not give so much you die, but price will be steep. Nature respects sacrifice, grove would remember who saved it and why.`,
			next: 'shipwreck_discovery',
			effects: { courage: 7, wisdom: 5 },
			hiddenEffects: {
				grove_cleansed: true,
				blood_magic_mastery: true,
				personal_sacrifice_made: true,
				druid_alliance: true,
				lyra_respect: 20
			}
		},
		{
			id: 'united-magic',
			text: `United magical races cleansing ritual - if you have forged alliances with elves, dwarves, dragons, fae, and merfolk, bring representatives together for cooperative ritual unprecedented in centuries. Each race contributes their unique magical strengths in harmony: Lyra's elven nature affinity, Finn's dwarven earth connection, Thorne's dragon primal fire, Zephyr's fae wild energy, Marina's merfolk water healing. Together their power could not just cleanse corruption but transform grove into something stronger than before, living monument to unity's potential. Legendary cooperation demonstrating what races can achieve together rather than divided. Historical moment that would be remembered for generations.`,
			next: 'shipwreck_discovery',
			effects: { wisdom: 8, charisma: 7 },
			hiddenEffects: {
				grove_transformed: true,
				unity_monument_created: true,
				legendary_cooperation: true,
				all_races_bonded: true,
				historical_moment: true
			}
		},
		{
			id: 'seal-rift',
			text: `Seal dimensional rift without full cleansing - pragmatic solution that stops corruption from spreading but leaves existing damage in place. Grove remains weakened but stable, contaminated trees still dying but no new taint spreading. Practical approach acknowledging you lack resources for perfect solution, choosing containment over healing. Druids would be disappointed but grateful you prevented complete collapse. Problem managed rather than solved, compromise between ideal and realistic.`,
			next: 'shipwreck_discovery',
			effects: { wisdom: 5 },
			hiddenEffects: {
				grove_stabilized: true,
				rift_sealed: true,
				practical_approach: true
			}
		},
		{
			id: 'natural-healing',
			text: `Support natural regeneration - provide resources and protection but trust nature's own resilience to heal corruption over time rather than forcing immediate cure. Patient approach respecting that forests work on timescales beyond human urgency, that processes taking centuries to create need time to recover. Rowan would deeply appreciate philosophy of trusting natural healing rather than imposing human solutions. Druids would protect grove while it slowly purges taint through own ancient magic. Years rather than days, wisdom of patience rather than impatience for instant results.`,
			next: 'shipwreck_discovery',
			effects: { wisdom: 6 },
			hiddenEffects: {
				grove_recovering: true,
				nature_respected: true,
				rowan_bond: 20,
				patient_wisdom: true
			}
		}
	]
};

export const ShipwreckDiscovery: Scene = {
	id: 'shipwreck_discovery',
	text: `Marina reports discovery of ancient shipwreck in deep waters beyond where most surface vessels dare venture - vessel from kingdom's founding era lying perfectly preserved in cold darkness, protected from decay by depth and merfolk magic that recognized historical significance. Merfolk are simultaneously excited by find and deeply concerned about implications, emotions complex when dealing with ancestors' complicated history.

"Ship contains artifacts from when humans and merfolk were first forging alliance," Marina explains, voice carrying weight of generational memory that runs deeper in long-lived mer culture. "Tools of cooperation - trade goods, diplomatic gifts, joint navigation charts showing both surface and underwater routes. But also..." She pauses, pain evident. "Also contains weapons specifically designed to kill sea creatures. Harpoons enchanted to pierce mer flesh that normally resists surface weapons, nets that suppress water-breathing magic, poisons that work only on ocean-dwellers. Reminders that even during alliance building, surface folk prepared for potential conflict. That trust was always conditional, always backed by threat."

Your investigation with Marina's guidance reveals ship was commanded by Admiral Theron Silverwood - your direct ancestor from kingdom's founding generation. His journals detail complex early relationship between surface and sea folk with painful honesty: genuine cooperation and shared goals mixed with mutual suspicion and cultural misunderstandings. Alliance built on hope but hedged with weapons, friendship always shadowed by fear. He writes of merfolk saving his sailors from drowning, then in next entry describes ordering weapons forged because he could not fully trust those he called allies. Contradiction of human trying to bridge worlds while keeping one foot ready to retreat.

Recovering artifacts could provide historical legitimacy for modern human-merfolk alliance - physical proof that cooperation has deep roots, that current relationship builds on foundation laid centuries ago. Marina and her people would treasure validation of their ancestors' choice to trust humans. But weapons are painful reminder that trust was never complete, that every partnership was underlain by preparation for betrayal. Some merfolk argue weapons should be destroyed, others that historical truth includes uncomfortable realities, others that everything should remain sealed as respectful recognition that some pasts are too painful to excavate.

Your choice will significantly impact merfolk relations and how both species remember shared history.`,
	choices: [
		{
			id: 'joint-recovery',
			text: `Joint human-merfolk recovery expedition - work together to bring up artifacts, both cooperation tools and weapons, preserving complete historical record. Acknowledge uncomfortable truth that alliance was built with weapons ready, that your ancestor trusted merfolk enough to work with them but not enough to be unarmed. Recovery becomes act of modern alliance proving stronger than historical suspicions, humans and merfolk cooperating to uncover shared past. Marina would appreciate honesty about complicated history rather than pretending it was simple friendship.`,
			next: 'border_skirmish',
			effects: { charisma: 7, wisdom: 5 },
			hiddenEffects: {
				shipwreck_recovered: true,
				merfolk_faction_rep: 30,
				historical_artifacts_gained: true,
				marina_friendship: 25,
				alliance_strengthened: true
			}
		},
		{
			id: 'weapons-destroyed',
			text: `Recover cooperation artifacts but publicly destroy anti-mer weapons - dramatic gesture acknowledging that while historical truth includes weapons, modern alliance requires symbolically rejecting tools of mutual harm. Melt down harpoons and nets in public ceremony with Marina beside you, demonstrate that current generation chooses trust without hedged bets. Powerful symbolic gesture showing you will not follow ancestor's pattern of friendship backed by threat. Merfolk would be profoundly moved by descendant of Admiral Silverwood destroying weapons his ancestor created, breaking cycle of conditional trust.`,
			next: 'border_skirmish',
			effects: { charisma: 8, wisdom: 4 },
			hiddenEffects: {
				shipwreck_recovered: true,
				weapons_destroyed: true,
				merfolk_faction_rep: 40,
				symbolic_gesture: true,
				marina_romance: 25
			}
		},
		{
			id: 'museum',
			text: `Create joint museum dedicated to full historical truth - recover everything and display it all honestly: cooperation artifacts beside weapons, diplomatic gifts beside instruments of war, Admiral Silverwood's hopeful journal entries beside paranoid ones. Museum becomes educational space where both species confront complicated history, learning that alliance was never simple, that trust is always work in progress requiring conscious choice. More honest than destroying uncomfortable evidence, more educational than pretending past was prettier than reality. Marina helps curate, ensuring merfolk perspective is equally represented.`,
			next: 'border_skirmish',
			effects: { wisdom: 8, charisma: 6 },
			hiddenEffects: {
				shipwreck_recovered: true,
				historical_museum_created: true,
				truth_honored: true,
				merfolk_faction_rep: 35,
				educational_legacy: true
			}
		},
		{
			id: 'leave-sealed',
			text: `Leave shipwreck sealed in respectful recognition that some pasts are too painful to excavate - let Admiral Silverwood and his complicated legacy rest in depths, neither celebrating nor condemning. Acknowledge that digging up historical weapons might reopen wounds better left healing, that modern alliance should focus on present and future rather than excavating problematic past. Marina might appreciate sensitivity to merfolk pain, or be disappointed by missed opportunity for historical validation. Safe choice that avoids controversy but also avoids confronting truth.`,
			next: 'border_skirmish',
			effects: { wisdom: 5 },
			hiddenEffects: {
				shipwreck_sealed: true,
				past_respected: true,
				merfolk_neutral: true
			}
		}
	]
};

export const BorderSkirmish: Scene = {
	id: 'border_skirmish',
	text: `Urgent news arrives via exhausted messenger who nearly killed horse riding through night: Shadow Beasts are massing at northern border in unprecedented numbers, gathering in darkness beyond barrier in formations suggesting coordination rather than mindless hunger. Scouts report hundreds of creatures where normally only dozens appear, organized in groups that look disturbingly like military units rather than random monsters. Major attack seems imminent - question is when, not if. Border garrison commander requests immediate reinforcements, warning that without support garrison will be overrun within days, leaving northern territories defenseless and path open for Shadow forces to sweep south toward capital.

Military advisors present multiple options with different strategic implications:

- Personal leadership at front: You could lead reinforcements personally, inspiring troops through presence of heir willing to fight alongside common soldiers. Historically powerful motivator, but exposes you to danger when enemies already seek your death. One well-placed assassination during battle could end Crystal Heart quest and destabilize kingdom simultaneously.

- Send military reinforcements: Dispatch professional soldiers without leading personally, effective solution that addresses immediate tactical problem but lacks inspirational impact. Troops fight better when leader shares danger, resent nobles who send others to die while staying safe.

- Magical barrier enhancement: Use Crystal Heart fragments' power to strengthen dimensional barriers, innovative solution using magic rather than military force. Untested approach that could be brilliant or disastrous - could permanently seal border or accidentally weaken barriers further.

- Diplomatic contact with Shadow Realm: Most controversial option, attempting communication with enemy rather than automatic violence. Based on Sage's research suggesting Shadowrealm is corrupted rather than inherently evil, that Shadow Beasts might be refugees fleeing worse corruption rather than invaders seeking conquest. Could prevent war entirely or catastrophically misread situation, getting peace delegation killed.

This could be prelude to final confrontation, or opportunity to prevent massive casualties through clever thinking rather than reflexive violence. Kieran favors military response, Lyra suggests magical solution, Sage advocates diplomacy, Rowan worries about casualties regardless of approach. Your choice will significantly impact how border crisis resolves and whether peace with Shadow Realm is even possible.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { sage_library: true }
			},
			text: `Sage's research about the Shadowrealm being corrupted rather than evil suddenly feels very relevant. What if this massing isn't for attack, but migration? What if they're fleeing something worse?

"We should try to communicate," Sage urges. "If they're suffering from corruption, maybe we can help. Maybe we don't have to fight."`
		}
	],
	choices: [
		{
			id: 'lead-personally',
			text: `Lead defense personally - ride north with reinforcements, stand on walls alongside garrison soldiers, demonstrate that Silverwood heir does not send others to face dangers they avoid. Inspire troops through shared sacrifice, show that nobility means noble behavior rather than just title. Troops would fight harder knowing their future monarch bleeds beside them, remembers their names, shares their fear and courage. Risky exposing yourself when enemies already hunt you, but profound impact on military loyalty and common respect. Kieran and Rowan would fight beside you with fierce pride.`,
			next: 'climax_preparation',
			effects: { courage: 8, charisma: 6 },
			hiddenEffects: {
				border_secured: true,
				military_hero: true,
				troops_inspired: true,
				kieran_loyalty: 25,
				rowan_bond: 25
			}
		},
		{
			id: 'magical-barrier',
			text: `Enhance barrier with Crystal Heart fragment power - innovative solution using magical resources rather than military force. Channel fragments' dimensional energy into existing barriers, strengthening walls between worlds. Untested approach that could permanently seal border against Shadow incursion or accidentally destabilize barriers further. Requires trusting magical theory over military tradition, prioritizing prevention over combat response. Lyra would guide ritual, using her expertise with dimensional magic. Could revolutionize kingdom's defense or catastrophically backfire - magical solutions always carry that risk.`,
			next: 'climax_preparation',
			effects: { wisdom: 8 },
			hiddenEffects: {
				border_secured: true,
				barrier_enhanced: true,
				magical_solution: true,
				lyra_respect: 25
			}
		},
		{
			id: 'attempt-diplomacy',
			text: `Attempt diplomatic contact with Shadow Realm - revolutionary approach based on Sage's research suggesting Shadowrealm is corrupted victim rather than evil aggressor. What if massing forces are refugees fleeing worse corruption rather than army preparing invasion? What if they seek sanctuary rather than conquest? Attempting communication rather than reflexive violence could prevent catastrophic war or reveal peaceful resolution everyone assumed impossible. Requires tremendous courage approaching enemy with peace offer, risking that you completely misread situation and get killed trying to negotiate with monsters. But if Sage is right, could save countless lives on both sides. Sage would accompany you, research finally tested in reality.`,
			next: 'climax_preparation',
			effects: { wisdom: 9, courage: 7 },
			hiddenEffects: {
				shadowrealm_contacted: true,
				peace_attempted: true,
				revolutionary_diplomacy: true,
				sage_affection: 30,
				potential_peace_path: true
			}
		},
		{
			id: 'combined-defense',
			text: `Coordinate defense with all allies - humans and magical races fighting together in unprecedented cooperation. Elves providing magical artillery, dwarves reinforcing fortifications, dragons patrolling skies, fae disrupting enemy formations, merfolk securing waterways against flanking. United defense demonstrating what kingdom's diverse peoples can achieve together when cooperating fully. Logistically complex coordinating multiple races with different fighting styles, but symbolically powerful and tactically devastating. Legendary defense that would be remembered for generations, living proof that unity creates strength impossible for divided peoples. Every race invested in shared victory.`,
			next: 'climax_preparation',
			effects: { wisdom: 8, charisma: 7 },
			hiddenEffects: {
				border_secured: true,
				unity_demonstrated: true,
				all_races_fighting_together: true,
				legendary_defense: true
			}
		}
	]
};

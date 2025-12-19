import { Scene } from '../../story-manager';

// Magical Training Sequences

const privateChamber = `Lyra leads you to private chamber deep within palace's oldest wing, space that predates current structure by centuries. Ancient stone walls are covered in runes that glow softly in darkness - wards against scrying, against interruption, against any outside influence that might disrupt delicate magical work. Air feels different here, thicker somehow, charged with potential accumulated over generations of magical practice. This chamber has witnessed the awakening of every Silverwood heir's power for three hundred years, walls steeped in tradition and transformation.`;

const birthright = `"Blood magic is your birthright," Lyra begins, teaching voice carrying formal elven cadence yet softened by genuine care for student. "Every ruler of this kingdom has possessed it, though tragically few trained properly. Most relied on instinct alone, never reaching fraction of their potential. It is not about violence or sacrifice as common folk fear - it is about connection to life force flowing through all living things, about will made manifest through understanding of your own vital essence. Magic that comes from within rather than borrowed from external sources."`;

const demonstration = `She demonstrates with practiced grace, drawing single drop of her own blood with needle-sharp precision. Drop floats in air between you, suspended by pure will, glowing with ethereal light that shifts through colors mortal eyes should not perceive. "Your blood carries magic of generations," she explains as light pulses in rhythm with her heartbeat. "Every ancestor who wielded this power has left trace in your bloodline, accumulated potential waiting for awakening. It can heal wounds that would kill ordinary people, protect against attacks both physical and magical, empower allies with your own vitality, and even reveal truth hidden by deception. But it requires absolute control - blood magic responds to emotion as much as intention, making discipline essential. And it demands respect - your life force is not infinite resource to be squandered carelessly."`;

const firstLesson = `Lyra extends her hand toward you, invitation and challenge simultaneously. "First lesson is sensing your own life force before attempting to manipulate it. Feel blood moving through veins, feel heart pumping vital essence to every part of body, feel energy that animates flesh and makes you more than simple matter. Only after recognizing what you are - living magic given form - can you begin to channel that power consciously. Close eyes, focus inward, and tell me what you sense."`;

const awakening = `As you concentrate following her guidance, closing out external distractions to focus purely on internal sensations, you feel something awaken that has always been present but never acknowledged. Warmth spreads from your core - not physical heat but something deeper, fundamental energy that powers every cell. It pulses in rhythm with heartbeat, flows through pathways that map circulatory system but exist on different plane than physical blood vessels. Magic, real and potent, responding to your awareness like sleeping giant stirring at touch. You can feel it now - power inherited from three hundred years of Silverwood rulers, potential that has waited your entire life for recognition. And with recognition comes control, ability to shape this force according to will and intention.`;

export const BloodMagicBasics: Scene = {
	id: 'lyra_magic_lesson_1',
	text: `${privateChamber}

${birthright}

${demonstration}

${firstLesson}

${awakening}`,
	textVariants: [
		{
			conditions: { hasFlags: ['trusts_lyra:true', 'values_magic:true'], hasHiddenAttributes: { lyra_respect: 30 } },
			text: `${privateChamber}

Lyra's usual formality softens. "I've waited for you to be ready for this. Blood magic is intimate - it requires complete trust between teacher and student."

${birthright}

She takes your hand gently. "You've trusted me with your safety, your secrets. Now trust me with your very essence. I will guard this knowledge, and you, with my life."

${demonstration}

${firstLesson}

Her presence is warm, supportive, as the magic awakens. "That's it. I'm here with you. You're not alone in this."

${awakening}`
		},
		{
			conditions: { hasHiddenAttributes: { lyra_romance: 40 } },
			text: `${privateChamber}

Lyra's eyes hold yours with deep emotion. "Blood magic creates a bond between teacher and student. Our life forces will touch, intertwine." She pauses. "Given what's growing between us, this will be... intimate."

${birthright}

${demonstration}

She takes your hand, her touch lingering. "I've taught others, but never someone I..." She doesn't finish, but you understand.

${firstLesson}

As the magic awakens, you feel her presence within it - warm, protective, loving. The connection between you deepens beyond words.`
		}
	],
	choices: [
		{
			id: 'heal-focus',
			text: `Focus on healing magic - learn to mend wounds, cure diseases, restore vitality to those who suffer. Channel your life force to repair broken bodies, using blood's natural regenerative properties amplified by conscious will. Most difficult and most rewarding application of blood magic, requiring empathy to understand what needs healing and precision to avoid causing more harm. Lyra calls this "truest use of ancestral power" - protecting and restoring rather than destroying.`,
			next: 'elemental_control',
			effects: { wisdom: 5 },
			hiddenEffects: {
				magic_student: true,
				lyra_student: true,
				blood_magic_level: 3,
				healing_affinity: true,
				lyra_respect: 15
			}
		},
		{
			id: 'combat-focus',
			text: `Focus on combat magic - learn to empower your strikes, enhance physical abilities beyond mortal limits, create shields from your own vitality. Channel blood's fierce vitality into weapons and warfare, becoming warrior-mage who fights with both blade and life force. Practical choice given threats facing kingdom, preparing you for battles ahead. Lyra understands necessity even as she warns that blood magic used primarily for violence can make wielder more comfortable with bloodshed, changing personality slowly over time.`,
			next: 'elemental_control',
			effects: { courage: 5 },
			hiddenEffects: {
				magic_student: true,
				lyra_student: true,
				blood_magic_level: 3,
				combat_affinity: true,
				lyra_respect: 12
			}
		},
		{
			id: 'truth-focus',
			text: `Focus on truth magic - learn to sense lies and deception, see through illusions, reveal what others hide. Blood recognizes blood, life force reads life force, allowing you to detect when someone speaks falsehood or conceals their true nature. Invaluable for ruler surrounded by political intrigue, able to know who truly serves versus who merely pretends. Lyra notes this is rarest path students choose - most prefer immediate physical applications, but wisdom often matters more than strength. Truth sight changes how you see world, impossible to unknow what you learn.`,
			next: 'elemental_control',
			effects: { wisdom: 6 },
			hiddenEffects: {
				magic_student: true,
				lyra_student: true,
				blood_magic_level: 3,
				truth_sight: true,
				lyra_respect: 18
			}
		},
		{
			id: 'balanced',
			text: `Learn all aspects equally - master none completely but gain versatile foundation in every application of blood magic. Healing when needed, combat when threatened, truth when deceived, never locked into single approach. Takes longer to achieve mastery but provides flexibility that specialists lack. Lyra calls this "path of wise ruler" - someone who must address varied challenges cannot afford to specialize too narrowly. Jack of all magical trades, master of strategic adaptation.`,
			next: 'elemental_control',
			effects: { wisdom: 4 },
			hiddenEffects: {
				magic_student: true,
				lyra_student: true,
				blood_magic_level: 2,
				balanced_magic: true,
				lyra_respect: 15
			}
		}
	]
};

const gardenDawn = `Your second magical lesson takes place in palace gardens at dawn when light is soft and world feels new, filled with possibility. Lyra has prepared training stations representing each classical element with careful attention to authenticity and power: brazier burning with enchanted flames that respond to will rather than fuel, fountain where water flows in patterns defying gravity, bed of rich earth that shifts and moves when commanded, and open air where wind swirls visibly with concentrated magical energy. Each station pulses with elemental essence, pure expressions of fundamental forces that comprise reality itself.`;

const foundation = `"Blood magic is your foundation," Lyra explains as she guides you between stations, "but it can channel through elements to achieve effects impossible through life force alone. Blood provides power source and control, elements provide expression and amplification. Together they allow mage to reshape world rather than merely affecting living things." She demonstrates with practiced mastery - her blood magic flowing into flames makes them dance in intricate patterns, channeling through water causes it to rise in impossible shapes, directing through earth shifts soil like ocean waves, guiding through air creates localized windstorm. "Each element requires different mindset, different emotional approach, different understanding of physical laws you are temporarily overwriting."`;

const elementalNature = `"Fire requires passion and unwavering will - hesitation means flames consume you rather than obeying," she explains while demonstrating controlled inferno. "Water needs fluidity and adaptation - trying to force water into rigid patterns is like trying to grab running river. Earth demands patience and overwhelming strength - moving stone is possible but requires sustained effort that cannot waver. Air seeks freedom and expanded awareness - wind goes where it wishes, can only be guided never truly controlled." She looks at you seriously, centuries of teaching experience making her aware of common mistakes. "Most mages specialize in one or two elements matching their personality and aptitude. Masters can wield three elements competently. Legends speak of those who mastered all four - handful of names across entire history, powers so great they reshaped geography and founded civilizations."`;

const chooseElement = `She gestures to training stations arranged in cardinal directions. "Begin with element that calls to you most strongly. Let your instinct guide choice - magic responds to natural affinity better than forced effort. Fire for those with passionate souls, water for adaptive minds, earth for patient hearts, air for free spirits. Or..." she pauses, studying you with ancient eyes, "attempt to learn all four if you believe yourself capable of legendary achievement. I will teach whichever path you choose, but understand that mastery requires not just magical power but fundamental understanding of element's essential nature."`;

export const ElementalControl: Scene = {
	id: 'lyra_magic_lesson_2',
	text: `${gardenDawn}

${foundation}

${elementalNature}

${chooseElement}`,
	textVariants: [
		{
			conditions: { hasFlags: ['natural_aptitude:true', 'magical_prodigy:true'], hasHiddenAttributes: { lyra_respect: 40 } },
			text: `${gardenDawn}

Lyra's eyes shine with pride as she watches you work. "You've exceeded every expectation. Most students take months to reach your level - you've done it in weeks."

${foundation}

"I've trained for two hundred years," she admits. "And I've never seen anyone progress like you. You're not just talented - you're extraordinary."

${elementalNature}

She touches your shoulder warmly. "I'm honored to teach you. Truly honored."

${chooseElement}`
		},
		{
			conditions: { hasHiddenAttributes: { blood_magic_level: 5 } },
			text: `Your advanced blood magic training makes elemental channeling easier. Lyra notices your progress with impressed surprise.

"You're progressing faster than anyone I've taught," she admits. "Your natural aptitude is remarkable. Perhaps you could master multiple elements after all."

She grows more serious. "But remember - power without wisdom is dangerous. Make sure your heart and mind grow alongside your abilities."`
		}
	],
	choices: [
		{
			id: 'fire-mastery',
			text: `Study fire magic intensively - master element of passion, transformation, and destruction. Learn to summon flames from nothing, shape infernos with thought, use fire for both combat and purification. Fire responds to strong emotions and decisive action, rewarding boldness while punishing hesitation. Most aggressive element, most immediately powerful in combat situations. Lyra warns that fire mages often become more passionate in all things - quicker to anger but also more capable of fierce love, burning bright in everything they do.`,
			next: 'rune_crafting',
			effects: { courage: 6 },
			hiddenEffects: {
				elemental_magic_learned: true,
				fire_affinity: true,
				elemental_control: 5,
				blood_magic_level: 5
			}
		},
		{
			id: 'water-mastery',
			text: `Study water magic intensively - master element of healing, adaptation, and life itself. Learn to manipulate water in all its forms, from gentle rain to crushing waves, from ice to steam. Water magic excels at healing because water composes living bodies, making it natural medium for restoration. Also provides defensive capabilities - water shields, fog concealment, ice barriers. Most versatile element for problem-solving, finding paths around obstacles rather than through them. Lyra notes water mages tend to become more emotionally intelligent, better at reading people and adapting to social situations.`,
			next: 'rune_crafting',
			effects: { wisdom: 6 },
			hiddenEffects: {
				elemental_magic_learned: true,
				water_affinity: true,
				elemental_control: 5,
				blood_magic_level: 5,
				healing_magic_learned: true
			}
		},
		{
			id: 'earth-mastery',
			text: `Study earth magic intensively - master element of stability, protection, and endurance. Learn to shape stone, move mountains given sufficient time, create fortifications from raw earth, sense vibrations through ground. Earth magic provides unmatched defensive capabilities and connection to land itself, making you aware of everything touching ground within range. Slowest element but most reliable, requiring patience but offering certainty. Lyra observes earth mages become more grounded emotionally, harder to shake or panic, steady as bedrock in crisis situations.`,
			next: 'rune_crafting',
			effects: { wisdom: 5, courage: 3 },
			hiddenEffects: {
				elemental_magic_learned: true,
				earth_affinity: true,
				elemental_control: 5,
				blood_magic_level: 5
			}
		},
		{
			id: 'air-mastery',
			text: `Study air magic intensively - master element of freedom, perception, and communication. Learn to command winds, fly through focused air currents, hear conversations carried on breeze, sense disturbances in atmosphere. Air magic enhances perception dramatically, grants mobility unmatched by other elements, and allows communication across vast distances. Most subtle element, hardest to defend against because air is everywhere. Lyra mentions air mages often become more intuitive and perceptive, better at reading situations and seeing connections others miss, minds as free-ranging as wind itself.`,
			next: 'rune_crafting',
			effects: { wisdom: 7 },
			hiddenEffects: {
				elemental_magic_learned: true,
				air_affinity: true,
				elemental_control: 5,
				blood_magic_level: 5,
				enhanced_perception: true
			}
		},
		{
			id: 'all-elements',
			text: `Attempt to learn all four elements - ambitious path toward legendary mastery that only handful of mages in history have achieved. Requires understanding fundamental nature of each element while maintaining balance between contradictory philosophies: fire's passion with water's adaptability, earth's stability with air's freedom. Extraordinarily difficult training regimen that will push you to absolute limits of capability. If successful, you would join ranks of greatest mages who ever lived - founders of magical traditions, shapers of nations. Lyra is simultaneously excited by your ambition and concerned about setting impossible standards. But her elven eyes show belief that you might actually succeed where so many failed.`,
			next: 'rune_crafting',
			effects: { wisdom: 8, courage: 5 },
			hiddenEffects: {
				elemental_magic_learned: true,
				all_elements: true,
				elemental_control: 8,
				blood_magic_level: 7,
				legendary_potential: true,
				lyra_amazed: true
			}
		}
	]
};

export const RuneCrafting: Scene = {
	id: 'finn_runes',
	text: `Finn's personal forge is warmer and infinitely more welcoming than sterile palace training rooms - space that smells of metal and oil and honest work, filled with tools worn smooth by generations of use. They have set up dedicated workbench with materials rarely seen outside dwarven mountain holds: runestones quarried from deep earth where magic pools naturally, enchanted chisels that can carve symbols into any material without dulling, glowing reagents that fix runes permanently into whatever surface they mark. Forge fire provides warm background accompaniment, rhythmic heartbeat of craftwork.

"Dwarven rune magic is fundamentally different from your blood magic," Finn explains cheerfully, genuine enthusiasm for their craft evident in every word. "Blood magic is immediate, powerful, personal - drawing from your own life force for instant effects. Rune magic is about permanence, craftsmanship, patience. It is about imbuing objects with lasting power that endures long after mage who created it has died. Takes far more time than casting spell, requires precision and care rather than dramatic gestures. But creates effects that endure for centuries without fading, magic that becomes part of object itself rather than temporary enchantment."

They demonstrate with practiced skill accumulated over decades of forge work, carefully etching runes into metal bracelet with movements that blend artistry and precision engineering. Each symbol must be exactly right - proper depth, correct proportions, specific ordering. As they work with focused concentration, runes begin to glow with their own inner light, power awakening as patterns reach completion. "Protection rune, see?" Finn holds up finished bracelet proudly. "Whoever wears this gets magical shielding against physical and mystical attacks both. Not as powerful as active defensive spell cast by mage, but always active, never requiring concentration, never fading even if wearer sleeps or is unconscious. That is value of rune magic - reliability and permanence."

Finn hands you tools with encouraging smile. "Creating runes is meditation and art combined into single practice. Each stroke must be absolutely precise - one mistake ruins entire sequence, forces you to start over. Each symbol must be meaningful, drawn with understanding of what it represents rather than simply copying shapes. Rushing ruins everything, impatience causes failure. Good thing we have all night and plenty of ale to keep us company!" They grin with infectious good humor that makes grueling work feel like privilege.

Work is indeed meticulous, requiring focus and care that tests patience in ways combat or diplomacy never do. But there is something deeply satisfying about creating lasting magic with your own hands, watching power emerge from careful craftsmanship rather than dramatic spellcasting. Each completed rune feels like small victory, permanent improvement to world that will endure long after you are gone.`,
	choices: [
		{
			id: 'protection-runes',
			text: `Learn protection runes - master dwarven defensive magic that shields wearer from harm. Study runes for physical protection against weapons, magical shielding against spells, wards against specific dangers like fire or poison. Create items that keep loved ones safe, fortifications that defend territory, personal talismans that guard against assassination. Most popular rune specialty because protection matters to everyone. Finn teaches with special care, noting that good protection rune can mean difference between life and death when spell caster is not present to defend actively.`,
			next: 'spirit_communion',
			effects: { wisdom: 5 },
			hiddenEffects: {
				rune_magic_learned: true,
				protection_runes_known: true,
				finn_friendship: 20,
				practical_magic: true
			}
		},
		{
			id: 'enhancement-runes',
			text: `Learn enhancement runes - study dwarven magic that improves weapons, armor, and personal capabilities. Runes that make blades sharper and never dull, armor lighter but stronger, boots that never tire wearer. Enhancement magic that turns ordinary equipment into legendary artifacts, giving common soldiers advantages usually reserved for heroes. Finn particularly enjoys teaching this because it democratizes power - well-runed equipment allows less magically gifted to compete with natural spell casters. Craftsmanship triumphing over inherited talent.`,
			next: 'spirit_communion',
			effects: { courage: 4, wisdom: 3 },
			hiddenEffects: {
				rune_magic_learned: true,
				enhancement_runes_known: true,
				finn_friendship: 18,
				combat_improved: true
			}
		},
		{
			id: 'detection-runes',
			text: `Learn detection runes - master dwarven sensing magic that reveals hidden dangers and concealed magic. Runes that warn of poison in food, alert to nearby hostile intent, reveal invisible enemies, detect magical surveillance. Tactical advantages that have saved countless dwarven holds from infiltration and assassination. Finn emphasizes these are thinking person's runes - not flashy like combat magic, but preventing problems before they occur is wiser than fixing them after. Perfect for ruler facing political intrigue and hidden enemies plotting in shadows.`,
			next: 'spirit_communion',
			effects: { wisdom: 6 },
			hiddenEffects: {
				rune_magic_learned: true,
				detection_runes_known: true,
				finn_friendship: 19,
				tactical_advantage: true
			}
		},
		{
			id: 'comprehensive',
			text: `Study all rune types comprehensively - become versatile runecrafter who can create any dwarven enchantment. Master protection, enhancement, and detection equally, able to address any problem through permanent magical solutions. Lengthy training requiring dedication over many nights in Finn's forge, building genuine mastery through repetition and refinement. Finn is delighted by your commitment to their craft, treating you less like student and more like apprentice being prepared to carry on tradition. Comprehensive knowledge means you can equip entire party with custom runed gear, fortify locations permanently, create magical infrastructure that serves kingdom for generations.`,
			next: 'spirit_communion',
			effects: { wisdom: 7 },
			hiddenEffects: {
				rune_magic_learned: true,
				comprehensive_runes: true,
				finn_friendship: 25,
				finn_romance: 15,
				master_craftsman_potential: true
			}
		}
	]
};

export const SpiritCommunion: Scene = {
	id: 'spirit_communion',
	text: `Lyra takes you to sacred grove at midnight during new moon when normal world sleeps and magical realm awakens, when veil between living and dead grows thin enough to pierce without catastrophic consequences. Darkness is absolute except for bioluminescent fungi growing on ancient trees, providing just enough light to see path without dispelling atmosphere of otherworldliness. Air feels different here - thicker, charged with presence of things unseen but deeply felt. This grove has been used for spirit communion since kingdom's founding, ground consecrated by three centuries of rituals calling to those who came before.

"Your ancestors watch over realm even after death," Lyra explains in hushed tones that feel appropriate to sacred space, voice carrying reverence for forces beyond mortal understanding. "Not just your blood family - those related by genetics - but all who served kingdom justly during their lives and chose to remain as guardians after passing. Warriors who died defending borders, scholars who spent lives accumulating wisdom, healers who saved countless citizens, rulers both great and flawed. They maintain connection to land they loved, offering guidance to living when properly contacted. But spirit magic is delicate, dangerous if performed incorrectly. Spirits are not servants to be commanded but allies to be respectfully invited."

She teaches you ritual with patient precision, knowing mistakes could have serious consequences: specific words in ancient language predating modern tongue, gestures that must be executed exactly, offerings that honor dead without insulting their memory. Candles arranged in pattern matching constellation visible only during new moon, herbs that produce smoke carrying prayers to spiritual realm, your own blood freely given as connection between living heir and dead ancestors. As you perform ritual following her careful guidance, air grows impossibly colder despite summer night, breath visible in sudden chill. Space between trees begins to shimmer with otherworldly light - not natural illumination but something emerging from different dimension overlapping this one.

Shapes begin to form from shimmering light, translucent figures of those long dead but not forgotten, warriors in ancient armor, scholars in robes from different era, healers carrying symbols of their trade. They look almost solid, detailed enough to see expressions, but remain fundamentally not-physical, existing between states of being.

One spirit steps forward from gathered crowd - woman in battle-worn armor bearing Silverwood crest prominently on breastplate, face showing both strength and compassion earned through hard-won experience. "Heir of my bloodline," she speaks, voice echoing strangely as if coming from distance despite standing close, carrying weight of authority accumulated through lifetime of leadership and century of observation from beyond, "you stand where I once stood, bearing burden I remember carrying. Weight is heavy as I knew well, but you need not carry it alone as I foolishly tried. We are with you - all who came before, all who chose to remain as guardians. Our wisdom, our strength, our love for kingdom that transcended death itself. Call upon us when darkness threatens, and we shall answer."

Other spirits gather closer - warriors who defended realm against threats now forgotten by history, scholars who accumulated knowledge now lost to living, healers who understood arts modern medicine has yet to rediscover, rulers whose successes and failures taught lessons across generations. Generations of Silverwood ancestors all offering their accumulated strength, wisdom earned through centuries of collective experience watching over kingdom they helped build.`,
	choices: [
		{
			id: 'wisdom-request',
			text: `Request ancestral wisdom for coming trials - ask spirits to share knowledge accumulated through centuries of ruling, lessons learned through success and failure both. They have seen patterns repeat across generations, watched same mistakes made repeatedly, observed what works versus what sounds good but fails in practice. Their perspective transcends single lifetime, offering strategic insight impossible for living to achieve. Wisdom about politics, warfare, magic, leadership - everything previous Silverwoods learned now available to guide you. Most valuable gift for ruler facing unprecedented challenges.`,
			next: 'shadow_magic_temptation',
			effects: { wisdom: 8 },
			hiddenEffects: {
				spirit_magic_learned: true,
				ancestral_wisdom_gained: true,
				spirit_guidance: true,
				lyra_respect: 20
			}
		},
		{
			id: 'strength-request',
			text: `Request ancestral strength for battle ahead - ask warrior spirits to lend their power in combat, channeling centuries of martial excellence through your body when fighting. They remember techniques forgotten by living, carry battle experience from hundreds of conflicts, can guide your strikes with precision earned through lifetimes of warfare. When you fight, you fight with strength of entire bloodline backing every blow. Particularly valuable given Shadow Beast threat and enemies seeking your death. Warrior ancestors eager to defend realm they died protecting.`,
			next: 'shadow_magic_temptation',
			effects: { courage: 7 },
			hiddenEffects: {
				spirit_magic_learned: true,
				ancestral_strength_gained: true,
				warrior_spirits: true,
				lyra_respect: 18
			}
		},
		{
			id: 'healing-request',
			text: `Request healing knowledge to help your people - ask healer spirits to teach you medical arts lost to modern practice, magical healing techniques refined over centuries. They remember plague treatments that saved thousands, battlefield medicine that kept warriors alive, restorative magic that cured diseases thought incurable. Their knowledge could transform you into legendary healer, able to address suffering throughout kingdom. Most compassionate choice, prioritizing service to people over personal power. Healer spirits deeply moved by ruler who seeks power specifically to help rather than simply to possess.`,
			next: 'shadow_magic_temptation',
			effects: { wisdom: 7, charisma: 3 },
			hiddenEffects: {
				spirit_magic_learned: true,
				ancestral_healing: true,
				healing_magic_learned: true,
				healer: true,
				lyra_respect: 22
			}
		},
		{
			id: 'conversation',
			text: `Simply talk with them - forego requesting specific powers in favor of knowing your history personally. Ask about their lives, their struggles, what they learned, what they regret. Hear stories never recorded in official chronicles, understand Silverwood legacy as lived experience rather than abstract history. Form emotional connection to ancestors as people rather than just sources of power. They appreciate being seen as individuals with stories worth hearing rather than merely magical resources to exploit. Most human choice, recognizing that wisdom comes from understanding those who came before as fully realized people.`,
			next: 'shadow_magic_temptation',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				spirit_magic_learned: true,
				ancestral_connection: true,
				history_learned: true,
				emotional_bond: true,
				lyra_respect: 20
			}
		}
	]
};

export const ShadowMagicTemptation: Scene = {
	id: 'shadow_magic_temptation',
	text: `Shadow finds you alone one evening in quiet corner of palace gardens where moonlight does not quite reach, their timing deliberate - offering what follows when no advisors present to counsel against it. Their expression is serious, almost concerned in way you rarely see from person who usually maintains careful emotional distance. This is not manipulation or seduction but genuine warning from someone who knows exactly what they are offering and what it costs.

"I can teach you shadow magic," they say quietly, voice lacking usual sardonic edge, replaced by somber honesty. "The magic assassins use for generations - moving through darkness as if it were doorway, becoming invisible even in lit rooms, striking from nowhere and vanishing before victims can respond, sensing others through shadows they cast. Magic of stealth, infiltration, assassination." They pause, making sure you understand gravity before continuing. "It is extraordinarily powerful, more versatile than blood magic for certain applications. Spies cannot detect shadow mage properly trained, guards cannot catch what moves through darkness itself, enemies cannot fight opponent they cannot see or track."

They meet your eyes with unusual directness, vulnerability showing through carefully maintained barriers. "But it is dangerous in ways having nothing to do with combat risk. Shadow magic feeds on darkness - literal shadow but also metaphorical darkness within wielder. Every time you use it, you draw on parts of yourself that should perhaps stay dormant: capacity for violence, comfort with deception, willingness to harm others for greater good. Use it too much, rely on it too heavily, and it changes you gradually without you noticing. Makes you colder, more detached from normal human emotions, comfortable with violence that should horrify you. Assassin's mind becomes necessary for assassin's magic, creating feedback loop that transforms personality slowly over years." Their voice drops to near whisper. "It is what happened to me. I started using shadow magic for what seemed like good reasons - protecting people, stopping worse villains. And slowly, imperceptibly, it twisted me into something else. Something that could kill without remorse, could betray without guilt, could watch suffering without feeling. Monster wearing human skin."

Shadow's warning is painfully genuine, cost of honesty evident in how difficult admission is for them. "I am offering because you might genuinely need it for what is coming. You face assassins who already use shadow magic, Shadow Beasts that exist literally in darkness, enemies who plot in shadows waiting for opportunity to strike when you cannot see them. Having shadow magic would give you enormous tactical advantage in every confrontation ahead. Level playing field against those who already wield darkness." They look away, old shame and new hope warring in expression. "But I would understand completely if you refuse. Maybe even respect you more for it, for choosing to remain who you are rather than accepting power that might corrupt. Your choice to make - pragmatic advantage versus moral safety, effective tools versus clean conscience."`,
	choices: [
		{
			id: 'refuse-firmly',
			text: `Refuse firmly - recognize that some powers are not worth cost regardless of tactical advantages. Tell Shadow you appreciate their honesty and their willingness to warn you about dangers, but that you will find other ways to face enemies in darkness. That becoming monster to fight monsters is losing even while winning, that preserving who you are matters more than gaining every possible advantage. Your refusal demonstrates moral strength Shadow wished they had possessed when offered same choice years ago. They respect your decision deeply, seeing it as validation of redemption path they now walk.`,
			next: 'healing_arts',
			effects: { wisdom: 8 },
			hiddenEffects: {
				shadow_magic_refused: true,
				shadow_redeemed: 25,
				moral_strength: true,
				shadow_respect: 25
			}
		},
		{
			id: 'limited-use',
			text: `Learn basics but promise to use sparingly - accept that reality sometimes requires tools you wish you did not need, but commit to using shadow magic only when absolutely necessary rather than as primary approach. Learn enough to defend against enemy shadow mages, to understand how assassins think and move, to have option available for situations where alternatives fail. But maintain it as last resort rather than first choice, relying on other magics primarily. Wisdom of pragmatism tempered by moral awareness. Shadow helps you set boundaries and warning signs to watch for corruption beginning.`,
			next: 'healing_arts',
			effects: { wisdom: 6, courage: 4 },
			hiddenEffects: {
				shadow_magic_learned: true,
				corruption_risk: 1,
				controlled_darkness: true,
				shadow_friendship: 20
			}
		},
		{
			id: 'full-training',
			text: `Accept full training in shadow magic - trust yourself to resist corruption that claimed Shadow, believing your moral foundation strong enough to wield darkness without being consumed. Learn every technique assassins know: becoming shadow, moving through darkness, striking invisibly, sensing through shadows. Gain enormous tactical advantages but accept associated risks. Confident or perhaps arrogant assumption that you can succeed where many failed, that your will is stronger than magic's corrupting influence. Shadow trains you thoroughly while watching carefully for early warning signs of personality changes they experienced, hoping you prove stronger than they were.`,
			next: 'healing_arts',
			effects: { courage: 7, wisdom: 3 },
			hiddenEffects: {
				shadow_magic_learned: true,
				corruption_risk: 3,
				darkness_mastery: true,
				shadow_friendship: 18,
				power_at_cost: true
			}
		},
		{
			id: 'redemption-path',
			text: `Learn shadow magic specifically to help Shadow find redemptive uses - work together exploring whether darkness can be wielded for genuine good rather than violence, whether assassin's magic can serve healer's purpose. Use shadow magic for concealment that protects rather than threatens, for moving unseen to help rather than harm, for understanding darkness as tool rather than identity. Revolutionary approach that could transform what shadow magic means, proving that magic itself is not evil only applications. Shadow is deeply moved by willingness to walk this difficult path with them, seeing it as partnership in redemption that validates their hope for change.`,
			next: 'healing_arts',
			effects: { charisma: 7, wisdom: 5 },
			hiddenEffects: {
				shadow_magic_learned: true,
				corruption_risk: 1,
				redemptive_darkness: true,
				shadow_redeemed: 30,
				shadow_romance: 20,
				transforming_darkness: true
			}
		}
	]
};

export const HealingArts: Scene = {
	id: 'healing_magic',
	text: `After witnessing profound suffering throughout capital - injuries from Shadow Beast attacks leaving citizens maimed and traumatized, illnesses from poverty that medicine cannot address because victims cannot afford treatment, psychological trauma from violence and loss that breaks people as thoroughly as physical wounds - you are determined to learn healing magic comprehensive enough to actually address pain you have seen. Watching people suffer when you have power to help but lack knowledge to apply it effectively has become intolerable.

Lyra agrees to teach you with visible approval for your motivations, but immediately provides sobering warnings about what healing magic truly requires. "Healing magic is among most difficult magical disciplines to master," she explains with seriousness befitting subject. "It requires not just raw magical power which you possess, but also perfect precision since mistakes can kill rather than cure, deep empathy to understand what wholeness means for each unique individual, and willingness to take on others' pain as part of healing process. True healing does not just close wounds superficially - it restores genuine wholeness to body, mind, sometimes spirit. That means understanding what wholeness means for person you are healing, seeing them as complete individual rather than collection of symptoms."

She demonstrates technique on injured bird found in gardens, small creature with broken wing that would normally heal crooked if at all. Her magic flows through touch with visible glow, but her face shows concentration and discomfort simultaneously. Bird's wing straightens, bones knitting properly, but Lyra winces as if she felt pain herself. "See?" she says when healing completes and bird flies away successfully. "Healing requires opening yourself to patient's suffering before you can fix it. You must feel their pain to understand what needs repair, must experience their trauma to guide restoration properly. That is price of being true healer - carrying some of their suffering, taking portion of their burden onto yourself." She looks at you with ancient eyes that have witnessed too much suffering across centuries. "Are you prepared to feel their pain? To carry some of their suffering? To take portion of world's hurt into your own heart and soul? That is price healers pay for power to help - we cannot remain untouched by pain we address."

Training is emotionally intense in ways combat or political instruction never approached. You practice on animals first - injured creatures brought by groundskeepers who know you are learning healing - then on volunteer patients from city who heard heir might help them. Each healing requires you to open yourself completely to their hurt before you can fix it, experiencing their pain, fear, despair as if it were your own. Broken bones that make you gasp with phantom agony, diseases that flood you with nausea and weakness, emotional trauma that leaves you crying for suffering that is not technically yours but feels real nonetheless. It is exhausting and heartrending, leaving you drained after each session. But it is also profoundly meaningful - watching grateful smiles replace anguished tears, seeing people return to families whole after believing themselves permanently broken, knowing you made tangible difference in lives that matter. Purpose and pain intertwined inseparably, cost and reward of choosing to help.`,
	choices: [
		{
			id: 'physical-healing',
			text: `Focus on physical wound healing - master repairing broken bones, closing cuts, curing diseases, restoring damaged bodies to health. Most immediately practical application saving lives in tangible visible ways. Learn to heal combat injuries that would kill or cripple, address illnesses that ravage poor communities lacking medical care, restore function to bodies damaged by accident or violence. Become physician-mage whose skills work on anyone regardless of their ability to pay, providing healthcare as public service. Commons would revere you as healer who actually helps them rather than just politician making promises. Lyra emphasizes that physical healing is foundation - must master body before attempting more complex mind or spirit work.`,
			next: 'climax_preparation',
			effects: { wisdom: 6 },
			hiddenEffects: {
				healing_magic_learned: true,
				healer: true,
				physical_healing_mastery: true,
				lyra_respect: 20,
				commoner_respect: 25
			}
		},
		{
			id: 'emotional-healing',
			text: `Study emotional and trauma healing - learn to mend broken hearts, address psychological wounds, help those suffering from grief, fear, despair that cannot be fixed with physical medicine. Most difficult healing specialty because emotional damage is complex and personal, requiring deep empathy and wisdom to address properly. Help veterans traumatized by combat, survivors of violence dealing with ongoing fear, bereaved struggling with loss, those broken by abuse or betrayal. Healing that changes no visible wounds but transforms lives just as profoundly. Lyra notes that emotional healers are rarest and most valuable because most mages lack emotional intelligence required for this work. Compassionate expertise that addresses suffering often ignored.`,
			next: 'climax_preparation',
			effects: { charisma: 6, wisdom: 5 },
			hiddenEffects: {
				healing_magic_learned: true,
				healer: true,
				emotional_healing_learned: true,
				lyra_respect: 22,
				compassionate_healer: true
			}
		},
		{
			id: 'comprehensive-healing',
			text: `Master all healing arts comprehensively - become legendary healer who can address any form of suffering whether physical, emotional, or spiritual. Learn to heal body, mend mind, restore soul itself when trauma damages fundamental sense of self. Extraordinarily difficult path requiring years of dedicated study condensed into intensive training that pushes you to absolute limits of capability and empathy. But success would make you healer of type appearing once per generation - someone who can truly make people whole regardless of what broke them. Lyra has never successfully trained master healer before, most students specializing rather than attempting comprehensive mastery. Your success would be her greatest teaching achievement and your greatest service to people who need healing desperately.`,
			next: 'climax_preparation',
			effects: { wisdom: 9, charisma: 5 },
			hiddenEffects: {
				healing_magic_learned: true,
				healer: true,
				master_healer: true,
				lyra_respect: 25,
				lyra_romance: 20,
				legendary_healer: true,
				commoner_respect: 35
			}
		},
		{
			id: 'battle-healing',
			text: `Focus on battlefield healing - specialize in keeping warriors alive during combat, healing injuries quickly under terrible conditions while fighting continues around you. Different from peaceful clinic healing - requires working fast with imperfect information, prioritizing who can be saved versus who is beyond help, maintaining concentration while surrounded by violence and death. Combat medic magic that saves soldiers who would otherwise die before reaching safety. Kieran and military commanders would value this enormously - healer who can function on battlefield is worth dozen soldiers. Practical specialization for person who will likely see combat, able to keep companions and troops alive when it matters most.`,
			next: 'climax_preparation',
			effects: { courage: 6, wisdom: 5 },
			hiddenEffects: {
				healing_magic_learned: true,
				healer: true,
				combat_healing: true,
				lyra_respect: 20,
				military_faction_rep: 25,
				kieran_loyalty: 20
			}
		}
	]
};

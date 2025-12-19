import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Finn
 * Progression: Reluctant Artist → Trusted Friend → Romantic Interest (optional)
 * Themes: Class solidarity, artistic rebellion, workers' rights, beauty despite pain
 */

export const FinnBonding1: Scene = {
	id: 'finn_bonding_1',
	text: `You find Finn in a forgotten manor room tucked away in wing that servants rarely clean anymore, dust motes dancing in afternoon sunlight streaming through cracked window as he sketches in secret with intensity suggesting this private artistic ritual matters more than any official duty ever could. His drawings are breathtaking in ways that transcend technical skill to capture something essential about human suffering and resilience - scenes of Ironforge mines rendered in charcoal showing claustrophobic darkness and exhausted workers, faces etched with lines that speak to years of grinding labor without respite, beauty discovered within suffering through artist's eye that refuses to look away from difficult truths most nobility prefers to ignore. Each drawing pulses with raw emotion and careful observation that could only come from someone who lived these scenes rather than just imagining them from comfortable distance.

He jumps when you enter, nearly dropping charcoal in startled reaction, immediately trying to hide his work by covering drawings with cloth as if they're contraband that could get him punished rather than art that deserves recognition. The defensive gesture speaks volumes about his expectation of judgment from nobility.

"Your Highness," he says with barely concealed resentment that drips from formal title like acid, sharp edges of class anger showing through thin veneer of required politeness. "Lost?" There's that chip on his shoulder again massive and unmistakable, expecting judgment or dismissal or perhaps worst of all that performative noble sympathy that acknowledges suffering without actually doing anything to address it. His body language screams defensiveness - shoulders hunched protectively, jaw tight with suppressed anger, eyes darting between you and his drawings as if calculating how to minimize damage from this unwanted intrusion.

But you saw the art before he could hide it completely. Saw the raw talent and profound pain captured there in charcoal lines that convey more truth than most official histories ever acknowledge. "Those drawings," you say carefully choosing words that feel inadequate for magnitude of what you witnessed. "They're incredible. Genuinely extraordinary work that captures something essential."

Finn's jaw tightens visibly, muscle jumping as he clenches teeth against automatic angry response. "Don't pretend to understand what you're seeing. You're nobility living in comfort provided by others' suffering. What do you actually know about the pain I draw beyond abstract intellectual appreciation?" Voice sharp with defensive anger born from years of nobles either dismissing his work entirely or worse, praising it while doing nothing to address injustices it depicts. He's hurting and expects you to hurt him more.`,
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
	text: `Finn stares at you with expression that cycles through suspicion, surprise, and gradual cautious consideration as he processes your response and tries to determine whether you're genuinely different from other nobles or just better at performing sympathy. The silence stretches uncomfortably as he weighs something internal, some calculation about whether vulnerability here will be met with understanding or exploitation. Then, slowly with visible reluctance warring against desperate need to share burden he's carried alone, he shows you the drawings properly, arranging them so you can see them clearly rather than hiding them away.

"This is my father," he says quietly, pointing to a sketch rendered with loving detail to a man with twisted, ruined hands depicted so realistically you can almost feel the pain radiating from damaged flesh. The hands that should show strength of master craftsman instead show cruel destruction, fingers bent at wrong angles, scarred tissue covering what were once skilled tools. "Master blacksmith. Best in Ironforge according to everyone who saw his work - perfect precision, artistic beauty, structural integrity all combined in ways few artisans achieve. Duke Thorin wanted a demonstration when hosting important guests - forge a ceremonial blade with perfect artistry to show off kingdom's craftsmanship, ridiculous deadline that left no margin for error or the natural processes metal requires for quality work."

His voice hardens with remembered rage that's clearly never diminished despite years passing. "My father tried because refusing Duke's direct order meant punishment anyway. Worked three days straight without sleep, pushing himself beyond safe limits because he had no choice. The metal was too cold, brittle from being rushed through stages that require patience. The blade shattered during tempering when molecular structure couldn't handle stress - predictable outcome of impossible deadline any experienced smith would have foreseen but Duke didn't care about craft realities." 

Finn's own hands clench unconsciously, mimicking his father's pain through sympathetic muscle memory. "Duke Thorin was embarrassed in front of important guests who'd come specifically to see demonstration. His pride was hurt by public failure of craftsman he'd personally commissioned. So he ordered my father's hands broken with hammer right there in front of everyone as lesson about consequences of embarrassing nobility. 'Failed hands don't deserve their skill,' he said casually as if destroying master craftsman's livelihood and identity was reasonable response to circumstances he himself created through impossible demands."

His voice cracks with pain that's clearly as fresh now as it was years ago. "I was twelve years old. Watched them do it while being held by guards so I couldn't interfere. Heard his screams echoing in forge while Duke calmly discussed hunting plans with his guests as if nothing significant was happening. Watched my father's face contort in agony and his spirit break along with his bones. He never forged again despite attempting to relearn with ruined hands that couldn't grip properly or withstand heat or perform precise movements master work requires. Died five years later, hands still useless twisted mockeries, spirit completely broken by losing identity and purpose that defined him. All because some noble was insulted by circumstances beyond craftsman's control."

He looks at you with raw pain and anger blazing in eyes that have seen too much injustice at too young an age. "That's what I draw. That's what I'm trying to make people see and remember and feel angry about. That's what your kind does to mine with casual cruelty that doesn't even register as significant to nobility. Pretty words about reform and progress don't bring back my father's hands or give him back the fifteen years he should have had. Promises don't undo broken bones and broken spirits. This is reality of noble rule when you're on receiving end."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { honest_acknowledgment: true }
			},
			text: `Seeing your genuine horror that can't be faked and willingness to acknowledge terrible reality without defensive excuses, Finn's anger cracks visibly like ice breaking under pressure revealing raw vulnerability beneath protective rage. "You really don't know the full extent, do you? Sitting up in your castle surrounded by servants who handle unpleasant realities before they reach your awareness, you don't see the daily brutality that common folk experience as normal background of existence. The beatings for minor infractions, the exploitation that extracts maximum labor for minimum compensation, the casual cruelty that nobility inflicts without even recognizing it as cruelty because dehumanizing lower classes makes it easier to benefit from their suffering." His voice breaks completely as walls crumble. "My father wasn't even unusual case. That's just... that's just life for common folk living under noble rule. His story is one of thousands that nobody bothers recording in official histories that focus exclusively on noble achievements while ignoring human cost of building those achievements."

He wipes his eyes roughly with back of hand, smearing charcoal across his cheeks but not caring about appearance when emotions overflow containment. "I wanted to hate you completely and permanently. Wanted to keep that anger pure and simple because it's easier to fight abstract evil of nobility than to acknowledge individual nobles might be capable of change. But you actually listen instead of dismissing or defending or making excuses. Actually seem to care beyond performative sympathy that nobles employ to feel better about themselves without taking real action. And that makes everything harder and more complicated. Because if I let myself believe nobles can genuinely change and I'm wrong about you specifically or about possibility of systemic reform..." He stops mid-sentence, too vulnerable and terrified of hope that has been repeatedly crushed to articulate the fear completely. Opening up to possibility that things could be different means risking devastating disappointment if nothing actually changes.`
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
	text: `Finn takes you to Ironforge's workers' quarter with deliberate intent to show you reality that official visits carefully hide from noble eyes - not the grand forges you'd see on state occasions where everything's cleaned and workers perform for inspection, but the cramped slums where laborers actually live when they're not performing productive labor for nobles' benefit. Children with coal-stained faces play in muddy streets with improvised toys, their laughter somehow surviving despite malnutrition visible in thin frames and hollow cheeks. Elderly workers sit on doorsteps with ruined lungs, coughing up black phlegm from decades breathing mine dust that kills slowly but inevitably. Widows of men who died in cave-ins or forge accidents stare at you with haunted eyes that have seen too much loss caused by inadequate safety measures that could be fixed if profit margins weren't prioritized over human lives.

"This is real," Finn says quietly without his usual anger, just profound exhaustion of someone who's tried explaining this reality countless times to nobles who don't want to see. "Not the pretty sanitized version nobles get shown during official visits carefully choreographed to create impression of adequate conditions. This is what actually funds Duke Thorin's expensive wine collection imported from distant provinces and Lady Brightwater's elaborate gowns that cost more than these families earn in years. This is human cost of luxury that nobility takes for granted as natural entitlement rather than recognizing it's built on exploitation." He's not attacking you specifically now, just showing you truth with weary resignation of someone who's learned that most nobles either don't care or care briefly before returning to comfortable ignorance.

An elderly woman recognizes Finn with expression transforming from wariness to genuine warmth, embracing him with obvious affection that speaks to his reputation here as someone who hasn't abandoned his roots despite working in manor. She speaks to him in workers' dialect with rapid familiarity, and he responds in kind showing he maintained connection to community rather than adopting noble mannerisms. He introduces you somewhat awkwardly, clearly unsure how to bridge these worlds, watching carefully to see if you'll maintain noble distance treating common folk as curiosities to observe rather than people to engage with, or actually interact with them as equals deserving respect.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { father_honored: true, mutual_grief: true }
			},
			text: `As you walk through the quarters navigating narrow streets barely wide enough for two people side by side, Finn takes your hand without conscious thought, fingers intertwining naturally as if seeking comfort from proximity to someone who understands loss at fundamental level. Then he realizes what he's done - common-born artist holding hands with nobility in public where anyone could see and judge - and starts to pull away instinctively, old class barriers and fear of overstepping invisible boundaries reasserting themselves even as his heart wants connection. But you hold on firmly, refusing to let those barriers separate you, making clear through action rather than words that you don't care about propriety or class conventions when genuine human connection is offered.

"My father would have liked you," Finn admits quietly with voice rough from emotion threatening to overflow. "He believed in the old stories despite evidence suggesting they were just comforting myths. Noble rulers who actually cared about common folk as individuals rather than resources, who fought for justice even when it wasn't profitable, who saw people as people regardless of birth status deserving equal respect and dignity." His voice catches as memories of father's idealism clash with brutal reality of his death. "I stopped believing those stories were anything more than naive fantasy after they broke him and I watched his hope die along with his hands and eventually his body. Seemed like dangerous delusion to believe nobility could be anything other than oppressors who occasionally performed kindness for political benefit. But maybe..." He looks at you with fragile hope that's terrifying in its vulnerability because hoping and being disappointed again would be devastating. "Maybe those stories weren't completely false. Maybe I can believe again in possibility of just rulers who actually care. Maybe you're proof that change is possible even if it's rare."

The trust in his eyes is precious and terrifying simultaneously - born from showing you his deepest wound, the trauma that defined his entire adult life and worldview, and having it honored with genuine respect rather than exploited for emotional manipulation or dismissed as exaggerated grievance. That kind of trust doesn't come easily and must be guarded carefully because betraying it would break something essential in him.`
		},
		{
			conditions: {
				hasHiddenAttributes: { serious_commitment: true }
			},
			text: `"You promised change," Finn reminds you with intensity that shows he's holding you to every word spoken during vulnerable moment when you committed to reforming system that killed his father, gesturing expansively to the poverty surrounding you on all sides. "This is specifically what needs changing through concrete action rather than abstract political theory. Not just grand sweeping reforms announced from throne room that sound impressive but never translate into actual improvement for people living in these conditions - actual lives improved through practical measures. Housing that doesn't leak when it rains or collapse during winter, wages that actually cover basic necessities instead of forcing families to choose between eating and staying warm, safety protections that prioritize human life over profit margins, dignity that recognizes workers as human beings deserving respect rather than disposable resources to be exploited until they're used up and replaced."

He stops before a memorial wall carved into stone - long list of names of workers who died in Duke Thorin's mines over past decade, each name representing human tragedy that was preventable if safety had been prioritized. "These are people, not statistics to be dismissed as acceptable losses in pursuit of profit. Every single one had a family who mourns them, dreams that died with them, talents that will never be developed now, potential that was destroyed because noble profit mattered more than common lives." He traces some names with fingers, clearly knowing several personally. "They died making nobles richer while their own families starved. Their children grew up without fathers. Their spouses became widows struggling alone. All preventable if anyone with power had cared enough to act." He turns to you with challenge burning in eyes. "Can you actually help them and others like them? Or are you another noble with good intentions that evaporate when faced with actual cost of change, unwilling to sacrifice privilege and profit for principles you claim to hold?"

The challenge is real and cannot be avoided or deflected - prove yourself through action or lose his trust forever because words without follow-through are worse than never making promises at all.`
		}
	],
	choices: [
		{
			id: 'create-art-together',
			text: 'Create art together to honor workers and express hope',
			next: 'creative_banner_design',
			effects: { empathy: 7, charisma: 5 },
			hiddenEffects: {
				finn_bond: 25,
				artistic_connection: true,
				finn_thrilled: true,
				creative_solidarity: true
			}
		},
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
	text: `Late one night when sleep eludes you due to weight of responsibilities and decisions pressing on consciousness, you find Finn on the manor roof accessed through forgotten servants' passage he's clearly claimed as private sanctuary, sketching by moonlight that illuminates his work with silver glow creating almost magical atmosphere. The stars wheel overhead in clear sky unmarred by city smoke, and cool night breeze carries scents of gardens below mixing with charcoal dust and Finn's particular scent of paint and determination. He's drawing you - not idealized noble portrait with perfect features and heroic bearing that official artists create for propaganda purposes, but real authentic depiction. Tired from the day with exhaustion visible in shoulders and shadows under eyes, determined with jaw set in expression you recognize from mirror, human with all the vulnerability and strength that implies rather than distant symbol of authority.

"I sketch what I care about," Finn says without looking up from work, hands moving with practiced confidence across paper as charcoal captures essence rather than just surface appearance. "Started with my father years ago when I was trying to preserve memory before grief distorted it. Then the workers whose faces and stories matter even if nobles never bother learning their names. Things that matter to me on fundamental level beyond abstract concepts." He shows you the drawing with gesture that's surprisingly vulnerable given how protective he usually is of work in progress. "And now you. Not sure exactly when that happened - when you stopped being just another noble and became person I think about constantly, worry about, want to understand at deeper level."

He sets down the charcoal with hands trembling slightly from emotion rather than physical cold, charcoal-stained fingers flexing as if uncertain what to do now that confession has been made. "I've spent years hating nobility as monolithic oppressor class. Building walls around heart to protect myself from being hurt by hoping nobles could be better, nursing anger because it felt safer than vulnerability, refusing to see individuals with their own struggles and complexity because it was psychologically easier to hate entire class than acknowledge some nobles might be different." He finally looks at you directly with eyes reflecting moonlight and containing depths of feeling that take your breath away. "But you're making that impossible to maintain. You actually care beyond performative sympathy. Actually try even when it's difficult and unprofitable. Actually see people as people deserving dignity regardless of birth status. And that's destroying every defensive wall I built."`,
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
			text: `"You understand loss," Finn says quietly with certainty born from recognizing kindred spirit who's walked through same dark valley of grief he inhabits. "Real profound loss that changes you fundamentally. Not abstract grief that noble philosophers write about from comfortable distance or performative mourning that lasts appropriate socially-determined period before returning to normal, but the kind that carves permanent holes in your soul leaving scars that never fully heal. That's extraordinarily rare in nobility who are often shielded from worst consequences of loss through wealth and social support systems."

He shows you more sketches spread across his lap - your parents, drawn from descriptions you provided during conversations, honored in art with same loving care he gave to his father's portrait. Their faces are rendered with dignity and humanity, capturing essence of who they were rather than just physical features. "I'm drawing your family's memorial," he explains with hands gentle on precious pages. "Because you honored mine when you could have dismissed my father's death as unfortunate but justified consequence of failed work. Because grief recognizes grief across class boundaries that usually divide us. Because somewhere along the way during conversations about loss and pain and surviving when part of you died with loved ones, your pain became mine to carry too. Your grief became something I feel personally rather than just sympathize with abstractly. And that's..." He pauses, struggling with implications. "That's not just sympathy or compassion. That's not platonic friend caring about friend's wellbeing. That's deeper emotional entanglement that blurs boundaries between your feelings and mine."

Tears fall on the pages, his and potentially yours mingling together, literally mixing grief in physical manifestation of emotional connection. "I carry your parents' memory in my heart now alongside my father's. I think about them. Wonder what they would think of you now, whether they'd be proud of reforms you're attempting. Hope they can somehow see you from whatever comes after death. That kind of intimate emotional investment in someone else's family and grief... that means something profound that I'm terrified to name directly."`
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
	text: `"You... feel it too?" Finn looks absolutely stunned as if he'd mentally prepared for rejection and built defensive walls to protect himself from anticipated pain, never actually allowing himself to believe mutual feelings were possible. "This impossible, complicated, socially-catastrophic thing between us that violates every social convention and practical consideration?"

When you confirm it unambiguously leaving no room for misinterpretation, he laughs - sound combining pure joy with disbelief that borders on hysteria from emotional whiplash. "Gods, we're either extraordinarily brave or catastrophically stupid. Probably both simultaneously." He cups your face with charcoal-stained hands that tremble slightly from intensity of feeling, rough artist's calluses gentle against your skin. "Your nobles will hate this relationship with visceral intensity. My people will question it constantly wondering if I've betrayed class solidarity. We'll face judgment from literally every direction - condemned by both sides for crossing boundaries that are supposed to be absolute and inviolable. Scandal will follow us everywhere making simple public appearances into political statements whether we want that or not."

"But," he continues softly with voice dropping to intimate whisper as if sharing sacred secret, "maybe that's worth it. For this feeling. For someone who actually sees me - not common-born or angry or charity case or useful token representing working class - but me specifically. Finn the artist who draws pain and beauty, the dreamer who still hopes despite evidence suggesting hope is naive, the fighter who won't give up on possibility of justice." He kisses you gently, reverently as if you're precious and fragile thing that might break if handled roughly, lips soft and warm and tasting faintly of charcoal dust. "Someone I see just as clearly beyond crown and title. Not symbol or political calculation or abstract concept of royalty, but the specific person who walks through workers' quarters and remembers individual names. Who honors dead blacksmiths with genuine grief. Who makes me believe change is actually possible rather than just comfortable lie we tell ourselves."

He pulls you close, arms wrapping around you protectively as if he can shield you from world's judgment through sheer force of will. "We'll fight for this relationship. Together as equals and partners. Prove that class barriers don't have to define love or limit human connection. That nobles and common folk can be genuine equals in ways that transcend political rhetoric to become lived reality." His smile is fierce with revolutionary determination. "And maybe, in fighting for us to exist as impossible romance, we'll fight for everyone else's freedom too. Make space for other relationships and identities and choices that society currently forbids. Our love becomes metaphor for larger liberation."`,
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
	text: `Finn proposes creating art together with excitement barely contained in voice and body language - ambitious mural depicting kingdom history from common folks' perspective rather than noble-centered narratives that dominate official records. Not sanitized noble versions that erase uncomfortable truths and paint exploitation as benevolent stewardship, but real stories that acknowledge agency and suffering of actual people who built civilization. Farmworkers whose backs broke growing food that kept kingdoms alive, miners whose lungs filled with dust extracting resources that funded noble luxuries, healers who saved lives without recognition, soldiers who died in wars started by nobles' political ambitions - the people who built everything material and cultural while nobles took exclusive credit in history books.

"This is controversial," Finn warns with mixture of excitement and apprehension, clearly aware this project will generate resistance. "Nobles won't like their precious sanitized history challenged by inconvenient truths about exploitation underlying their wealth and power. But it's truth that needs telling. And art should tell truth, especially uncomfortable truth that power structures want suppressed. Art that only reinforces comfortable lies serves propaganda rather than genuine human understanding."

Working together over days and weeks becomes intimate ritual of creation and collaboration. You learn his artistic process through direct experience - how he channels pain into beauty through alchemical transformation, transforms suffering into meaning that honors agony without being consumed by it, finds hope in darkness without denying darkness exists. He teaches you to draw with patience and encouragement that surprises you given his usual defensive anger, hands guiding yours with gentle pressure showing proper techniques for shading and perspective, breath warm on your neck as he leans close to check details you're working on. The physical proximity creates electric tension charged with unspoken feelings.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_romance: true }
			},
			text: `Creating art together becomes intimacy that transcends mere collaboration into something profound and connecting. Finn's hands on yours guiding charcoal strokes with careful pressure, teaching technique while fingers intertwine in ways that feel deliberate rather than accidental. His breath warm and slightly irregular on your neck as he leans over to check details of section you're working on, close enough that you can smell paint and charcoal and his particular scent. Moments when you catch each other staring with work completely forgotten, eyes meeting and holding with intensity that makes heart race, before one of you breaks eye contact with self-conscious laugh that doesn't quite hide the attraction crackling between you like static electricity before storm.

"Never thought I'd teach royalty to draw," Finn murmurs with lips accidentally or deliberately brushing your ear as he speaks, sending shivers down spine. "Never thought I'd fall in love with royalty either, but here we are defying every expectation I had about my life's trajectory." He turns you to face him with hands on shoulders, charcoal smudging your clothes but neither of you caring about practical concerns when emotional moment demands attention. "You make me want to create beautiful things again instead of just documenting pain. Not just anger and suffering which are valid artistic subjects, but hope and joy and possibility. You inspire that shift in me, make me believe beauty can coexist with acknowledging injustice rather than being naive escapism."

The mural becomes your love story told through artistic metaphor - two worlds meeting despite everyone saying they should remain separate, bridging gaps through art and understanding that transforms both participants, proving connection is possible when people choose vulnerability over protective walls.`
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
	text: `Workers organize a rally demanding reforms with energy that's been building for years, decades, generations of accumulated grievances finally reaching critical mass. Duke Thorin wants you to suppress it with military force maintaining order through violence as nobles traditionally handle dissent from lower classes. But Finn is there at the rally's heart, leading with his art - banners depicting workers' struggles in powerful imagery, signs with slogans that cut to core of injustice, visual representations demanding dignity that make abstract concepts viscerally real. His talent transforms protest into art installation that even hostile nobles must acknowledge as sophisticated rather than dismissing as crude mob anger.

You arrive at the rally site, and workers tense visibly with collective fear running through crowd like electric current, expecting violence based on historical precedent where noble response to worker protest involved soldiers and bloodshed. Children are pulled behind parents, elderly workers stand with resigned defiance as if accepting this might be how they die, young workers grip makeshift weapons wondering if they'll need to fight for survival. Finn steps forward deliberately placing himself between you and the crowd, body language protective of his people while eyes plead with you simultaneously. "Don't," he says quietly but with intensity that carries despite surrounding noise, voice rough with emotion. "These are my people. These are families I grew up with, children I watched being born, elders who remember my father. Don't make me choose between them and you. Don't force that impossible decision."

The moment crystallizes everything - class loyalty versus personal connection, political power versus moral principles, maintaining status quo versus risking everything for justice. Workers watch silently holding collective breath. Nobles watch from safe distance ready to judge your decision. What you do here defines who you actually are beyond rhetoric and promises, proves whether your proclaimed values translate into action when cost becomes real.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_romance: true }
			},
			text: `Finn's eyes plead with you silently conveying desperate hope mixed with terror that you'll choose violence and destroy everything between you. "I love you," he says loud enough for everyone to hear - workers, nobles, witnesses who will spread this declaration across kingdom - shocking both sides who didn't expect public romantic confession in middle of political confrontation. "But I love them too. My people who raised me, taught me, gave me purpose when father died. They're starving while nobles feast on their labor. Dying in mines that could be made safe if profit margins weren't prioritized over human lives. Watching children go hungry so noble children can have luxuries. I can't abandon them for romance no matter how deep my feelings run. I won't betray everything I've fought for even for person I love most."

His voice breaks completely, tears streaming down face as impossible choice tears him apart internally. "Please. Don't make me lose both. Support them and their just demands. Stand with us in solidarity. Show everyone that love across classes means something more than personal indulgence - that it translates into action, into justice, into actually using privilege to dismantle systems of oppression rather than just feeling guilty about benefiting from them. That you're genuinely different from other nobles rather than just more articulate about maintaining status quo."

It's simultaneously public declaration of love and public test of character - prove your love means action rather than just comforting words, demonstrate that romantic feelings translate into political solidarity, show that relationship isn't built on him compromising principles to accommodate your privilege but rather on you transforming to deserve his trust and love.`
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
	text: `Your romance with Finn becomes inseparable from the reforms you're building together, personal and political intertwining until they're impossible to distinguish as separate domains. Every political victory advancing workers' rights is celebrated with passionate kisses stolen in private moments away from political theater, bodies pressed together in celebration of shared accomplishment. Every setback where entrenched nobility blocks reforms is faced with mutual support and revolutionary determination that refuses defeat, holding each other through frustration and recommitting to struggle.

"You're not just my partner romantically," Finn says with paint-stained fingers tracing your jawline with tenderness that contrasts with roughness of callused artist's hands, touch gentle despite hands shaped by years of physical labor and artistic practice. "You're proof incarnate that what I'm fighting for is actually possible rather than naive fantasy. A noble who genuinely sees commoners as equals deserving identical dignity and rights, who fights beside us as comrade rather than leading from above as benevolent patron maintaining fundamental hierarchy. Someone who uses privilege and power to dismantle oppression rather than just feeling guilty about benefiting from it." He kisses you fiercely with passion that tastes of charcoal and hope, bodies fitting together as if designed for this embrace. "Our love is revolutionary in most literal sense. It breaks every social barrier they said was unbreakable and natural and necessary for civilization's functioning. We're living proof that class divisions are constructed rather than inevitable."

Together you become powerful symbols of the change you're creating through actions rather than just rhetoric - walking proof that class divisions can be overcome through genuine connection based on mutual respect and shared values rather than one party condescending to other. Your relationship inspires others trapped by social conventions to imagine different possibilities for their own lives.`,
	textVariants: [
		{
			conditions: { hasFlags: ['public_revolutionary_love'] },
			text: `The people have started calling you "The Revolutionary Lovers" - nickname that spreads through workers' quarters like wildfire, spoken with mixture of admiration and hope that makes Finn's eyes shine with tears of vindication every time he hears it whispered in crowds. You've become rallying cry and symbol of possibility incarnate, living embodiment that different future is achievable rather than utopian fantasy doomed to fail against entrenched power structures.

"When I was alone in my anger after father died, drowning in grief and rage and helplessness that felt like suffocating," Finn admits with voice thick with emotion, trembling with weight of memory he usually keeps locked behind defensive anger. "I never imagined this outcome as remotely possible. That I'd find love crossing every forbidden boundary society erected, that our relationship would become symbol inspiring thousands to demand better treatment and dignity, that father's death might actually lead to meaningful change rather than just adding to countless forgotten tragedies of disposable workers destroyed by nobles' cruelty." He pulls you into desperate kiss tasting of salt tears and hope mixed with charcoal dust from morning's mural work. "He'd be so proud beyond words that his suffering led to this revolution rather than just fading into obscurity as one more nameless victim. You've helped make his death meaningful instead of merely tragic waste of beautiful life."

Your love story is being painted into murals across workers' quarters with surprising artistic skill, transformed into songs sung in taverns frequented by common folk with verses growing more elaborate each week, written into pamphlets distributed clandestinely advocating for reforms - folk legend emerging in real time that will outlive you both and inspire generations. You're not just lovers sharing private affection behind closed doors; you're living symbols of revolutionary change made flesh, walking proof that world can transform if people dare to fight for it with courage and conviction.`
		},
		{
			conditions: { hasFlags: ['equal_partnership'] },
			text: `Your relationship is built on foundation of absolute equality despite vast class differences that could have created permanent power imbalance corrupting everything, carefully negotiated and constantly maintained through conscious effort and honest communication. You defer to Finn's expertise on workers' issues with genuine respect acknowledging he understands lived reality you've only witnessed from outside looking in, listening to his perspectives shaped by actual experience of deprivation and exploitation rather than abstract theory. He defers to your knowledge of navigating noble politics and manipulating power structures from within with trust hard-earned through consistent actions, accepting your strategic sense even when tactics feel uncomfortably close to machinations that harmed his family and destroyed his father.

"I never thought I could be equal to a noble in any romantic sense, never imagined relationship without fundamental power imbalance poisoning foundation," Finn admits with voice carrying wonder at achievement against all expectations and social conditioning, still slightly disbelieving despite months of evidence proving dynamic works. "But you've never once made me feel lesser than you deserve better, never pulled rank when we disagreed about important matters, never treated me as exotic trophy proving your progressive credentials to other nobles seeking approval for enlightened attitudes." He holds your hands gently between calloused artist's palms, thumbs tracing patterns on your skin with tenderness that makes chest ache with emotion. "You listen to me about things I understand better than you do from lived experience, and I listen to you about things you understand better than I do from insider knowledge. It's partnership in truest sense - mutual respect and complementary strengths rather than hierarchy disguised as romance with prettier words."

Together you're building something unprecedented in kingdom's history carved into rigid class structure - relationship that genuinely transcends class without either party surrendering identity or pretending structural inequalities don't exist outside your private bond. It's harder than conventional romance would be requiring less navigation, requiring constant negotiation and honest confrontation of privilege you benefit from, but profoundly more meaningful for being consciously chosen equality rather than simply assuming love conquers systemic oppression without deliberate work dismantling internalized hierarchies.`
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
	text: `Your choice - whether joining rally with courageous public solidarity or negotiating reforms with strategic diplomatic wisdom - proves beyond doubt through actions not empty words that you're genuinely different from other nobles who perform sympathy but defend privilege. The workers erupt in thunderous cheers that shake windows in surrounding buildings, their voices carrying decades of suppressed anger finally allowed expression without fear of brutal massacre. Finn stares at you with expression mixing wonder, love, and disbelief that this moment is actually happening after years of hopeless grief.

"You did it," he says with tears streaming down face marked by charcoal dust and years of suffering, voice breaking on each word. "You actually stood with us as equal rather than condescending from above. Risked everything that matters to nobles - their support and approval, political capital carefully accumulated, maybe even the throne itself and power you could have used selfishly - for common people who have nothing to offer you except gratitude and solidarity." He pulls you into fierce embrace that the entire crowd witnesses with cheering approval, no longer caring about maintaining defensive distance or protecting wounded heart. "Thank you for proving me right to believe in you despite every lesson father's death taught about nobles' cruelty. For showing that hope wasn't naive fantasy destined to crush me again."

The rally ends not in violence and bloodshed that seemed inevitable when tensions peaked, but in hope that feels fragile yet real as dawn after endless night. Real reforms begin implementation rather than remaining empty promises. And your relationship with Finn - whether passionate romance, deep friendship, or still developing connection - becomes powerful symbol visible throughout kingdom of what's possible when class barriers fall through genuine solidarity rather than performative allyship.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_romance: true }
			},
			text: `"I love you," Finn declares publicly with voice ringing clear across crowd without hesitation or shame, unapologetically embracing what society says is transgressive impossibility. "Common artist loving royalty, and I don't care who knows or what judgment they pass. You've shown through actions not rhetoric that love across classes means something real and transformative. That we can bridge divides together through genuine connection rather than one party lowering themselves in charitable condescension."

He kisses you in front of everyone witnessing this moment - workers celebrating victory, nobles shocked into silence, all becoming witnesses to history being written in real time through your defiant love. "Our love is revolutionary in most literal and political sense," he says fiercely against your lips with passion that tastes of tears and hope mixed with charcoal dust. "Not just personally meaningful but politically significant as symbol. We're living proof that the old barriers can break when people choose solidarity over maintaining hierarchy. That's terrifying because it threatens entire social order built on rigid class separation, and amazing because it proves different world is possible through courage, and I wouldn't change it for anything despite risks we're taking by loving openly."`
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
	text: `Your relationship with Finn settles into something meaningful and profound that will define rest of your life, whether explicitly romantic or deep friendship transcending conventional categories. More importantly than personal connection, your bond has sparked genuine systemic change rippling through kingdom's rigid structures - workers' rights improving with concrete reforms rather than empty promises, class barriers beginning to crumble through visible examples like your partnership, art and activism merging into powerful force documenting truth and demanding justice.

"You gave me hope when I thought I'd drowned in grief and rage forever," Finn says with voice carrying weight of transformation from angry broken artist to someone who believes change is possible through sustained effort. "Not just personally by caring about me as individual with inherent worth, but for everyone like me trapped in exploitation thinking suffering was inevitable natural order. You showed through consistent actions not empty words that nobles can genuinely change when confronted with truth, can actually care about common folk beyond abstract charity, can see us as equals deserving identical dignity rather than lesser beings requiring benevolent guidance." He grips your shoulder with paint-stained hand that no longer trembles with defensive anger. "Whatever we are to each other - passionate lovers, deep friends bonded by shared struggle, partners in revolution fighting side by side - you've made my father's death mean something more than senseless tragedy adding to countless forgotten victims. His broken hands and years of slow dying led to this moment of real change affecting thousands of lives. That's powerful beyond anything I imagined possible in darkest grief."`,
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
	text: `The mural is finally finished after months of painstaking work - breathtaking depiction spanning entire wall of kingdom history told from common people's perspective that official chronicles systematically erase. Farmworkers harvesting grain that feeds everyone, miners extracting ore under dangerous conditions, healers saving lives without recognition, soldiers dying in nobles' wars - the people who built everything with calloused hands and broken backs while nobles took credit and wealth. And at the center, painted with subtle care: you and Finn working together side by side as equals, bridging worlds that everyone said could never touch.

"This is truth finally given permanent form," Finn says with deep satisfaction that comes from creating something meaningful that will outlast you both, voice thick with emotion as he stares at completed work. "Our truth that nobles tried to bury beneath sanitized propaganda. Not their carefully constructed narrative erasing exploitation and suffering, but real stories of real people who deserve to be remembered and honored." He looks at you with profound affection that makes chest ache with its intensity, eyes shining with tears of vindication. "And you helped create it despite being noble who could have demanded I paint flattering lies instead. That means everything to me and everyone who sees themselves reflected here for first time in kingdom's artistic record."

The mural becomes famous throughout kingdom, controversial among nobles who see it as dangerous propaganda, cherished symbol among common folk who finally see their lives depicted as valuable and meaningful. And your connection with Finn - whether romantic partnership or platonic bond forged through shared struggle - is immortalized in art that will inspire future generations to believe different world is possible.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_romance: true }
			},
			text: `"Look at the center," Finn says with voice trembling with emotion as he points to carefully painted figures impossible to miss once noticed - you and him, hands touching with tenderness transcending class boundaries, creating together as equals in collaboration that defies everything society says is natural order. "That's us captured for eternity. Our love story painted directly into kingdom history that will be studied and debated for generations. Revolutionary romance immortalized in permanent art that can't be erased or dismissed as fleeting scandal."

He kisses you softly with paint-stained lips tasting of charcoal and hope, gentle kiss full of promise for future you're building together. "Generations will see this mural and know our story beyond sanitized official accounts," he whispers against your mouth with breath warm and intimate. "Common-born artist and noble heir, choosing each other against all pressure and expectation, choosing change and justice over comfortable conformity to oppressive structures. We're not just living personal love story for our own happiness - we're creating history that will inspire countless others trapped by class barriers to believe transformation is possible through courage and solidarity. Our love is political act as much as personal joy."`
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

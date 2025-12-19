import { Scene } from '../../story-manager';

const roadEncounter = `The afternoon sun filters through ancient oak trees lining the road to Silverwood Manor when you encounter a colorful caravan that immediately captures attention through sheer visual exuberance standing out against the muted greens and browns of countryside. Sturdy draft horses with braided manes stamping patiently on packed dirt pull an elaborately painted wagon adorned with symbols from a dozen different cultures - elven scrollwork intertwined with dwarven geometric patterns, human heraldic designs blending with orcish tribal markings, creating cosmopolitan aesthetic that speaks to extensive travels across all lands. Exotic fabrics in jewel tones of sapphire, emerald, and ruby peek from beneath oiled canvas covers protecting valuable merchandise from weather and thieves, while glinting metal catches light suggesting weapons, armor, or jewelry waiting beneath for discerning customers with coin to spend. The faint scent of spices and perfumes from distant provinces drifts on the breeze, promising treasures from places you've only heard about in stories told by travelers who've ventured beyond familiar borders into wider world.`;

const merchantGreeting = `A well-dressed merchant steps down from the driver's bench with practiced grace suggesting years of performing this exact ritual at roadside encounters across the kingdom, adjusting their fine coat of deep burgundy velvet with gold thread embroidery that probably cost more than most farmers earn in a year. Their sharp eyes assess you and your companions in single sweeping glance that somehow manages to evaluate your wealth, intentions, and potential as customers simultaneously without feeling invasive or judgmental - just professional appraisal from someone who's made their fortune reading people accurately. "Travelers! Perfect timing indeed - I was just considering whether to make camp here or press on toward Silverwood, and the gods have delivered customers to me instead." Their smile is warm and genuine rather than the oily false friendliness some merchants employ when sensing potential profit. "I'm Aldric Goldweave, purveyor of fine goods and exotic wares from every corner of the civilized lands and a few uncivilized ones besides. Been traveling these roads for fifteen years building reputation for fair dealing and quality merchandise that actually does what it claims instead of falling apart the moment you leave my sight. Perhaps you'd like to browse my collection before continuing your journey? No pressure, but opportunity knocks rarely on dusty roads."`;

const timingNote = `Your companions exchange meaningful glances that communicate entire conversations without words through subtle expressions and slight gestures developed through shared experiences on the road. You've earned some gold during your travels through combination of quest rewards, salvaged equipment sold in villages, and occasional gambling victories during rest stops - modest fortune by noble standards perhaps, but respectable traveling fund that opens possibilities previously unavailable when you started journey with barely enough coin for bread and basic supplies. This might be an opportunity to acquire useful equipment that could mean difference between success and failure in challenges ahead, though you're learning that merchants can be either honest partners or skilled manipulators depending on their character and your ability to evaluate both merchandise and seller accurately. The weight of your coin purse is reassuring against your hip, representing both potential and choices that will need to be made carefully.`;

export const MerchantRoadEncounter: Scene = {
	id: 'merchant_road_encounter',
	text: `${roadEncounter}

${merchantGreeting}

${timingNote}`,
	textVariants: [
		{
			conditions: { stats: { wealth: { min: 100 } } },
			text: `${roadEncounter}

The merchant's eyes light up with genuine professional interest rather than simple greed as they notice your well-maintained gear showing quality craftsmanship and careful upkeep, confident bearing that marks you as experienced travelers rather than naive novices, and most tellingly the way your coin purse hangs heavy with reassuring weight of substantial funds earned through genuine accomplishment rather than inheritance or theft. "Ah, successful adventurers who've clearly survived challenges that broke lesser groups!" Their tone shifts from general sales pitch to specialized consultation recognizing you as customers worth cultivating for long-term business rather than quick profit targets. "I have some truly exceptional pieces you might appreciate - items befitting those who've clearly earned their fortune through skill and courage rather than just stumbling into windfall. Enchanted weapons that hold their edge through heavy combat, armor with protective wards woven by master artificers, traveling supplies of quality that makes difference between comfort and misery on long journeys. Things beyond what I'd show casual browsers, because frankly you need expertise to use them properly and wealth to afford them fairly."

${timingNote}`
		},
		{
			conditions: { stats: { wealth: { max: 20 } } },
			text: `${roadEncounter}

${merchantGreeting}

You check your coin purse discreetly trying not to let companions see the embarrassing lightness - funds are desperately tight after your recent travels consumed resources faster than you could replenish them through odd jobs and minor quest rewards that barely covered food and lodging costs. The few coins remaining represent difference between eating tonight and going hungry, between emergency repairs if equipment fails and being dangerously under-equipped when next challenge arrives. Still, even a small purchase might prove valuable if you're strategic about priorities and choose carefully based on need rather than want, and browsing costs nothing except time and perhaps slight embarrassment if merchant realizes you're window shopping rather than seriously buying. You've learned that sometimes networking and building relationships matters more than immediate transactions anyway - today's poor traveler might become tomorrow's wealthy customer if fortune shifts as it so often does for adventurers whose circumstances change rapidly based on success or failure of current quest.`
		}
	],
	choices: [
		{
			id: 'browse-shop',
			text: 'Browse the merchant\'s wares',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_encountered: true
			}
		},
		{
			id: 'polite-decline',
			text: 'Politely decline and continue to the manor',
			next: 'discovery_at_silverwood',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_declined: true
			}
		},
		{
			id: 'chat-merchant',
			text: 'Chat with the merchant about news and rumors',
			next: 'merchant_rumors',
			effects: { charisma: 2 },
			hiddenEffects: {
				merchant_befriended: true
			}
		}
	]
};

export const MerchantRumors: Scene = {
	id: 'merchant_rumors',
	text: `Aldric proves to be a fountain of information accumulated through years of traveling extensively throughout the kingdom with ears always open for news and rumors that prove valuable both for personal safety navigating dangerous political currents and for professional advantage knowing which regions are prosperous enough to afford luxury goods versus which are struggling and need only basic necessities. Merchants occupy unique position in social hierarchy - neither noble nor common, trusted by both because they serve both, privy to secrets from all levels of society because people talk freely around those they perceive as neutral parties without political agendas beyond profit.

"Interesting times ahead," they say in measured tone, lowering their voice despite the empty road stretching in both directions offering no visible eavesdroppers, because habits of discretion run deep in those who've survived by avoiding entanglement in dangerous political machinations while still benefiting from information gathered. "The nobles are restless with succession crisis creating power vacuum that everyone's trying to fill through various schemes ranging from legitimate claims to outright plots, shadow beasts grow bolder venturing closer to populated areas than they have in generations according to multiple independent reports suggesting something's changing in magical balance, and there's increasing talk of someone claiming the Silverwood title - perhaps that's you based on your direction of travel and the way you carry yourself with unconscious authority suggesting noble blood?"

They study you with knowing eyes that have evaluated thousands of customers over years, reading character and potential with accuracy born from necessity because merchants who misjudge people don't survive long in profession requiring trust and negotiation. "If you ever need supplies, equipment, or just a friendly ear willing to listen without judgment or political agenda beyond hoping you survive to buy more merchandise, I travel these roads regularly following circuit that brings me through major settlements and minor villages alike every few months. Successful adventurers make the best customers from business perspective since they have coin to spend and actually need quality goods rather than just wanting luxury display items, and sometimes, if fortune favors and character proves true, the best friends as well. Life on the road gets lonely, and genuine connections become precious rare treasures worth more than gold when you find them authentically."`,
	choices: [
		{
			id: 'browse-after-chat',
			text: 'Browse their wares after this pleasant conversation',
			next: 'traveling_merchant_intro',
			effects: { charisma: 1 },
			hiddenEffects: {
				merchant_rapport: 5,
				merchant_encountered: true
			}
		},
		{
			id: 'continue-journey',
			text: 'Thank them and continue your journey',
			next: 'discovery_at_silverwood',
			effects: { charisma: 1 },
			hiddenEffects: {
				merchant_friendly: true,
				merchant_future_discount: true
			}
		}
	]
};

// Act 2 merchant encounter - Capital marketplace
// Act 1 merchant encounter - Manor grounds
export const ManorGroundsMerchant: Scene = {
	id: 'manor_grounds_merchant',
	text: `A servant approaches you in the manor's great hall with somewhat uncertain expression suggesting they're unsure of protocol for announcing visiting merchants to nobility, announcing that a traveling merchant has arrived at the manor gates requesting an audience with the new Lord or Lady of Silverwood. The formality of the request combined with merchant's apparent confidence in being granted access suggests this isn't ordinary peddler trying luck at noble household but rather established trader with reputation for dealing with upper classes.

Aldric Goldweave's colorful caravan is unmistakable even from distance as you approach the gates, looking somewhat out of place against the austere stone walls and formal gardens of ancestral estate yet somehow also perfectly appropriate as if merchants have been arriving at these gates for centuries bringing goods from distant lands. They bow respectfully with practiced elegance that hits perfect balance between showing appropriate deference to noble title and maintaining dignity of successful independent merchant who serves nobility without being servile to them. "My Lord or Lady," they address you with title that still feels strange on your ears despite your legitimate claim. "I heard of your arrival at Silverwood Manor through the usual channels merchants employ to track potential customers and significant events, and thought you might appreciate the opportunity to acquire quality equipment before your responsibilities fully settle in and you're buried under estate management and political obligations leaving no time for practical preparations."

Your companions exchange meaningful glances combining interest in seeing quality merchandise with awareness that you're still establishing yourself financially and must be strategic about expenditures. After exploring the manor and securing some funds from family treasury that remained hidden from those who tried claiming estate during succession crisis, you have capital to invest - this might be a good time to make strategic purchases that will serve you throughout challenges ahead rather than waiting until crisis forces rushed decisions under suboptimal conditions.`,
	textVariants: [
		{
			conditions: { hasFlags: ['merchant_encountered:true'] },
			text: `A familiar figure arrives at the manor gates riding atop their distinctive caravan that you recognize immediately from your encounter on the road - Aldric Goldweave, the merchant whose timing seems almost supernaturally convenient as if they possess some sixth sense for appearing exactly when potential customers might need their services most.

They bow with a warm smile that reaches their eyes showing genuine pleasure at reunion rather than just professional friendliness calculated to encourage sales. "We meet again under considerably different circumstances! I promised I traveled these roads regularly following established circuit, but I admit I made special effort to arrive around now because I was curious how Silverwood's new heir would settle into their ancestral home. Success suits you well - the manor's restoration speaks to your administrative competence." They gesture expansively at the caravan. "Now that you're settled in your ancestral home with resources and authority at your disposal rather than traveling with only what you can carry, perhaps you'd like to see what new items I've acquired since our last meeting? I have some pieces that would suit a noble of your standing perfectly - items appropriate for someone who must balance practical adventuring needs with political responsibilities requiring certain level of display wealth showing you're worthy of title you claim."`
		},
		{
			conditions: { stats: { wealth: { min: 150 } } },
			text: `Aldric Goldweave arrives at the manor gates with an impressive collection displayed more prominently than usual as if they know exactly what to expect from this particular customer, clearly anticipating a profitable meeting based on intelligence gathered about your successful discovery of Silverwood treasury and various other liquid assets that came with inheritance.

"Lord or Lady Silverwood," they say with genuine respect earned through recognition that you're not merely noble by birth but have proven yourself capable through actions taken since claiming title. "I've brought my finest wares specifically for this visit rather than standard traveling stock I show to common customers. After exploring your manor's treasury and liquidating various historical artifacts that had more monetary than sentimental value, I imagine you're ready to invest strategically in proper equipment for the considerable challenges ahead that will require more than just courage and title to overcome successfully. These pieces..." They gesture to collection of obviously superior quality items. "...represent years of selective acquisition, items I've held back waiting for customers who would both appreciate their value and afford their cost without bankrupting themselves foolishly."`
		},
		{
			conditions: { hasFlags: ['merchant_friendly:true'] },
			text: `Your new friend Aldric arrives at the manor gates waving cheerfully with enthusiasm that seems genuine rather than performed for business purposes, their body language relaxed and open in way that suggests they view this visit as much social call as commercial opportunity.

"I hope you don't mind the unannounced visit - I know nobles usually prefer formal appointments scheduled through proper channels using servants as intermediaries!" They grin with self-deprecating humor acknowledging the casual breach of protocol. "After our pleasant conversation on the road where we actually connected as people rather than just merchant and customer playing expected roles, I wanted to make sure you had access to quality supplies before getting completely consumed by administrative responsibilities of estate management and political obligations. Being a noble is expensive work in ways nobody warns you about until you're already committed - ceremonial clothing, gifts for allies, bribes for neutral parties, equipment for guards, supplies for guests. I'd hate to see you under-equipped for what's coming simply because you spent all your resources on social obligations instead of practical necessities that might save your life when politics inevitably turns violent as succession crises always do eventually."`
		}
	],
	choices: [
		{
			id: 'visit-shop',
			text: 'Visit the merchant and browse their wares',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_manor_visit: true,
				merchant_at_manor: true
			}
		},
		{
			id: 'decline-busy',
			text: 'Politely decline - you have too many manor responsibilities',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_declined_manor: true
			}
		},
		{
			id: 'invite-later',
			text: 'Invite them to stay - you\'ll visit their shop after meeting Rowan',
			next: 'rowan_formal_introduction',
			effects: { charisma: 2 },
			hiddenEffects: {
				merchant_invited: true,
				merchant_future_visit: true
			}
		}
	]
};

export const CapitalMarketplaceMerchant: Scene = {
	id: 'capital_marketplace_merchant',
	text: `Walking through the bustling capital marketplace that serves as commercial heart of the kingdom where merchants from every province and even foreign lands gather to trade goods creating cacophony of languages and accents blending together, you navigate crowds of shoppers ranging from common folk buying daily necessities to nobles browsing luxury items, servants running errands for wealthy households, and pickpockets working crowds with professional efficiency that guards pretend not to notice as long as they target visitors rather than established residents. The sensory overload of competing merchant calls advertising wares, aromatic food stalls selling exotic cuisines, colorful fabric displays catching sunlight, and metallic clanging from smithy district creates overwhelming atmosphere of commercial vitality that marks successful cities throughout history.

Amid this chaos, you spot a familiar colorful caravan that stands out even among the visual riot of the marketplace - Aldric Goldweave's distinctive vehicle parked among the more permanent merchant stalls, looking simultaneously out of place as traveling merchant among established shops and perfectly natural as if they've claimed this exact spot countless times before on regular circuit through capital.

Aldric is negotiating with a noble wearing house colors you recognize from political briefings when they catch sight of you, and their face lights up with expression combining genuine pleasure at seeing familiar customer with professional excitement at potential profitable transaction. They conclude their current negotiation with practiced efficiency - not rudely but firmly - and wave you over with enthusiasm. "Lord or Lady Silverwood! What perfect timing indeed - I've just acquired some exceptional items from the eastern provinces through trading connections most merchants can only dream of accessing, and I was literally thinking about you as ideal customer for them. Come, let me show you pieces that would suit your current position and future ambitions!"

The political tensions of Act 2 have left you battle-worn in ways both physical and psychological, with equipment showing wear from recent conflicts and your mind carrying weight of decisions made and consequences observed. Quality equipment could make all the difference between success and failure in challenges that grow progressively more dangerous as stakes escalate from personal survival to kingdom's fate.`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { merchant_reputation: 5 } },
			text: `You recognize Aldric's caravan immediately in the marketplace crowd despite dozens of competing merchant displays vying for attention, because their distinctive aesthetic and your history of positive transactions has created mental association making their setup stand out like familiar landmark in foreign territory.

They spot you simultaneously and rush over with speed that suggests genuine excitement rather than just commercial opportunity, literally abandoning another customer mid-transaction which that noble accepts with surprising grace after following Aldric's gaze to see who commanded such priority. "My most valued patron!" Aldric exclaims with warmth that can't be entirely faked even by skilled merchant practiced in manipulating customer emotions. "I've been hoping to see you ever since hearing about your latest political maneuvering through the reliable rumor network that tracks movements of important figures. Word of your diplomatic successes and tactical decisions has reached every corner of the kingdom carried by travelers, and merchants especially pay attention because political stability affects trade routes and economic prosperity directly."

They gesture toward their caravan with proprietary pride. "I have items that might aid your cause considerably - things I've been setting aside specifically thinking of you as ideal customer who would both appreciate their value and use them effectively rather than letting them gather dust as mere status symbols. And for you, always the best price I can offer while still covering costs and modest profit margin. You've been loyal customer establishing pattern of repeat business, and I reward that kind of relationship because building long-term connections proves more profitable than maximizing every individual transaction."`
		},
		{
			conditions: { hasFlags: ['merchant_declined:true'] },
			text: `You spot Aldric's caravan in the marketplace crowd, and brief moment of awkwardness passes between you as both remember previous occasions when you've declined their services for various reasons ranging from insufficient funds to simple time pressure or preference for self-reliance over purchasing advantages.

They approach cautiously with body language more reserved than their usual confident merchant persona, clearly uncertain about reception they'll receive given history of declined offers. "Lord or Lady Silverwood." They bow with correct formality that creates slight distance compared to familiar warmth they show preferred customers. "I understand you're busy with matters of state that take precedence over commercial transactions, and I respect that you have priorities beyond my merchandise. But I thought you might appreciate seeing my new inventory just in case circumstances have changed or current needs align better with what I'm offering. No pressure whatsoever - just wanted to let you know I'm here if you need anything, and I hold no grudge about past declining. Smart customers wait for right opportunity rather than buying impulsively just to appear decisive."`
		},
		{
			conditions: { stats: { wealth: { min: 200 } } },
			text: `Aldric's eyes widen with professional appreciation when they see your well-stocked coin purse hanging heavy at your belt and fine attire that speaks to both considerable wealth and good taste in spending it, as political success has clearly translated into financial prosperity through combination of reclaimed family assets, rewards from grateful allies, and possibly shrewd investments in commercial ventures or careful looting of defeated enemies' treasuries.

"My word! Political success clearly suits you well in material terms beyond just titles and influence." They gesture enthusiastically toward their caravan. "I have premium items that someone of your standing would appreciate and which frankly lesser customers couldn't afford even if they recognized their value - magical artifacts recovered from ancient ruins through archaeological expeditions I funded specifically to acquire items beyond normal market access, weapons forged by master craftsmen whose waiting lists stretch years and who only accept commissions from clients with resources to pay exorbitant fees and reputation to be trusted with their finest work, armor enchanted by archmages who charge fees that would bankrupt minor nobility. Shall we discuss investments that could serve you throughout remainder of your political ascent and beyond?"`
		}
	],
	choices: [
		{
			id: 'browse-wares',
			text: 'Browse their latest inventory',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_act2_visit: true,
				merchant_rapport: 3
			}
		},
		{
			id: 'quick-purchase',
			text: 'Ask what they recommend for political conflicts',
			next: 'traveling_merchant_intro',
			effects: { charisma: 2 },
			hiddenEffects: {
				merchant_act2_visit: true,
				merchant_consultation: true
			}
		},
		{
			id: 'no-time',
			text: 'Politely decline - you have urgent political matters',
			next: 'kingdom_briefing',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_declined_act2: true
			}
		}
	]
};

// Act 3 merchant encounter - Before crystal hunt
export const CrystalQuestMerchant: Scene = {
	id: 'crystal_quest_merchant',
	text: `As you prepare for the dangerous crystal hunt that will take you into territories both geographically remote and magically hazardous where previous adventurers have disappeared without trace or returned broken by experiences they refuse to discuss, Aldric's colorful caravan appears at your estate gates once more with timing that's either remarkably fortunate or suggests they maintain intelligence network tracking your movements and plans with impressive efficiency.

"Lord or Lady Silverwood," they call out with unusual gravity replacing their typical cheerful merchant enthusiasm, voice carrying weight of genuine concern that transcends commercial relationship. "Word reached me through various channels that you're embarking on a perilous quest to recover the Crystal Heart fragments scattered across kingdom in locations specifically chosen for their danger as much as their concealment. I couldn't in good conscience let you leave without offering my finest equipment accumulated over years of trading and specialized acquisition. The Crystal Heart fragments are protected by ancient magic predating current kingdoms and deadly guardians ranging from magical constructs to sentient beings who've made guarding them their purpose for centuries - you'll need every advantage available to survive encounters that will test you beyond anything faced so far."

They spread their wares with unusual gravity that emphasizes the serious nature of what you're attempting, arranging items with careful consideration rather than showman flourishes typically employed. "I've traded in dangerous items before serving adventurers who venture into places sensible people avoid, but these..." They gesture to collection of obviously exceptional quality. "...these could mean the difference between success and death, between returning victorious and becoming another cautionary tale about those who attempted the impossible and paid ultimate price for their ambition. Choose carefully and trust the equipment as much as your companions, because both may save your life when magic and steel clash in places where rules of normal combat don't apply."`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { merchant_reputation: 10 } },
			text: `Aldric arrives at your gates personally rather than sending messenger or simply waiting for you to find them in marketplace, looking unusually serious with expression combining professional concern for valued customer with genuine personal worry for friend facing mortal danger.

"My dear friend," they say warmly, dropping the formal titles and merchant persona entirely to address you as equals sharing bond transcending commercial relationship. "I've been your supplier through everything - from unknown traveler with barely enough coin for basic supplies to heir of the kingdom commanding resources and respect. Watched you grow from uncertain novice into confident leader, seen you face challenges that would have broken lesser people. Now you face your greatest challenge yet, the quest that will determine not just your fate but the kingdom's future depending on whether you succeed or fail in recovering fragments that hold power beyond normal comprehension."

They gesture to an extraordinary collection that obviously represents years of careful acquisition and significant personal investment. "These items..." Their voice carries emotion rarely shown by professional merchants trained to maintain commercial detachment. "...are my finest work, some I've held for years waiting for someone worthy of wielding them rather than selling to highest bidder regardless of character. Take what you need to survive what's coming. We'll settle accounts when you return victorious, because I have absolute faith you will return even though odds suggest otherwise. And if accounts remain unsettled..." They pause meaningfully. "Then at least you'll have had the best equipment possible when you fell, which provides small comfort but comfort nonetheless. I'd rather lose profit than lose friend."`
		},
		{
			conditions: { hasFlags: ['merchant_friendly:true'] },
			text: `Aldric's arrival is perfectly timed as always, appearing exactly when needed with almost supernatural timing that makes you wonder sometimes if they possess magical ability to sense when customers face critical decisions requiring equipment upgrades.

"I have a sense for these things developed over fifteen years reading people and situations," they say with knowing smile that suggests they're aware of your speculation about their uncanny timing. "The Crystal Heart calls to you through magical resonance with your bloodline that I can almost perceive as physical phenomenon even without arcane training, and you'll need more than courage and legitimate claim to succeed in quest that combines physical danger with magical challenges requiring specialized preparation. Let me help outfit you properly for what lies ahead - consider it an investment in the kingdom's future and in friendship that's developed through our repeated interactions transcending simple buyer-seller relationship. I've grown fond of you beyond just valuing you as profitable customer, and I'd like to see you survive to continue our acquaintance."`
		},
		{
			conditions: { stats: { wealth: { max: 50 } } },
			text: `Aldric notices your depleted funds immediately with practiced eye that can assess customer's financial situation from subtle indicators like worn coin purse, hesitant body language, and slightly shabby equipment showing needed repairs you've been delaying, and their expression shifts from merchant calculating potential profit to concerned friend recognizing someone they care about facing danger without adequate resources.

"The political campaigns have drained your resources considerably, I see." They speak gently without judgment because they understand that nobility often means spending money faster than it accumulates through obligations to allies, bribes to neutral parties, and investments in political infrastructure necessary for building power base. "No matter - I can offer credit to the future ruler of the kingdom based on relationship we've built and confidence that you'll honor debts when circumstances improve. You can't hunt the Crystal fragments without proper equipment no matter how brave or determined you are, because courage without tools just means dying heroically rather than succeeding practically. Choose what you need to survive and succeed; we'll settle the debt later when you've claimed your throne and have treasury access. Consider it investment in your success, which benefits everyone including me since I'd prefer trading with just ruler rather than whoever would seize power if you fail."`
		}
	],
	choices: [
		{
			id: 'accept-help',
			text: 'Accept their help and browse the collection',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 2, charisma: 1 },
			hiddenEffects: {
				merchant_act3_visit: true,
				merchant_loyalty: true,
				merchant_rapport: 5
			}
		},
		{
			id: 'ask-advice',
			text: 'Ask if they have information about the crystal fragments',
			next: 'merchant_crystal_intel',
			effects: { wisdom: 3 },
			hiddenEffects: {
				merchant_intel: true
			}
		},
		{
			id: 'decline-politely',
			text: 'Thank them but trust in your current equipment',
			next: 'crystal_hunt_start',
			effects: { courage: 2 },
			hiddenEffects: {
				merchant_declined_act3: true,
				self_reliant: true
			}
		}
	]
};

export const MerchantCrystalIntel: Scene = {
	id: 'merchant_crystal_intel',
	text: `Aldric's expression becomes thoughtful and calculating as they process your request, clearly evaluating how much information to share and at what price given that intelligence has value independent of physical merchandise and often proves more valuable than any weapon or armor in determining success or failure of dangerous quests.

"Information, you want? Well now, that's something I do trade in extensively, though most customers focus only on tangible goods without recognizing that knowledge saves more lives than swords." They lower their voice despite the relative privacy of your meeting location, because habits of discretion run deep in merchants who've survived by knowing when information is sensitive enough to require careful handling. "I've heard rumors from travelers across the kingdom who don't necessarily recognize the significance of what they've observed but which I piece together into useful intelligence through cross-referencing multiple sources and applying decades of experience evaluating reliability of different informants."

They lean in conspiratorially, creating intimate atmosphere that emphasizes trust required for this exchange. "The Elven fragment hidden in their sacred forest is guarded by ancient wards that respond to sincerity and respect for their culture rather than simply brute force, meaning you'll need diplomatic approach and genuine appreciation for their ways rather than treating this as smash-and-grab operation. The Dwarven fragment locked deep in their mountain strongholds is protected by trials of strength and honor that test worthiness rather than just combat ability, requiring you to prove yourself according to their values which emphasize loyalty, craftsmanship, and keeping your word absolutely. The Dragon fragment..." They pause meaningfully. "...well, dragons don't part with treasures easily regardless of reasons offered, and their definition of negotiation often involves demonstrating that taking fragment by force would be too costly to be worth attempting, creating situation where mutual benefit provides only path forward. And the Palace fragment is protected by your own family's blood magic woven into architecture and artifacts, responding to legitimate heirs while resisting usurpers through enchantments that test bloodline authenticity and moral character simultaneously."

They pull out a worn map marked with careful notations in their neat handwriting, clearly maintained over years of gathering intelligence from various sources. "I've marked locations where travelers have reported unusual magical signatures, strange phenomena, or areas that locals avoid for reasons they can't quite articulate beyond 'bad feeling' that often indicates genuine magical danger. It's not complete because fragments are hidden specifically to remain unfound by casual searchers, but it might save you considerable time by narrowing search areas and warning you about specific hazards reported by those who ventured close but wisely retreated before attempting retrieval that would have killed them. Knowledge is advantage, and every advantage matters when attempting what most people rightfully consider impossible suicide mission."`,
	choices: [
		{
			id: 'thank-and-shop',
			text: 'Thank them for the intel and browse their wares',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 3 },
			hiddenEffects: {
				merchant_act3_visit: true,
				crystal_intel_received: true,
				merchant_rapport: 5
			}
		},
		{
			id: 'thank-and-leave',
			text: 'Thank them and begin your quest immediately',
			next: 'crystal_hunt_start',
			effects: { wisdom: 2, courage: 2 },
			hiddenEffects: {
				crystal_intel_received: true,
				well_prepared: true
			}
		}
	]
};

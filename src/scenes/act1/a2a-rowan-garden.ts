import { Scene } from '../../story-manager';

const acceptingInvitation = `When Rowan offered to show you the gardens—the spaces your grandmother tended with such devotion—you accepted immediately. Not just because exploring seemed pleasant, but because you needed it. Needed to see something your family loved, to walk paths they walked, to connect with heritage through beauty rather than just duty and destiny.

Rowan's expression shifted when you agreed, subtle approval in their forest-green eyes. This was another test, you realize. Not of capability or politics, but of values. Whether you'd prioritize experiencing beauty or rush immediately to responsibilities. Whether you understood that leadership requires nourishment of the soul, not just accumulation of power.`;

const enteringGardens = `Rowan leads you from the manor's grand halls through an arched doorway that opens onto the eastern gardens. The transition is immediate and breathtaking—from marble and portraits and the weight of dynasty to living, growing beauty that exists for its own sake rather than to impress or intimidate.

The gardens sprawl before you in organized chaos, a perfect balance between human design and nature's wildness. Ancient trees tower overhead, their branches forming natural archways that create shaded corridors and sun-dappled clearings. The trees themselves are extraordinary—silver-barked specimens you've never encountered, their leaves shimmering with faint magical luminescence even in daylight. Oak and ash and willow, yes, but also species that shouldn't exist outside of Fae realms, transplanted here by royal gardeners with access to resources beyond mundane.`;

const flowerDescription = `Flowers bloom in a riot of impossible colors. Not the typical reds and yellows of common gardens, but deep purples that seem to hold shadows, blues so vivid they hurt to look at directly, whites that glow with their own internal light. Some flowers respond to your presence—petals turning to follow your movement, stems straightening as if presenting themselves for inspection. These are magical cultivars, species bred or enchanted by Silverwood gardeners over generations, existing nowhere else in the world.

Rowan notices your awe and smiles slightly. "Your grandmother's work," they say with evident affection. "She spent decades cultivating these gardens, creating beauty that would outlast her. Each plant here was chosen deliberately, placed with intention, nurtured with patience and love."`;

const silverRose = `They pause beside a particular rose bush, its blooms an impossible silver that catches sunlight and transforms it into soft radiance. Rowan touches one flower with careful reverence, their vine tattoos brightening in response to the plant's magic.

"These are her masterpiece," Rowan murmurs. "The Silverwood Rose, bred by your grandmother over fifteen years of careful work. They shouldn't exist—roses don't naturally grow in silver, and most magical hybridization results in plants that can't sustain themselves. But she succeeded. Created something genuinely new, genuinely beautiful, that carries magic in every petal."

They pick one rose—the bush seems to offer it willingly, stem separating cleanly without thorns catching—and hand it to you. The moment you touch it, warmth spreads through your fingers. The silver petals pulse with light that matches your blood mark, recognizing family, welcoming you.

"She believed beauty was as important as power," Rowan says softly, watching you cradle the impossible flower. "That a ruler who couldn't appreciate a sunset shouldn't be trusted with a kingdom. That someone who viewed gardens only as displays of wealth rather than living art would inevitably view people the same way—as resources to exploit rather than lives to cherish."`;

const grandmotherPhilosophy = `You realize you're learning about your grandmother not through official histories or political documents, but through her gardens. Through the choices she made about beauty, the years she invested in creating something that would bloom long after her death, the philosophy she expressed through living things rather than words.

She was powerful, yes—a queen with access to blood magic and political authority. But she chose to spend her time here, in these gardens, with her hands in soil and magic flowing into growing things. That tells you something profound about who she was, what she valued, how she chose to use her power.`;

const marbleFountain = `Rowan leads you deeper into the gardens, following paths of smooth stone that wind between flower beds and beneath ancient trees. You arrive at a clearing centered around a marble fountain, its basin large enough to swim in, its sculpture depicting the Silverwood tree with water cascading from its branches like rain.

The fountain is active despite decades of abandonment, water flowing with crystal clarity, dancing in the afternoon light. Magic sustains it, of course—enchantments laid by your grandmother to ensure the gardens would survive even without gardeners to tend them. The water itself glows faintly, charged with residual power, nourishing the plants around it with more than simple moisture.`;

const magicalAtmosphere = `The garden seems almost sentient, responding to your presence with subtle shifts. Sunlight filters through leaves in patterns that shift and dance, always finding your face, always warm but never harsh. Birds sing complex melodies—not random chirping but structured songs that sound almost like music, as if they've been trained or enchanted to perform. The air smells of jasmine and earth and growing things, each scent distinct but harmonizing into an olfactory experience that's intoxicating without being overwhelming.

You feel your blood mark warm against your skin, not warning or alerting, but simply... responding. The magic here recognizes you. Your grandmother's enchantments, woven through every plant and stone, acknowledge her heir. You are welcome here in a way you haven't felt welcome anywhere else—not in the manor's grand halls, not in the libraries or vaults, but here, in these gardens she poured her heart into.`;

const rowanWisdom = `Rowan settles on the fountain's edge, trailing fingers through the glowing water, watching you process everything. They seem patient, willing to let you take your time, to absorb not just the beauty but the lesson it represents.

"The political world will try to consume all your time," Rowan says quietly, voice carrying weight of experience. "Advisors and petitioners, meetings and negotiations, decisions that can't wait and crises that demand immediate attention. Power attracts demands. Responsibility creates endless obligations. If you let it, the work will never stop, and you'll never have time for anything else."

They meet your eyes directly. "Don't let it. Take moments like this. Not as indulgence or weakness, but as necessity. Remember why power matters—not for its own sake, but to protect beautiful things. To ensure people have the safety and peace to create gardens, to compose music, to write poetry, to fall in love, to watch their children play. Power without purpose becomes tyranny. Beauty reminds us of purpose."

A silver rose petal falls from the bloom you're holding, drifting down to float on the fountain's glowing water. It doesn't sink—the magic sustains it, keeps it perfect.

"Your grandmother understood that," Rowan says. "She wielded tremendous power, made hard decisions, ruled with strength when strength was needed. But she never forgot what she was protecting. Never let the weight of the crown crush the part of her that loved beauty, that valued creation over destruction, that believed life was worth living not just surviving."

They stand, brushing water from their hands, vine tattoos still glowing faintly in response to the garden's magic. "That's what I'm here to teach you. Not just survival skills and combat technique, but this—" they gesture at the gardens around you, "—the importance of staying connected to living things, to beauty, to the reasons we fight rather than just the fighting itself."`;

const getGardenWalk = (): string => {
	return `${acceptingInvitation}

${enteringGardens}

${flowerDescription}

${silverRose}

${grandmotherPhilosophy}

${marbleFountain}

${magicalAtmosphere}

${rowanWisdom}`;
};

export const RowanGardenWalk: Scene = {
	id: 'rowan_garden_walk',
	get text() {
		return getGardenWalk();
	},
	choices: [
		{
			id: 'appreciate-beauty',
			text: 'Take time to truly appreciate the beauty—honor your grandmother\'s values through presence',
			next: 'first_political_meeting',
			effects: { wisdom: 4, empathy: 3, vitality: 2 },
			hiddenEffects: {
				rowan_bond: 16,
				beauty_appreciator: true,
				grandmother_values: true,
				mindful_presence: true
			},
			realLifeChallenge: {
				id: 'beauty_appreciation_challenge',
				type: 'meditation',
				title: 'Appreciating Beauty',
				description: 'Your character experiences the beauty of their ancestral gardens - you connect with beauty in your world',
				instructions: 'Spend 10 minutes truly experiencing something beautiful. Watch a sunset, observe plants or flowers, stargaze, appreciate art, listen to moving music, or simply sit with something that touches you aesthetically. Be fully present with the beauty, letting it affect you.',
				durationMinutes: 10,
				verificationMethod: 'honor',
				rewards: {
					stats: { wisdom: 3, empathy: 2, vitality: 2 },
					hiddenAttributes: { beauty_seeker: 1, aesthetic_appreciation: true },
					message: 'You return from experiencing beauty feeling more whole. Like your grandmother who planted gardens as acts of love, you\'ve chosen to appreciate the beautiful things in the world. This practice nourishes the soul and reminds us what we\'re protecting.'
				}
			}
		},
		{
			id: 'thank-rowan',
			text: 'Thank Rowan sincerely for sharing this wisdom and your grandmother\'s legacy',
			next: 'first_political_meeting',
			effects: { charisma: 3, wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 14,
				grateful_heart: true
			}
		},
		{
			id: 'focus-politics',
			text: 'Appreciate the lesson but acknowledge your political duties await',
			next: 'first_political_meeting',
			effects: { wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 10,
				duty_focused: true
			}
		}
	]
};

import { Scene } from '../../story-manager';

const whisperAppearance = `The figure emerges from the shadows so silently you don't notice until they're right beside you. Androgynous features, dark clothing that seems to absorb light, and eyes that miss nothing.`;

const whisperGreeting = `"So," a soft voice observes, "the lost royal finally awakens. How delicious." Those knowing eyes study you with unnerving intensity. "I am Whisper. I deal in secrets, truths, and the occasional convenient lie. Your blood is... interesting. Shall we discuss what it means?"`;

export const MeetWhisper: Scene = {
	id: 'meet_whisper',
	text: `The Undercroft. Even the name sends shivers down your spine. This network of tunnels beneath the capital is where secrets are traded like currency and information flows faster than wine.

Vale led you here after your magical awakening, insisting there was someone you needed to meet. "Whisper knows things," Vale had said cryptically. "Things that might help you understand what you're becoming."

${whisperAppearance}

${whisperGreeting}`,
	textVariants: [
		{
			conditions: { hasFlags: ['rook_trust:10', 'magic_reaction:trust'] },
			text: `The Undercroft. Rook led you here, moving through the tunnels with practiced ease. After your magical awakening, Vale insisted you needed to meet someone who could explain what you're becoming.

To your surprise, Rook seems respected down here—people nod as you pass. "Whisper's the real deal," Rook explains. "If you can trust anyone with dangerous secrets, it's them."

${whisperAppearance} Rook actually bows their head slightly in respect.

"So," a soft voice observes warmly, "the lost royal finally awakens. And Rook vouches for you—high praise indeed." Those knowing eyes study you with approval. "I am Whisper. Your young friend here tells me you seek truth, not power. How refreshing. Let us discuss what your heritage truly means."`
		},
		{
			conditions: { hasHiddenAttributes: { rook_trust: 10 } },
			text: `The Undercroft. Even the name sends shivers down your spine. This network of tunnels beneath the capital is where secrets are traded like currency and information flows faster than wine.

Vale led you here after your magical awakening, insisting there was someone you needed to meet. To your surprise, Rook is already here, looking strangely at home in these shadowy tunnels.

${whisperAppearance} Rook actually bows their head slightly in respect.

"So," a soft voice observes, "the lost royal finally awakens. How delicious." Those knowing eyes study you with unnerving intensity. "I am Whisper. I deal in secrets, truths, and the occasional convenient lie. Your blood is... interesting. Rook tells me you can be trusted. Let us discuss what your heritage truly means."`
		},
		{
			conditions: { hasFlags: ['magic_reaction:fear'] },
			text: `The Undercroft. Your panic after the magical awakening led Vale to insist you needed answers—and quickly.

Vale led you through winding tunnels, supporting you when your hands shook. "Whisper can help," they promised. "They've dealt with blood magic before."

${whisperAppearance}

"So," a soft voice observes gently, "the lost royal awakens... and fears what they've become." Those knowing eyes soften slightly. "I am Whisper. Your terror is understandable, but unnecessary. Let me explain what gift—not curse—you possess."`
		},
		{
			conditions: { hasFlags: ['magic_reaction:curiosity'] },
			text: `The Undercroft. After your magical awakening, your desire to understand what happened led Vale to bring you here.

"You want answers," Vale had said. "Whisper deals in those. Be warned—the truth has a price."

${whisperAppearance}

"So," a soft voice observes with interest, "the lost royal awakens... and seeks knowledge rather than power." Those knowing eyes gleam with approval. "I am Whisper. Your curiosity will serve you well. Let us discuss what your blood truly means—and what it could become."`
		}
	],
	choices: [
		{
			id: 'direct',
			text: 'Tell me what you know about my bloodline',
			next: 'guild_masters_request',
			effects: { wisdom: 2 },
			hiddenEffects: {
				whisper_first_impression: 'direct',
				whisper_trust: 5,
				information_network_access: true,
				learned_heritage: true
			}
		},
		{
			id: 'cautious',
			text: 'Who says I trust you with my secrets?',
			next: 'guild_masters_request',
			effects: { wisdom: 3 },
			hiddenEffects: {
				whisper_first_impression: 'cautious',
				whisper_trust: 10,
				whisper_respect: true,
				information_network_access: true,
				learned_heritage: true
			}
		},
		{
			id: 'trade',
			text: 'What do you want in exchange for this information?',
			next: 'guild_masters_request',
			effects: { charisma: 2 },
			hiddenEffects: {
				whisper_first_impression: 'pragmatic',
				whisper_trust: 8,
				information_network_access: true,
				whisper_owes_favor: false,
				player_owes_whisper: true,
				learned_heritage: true
			}
		},
		{
			id: 'charm',
			text: 'Perhaps we could help each other',
			next: 'guild_masters_request',
			effects: { charisma: 3 },
			hiddenEffects: {
				whisper_first_impression: 'charming',
				whisper_trust: 7,
				whisper_romance: 5,
				information_network_access: true,
				learned_heritage: true
			}
		}
	]
};

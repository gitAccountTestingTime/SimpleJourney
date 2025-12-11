import { Scene } from '../../story-manager';

export const MeetWhisper: Scene = {
	id: 'meet_whisper',
	text: `The Undercroft. Even the name sends shivers down your spine. This network of tunnels beneath the capital is where secrets are traded like currency and information flows faster than wine.

Vale led you here after your magical awakening, insisting there was someone you needed to meet. "Whisper knows things," Vale had said cryptically. "Things that might help you understand what you're becoming."

The figure emerges from the shadows so silently you don't notice until they're right beside you. Androgynous features, dark clothing that seems to absorb light, and eyes that miss nothing. 

"So," a soft voice observes, "the lost royal finally awakens. How delicious." Those knowing eyes study you with unnerving intensity. "I am Whisper. I deal in secrets, truths, and the occasional convenient lie. Your blood is... interesting. Shall we discuss what it means?"`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rook_trust: 10 }
			},
			text: `The Undercroft. Even the name sends shivers down your spine. This network of tunnels beneath the capital is where secrets are traded like currency and information flows faster than wine.

Vale led you here after your magical awakening, insisting there was someone you needed to meet. To your surprise, Rook is already here, looking strangely at home in these shadowy tunnels.

The figure emerges from the shadows so silently you don't notice until they're right beside you. Androgynous features, dark clothing that seems to absorb light, and eyes that miss nothing. Rook actually bows their head slightly in respect.

"So," a soft voice observes, "the lost royal finally awakens. How delicious." Those knowing eyes study you with unnerving intensity. "I am Whisper. I deal in secrets, truths, and the occasional convenient lie. Your blood is... interesting. Rook tells me you can be trusted. Let us discuss what your heritage truly means."`
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

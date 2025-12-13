import { Scene } from '../../story-manager';

const rowanAppearance = `A figure emerges from the forest edge as you explore the manor grounds. Half-elf, by the pointed ears and otherworldly grace, dressed in practical leathers with vine tattoos winding up their arms. Auburn hair catches the sunlight, and forest-green eyes assess you with careful neutrality.`;

const rowanDescription = `${rowanAppearance}`;

const rowanTitle = `"Your Highness," they say, the title sounding strange directed at you.`;

const rowanRole = `"I am Rowan Thornheart, ranger of the Wildwood. Agent Thorne has assigned me as your official guardian. My task is to keep you alive and teach you to survive outside these comfortable walls."`;

const rowanTest = `There's a hint of challenge in their voice - they're testing you, seeing if nobility has already gone to your head.`;

const rowanIntroduction = `${rowanTitle} ${rowanRole}

${rowanTest}`;

export const RowanIntroduction: Scene = {
	id: 'rowan_formal_introduction',
	text: `${rowanDescription}

${rowanIntroduction}`,
	textVariants: [
		{
			conditions: { hasFlags: ['companions_priority:true', 'emotional_connection:family'] },
			text: `${rowanDescription}

You're still processing the journals you read, your parents' words fresh in your mind. This ranger represents another connection to that lost world.

${rowanIntroduction}

Rowan notices your emotional state. "I knew them, you know. Your parents. They saved the Wildwood once. I swore then I'd protect their line." Their voice softens. "You have their eyes."`
		},
		{
			conditions: { hasFlags: ['magic_focus:true', 'blood_magic_affinity:5'] },
			text: `${rowanDescription}

Your blood mark tingles as they approach - Rowan has magic too, though different. Nature magic, woven through their very being.

${rowanIntroduction}

Their eyes catch the glow of your mark. "Ah. Your magic recognizes mine. Good. We'll work well together - blood magic and nature magic, two halves of a whole."`
		},
		{
			conditions: { hasFlags: ['political_knowledge:true', 'pragmatic_focus:true'] },
			text: `${rowanDescription}

You've been studying the political documents, understanding the complex web of alliances. This ranger represents the Wildwood faction - an important piece of the puzzle.

${rowanIntroduction}

You note their body language, the subtle test. A political education tells you how to read people, and Rowan is assessing whether you're a puppet or a player.`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_met_early: true }
			},
			text: `A familiar figure emerges from the forest edge as you explore the manor grounds. You recognize the half-elf from your journey to Silverwood - the ranger who warned about something watching the roads.

"So," Rowan says with a slight smile, "the mysterious traveler turns out to be the lost heir. I suspected as much when I sensed the blood magic in you." They bow with a hint of irony. "I am Rowan Thornheart, and it seems Agent Thorne has made official what fate already decided - I'm to be your guardian."

The formality drops from their voice. "At least now I know why you felt so important to protect."`
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 20 }
			},
			text: `${rowanDescription}

Before they can speak, Ash steps forward protectively. "State your business."

The ranger smiles slightly. "Rowan Thornheart. Agent Thorne sent me." They look past Ash to you. "Your Highness, I see you already have capable protection. Good. But I offer something different - knowledge of the wild, of magic, of survival. The political world will try to trap you in walls and rules. I'll make sure you remember the forest."

Ash relaxes slightly, recognizing a fellow warrior's assessment.`
		}
	],
	choices: [
		{
			id: 'welcome-warmly',
			text: 'Welcome them warmly - you appreciate having a guide',
			next: 'first_political_meeting',
			effects: { charisma: 2 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_official_guardian: true,
				open_personality: true
			}
		},
		{
			id: 'question-need',
			text: 'Question why you need protection - you can handle yourself',
			next: 'first_political_meeting',
			effects: { courage: 2 },
			hiddenEffects: {
				rowan_bond: 5,
				rowan_respects_independence: true,
				rowan_official_guardian: true,
				independent_streak: true
			}
		},
		{
			id: 'introduce-companions',
			text: 'Introduce your prologue companions - integrate Rowan into your group',
			next: 'first_political_meeting',
			effects: { charisma: 3 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_official_guardian: true,
				companions_integrated: true,
				vale_trust: 3,
				ash_trust: 3,
				rook_trust: 3
			}
		},
		{
			id: 'ask-heritage',
			text: 'Ask about their half-elf heritage and connection to nature',
			next: 'rowan_bonding_1',
			effects: { wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 8,
				rowan_official_guardian: true,
				cultural_curiosity: true,
				rowan_shares_past: true
			}
		}
	]
};
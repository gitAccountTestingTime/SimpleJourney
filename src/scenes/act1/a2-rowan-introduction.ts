import { Scene } from '../../story-manager';

export const RowanIntroduction: Scene = {
	id: 'rowan_formal_introduction',
	text: `A figure emerges from the forest edge as you explore the manor grounds. Half-elf, by the pointed ears and otherworldly grace, dressed in practical leathers with vine tattoos winding up their arms. Auburn hair catches the sunlight, and forest-green eyes assess you with careful neutrality.

"Your Highness," they say, the title sounding strange directed at you. "I am Rowan Thornheart, ranger of the Wildwood. Agent Thorne has assigned me as your official guardian. My task is to keep you alive and teach you to survive outside these comfortable walls."

There's a hint of challenge in their voice - they're testing you, seeing if nobility has already gone to your head.`,
	textVariants: [
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
			text: `A figure emerges from the forest edge as you explore the manor grounds. Half-elf, by the pointed ears and otherworldly grace, dressed in practical leathers.

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
			next: 'first_political_meeting',
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

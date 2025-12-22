import { Scene } from '../story-manager';

const toBeContinuedText = `The path ahead fades into mist, obscuring what lies beyond. Your journey has brought you this far, revealing truths and forging bonds, testing courage and wisdom in equal measure. But this chapter of your story is not yet written.

The tale continues, though the words remain unspoken for now. New challenges await, new choices will present themselves, new paths will branch before you—but those stories are still taking shape, waiting to be told.

Your progress has been remarkable. The person you were when this journey began has been transformed by experience, by the companions you've gathered, by the choices you've made along the way. That growth is preserved, carried forward into whatever comes next.

For now, this is where the current path pauses. But it is not an ending—merely an intermission. The story will continue, and when it does, you'll be ready to face what awaits with all the strength, wisdom, and determination you've cultivated thus far.`;

const saveReminderText = `You may wish to save your progress here, preserving this moment so you can return when new paths open before you. When the story continues, your journey will resume from this point, carrying forward everything you've achieved and become.`;

export const ToBeContinued: Scene = {
	id: 'to_be_continued',
	text: `${toBeContinuedText}\n\n${saveReminderText}`,
	choices: [
		{
			id: 'save-and-acknowledge',
			text: 'Save your progress and step back from the story for now',
			next: null, // Ends the story at this point
			effects: { wisdom: 1 },
			hiddenEffects: {
				reached_story_boundary: true
			}
		},
		{
			id: 'acknowledge-without-save',
			text: 'Acknowledge the pause without saving (you can save manually from the menu)',
			next: null, // Ends the story at this point
			effects: { wisdom: 1 },
			hiddenEffects: {
				reached_story_boundary: true
			}
		}
	]
};

// Variant for urgent/dramatic moments
export const ToBeContinuedDramatic: Scene = {
	id: 'to_be_continued_dramatic',
	text: `Everything hangs in balance. The moment stretches, pregnant with possibility and danger alike. What happens next will reshape everything—but that story remains unwritten, suspended between potential futures.

Your heart pounds. Your companions stand ready. The choice before you feels monumental, weighted with consequence. And yet... the path forward is not yet clear, the story not yet told.

This is where the tale pauses, at the apex of tension, at the threshold of transformation. When it continues, everything will change. But for now, there is only anticipation, only the electric charge of a story waiting to unfold.

${saveReminderText}`,
	choices: [
		{
			id: 'save-and-step-back',
			text: 'Save your progress at this crucial moment',
			next: null,
			effects: { courage: 1, wisdom: 1 },
			hiddenEffects: {
				reached_dramatic_boundary: true
			}
		},
		{
			id: 'step-back-without-save',
			text: 'Step back without saving (manual save available from menu)',
			next: null,
			effects: { courage: 1, wisdom: 1 },
			hiddenEffects: {
				reached_dramatic_boundary: true
			}
		}
	]
};

// Variant for peaceful/contemplative moments
export const ToBeContinuedPeaceful: Scene = {
	id: 'to_be_continued_peaceful',
	text: `The road stretches ahead, winding through landscapes yet unexplored. There is no urgency here, no immediate danger—only the quiet certainty that more lies ahead when the time is right.

You've traveled far, grown strong, learned much. The journey has shaped you in ways both visible and subtle, preparing you for challenges yet to come. But those challenges await their proper moment, their stories not yet ready to be told.

For now, there is peace. Time to rest, to reflect, to let the experiences of your journey settle into wisdom. When the path opens again, you'll be ready to walk it with all the strength you've gathered.

${saveReminderText}`,
	choices: [
		{
			id: 'save-and-rest',
			text: 'Save your progress and take time to rest',
			next: null,
			effects: { wisdom: 2, vitality: 1 },
			hiddenEffects: {
				reached_peaceful_boundary: true
			}
		},
		{
			id: 'rest-without-save',
			text: 'Take your rest without saving (manual save available from menu)',
			next: null,
			effects: { wisdom: 2, vitality: 1 },
			hiddenEffects: {
				reached_peaceful_boundary: true
			}
		}
	]
};

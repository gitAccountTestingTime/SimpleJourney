import { describe, it, expect, beforeEach } from 'vitest'
import {
  initStory,
  getCurrentScene,
  choose,
  applyEffects,
  getStats,
  setStats,
  saveProgress,
  restoreProgress,
  resetProgress,
  checkRequirements
} from '../src/story-manager'

describe('story-manager', () => {
  beforeEach(() => {
    // clear storage and reset
    resetProgress()
    setStats({
      courage: 0,
      curiosity: 0,
      empathy: 0,
      wealth: 0,
      reputation: 0,
      strength: 0,
      wisdom: 0,
      luck: 0,
      health: 10,
      charisma: 0
    })
    initStory()
  })

  it('initializes and returns start scene', () => {
    const s = getCurrentScene()
    expect(s.id).toBe('start')
  })

  it('applies numeric effects when choosing', () => {
    const start = getCurrentScene()
    expect(start.id).toBe('start')
    choose('go-forest')
    const stats = getStats()
    expect(stats.courage).toBeGreaterThanOrEqual(1)
    expect(stats.curiosity).toBeGreaterThanOrEqual(1)
  })

  it('supports effect operations (set, mul, add)', () => {
    // set courage to 5
    applyEffects({ courage: { op: 'set', value: 5 } as any })
    expect(getStats().courage).toBe(5)
    // multiply by 2
    applyEffects({ courage: { op: 'mul', value: 2 } as any })
    expect(getStats().courage).toBeGreaterThanOrEqual(10)
    // add 3
    applyEffects({ courage: { op: 'add', value: 3 } as any })
    expect(getStats().courage).toBeGreaterThanOrEqual(13)
  })

  it('saves and restores progress including stats', () => {
    choose('go-sea')
    applyEffects({ wealth: 50 })
    saveProgress()
    const raw = window.localStorage.getItem('simplejourney.currentScene')
    expect(raw).toBeTruthy()
    // reset in-memory and restore
    resetProgress()
    const restored = restoreProgress()
    // restore should put us in the saved scene
    expect(getCurrentScene().id).toBe(restored.id)
    // and stats restored
    expect(getStats().wealth).toBe(50)
  })

  it('checkRequirements correctly reports unmet and ok', () => {
    setStats({ courage: 2, wealth: 0 })
    const ok = checkRequirements({ courage: { min: 2 } })
    expect(ok.ok).toBe(true)
    const notOk = checkRequirements({ courage: { min: 5 }, wealth: { min: 1 } })
    expect(notOk.ok).toBe(false)
    expect(notOk.unmet.length).toBeGreaterThan(0)
  })
})

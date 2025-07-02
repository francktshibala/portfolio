import { describe, it, expect } from 'vitest'
import { cn, formatDate, slugify } from '../../src/lib/utils'

describe('Utils', () => {
  describe('cn', () => {
    it('should combine class names', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2')
    })

    it('should filter out falsy values', () => {
      expect(cn('class1', '', 'class2')).toBe('class1 class2')
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2024-07-02')
      const formatted = formatDate(date)
      expect(formatted).toMatch(/July 2, 2024/)
    })

    it('should handle string dates', () => {
      const formatted = formatDate('2024-07-02')
      expect(formatted).toMatch(/July 2, 2024/)
    })
  })

  describe('slugify', () => {
    it('should convert text to slug', () => {
      expect(slugify('Hello World')).toBe('hello-world')
    })

    it('should handle special characters', () => {
      expect(slugify('Hello World! @#$')).toBe('hello-world')
    })

    it('should handle multiple spaces', () => {
      expect(slugify('Hello    World')).toBe('hello-world')
    })
  })
})
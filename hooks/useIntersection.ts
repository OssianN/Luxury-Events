'use client'
import { type RefObject, useEffect, useState } from 'react'

export const useIntersection = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
): boolean | undefined => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState<IntersectionObserverEntry | null>(null)
  const [isVisible, setIsVisible] = useState<boolean>()

  useEffect(() => {
    if (!isVisible) {
      setIsVisible(intersectionObserverEntry?.isIntersecting)
    }
  }, [isVisible, intersectionObserverEntry?.isIntersecting])

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0])
      }

      const observer = new IntersectionObserver(handler, options)
      observer.observe(ref.current)

      return () => {
        setIntersectionObserverEntry(null)
        observer.disconnect()
      }
    }
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, options.threshold, options.root, options.rootMargin])

  return isVisible
}

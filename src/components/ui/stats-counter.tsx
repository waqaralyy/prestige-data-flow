import * as React from "react"
import { cn } from "@/lib/utils"

interface StatsCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  textClassName?: string
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
  textClassName
}) => {
  const [displayValue, setDisplayValue] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)
  const counterRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [isVisible])

  React.useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      const currentValue = Math.floor(progress * value)
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount)
      }
    }

    animationFrame = requestAnimationFrame(animateCount)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, value, duration])

  return (
    <div ref={counterRef} className={cn("text-center", className)}>
      <div className={cn("text-4xl font-bold text-primary mb-2 font-display", textClassName)}>
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
    </div>
  )
}

export { StatsCounter }
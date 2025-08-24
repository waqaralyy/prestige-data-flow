import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  animation?: "fade-in" | "fade-in-up" | "scale-in" | "slide-in-right"
}

const AnimatedSection = React.forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ className, children, delay = 0, animation = "fade-in-up", ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const sectionRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        },
        { threshold: 0.1, rootMargin: "50px 0px" }
      )

      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current)
        }
      }
    }, [delay])

    React.useImperativeHandle(ref, () => sectionRef.current!)

    return (
      <div
        ref={sectionRef}
        className={cn(
          "transition-all duration-700 ease-out",
          isVisible ? `animate-${animation}` : "opacity-0 translate-y-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AnimatedSection.displayName = "AnimatedSection"

export { AnimatedSection }
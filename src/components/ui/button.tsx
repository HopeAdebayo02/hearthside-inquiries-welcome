import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 will-change-transform",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-button)] hover:shadow-lg hover:scale-[1.015] active:scale-[0.985]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[var(--shadow-button)] hover:scale-[1.015] active:scale-[0.985]",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-[var(--shadow-card)] hover:scale-[1.015] active:scale-[0.985]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-[var(--shadow-card)] hover:scale-[1.015] active:scale-[0.985]",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-[1.015] active:scale-[0.985]",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground shadow-[var(--shadow-button)] hover:bg-primary/90 hover:shadow-lg hover:scale-[1.015] active:scale-[0.985]",
        care: "bg-care-accent text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary hover:text-white shadow-[var(--shadow-card)] hover:scale-[1.015] active:scale-[0.985]",
      },
      size: {
        default: "h-11 px-6 py-3 text-base",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-8 py-3 text-lg min-w-[44px]",
        icon: "h-11 w-11 min-w-[44px]",
        touch: "h-12 px-6 py-3 text-base min-w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const buttonClasses = cn(buttonVariants({ variant, size, className }))

    if (asChild) {
      return (
        <Slot
          className={buttonClasses}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <motion.button
        className={buttonClasses}
        ref={ref}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// MotionLink component for animated links
const MotionLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <motion.a
      className={className}
      ref={ref}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    />
  )
})

MotionLink.displayName = "MotionLink"

// MotionNavLink component for React Router Links
const MotionNavLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link> & { slowTransition?: boolean }
>(({ className, slowTransition = false, ...props }, ref) => {
  const transitionDuration = slowTransition ? 0.6 : 0.2;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: transitionDuration, ease: "easeOut" }}
    >
      <Link
        className={className}
        ref={ref}
        {...props}
      />
    </motion.div>
  )
})

MotionNavLink.displayName = "MotionNavLink"

export { Button, MotionLink, MotionNavLink, buttonVariants }

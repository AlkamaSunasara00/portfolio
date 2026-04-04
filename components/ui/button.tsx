import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-bold text-sm uppercase tracking-wide transition-all duration-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:bg-secondary focus-visible:shadow-[4px_4px_0px_0px_#000] focus-visible:ring-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-4 border-border shadow-[4px_4px_0px_0px_var(--border)] hover:brightness-95 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        destructive:
          "bg-destructive text-destructive-foreground border-4 border-border shadow-[4px_4px_0px_0px_var(--border)] hover:brightness-95 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        outline:
          "bg-background text-foreground border-4 border-border shadow-[4px_4px_0px_0px_var(--border)] hover:bg-accent hover:text-accent-foreground active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground border-4 border-border shadow-[4px_4px_0px_0px_var(--border)] hover:brightness-95 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        ghost:
          "border-4 border-transparent hover:border-border hover:bg-accent hover:text-accent-foreground active:translate-x-[2px] active:translate-y-[2px]",
        link: "border-none text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 px-4",
        lg: "h-14 px-8 text-base",
        icon: "size-12 border-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

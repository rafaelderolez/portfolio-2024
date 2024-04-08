import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground group-hover:bg-primary/80 hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground group-hover:bg-secondary/80 hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground group-hover:bg-destructive/80 hover:bg-destructive/80',
        outline:
          'text-foreground group-hover:border-foreground/50 hover:border-foreground/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

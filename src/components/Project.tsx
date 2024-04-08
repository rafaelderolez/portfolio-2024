import { type Project as SanityProject } from '@/types/sanity'
import { FC } from 'react'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from './ui/drawer'
import { urlForImage } from '@/lib/sanity'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { X } from 'lucide-react'

export const Project: FC<SanityProject> = ({ title, strapline, logo }) => {
  return (
    <Drawer shouldScaleBackground={true}>
      <DrawerTrigger asChild>
        <div className="group flex cursor-pointer gap-2 ">
          <img
            src={urlForImage(logo).url()}
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl border border-muted-foreground/20"
          />
          <div className="mr-4">
            <h2 className="text-base font-medium leading-snug">{title}</h2>
            <span className="block text-sm leading-tight text-muted-foreground">
              {strapline}
            </span>
          </div>
          <Badge className="ml-auto self-center" variant="secondary">
            View
          </Badge>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerClose>
          <Button variant="ghost" size="icon">
            <X />
          </Button>
        </DrawerClose>
        <DrawerHeader className="flex gap-4">
          <img
            src={urlForImage(logo).url()}
            width={64}
            height={64}
            className="h-16 w-16 rounded-2xl border border-muted-foreground/20"
          />
          <div className="flex max-w-96 flex-col gap-1">
            <DrawerTitle className="text-2xl font-medium leading-none">
              {title}
            </DrawerTitle>
            <DrawerDescription className="leading-tight text-muted-foreground">
              {strapline}
            </DrawerDescription>
          </div>
        </DrawerHeader>
        <div className="h-96"></div>
      </DrawerContent>
    </Drawer>
  )
}

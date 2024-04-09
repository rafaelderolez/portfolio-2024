'use client'

import { type Project as SanityProject } from '@/types/sanity'
import { FC } from 'react'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from './ui/drawer'
import { urlForImage } from '@/lib/sanity'
import { Badge, badgeVariants } from './ui/badge'
import { Button } from './ui/button'
import { X } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ScrollArea } from './ui/scroll-area'
import { SanityImage } from './SanityImage'
import { cn } from '@/lib/utils'

export const Project: FC<SanityProject> = ({
  title,
  strapline,
  logo,
  tech,
  media,
  body,
  link,
}) => {
  console.log('LS -> src/components/Project.tsx:32 -> media: ', media)
  return (
    <Drawer shouldScaleBackground={true}>
      <DrawerTrigger asChild>
        <div className="group flex cursor-pointer gap-2">
          <img
            src={urlForImage(logo).url()}
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl border border-muted-foreground/20"
          />
          <div className="mr-4">
            <h2 className="text-base font-medium leading-snug">{title}</h2>
            <span className="block text-xs leading-tight text-muted-foreground">
              {strapline}
            </span>
          </div>
          <button
            tabIndex={0}
            aria-label={`View ${title}`}
            className={cn(
              badgeVariants({ variant: 'default' }),
              'ml-auto self-center',
            )}
          >
            View
          </button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <ScrollArea className="h-[calc(100dvh-6rem)]">
          <DrawerClose
            asChild
            className="absolute right-8 top-1 z-50 hidden md:flex"
          >
            <Button variant="ghost" size="icon">
              <X />
            </Button>
          </DrawerClose>
          <div className="flex items-center gap-4 px-4 pt-2 md:px-8">
            <img
              src={urlForImage(logo).url()}
              width={64}
              height={64}
              className="h-20 w-20 rounded-2xl border border-muted-foreground/20"
            />
            <div className="flex max-w-96 flex-col gap-1">
              <DrawerTitle className="text-2xl font-medium leading-none">
                {title}
              </DrawerTitle>
              <DrawerDescription className="leading-tight text-muted-foreground">
                {strapline}
              </DrawerDescription>
            </div>
          </div>
          <hr className="m-4 md:mx-8" />
          <div className="flex flex-col gap-2">
            <h3 className="px-4 text-xs uppercase text-muted-foreground md:px-8">
              Tech
            </h3>
            <div className="flex snap-x gap-2 overflow-x-auto px-4 md:px-8">
              {tech?.map((t) => (
                <Badge
                  key={t}
                  className="pointer-events-none shrink-0 snap-center"
                  variant="outline"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <Carousel data-vaul-no-drag>
            <CarouselContent className="-ml-4 mt-6 px-4 md:-ml-8 md:px-8">
              {media?.map((m, i) =>
                m.asset ? (
                  <CarouselItem
                    key={i}
                    className="basis-10/12 pl-4 last:mr-4 md:pl-8 md:last:mr-8"
                    data-vaul-no-drag
                  >
                    <SanityImage
                      id={m.asset?._id}
                      preview={m.asset?.metadata?.lqip ?? undefined}
                      data-vaul-no-drag
                      sizes="(min-width: 1024px) 793px, 83vw"
                      width={793}
                      className="rounded-xl border border-muted-foreground/20"
                    />
                  </CarouselItem>
                ) : null,
              )}
            </CarouselContent>
            <CarouselPrevious className="left-6 hidden transition-opacity disabled:opacity-0 md:flex" />
            <CarouselNext className="right-6 hidden transition-opacity disabled:opacity-0 md:flex" />
          </Carousel>
          <div className="mt-4 max-w-prose px-4 pb-16 md:px-8">
            <p className="whitespace-pre-wrap text-lg font-light">{body}</p>
            <Button asChild className="mt-4" variant="default">
              <a href={link} target="_blank" rel="noreferrer noopener">
                View Project
              </a>
            </Button>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}

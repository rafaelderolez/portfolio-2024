import { ThemeToggle } from '@/components/ThemeToggle'
import { Intro } from '@/components/Intro'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity'
import { HomeQueryResult, type Home } from '@/types/sanity'
import { Project } from '@/components/Project'

const homeQuery = groq`
*[_id == "home"]{
  title,
  projects[]->
}[0]
`

export default async function Home() {
  const home = await client.fetch<HomeQueryResult>(homeQuery)
  if (!home?.title || !home?.projects) return null

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-between gap-16 px-4 py-8 antialiased lg:justify-center">
      <Intro title={home.title} />

      <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2">
        {home.projects?.map((project) => (
          <div className="group relative flex flex-col" key={project._id}>
            <Project {...project} />
            <hr className="absolute -bottom-3 right-0 w-[calc(100%-3.5rem)] self-end group-last:hidden lg:group-[:nth-last-child(2)]:hidden" />
          </div>
        ))}
      </div>
    </main>
  )
}

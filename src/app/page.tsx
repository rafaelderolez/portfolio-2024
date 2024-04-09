import { groq } from 'next-sanity'
import { Intro } from '@/components/Intro'
import { Project } from '@/components/Project'
import { client } from '@/lib/sanity'
import { HomeQueryResult, type Home } from '@/types/sanity'
import { Metadata } from 'next'

const homeQuery = groq`
*[_id == "home"]{
  title,
  projects[]->{
    ...,
    media[] {
      asset->{
        _id,
        metadata { lqip }
      }
    }
  }
}[0]
`

export const metadata: Metadata = {
  title: 'Rafael Derolez - Frontend Developer',
  description:
    'Rafael Derolez is a freelance front-end engineer with a strong focus on interfaces and experiences working remotely from Ghent, Belgium.',
  twitter: {
    site: '@rafaelderolez',
    creator: '@rafaelderolez',
    description:
      'Rafael Derolez is a freelance front-end engineer with a strong focus on interfaces and experiences working remotely from Ghent, Belgium.',
    title: 'Rafael Derolez - Frontend Developer',
  },
}

export default async function Home() {
  const home = await client.fetch<HomeQueryResult>(homeQuery)
  if (!home?.title || !home?.projects) return null

  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-5xl flex-col justify-between gap-16 px-4 py-8 antialiased md:justify-center">
      <Intro title={home.title} />

      <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
        {home.projects?.map((project) => (
          <div className="group relative flex flex-col" key={project._id}>
            <Project {...project} />
            <hr className="absolute -bottom-3 right-0 w-[calc(100%-3.5rem)] self-end group-last:hidden md:group-[:nth-last-child(2)]:hidden" />
          </div>
        ))}
      </div>
    </main>
  )
}

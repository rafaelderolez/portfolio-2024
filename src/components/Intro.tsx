import { Mail, Instagram, Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import { FC } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { X } from './icons'

type IntroProps = {
  title: string
}

export const Intro: FC<IntroProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-title leading-tight">{title}</h1>
      <ul className="flex gap-2">
        <li>
          <Button variant="outline" size="icon" asChild>
            <a title="Raf's email" href="mailto:raf@derolez.dev">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </li>

        <li>
          <Button variant="outline" size="icon" asChild>
            <a title="Raf's X / Twitter" href="https://x.com/rafaelderolez">
              <X className="h-4 w-4" />
            </a>
          </Button>
        </li>
        <li>
          <Button variant="outline" size="icon" asChild>
            <a title="Raf's Instagram" href="https://instagram.com/derolez.dev">
              <Instagram className="h-4 w-4" />
            </a>
          </Button>
        </li>
        <li>
          <Button variant="outline" size="icon" asChild>
            <a
              title="Raf's LinkedIn"
              href="https://www.linkedin.com/in/rafaelderolez/"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  )
}

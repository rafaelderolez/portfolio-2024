import { dataset, projectId } from '@/lib/sanity'
import { SanityImage as SanityImageComponent } from 'sanity-image'

const baseUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/`

export const SanityImage = (
  props: React.ComponentProps<typeof SanityImageComponent>,
) => <SanityImageComponent baseUrl={baseUrl} {...props} />

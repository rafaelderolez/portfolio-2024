import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const projectId = 'lcrnwy6l'
const dataset = 'production'
const apiVersion = '2024-04-05'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

export const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (
  source: Parameters<(typeof imageBuilder)['image']>[0],
) => imageBuilder.image(source)

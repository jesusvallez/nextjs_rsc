import { cache } from 'react'
import 'server-only'

const fetchData = cache(async (type: string) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/${type}.json`,
    {
      next: {
        tags: ['hacker']
      }
    }
  )
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  return res.json()
})

export default fetchData

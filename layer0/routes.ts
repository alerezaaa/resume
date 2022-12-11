import { Router } from '@layer0/core'

const ONE_DAY = 60 * 60 * 24
const FAR_FUTURE = ONE_DAY * 365 * 10

export default new Router()
  // Prevent search engine bot(s) from indexing
  // Read more on: https://docs.layer0.co/guides/cookbook#blocking-search-engine-crawlers
  .noIndexPermalink()
  .match('/assets/:path*', ({ serveStatic, cache }) => {
    cache({
      browser: {
        maxAgeSeconds: ONE_DAY,
      },
      edge: {
        maxAgeSeconds: ONE_DAY,
        staleWhileRevalidateSeconds: FAR_FUTURE,
      },
    })
    serveStatic('_site/assets/:path*')
  })
  .match('/:path*', ({ serveStatic, cache }) => {
    cache({
      browser: false,
      edge: {
        maxAgeSeconds: ONE_DAY,
        staleWhileRevalidateSeconds: FAR_FUTURE,
      },
    })
    serveStatic('_site/:path*')
  })

import { Router } from '@edgio/core'


const ONE_DAY = 60 * 60 * 24

const FAR_FUTURE = ONE_DAY * 365 * 10


export default new Router()

  // Create serveStatic route for each file in the folder _site with a cache-control header of 's-maxage=315360000'

  .static('_site')

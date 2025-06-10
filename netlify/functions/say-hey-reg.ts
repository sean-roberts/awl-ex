import { AsyncWorkloadsClient } from '@netlify/async-workloads'
import type { Config } from '@netlify/functions'

export default async (_: Request) => {
	const client = new AsyncWorkloadsClient()
	await client.send('say-hello')
  return new Response(null, {
    status: 204
  })
}

export const config: Config = {
	path: '/say-hey'
}
import { type AsyncWorkloadConfig, type AsyncWorkloadEvent, asyncWorkloadFn } from '@netlify/async-workloads'

export default asyncWorkloadFn((a: AsyncWorkloadEvent) => {
  console.log(`attempt: ${a.attempt}`)
  throw new Error('failed on purpose')
})

export const asyncWorkloadConfig: AsyncWorkloadConfig = {
  backoffSchedule(attempt) {
    switch (attempt) {
      case 1:
        return '1s'
      case 2:
        return '5s'
      case 3:
        return '10s'
      case 4:
        return '30s'
      default:
        return '0s'
    }
  },
  events: ['say-hello']
}

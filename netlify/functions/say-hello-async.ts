import { type AsyncWorkloadConfig, type AsyncWorkloadEvent, asyncWorkloadFn } from '@netlify/async-workloads'

export default asyncWorkloadFn((_: AsyncWorkloadEvent) => {
  console.log('Hello, Async Workloads!')
})

export const asyncWorkloadConfig: AsyncWorkloadConfig = {
  events: ['say-hello']
}
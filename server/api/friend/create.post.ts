import { FriendSchema } from '~/server/models/friend.schema'

export default defineEventHandler(async (event) => {
  console.warn(`start request: ${event.path}`)
  const startTime = Date.now()
  try {
    const body = await readBody(event)
    const res = await new FriendSchema(body).save()
    const endTime = Date.now()
    const elapsedTime = endTime - startTime
    console.warn(`request: ${event.path} takes ${elapsedTime} ms`)
    return res
  }
  catch (error) {
    return error
  }
})
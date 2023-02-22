import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app.listen({ port: 3001 }, () => {
  console.log('server is running')
})

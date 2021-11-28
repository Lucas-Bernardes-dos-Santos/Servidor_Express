const express = require('express')
const app = express()
const port = process.env.port || 3000 

// Página 404 personalizada
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Page not found')
})

app.use((err, res, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(port, () => {
  console.log(`Express started on http://localhost:${port}`)
  console.log(`Press Ctrl+Alt+M to terminate5`);
})
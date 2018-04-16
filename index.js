const express = require('express')
const server = express()
const port = process.env.PORT || 8080
const cors = require('cors')
const data = require('./data/cohorts.json')
const res = 'response'
const req = 'request'

function findById(data, id){
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id){
      return data[i]
    }
  }
  return null
}

server.use(cors())

server.get('/', function(req, res){
  res.json({data})
})

server.get('/:id', idRoute)

function idRoute(req, res){
  var id = findById(data, req.params.id)
  console.log(id)
  if (!id){
    response.status(404).json({
      error:{
        message:"No record found"
      }
  })
  else {
    res.json({data: id})
    }
  }
}

server.listen(port)

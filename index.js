const express = require('express')
const server = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const data = require('./data/cohorts.json')


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
  if (!id){
    res.status(404).json({
      error:{
        message:"No record found"
      }
    })
  }
  else{
    res.json({data: id})
    }
}


server.listen(port)

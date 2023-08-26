const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    
    '21 savage': {
        'age': 29,
        'birthName': 'will',
        'birthLocation': 'Boston'},

        //remember when you are doing property/value pairs, you need 
        //the , after the {}!!

    'chance the rapper': {
        'age': 30,
        'birthName': 'joe',
        'birthLocation': 'sleaford'
    },

    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'   
    }

}

//check it works get the main page
//URL from the api

//app.get is like a event listener/clickevent
//it is a network request

app.get('/', (request, response)=>{
        response.sendFile(__dirname + '/index.html')
})
//asking for a request via the API route, respond with a json 
//of the savage object
//modified so the user can imput a paramater - after /api/
// add :name (can be anything, name is arbitrary choice for clarity)
app.get('/api/:name', (request,response)=>{
        //console.log(request.params.name)//console logging shows it in terminal
        const rapperName = request.params.name.toLowerCase()
        //now you need a conditional to access the array - 
        if(rappers[rapperName]){
            response.json(rappers[rapperName])
        }else {
            response.json(rappers['unknown'])
        }

        
        
})

//set up the listen, use `` above tabs when taking input with ${}
app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})
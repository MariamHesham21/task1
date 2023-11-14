const fs = require ("fs")

const data50File = require ("./data50")

const yargs = require ("yargs")

yargs.command({
    command :"add",
    describe : "add item",
    builder :{
        fname: {
            describe :"this is first name",
            demandOption : true,
            type : "string"
        },
        lname:{
            describe :"this is last name",
            demandOption : true,
            type : "string"
        }
    },
    handler: (x) => {
        data50File.addPerson(x.id ,x.fname , x.lname , x.age ,x.city)
    }
})
yargs.command({
    command :"delete",
    describe : "delete item",
    handler: (x)=>{
        data50File.deletePerson(x.id)
    }
})

// console.log(yargs.argv)
yargs.parse()

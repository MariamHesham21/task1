const fs = require("fs")
// 1- addPerson function

const addPerson = (id, fname , lname ,age ,city)=>{
    const allData = loadData()
    // علشان ميضفش نفس ال id
    const duplicatedData = allData.filter((obj)=>{
        return obj.id === id // 3 === 2
    }) 
    // console.log(duplicatedData)
    if( duplicatedData.length == 0){
        allData.push({
            id:id, // بستدعي بيه وبعدل بيه
            fname: fname,
            lname :lname,
            age,
            city :city
        })
        saveAllData(allData)
    } else{
        console.log("error id is dublicated")
    }
}

////////////////////////////////////////
const loadData = () => { 
    try {
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    } 
    catch {
        return []
    }
}

///////////////////////////////////////////////
const saveAllData = (allData) =>{
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data.json",saveAllDataJson)
}
/////////////////////////////////////////////////////////////////////
//  Delete
const deletePerson = (id) =>{
    const allData = loadData()
    const dataToKeep = allData.filter((obj)=>{
        return obj.id !== id
    })
    // console.log(dataToKeep)
    saveAllData(dataToKeep)
}

/////////////////////////////////////////////////////////////////////
module.exports = {
    addPerson,
    deletePerson
}
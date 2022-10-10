const fs = require('fs')
const chalk = require('chalk')
const getNotes = ()=> {
    return 'your notes..'
}

const removenote= (title)=>{
    const notes = loadnotes()
    const notestokeep = notes.filter((note) =>note.title !== title)

 if (notes.length > notestokeep.length){
    console.log(chalk.green.inverse('Note removed'))
    saveNotes(notestokeep)
 }else{
    console.log(chalk.red.inverse('No note found'))
 }
}

debugger
const addnote= (title, body)=> {
   const notes = loadnotes()
   const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicateNote= notes.find((note) => note.title === title)
   
   
   if (!duplicateNote) {
    notes.push({
        title: title,
        body: body
       })
       saveNotes(notes)
       console.log(chalk.green.inverse('New note added!'))   
     } else {
        console.log(chalk.red.inverse('Note title taken!'))
   }
}

const saveNotes=  (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const  loadnotes = ()=> {
   try {
    const databuffer= fs.readFileSync('notes.json')
    const dataJSON= databuffer.toString()
    return JSON.parse(dataJSON)
   } catch(e) {
    return[]
   }
   
    
}
const listNotes = () => {
    const notes= loadnotes()
    console.log(chalk.inverse('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    }
    )
}
const readnotes = (title) => {
    const notes = loadnotes()
    const note = notes.find((note)=>note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found! '))
    }
}

module.exports= {
    getNotes: getNotes,
    addnote: addnote,
    removenote: removenote,
    listNotes: listNotes,
    readnotes: readnotes
}
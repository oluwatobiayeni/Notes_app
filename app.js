const validator= require('validator')
const notes = require('./notes.js')
const chalk = require('chalk')
const yargs= require('yargs')
const { describe, string } = require('yargs')

//create add command
yargs.command( {
        command: 'add',
        describe:'Add a new note',
        builder:{
            title:{
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body:{
                describe:'note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            // console.log('Title:'+ argv.title)
            // console.log(''+ argv.body)
            notes.addnote(argv.title, argv.body)
        }
    }
)
//create remove command
yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        builder:{
            title:{
                describe: 'Note title',
                demandOption:true,
                type: 'string'
            }
        },
        handler() {
            console.log('Removing the note')
        }
}
)
//create command to list 
yargs.command({
        command: 'list',
        describe: 'List your notes',
        handler() {
           notes.listNotes()
        }
}
)
//create a command list to read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe:'Read Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readnotes(argv.title)
    }
}
)

yargs.parse()
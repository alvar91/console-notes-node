const fs = require('fs');

const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

switch(command) {
    case 'list':
        list((error, notes) => {
            if(error) return console.error(error.message);
            notes.forEach((notes, index) => console.log(`${index + 1}. ${notes.title}`));
        });
        break;
    case 'view':
        view();
        break;
    case 'create':
        create();
        break;
    case 'remove':
        remove();
        break;
    default:
        console.log('Неизвестная команда');
}

function list(done) {
    fs.readFile('notes.json', (error, data) => {
        if(error) return done(error);
        const notes = JSON.parse(data);
        done(null, notes);
    });
}

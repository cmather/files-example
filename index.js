let fs = require('fs');
let path = require('path');
let count = 100;

function createFile(filepath, content) {
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, content);
  }
}

// create the directories
for (let idx = 0; idx < 10; idx++) {
  let dirpath = `./files/dir${idx}`;
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
  }
}

// create some js files
for (let idx = 0; idx < count; idx++) {
  let content = `class MyService${idx} extends BaseService {}`;
  createFile(`./files/dir${idx % 10}/service${idx}.js`, content);
}


// create some rb files
for (let idx = 0; idx < count; idx++) {
  let content = `class Service${idx} < BaseClass; end`;
  createFile(`./files/dir${idx % 10}/service${idx}.rb`, content);
}

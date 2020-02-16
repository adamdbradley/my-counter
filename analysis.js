const fs = require('fs');
const path = require('path');
const gzipSize = require('gzip-size');
const stencilPkg = require(require.resolve('@stencil/core/package.json'));
const readmeSrc = path.join(__dirname, 'readme.md');

const buildFilesDir = path.join(__dirname, 'www', 'build');
const buildFiles = fs.readdirSync(buildFilesDir);

const cmpFile = 'my-counter.entry.js';
const libFile = buildFiles.find(f => {
  return f.startsWith('index-') && !f.endsWith('.system.js')
});

function getFileSize(fileName) {
  const filePath = path.join(buildFilesDir, fileName);
  return gzipSize.fileSync(filePath)
}

const cmpSize = getFileSize(cmpFile);
const libSize = getFileSize(libFile);
const libCmpSize = libSize + cmpSize;
const cmp30Size = cmpSize * 30;
const libCmp30Size = cmp30Size + libSize;

console.log(`💎  ${stencilPkg.name}      ${stencilPkg.version}`);
console.log(`👾  Component          ${cmpSize}`);
console.log(`🎸  Library            ${libSize}`);
console.log(`🍕  (Cmp + Lib)        ${libCmpSize}`);
console.log(`🌈  (Cmp * 30)         ${cmp30Size}`);
console.log(`🦄  (Cmp * 30) + Lib   ${libCmp30Size}`);
console.log('');


let md = fs.readFileSync(readmeSrc, 'utf8');

function updateTemplate(section, value) {
  const regexp = RegExp(`<!--${section}-->(.*)<!--/${section}-->`, 'g');
  let match;

  while ((match = regexp.exec(md)) !== null) {
    md = md.replace(match[0], `<!--${section}-->${value}<!--/${section}-->`)
  }
}

updateTemplate('VERSION', stencilPkg.version);
updateTemplate('COMPONENT', cmpSize);
updateTemplate('LIBRARY', libSize);
updateTemplate('LIBRARY_COMPONENT', libCmpSize);
updateTemplate('COMPONENT_30', cmp30Size);
updateTemplate('LIBRARY_COMPONENT_30', libCmp30Size);

fs.writeFileSync(readmeSrc, md);

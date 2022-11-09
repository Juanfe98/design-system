/*
* ------------------------ Build File --------------------------- *
* ------------                                     -------------- *

* This file will turn the SASS code into normal CSS
* to finally return normal CSS to the web application
* consuming our design system

* ------------                                     -------------- *
* ----------------------------------  --------------------------- *
*/ 

const Fs = require('fs');

const Path = require('path');

const Sass = require('node-sass');

const getComponents = () => {
  let allComponents = [];

  // Types of components we'll have with atomic design
  const types = ['atoms','molecules','organisms'];

  types.forEach(type => {
    const allFiles = Fs.readdirSync(`src/${type}`).map(file => ({
      input: `src/${type}/${file}`,
      output: `src/lib/${file.slice(0,-4) + 'css'}`
    }))
    
    // Populate allComponents
    allComponents = [
      ...allComponents,
      ...allFiles
    ]
  
  })


  // An array of objects containing input and output for each component in our DS
  return allComponents;

};

const compile = (path, fileName) => {

  /*
  *  result will be the SCSS code converted into normal CSS
  */
  const result = Sass.renderSync({
    data: Fs.readFileSync(
      Path.resolve(path),
    ).toString(),
    outputStyle: 'expanded',
    includePaths: [Path.resolve('src')]
  })

  /**
  *  Writing/Creating the normal CSS file.
  */

  Fs.writeFileSync(
    Path.resolve(fileName),
    result.css.toString()
  )

};


compile('src/global.scss','src/lib/global.css')

getComponents().forEach(component => {
  compile(component.input, component.output);
})
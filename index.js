//using node/npm packages
//npm init
//npm i "package name"
//create gitignore to ignore node modules from going to github

const length = +process.argv[2]
// const {chalkAnimation} = require('chalk-animation')
// const {generateSlug} = require('random-word-slugs')
import chalkAnimation from "chalk-animation"
import { generateSlug } from "random-word-slugs"
const bandName = generateSlug(length, {format: 'title'})
chalkAnimation.rainbow(bandName)
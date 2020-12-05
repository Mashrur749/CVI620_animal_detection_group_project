# CVI620 Summative Project

## Summary
This project is aimed at discovering if an object detection algorithm trained on a specific set of images can transfer what it has learnt to a set of images in a different context.

## Technologies
- [NodeJS](https://nodejs.org/en/)
- [Tensorflow](https://www.tensorflow.org/)

### Authors:
- Jade Clarke <jrclarke3@myseneca.ca>
- Musaddiqur Rahman <mrahman92@myseneca.ca>
- Rachel Day <rday3@myseneca.ca>

### Instructions

Requires React

  `cd results-display`
  
  `npm start`

Project is also hosted on Heroku:


### To Run the Test Sets for Yoursself
Hosted on npm, tensorflow.js required


To run the program, first clone the repo here: https://github.com/ReginaExMachina/animal-detection-model

Then: 

  `cd coco-sdd/demo`

For Test Set 1:    

  `git checkout test-set-1`

For Test Set 2:

  `git checkout test-set-2`

Install dependencies:

  `yarn`
  
Publish coco-ssd locally:

  `yarn publish-local`
  
  cd into coco-ssd/demo and install dependencies:
  
	`cd demo
	yarn`

Link the package published from the publish step above:

	`yarn link-local`

Start the dev demo server:

	`yarn watch`


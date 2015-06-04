# OMG, we have comments!

default: build

.PHONY: css js

css: 
	node-sass sass/ -o css/ --source-map=true

chokidar sass/ -c 'npm run build:css'
js:
	coffee --compile --output js/ coffeescript/

build: css js

watch: 
	parallelshell "chokidar sass/ -c 'make css'" "chokidar coffeescript/ -c 'make js'"

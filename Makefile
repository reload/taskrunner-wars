# OMG, we have comments!

default: build

.PHONY: css js

css: 
	node-sass sass/ -o css/ --source-map=true

js:
	coffee --compile --output js/ coffeescript/

build: css js

watch: 
	parallelshell 'make css' 'make js'

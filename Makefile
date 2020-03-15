CLIPBOARD = $(shell pbpaste)
.PHONY: all clean 

# Bootstrap on a clean box: make
all: node_modules public/index.html

node_modules: package.json
	npm install
	touch node_modules

public/index.html: node_modules
	npx brunch build

server:
	npx brunch watch --server

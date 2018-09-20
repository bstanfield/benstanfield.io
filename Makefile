CLIPBOARD = $(shell pbpaste)
.PHONY: all clean 

# Bootstrap on a clean box: make
all: node_modules public/index.html

node_modules: package.json
	npm install
	touch node_modules

public/index.html: node_modules
	brunch build

# if you just want to remove unnecessary local files: make {clean|nuke}
clean:
	rm -rf public

nuke: clean
	rm -rf node_modules

deploy: 
	brunch build
	now -p public

foo:
		@echo ${CLIPBOARD}

# when ready to push up for production:make production
production:
	brunch build
	now -p public

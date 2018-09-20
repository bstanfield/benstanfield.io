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


# when ready to push up for testing: make deploy
deploy: public/index.html
	rm public/images/resume-update.pdf
	now -p public

# when ready to push up for production:make production
production: public/index.html
	rm public/images/resume-update.pdf
	now -p public


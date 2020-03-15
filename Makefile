.PHONY: all clean 

# Bootstrap on a clean box: make
all: public/index.html

node_modules: package.json
	@echo "*** Installing packages"
	npm install
	touch node_modules

public/index.html: node_modules
	@echo  "*** building static site"
	npx brunch build

server: public/index.html
	npx brunch watch --server

clean:
	rm -rf node_modules
	@echo "now: make all"

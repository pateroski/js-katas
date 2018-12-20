.PHONY: install
install:
	@npm install

# runs unit tests
.PHONY: test
test:
	npm run test

# runs unit tests in debug mode
.PHONY: test-debug
test-debug:
	npm run test:debug
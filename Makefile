install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

game-even:
	node bin/brain-even.js

game-calc:
	node bin/brain-calc.js

game-gcd:
	node bin/brain-gcd.js

game-progression:
	node bin/brain-progression.js

game-prime:
	node bin/brain-prime.js
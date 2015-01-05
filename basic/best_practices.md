BEST PRACTICES USING REQUIRE/EXPORTS
====================================

- Use require('./foo') instead of require('./foo.js'): We cannot see to the filesystem to see what you meant. Remove .js from all your require calls.
- When using file-based modules, use the syntax require('./foo') instead require('foo'): The latter one should be used for both core modules and node_modules

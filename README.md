knuth-shuffle-seeded
====================

[![npm](https://img.shields.io/npm/v/npm.svg?style=flat)](https://www.npmjs.com/package/knuth-shuffle-seeded)

The Fisher-Yates (aka Knuth) shuffle for the browser and Node.js, with seeds
support using [seed-random](https://www.npmjs.com/package/seed-random).

This project is initially forked from [coolaj86/knuth-shuffle]
(https://github.com/coolaj86/knuth-shuffle), but extended so that it is
possible to specify a seed to use in the shuffling, to ensure test
reproducability.

Getting Started
---------------

### Node.js

    npm install knuth-shuffle-seeded

Then look at example.js.

### The Browser

Put shuffle.js into your `js/`. Then look at example.html.

Why not contribute to the original repo?
----------------------------------------

I have considered that, but the introduction of an npm dependency makes it
necessary to use Browserify to generate a browser-compatible JavaScript file,
which is too far away from the simple approach of knuth-shuffle.

Authors
-------

AJ O'Neal (@coolaj86) -- initial author
Timothy Gu (@TimothyGu) -- seed-random support

License
-------

Copyright 2013 AJ O'Neal
Copyright 2015 Tiancheng "Timothy" Gu

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this project except in compliance with the License. You may obtain a copy
of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

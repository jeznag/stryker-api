[![Build Status](https://travis-ci.org/stryker-mutator/stryker.svg?branch=master)](https://travis-ci.org/stryker-mutator/stryker-api)
[![Gitter](https://badges.gitter.im/stryker-mutator/stryker.svg)](https://gitter.im/stryker-mutator/stryker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

![Stryker](https://github.com/stryker-mutator/stryker/raw/master/stryker-80x80.png)

# Stryker API
This is the repository for maintaining the API of the [Stryker](http://stryker-mutator.github.io) JavaScript mutation testing framework.
Plugin creators should depend on this API rather than on the main Stryker repository directly.

# Extension use cases
You can extend Stryker in a number of ways.

1. Create a custom `Reporter`
2. Create a `TestSelector` for a test framework
3. Create a `TestRunner` to bridge the gap between your test runner and Stryker
4. Create a custom way of configuring Stryker by creating a `ConfigWriter` 

All extension points work in the same basic way. 

1. Create a `constructor function` (or `class`)
2. Register the `constructor function` to the correct `Factory`.

More info comming soon. 

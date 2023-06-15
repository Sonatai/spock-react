# 🖖 Spock React 🖖

SpockReact is an easy way to automatically generate documentation from Spock tests that you can host via Github.

![Build & Test](https://github.com/Sonatai/spock-react/actions/workflows/build.yaml/badge.svg) ![Deployment](https://github.com/Sonatai/spock-react/actions/workflows/deploy.yaml/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## How it works

Spock-React dynamically serves Spock test reports and makes them browsable,
effectively turning your Spock test suite into living documentation, on the fly.

It is based on the [Spock Reports](https://github.com/renatoathaydes/spock-reports) plugin
and a set of [template files](spock-conf/templates) that are used to
generate raw (test report) json files every time a test run is executed
on your project.
You can then use Spock-React to point to the location of these
json files, and it will fetch them and generate a documentation website
complete with examples and code snippets on the fly.

So every time you run your tests and the json files are updated,
the documentation website will be updated as well because it is
served dynamically.

## Getting Started

### Generate Json Files

To create living react documentation from your Spock test suite,
you need a few simple dependencies:

First and foremost, the [Spock test framework](https://github.com/spockframework/spock):

```groovy
testImplementation platform("org.spockframework:spock-bom:$spockVersion")
testImplementation "org.spockframework:spock-core"
```

Keep in mind that Spock is based on Groovy, so make sure you have
the Groovy plugin for Gradle, otherwise Gradle will not be able
to find (and execute) your Spock tests:

```groovy
plugins {
    id 'groovy'
    // ... some other plugins ...
}
```

And finally you need the [Spock reports plugin](https://github.com/renatoathaydes/spock-reports)
which is used to generate the raw json files from your Spock tests:

```groovy
// you can use testRuntimeClasspath if you don't want to use spock-report-specific features in your Specs
testImplementation( "com.athaydes:spock-reports:$spockReportsVersion" ) {
    transitive = false // this avoids affecting your version of Groovy/Spock
}
// if you don't already have slf4j-api and an implementation of it in the classpath, add this! (needed for reports)
testImplementation 'org.slf4j:slf4j-api:1.7.30'
testImplementation 'org.slf4j:slf4j-simple:1.7.30' // You might need to adjust the version for spock-reports...
```

After you have added the dependencies to your project, you need to
give the report plugin some configuration and templates to work with.
All of this can be found in the `./spock-conf` folder of this repository.
You simply need to copy the contents of this folder into your project's
`./src/test/resources` folder.

This should then look something like this:

```
your-project
│   ...
│
└───src
    │
    └───main
    │       ...
    │
    └───test
        │
        └───resources
            │   SpockConfig.groovy
            │
            │
            └───templates
                    spec-template.json
                    summary-template.json

```

I encourage you to take a look at the `SpockConfig.groovy` file
because there you can configure the report plugin to your needs (e.g. project name, version etc.).
It also specifies where the templates produced by the plugin should
be written to after a test run!

This is by default set to `./docs/spock`, but you can change it to
whatever location you want.
This is also the location where you will want the Spock-React website
to look for the json files so that it can read them and generate
the documentation!

You have to specify this same location in the form
of a URL in the `environment.json` file.
So if you host your documentation on GitHub, you might have a URL
looking something like this: `https://raw.githubusercontent.com/user/proj-reo/master/docs/spock/reports`

### Frontend

// TODO

## Documentation

// TODO

## Contributing

// TODO

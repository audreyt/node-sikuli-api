#!/usr/bin/env lsc -cj
name: 'sikuli-api'
version: '0.0.1+api.1.0.1'
main: 'main.js'
description: 'Sikuli standalone API binding for Node.js'
keywords: <[ sikuli automation java ]>
author:
  name: 'Audrey Tang'
  email: 'audreyt@audreyt.org'
  twitter: 'audreyt'
homepage: 'https://github.com/audreyt/node-sikuli-api'
bugs:
  url: 'http://github.com/audreyt/node-sikuli-api/issues'
  email: 'audreyt@audreyt.org'
license: 'MIT'
repository:
  type: 'git'
  url: 'http://github.com/audreyt/node-sikuli-api.git'
scripts:
  prepublish: 'lsc -cj package.ls && lsc -c main.ls || echo'
dependencies: { java: '*' }
engines: { node: '>= 0.8.0' }

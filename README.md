# Learning Node.js pkg
Learning how to bundle Node.js applications with pkg.

## Use the demo application

The demo application is a http webserver that serves a quoted text message. The application can be passed a text via the commandline. See [./bin.js](https://github.com/countzero/learning_node_pkg/blob/master/bin.js) for technical details.

### Download the executable for your platform

| Linux | MacOS | Windows |
| ----- | ----- | ------- |
| [node_bundle_executable-linux](https://github.com/countzero/learning_node_pkg/releases/download/v1.0.0/node_bundle_executable-linux) | [node_bundle_executable-macos](https://github.com/countzero/learning_node_pkg/releases/download/v1.0.0/node_bundle_executable-macos) | [node_bundle_executable-win.exe](https://github.com/countzero/learning_node_pkg/releases/download/v1.0.0/node_bundle_executable-win.exe) |

### Execute

Simply execute the binary for your platform to start the demo application.

You can pass a custom message as a commandline argument:

``` PowerShell
.\node_bundle_executable-win.exe "Hello World"
```

## Build the demo application bundles

### Install Git and Node.js

Install the latest stable versions of [Git](https://git-scm.com/) and [Node.js](https://nodejs.org).

### Install pkg

Install [pkg](https://www.npmjs.com/package/pkg) globally with the following command:

```
npm install -g pkg
```

### Clone this repository

Clone this repository to a nice place on your machine via:

```
git clone git@github.com:countzero/learning_node_pkg.git

```

### Install the application dependencies

Install all application dependencies via:

```
npm install
```

### Create bundles

Create executable application bundles with:

```
pkg .
```

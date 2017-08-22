## APIC-OPS
This tool allows you to configure your Open API definitions for IBM API Connect.

API Connect forces you to enter your secretes and other properties to be in the API definitions. This tool allows you to have a seperate properties file for each env so that you can run the tool before deploying your APIs.

Also, logging into API Connect form command line requires entering password etc. The tool allows putting this info into a conf file so it is not visible to the eye.

## How does it work?
```
$ apic-ops

  Usage: apic-ops [options] [command]

  APIC ops tool


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    configure-folder|d [folder]  configure properties for files in the folder
    configure-file|f [file]      configure properties of the file
    login|l                      login to api connect server
    publish|p [product]          publish the product
    help [cmd]                   display help for [cmd]
```

### Example useage
#### Login to specified apiconnect insance

```
$ apic-ops l -c staging.apiconnect.conf.yaml
Logging into apiconnect.myorg...

```

#### Configure your apis to set for the target environment

```
$ apic-ops d /apis -c staging.properties.yaml
Configuring ymls in /apis
written to: /apis/accounts_1.0.0.yaml
written to: /apis/campaigns-product_1.0.0.yaml
```

#### Publish your product

```
$ apic-ops p my_product_1.0.0.yaml -c staging.apiconnect.conf.yaml
apic products:publish my_product_1.0.0.yaml --organization myorg --server apiconnect.myorg --catalog sb

```

### Example conf files
#### staging.properties.yaml (example)
This is an example file that contains properties to be changed.

```
username: user
password: pass
target-host: http://staging.host.com
secret: lAnNBejC8Mg==
code: bQIsvOy5LxNzuW
```

#### staging.apiconnect.conf.yaml (example)
This is an example file that contains information for apiconnect instance and catalog.

```
organization: myorg
server: apiconnect.myorg
catalog: sb
username: uname
password: PWD
```


### How to install
apiconnect is not added as a dependency. IT is assumed that you have already installed it in your system globally.

- Clone the repo
- cd to the root folder
- run `sudo npm intall -g`
- run `sudo npm link`


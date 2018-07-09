

How to define a class:
```class Run {}```

---------  many access modifiers?
- public
- protected
- private

We can use ```this``` within the class to refer to it's properties and methods within

Private Access Modifier: the property(or method) of the class can be accessed only within the class itself

you can override a parent class method from within the child class

can you instantiate an abstract class? no. but you can extend from it. 

Namespaces: help you organize your code into the logical units and avoid possible collisions with 3rd party code

You must EXPORT properties (like variables, constants and methods/functions) of the namespace so that they are available
ex:
    export function displayData() {
      console.log("hello");
    }

import namespace syntax:
```///<reference path="module1.ts" />```


--------- ALIAS
use import keyword
ex:
```import someName = myNameSpace.displayData;```
```console.log(someName());```

Use SystemJS loader to load modules


--------- typescript react app

configure a react app with typescript:

```$ create-react-app react-typescript --scripts-version=react-scripts-ts```
go to app.tsx
create a new component .tsx not .js



--------- tslint.json
"rules": {
  "member-access: false "
},

```$ yarn add -D @types/lowdash```



---------- material-ui
Material-UI is a set of React components that implement Google's Material Design specification.

live examples: https://material-ui.com/

change log: https://github.com/mui-org/material-ui/releases


Required Knowledge: We recommend that you get to know React before diving into material-ui. Material-UI is a set of React components, so understanding how React fits into web development is important.

Installation: Material-UI is available as an npm package.



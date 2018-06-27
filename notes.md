

How to define a class:
```class Run {}```

How many access modifiers?
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
    ```
    export function displayData() {
        console.log("hello");
    }
    ```

import namespace syntax:
```///<reference path="module1.ts" />```


Re
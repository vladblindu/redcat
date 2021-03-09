## The "shape" form descriptor object:


1. the simple short version declaration

``` javascript
const shape = {
    fieldName: 'string'
}
```

2. normal version declaration

``` javascript
const shape = {
    fieldName: {
        type: 'string'
    }
}
```
3. field array definition

``` javascript
const shape = {
    fieldArrayName:{
        type: 'array',
        shpe: {
            field1: number,
            field2: 'string
        }
    }
}
```

4. object type field declaration

``` javascript
const shape = {
    objectField: {
        type: 'object'
        shape: {
            field1: number,
            field2: {
                type: 'stirng',
                default: 'DUMMY-STRING
            }
        }
    }
}
```

### Supported primitive types:
- string,
- number
- boolean (also bool)
- array
- object

### Global shape 
 - any key whose name starts with $ is considered a descripion key:
 ```javascript
const  shape: {
    $initAsync: true
 }
```
Description keys
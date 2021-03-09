## DropdownMenu
### BBUI Component

#### Prop types
- **title**: PropTypes.string - If present the dropdown works as a dropdown menu
with the title on the top position. If absent the dropdown
behaves as a select/options standard html element


- **value**: PropTypes.any - The current selected value
- **opts**: PropTypes.object - defaults to:
```javascript
    const opts = {
        dark: false,
        check: true    
    }
``` 
where **dark** enables the dark mode (background primary) and **check** enables a checkmark in front of the selected item.
- **items**: PropTypes.array - The list of items to be displayed. It supports the following formats:
    - array of strings
    - array of 
    ```{key: value} ```
    where the **key** will be displayed, and the **value** passed to the onChange method on activation
    - array of ```{display: 'display item', value: 'value'}``` **display item** will be displayed, 
    and the **value** passed to the onChange method on activation
    - array of ```{customDisplayKey: 'display item', customValueKey: 'value'}``` **display item** will be displayed, 
    and the **value** passed to the onChange method on activation as long as in the **opts** prop the two custom keys 
    are specified:
    ```javascript
    const opts = { 
      dark: true, 
      check:true, 
      display: 'customDisplayKey', 
      value: 'customDisplayValue'
    }
  ```
- **onChange**: PropTypes.func - onChange function 
- **onBlur**: PropTypes.func - onBlur

TODO __formik compatibility__
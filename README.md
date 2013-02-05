<link
href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css"
rel="stylesheet">

<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js"></script>

# An AngularJS Validator for matching fields

There is often a need for comparing the equality of input fields such as
email address or passwords.

<!-- ### Sample Form -->

<!-- <form name="form" class="form-horizontal"> -->
<!--         <div class="control-group"> -->
<!--           <label class="control-label">User Name</label> -->
<!--           <div class="controls"> -->
<!--             <input type="text" name="user" placeholder="User Name"/> -->
<!--           </div> -->
<!--         </div> -->
<!--         <div class="control-group"> -->
<!--           <label class="control-label">Password</label> -->
<!--           <div class="controls"> -->
<!--             <input type="password" name="password" placeholder="Password"/> -->
<!--           </div> -->
<!--         </div> -->
<!--         <div class="control-group"> -->
<!--           <label class="control-label">Confirm Password</label> -->
<!--           <div class="controls"> -->
<!--             <input type="password" name="confirm_password" placeholder="Confirm Password" matcher="{'field_to_match': 'password', 'error_name': 'passMatch'}"/> -->
<!--             <label ng-show="form.confirm_password.$error.passMatch" -->
<!--         class="help-inline required">Passwords do not match!</label> -->
<!--           </div> -->
<!--         </div> -->



### Sample Code##

```html
<form name="form">
  <label class="control-label">User Name</label>
  <input type="text" name="user" placeholder="User Name"/>

  <label class="control-label">Password</label>
  <input type="password" name="password" placeholder="Password"/>

  <label class="control-label">Confirm Password</label>
  <input type="password" name="confirm_password" placeholder="Confirm Password" matcher="{'field_to_match': 'password', 'error_name': 'passMatch'}"/>
  <label ng-show="form.confirm_password.$error.passMatch" class="help-inline required">Passwords do not match!</label>
```
***

To enable match comparison on your fields do the following -

1. Add the directive code to your application.
2. Prvide a name to your form `<form name="myForm">`
2. Add the `matcher` directive to your html element.
3. Set name attribute on both the fields whose values are to be compared.
3. Pass a JSON to the directive ``matcher="{'field_to_match':
'password', 'error_name': 'passMatch'}"``
4. The **field_to_match** represents the input field that it has to match.
5. The **error_name** represents the name of the angular error that you
can use to check the validity of the field -
`form.confirm_password.$error.passMatch`
6. The error also reflects in the validity of the form which can be
checked using - `form.$invalid`

***

### To Do -

- Change the passing of JSON string to object, as that necessiates
  eval. I am using jade which has trouble with the object notation, thus
  the stopgap.
- Add a working example on the readme.
- Get literate programming working !

### Credits -

- This is the post that implements a similar direcitve and provided the [idea] (http://jsfiddle.net/thomporter/UZrex/1/)
- The google group discussion that explained the concept of [$parsers] (https://groups.google.com/d/msg/angular/cvHU-AUOP4U/wDahiSxuljIJ)






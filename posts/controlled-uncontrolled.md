---
title: 'Controlled vs Uncontrolled Components'
date: 'Aug 12, 2023'
---

The "form" is one of the most popular HTML elements for making websites. When React was released, it changed the way we handle forms in many ways.

In React, there are two ways to work with form data in our components. The first way is using "state" to manipulate form data, which we call "Controlled Components". The second way is letting the DOM handle the form data itself, without direct component intervention - this is called "Uncontrolled Components".

In this article, I'll explain the difference between these two types of components in React, using practical examples.

### What are Controlled Components?

Controlled Components in React are those where the data is controlled by the state of the component.

Forms are used to store information in a document, usually to send to the server to do something. And this information is kept by form input elements, such as input, textarea, select, and others that control their state or value.

Where do I want to go?

Do you know when we fill out a form on the internet? Each field has a value that can be entered by the user or selected through a menu. When we change the value of a field, its state also changes.

To get the value of a field, we use a property of the field itself. We can also use this property to set values in form fields. It is called ".value".

Now we can use this state change to manage field values on a form. See an example:

```js
function App(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function onSubmit(){
console.log("Email value: " + email);
console.log("Password value: " + password);
} return (
<form onSubmit={onSubmit}>
<input
type="email"
name="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<input
type="password"
name="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
<input type="submit" value="Submit" />
</form>
);
}
```

Here we have two states: one for the email and one for the password. What we do is assign a value to each one of them, using the "value" property.

The email field stores the value typed in it. When the person types something into this field, an event called "onchange" fires and updates the email value using a function called "setEmail", which updates the state of the email.

The same thing happens with the password field. When the person types something in it, the "onchange" event updates the password value using the "setPassword" function.

In short: the values entered in the email and password fields are controlled by the state of the component. This state becomes the single true source for the fields, so the component is called a "controlled component".

The problem with using a controlled component is that as we add more fields to the form, the number of states also increases. This can cause a lot of rendering and make the component difficult to control.

### What are Uncontrolled Components?

Uncontrolled components are those in which form data is handled directly by the DOM. The name "Uncontrolled" comes from the fact that these components are not controlled by React state.

Form field values are normally tracked and stored in the DOM itself. To get the field values, we need to access the instance of these elements in the DOM.

```js
function App() {
   function onSubmit() {
     console.log("Email value: " + window.email.value);
     console.log("Password value: " + window.password.value);
   }
   return(
     <form onSubmit={onSubmit}>
       <input type="email" name="email" id="email" required />
       <input type="password" name="password" id="password" required />
       <input type="submit" value="Submit" />
     </form>
   );
}
```

In the above code, we have given the email and password fields an ID with "email" and "password" values respectively. We use these IDs to get the field values when the form is submitted.

The above component is called "Uncontrolled Component", because React does not control the value of form input fields.

In this example, we use the DOM APIs directly. Now, let's give the code a makeover to use elements from React.

```js
function App() {
   const emailRef = useRef();
   const passwordRef = useRef();
  

   function onSubmit() {
     console.log("Email value: " + emailRef.current.value);
     console.log("Password value: " + passwordRef.current.value);
   }
   return(
     <form onSubmit={onSubmit}>
       <input type="email" name="email" ref={emailRef} required />
       <input type="password" name="password" ref={password} required />
       <input type="submit" value="Submit" />
     </form>
   );
}
```

We create two references in React, one for the name and one for the email. Then connect them
/* 
-------------------------------------------------------------------------------------------------------------------------------
1.GETTING STARTING WITH REACT
-------------------------------------------------------------------------------------------------------------------------------
1.npx create-react-app . -> start react app

2. *required for reactapp , check in terminal
	npm -v 
	node -v 

3.npm start -> start the app on server

4.we remove everything to keep it simple as a begginer, we leave App.js, index.js, App.css 
  and in App.js we deleted first import and the <header></header>

5.To display hello world: we go to App.js -> 
function App() {
  return <div className="App">Hello World</div>
}

*/




/* 
-------------------------------------------------------------------------------------------------------------------------------
2.USING CSS FILE(App.css) NORMAL WAY
-------------------------------------------------------------------------------------------------------------------------------
import './App.css';  -> Instead of importing this way, we change the name of css file from App.css to App.module.css so we can use other way of inserting css styles.
*/

import styles from "./App.module.css"
import {Object} from './User.js' 


 //we can simply write text inside our main div, or add javascript variables using {} and the name of the variable.
// function App() {

//   const name = "Jam gjeni!";
//   const age = <h2> 26</h2>  // -> we can also add this way

//   /*
// -------------------------------------------------------------------------------------------------------------------------------
// USING CSS FILE other way
// -------------------------------------------------------------------------------------------------------------------------------
//  *we can add a class to add styles to it with css => className="App" , className={styles.function1} -> function1 is the name of the css class. 
//   Or we can simply write className="myClass" -> but it can be disturbing
//   Or we can add inline css styling for example <div style={{color: "blue"}}> -> here we need to add the color blue in "" and use double {{}} cuz this is jsx file not html.
// */
//SOME EXAMPLES OF USING simple and normals divs, functions, objects
//   return <div className="App"> 
//          <div className={styles.function1}>{Function1()}</div> 

//          //we can call Function2 this way or watch below
//          <div style={{color: "blue"}}>{Function2()}</div>
//          //or this way
//          <Function2></Function2>    

//          <div>{User()}</div>
//          <User></User>

//          <User2 name="Anxhelo" email="anxho@gmail.com"></User2>    
//          <User2 name="Beqo" email="beqo@gmail.com"></User2>  

//          <Job salary={12000} position="Senior De" company="Amazon" ></Job>

//         {name} 
    
//         </div> 
 
// }

/* 
-------------------------------------------------------------------------------------------------------------------------------
3.WORKING WITH CONDITIONAL RENDERING - TERNARY OPERATOR
-------------------------------------------------------------------------------------------------------------------------------
*/

// function App() {

//   const age = window.prompt("Enter your age:");
//   let celebrate = false;

//   // in this code we are using a very useful if else method -> ternary operation (if true ? "do this" : "else do this")
//   // we can use it in styles also -> <h1 style={{color: celebrate ? "blue" : "yellow"}} set color attribute = "blue" if celebrate is true, else "yellow".
//   return <div className="App"> 
//      {age >= 25 ? <h1 style={{color: celebrate ? "blue" : "yellow"}}>Pedro</h1> : <h1>Je akoma i vogel!</h1>} 
//   </div>;
// }



/* 
-------------------------------------------------------------------------------------------------------------------------------
WORKING WITH LISTS
-------------------------------------------------------------------------------------------------------------------------------
*/

function App() {

  // here we created a list called 'names', and a map() function to return each of the names in <h1> tag. 
  //In the App() function we can simply : return <div className="App">{prova}</div>;
  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"]
  let prova = names.map(name => {return <h1>{name}</h1>});

  // here we created a list of objects and we use a map() function to return from each element : {return <h1>{element.name} {element.age}</h1>} 
  const myObject = [
    {name: "Pedro" , age:21},
    {name: "Beqo", age: 25},
    {name: "Goni", age: 35}
  ]
  let prova2 = myObject.map(element => {return <h1>{element.name} {element.age}</h1>})

  // here we use the map() function to return each name & age from myObject list. We use the 'const Object' with props component to make our code looks better.
  let prova3 = myObject.map( element => {return <Object name={element.name} age={element.age}></Object>})


  // we can also include an if statement inside our prova3 map() function to display only the Object with age > 21
  // let prova3 = myObject.map( element => { if(element.age>21) return <Object name={element.name} age={element.age}></Object>})
  // Using Ternary operator instead of if statement:   let prova3 = myObject.map( element => element.age > 21 && <Object name={element.name} age={element.age}></Object>) -> && = than => if 'true' than do this.

  return <div className="App"> 
  {prova3}
</div>;

}
/*
 Usually when working with components, we dont want all of our components in a single file. Thats why we copy & paste this into a new file we named: 'User.js'.

const Object = (props) => {
  return <div>{props.name} {props.age}</div>
}

*/


//-------------------------------------------------------------------------------------------------------------------------------




// SOME EXAMPLES OF USING DIFFERENC FUNCTIONS
const Function1 = () => {
  return "Astrit!"               // -> THis is javascript function
};


const Function2 = () => {
  return <h1>Titi</h1>      //this is a component in react, always starts with Uppercase
};


//this is a component in react, always starts with Uppercase
const User = () => {
  return <div>
    <h1>Titi</h1>           
    <h2>titi@gmail.com</h2>
  </div>
}

// Instead of writing object attributes manually, we use props. Than at the main function, we create as many User2 as we want with different attrbutes. 
// For Example:        
// <User2 name="Anxhelo" email="anxho@gmail.com"></User2>    
// <User2 name="Beqo" email="beqo@gmail.com"></User2>  

const User2 = (props) => {
  return <div>
    <h1>{props.name}</h1>
    <h1>{props.email}</h1>
  </div>
}


const Job = (props) => {
return <div>
  <h1>{props.salary}</h1>
  <h1>{props.position}</h1>
  <h1>{props.company}</h1>
</div>
}




export default App;



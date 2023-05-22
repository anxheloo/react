
/*
To export our components we use the export word for example: 

export const Object = (props) => {return <div>{props.name} {props.age}</div>}

Next step is to go to our App.js file(main file) and : import {Object} from './User.js' 
*/

export const Object = (props) => {
    return <div>{props.name} {props.age}</div>
  }
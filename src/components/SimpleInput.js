import {  useState } from "react";

const SimpleInput = (props) => {
  
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
 // const [formIsValid, setFormIsValid] = useState(false);
 
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid  && enteredNameTouched;

  const enteredEmailIsValid = validateEmail(enteredEmail) !== null ;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;



  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }
  

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = (event) =>{
    setEnteredNameTouched(true);
  }

  const emailInputChangeHandler = (event) =>{
    setEnteredEmail(event.target.value)
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  } 


  const formSubmission = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if(!enteredNameIsValid){
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  } 

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={formSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          value={enteredName}  
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsValid && <p className="error-text">Name must not be empty  :(</p>        }
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler}
          value={enteredEmail}  
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsValid && <p className="error-text">Please enter the correct email. :(</p>        }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

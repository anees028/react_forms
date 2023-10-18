
import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {

  let formValid = false;
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNamehasError,
    valueChangeHandler: fnameHandlerChange,
    inputBlurHandler: fnameBlurHandler,
    reset: resetFirstName
  } = useInput2(value => value.trim() !== '');

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNamehasError,
    valueChangeHandler: lnameHandlerChange,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLastName
  } = useInput2(value => value.trim() !== '')

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailhasError,
    valueChangeHandler: emailHandlerChange,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail

  } = useInput2(value => validateEmail(value))

  if(firstNameIsValid || lastNameIsValid || emailIsValid){
    formValid = true;
  }

  const formSubmission = (event) => {
    event.preventDefault()
    if(!firstNameIsValid && !lastNameIsValid && !emailIsValid){
      return
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameClass = firstNamehasError ? 'form-control invalid' : 'form-control'
  const lastNameClass = lastNamehasError ? 'form-control invalid' : 'form-control'
  const emailClass = emailhasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmission}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='fname' 
            value={firstName} 
            onChange={fnameHandlerChange} 
            onBlur={fnameBlurHandler}
          />
          {firstNamehasError && <p className="error-text">First name is not empty :(</p>    }
        </div>
        <div className={lastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='lname'
            value={lastName}
            onChange={lnameHandlerChange}
            onBlur={lnameBlurHandler}  
          />
          {lastNamehasError  && <p className="error-text">Last name is not empty :(</p> }
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='email'
          value={email}
          onChange={emailHandlerChange}
          onBlur={emailBlurHandler}
          />
          {emailhasError && <p className="error-text">Email must be valid :(</p> }
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

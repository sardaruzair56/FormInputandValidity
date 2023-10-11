import useInput from "../hooks/userInput";

const BasicForm = (props) => {


   const {value: enteredFirstNameValue,
    isValid: firstNameIsValid,
    hasError:firstNameHasError,
    valueChangeHandler:firstNameChangeHandler,
    inputBlurHandler:firstNameBlurHandler,
    reset:firstNameReset
  }=useInput(value=>value.trim() !=='');

  const {value: enteredlastNameValue,
    isValid: lastNameIsValid,
    hasError:lastNameHasError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:lastNameReset
  }=useInput(value=>value.trim() !=='');

  const {value: enteredEmailValue,
    isValid: emailIsValid,
    hasError:emailHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:emailReset
  }=useInput(value=>value.includes('@gmail.com'));
  
  
  let formIsValid=false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsValid=true;
  }
  const formSubmitHandler=(event)=>{
   event.preventDefault();

   if(!formIsValid){
    return;
   }
   
  console.log(enteredFirstNameValue);
  console.log(enteredlastNameValue);
  console.log(enteredEmailValue);

  firstNameReset();
  lastNameReset();
  emailReset();

  }

  const firstClass=firstNameHasError ? 'form-control invalid' :'form-control';
  const lastClass=lastNameHasError ? 'form-control invalid' :'form-control';
  const emailClass=emailHasError ? 'form-control invalid' :'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
    <div>
      <div className='control-group'>
        <div className={firstClass}>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' id='firstname' onChange={firstNameChangeHandler} value={enteredFirstNameValue} onBlur={firstNameBlurHandler} placeholder="first name" />
          {firstNameHasError && (<p className='error-text'>First Name must be Valid</p>)}
          </div>
          <div className={lastClass}>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname' onChange={lastNameChangeHandler}  value={enteredlastNameValue} onBlur={lastNameBlurHandler} placeholder="last name" />
          {lastNameHasError && (<p className='error-text'>Last Name must be Valid</p>)}
        </div>
          <div className={emailClass}>
          <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailChangeHandler} value={enteredEmailValue} onBlur={emailBlurHandler} placeholder="email"/>
        {emailHasError && (<p className='error-text'>Email must be Valid</p>)}
      </div>
    </div>
      
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
     </div>
    </form>
  );
};

export default BasicForm;

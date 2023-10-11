import { useReducer} from 'react';

const initialInputValue={
    value:'',
    isTouched:false
}

const inputStateReducer=(state,action)=>{
    if(action.type==='INPUT'){
        return{value:action.value, isTouched:state.isTouched};
    }
    if(action.type==='BLUR'){
        return{isTouched:true, value:state.value}
    }
    if(action.type==='RESET'){
        return{ isTouched:false, value:''}

    }
    
    return state;
}


const useInput = (validateValue) => {
  const [inputState, dispatchState] = useReducer(inputStateReducer,initialInputValue);


  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchState({type:"INPUT", value:event.target.value});
  };

  const inputBlurHandler = (event) => {
     dispatchState({type:"BLUR"});
  };

  const reset = () => {
    dispatchState({type:"RESET"});
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
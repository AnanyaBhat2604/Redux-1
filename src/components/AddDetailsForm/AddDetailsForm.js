import './AddDetailsForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addUserDetailsAsync } from '../redux/userDetailsSlice';

const AddDetailsForm = () => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

    const onSubmit = (event) => {
		event.preventDefault();
        // console.log(event.target.inputField.value);
		dispatch(addUserDetailsAsync({
			title: value,
		}))
		
	};
  return (
    <div className='mainContainer'>
    <form onSubmit={onSubmit} className='formContainer'>
			<input
				type='text'
				className='formInput'
				  name="inputField"	
				  value={value}
				  onChange = {(event) => setValue(event.target.value)}
			/>

			<button type='submit' className='formButton'>
				ADD
			</button>
		</form>
    </div>
  )
}

export default AddDetailsForm
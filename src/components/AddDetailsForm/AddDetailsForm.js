import './AddDetailsForm.css';

const AddDetailsForm = () => {

    const onSubmit = (event) => {
		event.preventDefault();
        console.log(event.target.inputField.value);
		
	};
  return (
    <div className='mainContainer'>
    <form onSubmit={onSubmit} className='formContainer'>
			<input
				type='text'
				className='formInput'
                name="inputField"			
			/>

			<button type='submit' className='formButton'>
				ADD
			</button>
		</form>
    </div>
  )
}

export default AddDetailsForm
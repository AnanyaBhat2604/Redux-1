import './userItem.css'

const UserItem = (props) => {
    console.log(props);
  return (
    <div>
        <div className='detailsContainer'>
            <div>{props.title}</div>
            <button className='deleteInfo'>
					Remove
				</button>
        </div>
    </div>
  )
}

export default UserItem
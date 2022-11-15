import './userItem.css'
import { deleteUserDetailsAsync } from '../redux/userDetailsSlice';
import { useDispatch } from 'react-redux';

const UserItem = (props) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
      dispatch(deleteUserDetailsAsync({id:props.id}))
  }

  return (
    <div>
        <div className='detailsContainer'>
            <div>{props.title}</div>
            <div><button className='deleteInfo' onClick={handleDeleteClick}>
					Remove
				</button></div>
        </div>
    </div>
  )
}

export default UserItem
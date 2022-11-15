import './usersList.css';
import { useEffect } from 'react';
import UserItem from '../userItem/userItem';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetailsAsync, deleteUserDetailsAsync } from '../redux/userDetailsSlice';

const UsersList = () => {
    const dispatch = useDispatch();
        
    const userDetails = useSelector((state) => state.userDetails)

    useEffect(() => {
        dispatch(getUserDetailsAsync());
        
      }, [dispatch]);
    
  return (
    <div className='listContainer'>
        <ul className='list-group'>
              {userDetails.map((user) => (
				<UserItem id={user.id} title={user.title} />
			))}
		</ul>
    </div>
  )
}

export default UsersList
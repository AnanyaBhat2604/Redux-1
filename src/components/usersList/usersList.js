import './usersList.css'
import UserItem from '../userItem/userItem';

const UsersList = () => {
    let users = [
        {
            id: 1,
            name: 'aaa',
        },
        {
            id: 2,
            name: 'bbb',
        },
        {
            id: 3,
            name: 'ccc',
        },
        {
            id: 4,
            name: 'he',
        },
        {
            id: 5,
            name: 'eee',
        },
    ];
  return (
    <div className='listContainer'>
        <ul className='list-group'>
			{users.map((user) => (
				<UserItem id={user.id} title={user.name} />
			))}
		</ul>
    </div>
  )
}

export default UsersList
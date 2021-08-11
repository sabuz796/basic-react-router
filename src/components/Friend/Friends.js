import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friends.css'

const Friends = (props) => {
    const {name, email, id} = props.friend
    let history = useHistory()
    function handleClick(friendId) {
        history.push(`/friend/${friendId}`);
      }
    return (
        <div className = 'style'>
            <h3>Name: {name}</h3>
            <h5>email: {email}</h5>
            {/* navigate option number 1 */}
            <Link to={`/friend/${id}`}><button>Show Detail id of {id}</button></Link><br /><br />
            {/* navigate option number 2 alternative to Link */}
            <button onClick={()=>handleClick(id)}>Click for Detail</button>
        </div>
    );
};

export default Friends;
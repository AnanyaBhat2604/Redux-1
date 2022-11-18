import "./userItem.css";
import {
  deleteUserDetailsAsync,
  updateUserDetailsAsync,
} from "../redux/userDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { edit } from "../redux/editSlice";
import { editVal } from "../redux/editValue";

const UserItem = (props) => {
  const dispatch = useDispatch();
  const editModal = useSelector((state) => state.userDetails);
  console.log("editModal", editModal);

  const [bodyText, setBodyText] = useState("");

  const handleDeleteClick = () => {
    dispatch(deleteUserDetailsAsync({ id: props.id }));
  };

  // const handleUpdateClick = () => {
  //   dispatch(updateUserDetailsAsync({title:value,id:props.id}))

  const handleUpdateClick = () => {
    console.log("edit", props.title);
    dispatch(edit());
    dispatch(editVal(props));
  };

  const editStatus = useSelector((state) => state.edit.value);

  return (
    <div>
      <div className="detailsContainer">
        <div>{props.title}</div>

        <div>
          <button className="deleteInfo" onClick={handleUpdateClick}>
            Update
          </button>
        </div>
        <div>
          <button className="deleteInfo" onClick={handleDeleteClick}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;

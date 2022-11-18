import "./AddDetailsForm.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserDetailsAsync,
  updateUserDetailsAsync,
} from "../redux/userDetailsSlice";

const AddDetailsForm = () => {
  const dispatch = useDispatch();

  const editTitle = useSelector((state) => state.editVal.value);
  const editStatus = useSelector((state) => state.edit.value);

  console.log("edit", editStatus, editTitle);

  // const [editNew, setEditNew] = useState(editTitle.title);
  const [value, setValue] = useState("");
  const [editState, setEditState] = useState(editTitle.title);
  // console.log("Init", editNew);
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.inputField.value);
    if (editStatus === "") {
      if (value !== "") {
        dispatch(
          addUserDetailsAsync({
            data: {
              title: value,
            },
          })
        );
      } else {
        alert("Enter the necessary field!");
      }
    }
    if (editStatus === "edit") {
      if (editState !== "") {
        dispatch(
          updateUserDetailsAsync({
            id: editTitle.id,
            title: editState,
          })
        );
      } else {
        alert("Enter the necessary field!");
      }
    }
  };

  useEffect(() => {
    setEditState(editTitle.title);
  }, [editTitle]);
  return (
    <div className="mainContainer">
      <form onSubmit={onSubmit} className="formContainer">
        <input
          type="text"
          className="formInput"
          name="inputField"
          value={editStatus === "edit" ? editState : value}
          onChange={(event) =>
            editStatus === "edit"
              ? setEditState(event.target.value)
              : setValue(event.target.value)
          }
        />

        <button type="submit" className="formButton">
          {editStatus === "edit" ? "EDIT" : "ADD"}
        </button>
      </form>
    </div>
  );
};

export default AddDetailsForm;

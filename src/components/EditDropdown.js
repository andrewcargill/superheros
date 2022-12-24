
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fa-regular fa-pen-to-square"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  /> 
));

export const EditDropdown = ({ handleEdit }) => {
  return (
    <Dropdown className="ml-auto" drop="center">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
           EDIT
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
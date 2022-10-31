import EmployeesListItem from "../employees-list-item/employees-list-item.js";

import "./employees-list.css";

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    );
}

export default EmployeesList;
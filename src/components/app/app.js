import AppInfo from '../app-info/app-info.js';
import SearchPanel from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmployeesList from '../employees-list/employees-list.js';
import EmployeesAddForm from '../employees-add-form/employees-add-form.js';

import './app.css';

const data = [
    {name: "Alex", salary: "800", increase: false, id: 1},
    {name: "John", salary: "5000", increase: false, id: 2},
    {name: "Amanda", salary: "2000", increase: true, id: 3},
    {name: "Bob", salary: "1000", increase: false, id: 4}
];

function App(){
    return (
        <div className= "app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;
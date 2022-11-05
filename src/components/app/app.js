import { Component } from 'react';
import AppInfo from '../app-info/app-info.js';
import SearchPanel from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmployeesList from '../employees-list/employees-list.js';
import EmployeesAddForm from '../employees-add-form/employees-add-form.js';

import './app.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Alex", salary: "800", increase: false, isLike: false, id: 1},
                {name: "John", salary: "5000", increase: false, isLike: false, id: 2},
                {name: "Amanda", salary: "2000", increase: true, isLike: false, id: 3},
                {name: "Bob", salary: "1000", increase: false, isLike: false, id: 4}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            isLike: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id == id){
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id == id){
                    return {...item, isLike: !item.isLike}
                }
                return item;
            })
        }))
    }
    searchEnp = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return items.filter(items => {
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }
    render (){
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEnp(data, term), filter);
        return (
            <div className= "app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList data={visibleData}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm onAdd = {this.addItem}/>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components'
const AppBlock = styled.div`
margin: 0 auto;
max-width: 800px;
 `
export default class App extends Component {
    constructor(props){
    super(props);
    this.state = { 
        data : [
        {label:"React", important:false , id:"react"},
        {label:"React is", important:true, id:"react is"},
        {label:"React is cool", important:true, id:"react is cool"}
        ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    }
    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after]
            return {
                data: newArr
            }
        })
    }
    addItem(id){
        console.log(id)
    }
    render(){
        return (
            <AppBlock>
                 <AppHeader/>
                 <div className="search-panel d-flex">
                     <SearchPanel/>
                     <PostStatusFilter/>
                 </div>
                 <PostList 
                 posts = {this.state.data}
                 onDelete = {this.deleteItem}
                 onAdd = {this.addItem}
                 />
                 <PostAddForm/>
            </AppBlock>
        )
        }
}
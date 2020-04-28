import React from 'react';


import{Options} from './options';
import{AddOption} from './addoption';




class Todolist extends React.Component {
  state ={
    options:[],
    selectedOption: undefined,
    showForm: false
  };
 




  clearSelectedoptons = ()=>{
    this.setState(()=>({
      selectedOption:undefined
    }));
  }
  handleDeleteOption=(optionToRemove)=> {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  
  handleAddOption=(option)=> {
    if (!option) {
      console.log('addoption calles');
      return 'Enter valid value to add item';
      
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
    
    
   
    
    handleDeleteOptions=()=> {
      this.setState(() => ({ options: [] }));
    }
    showForm = () => {
      return (
       <div>
           <div>
        
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption= {this.handleDeleteOption}
          />
         
          <AddOption
            handleAddOption={this.handleAddOption}
          />
          </div>

          </div>
         
        );
    }
  
   
    render() {
      
  
      return (
        <div >
          <button  onClick={() => this.setState({showForm: true}) }>
          ADD ITEMS
          </button>
          {this.state.showForm ? this.showForm() : null}

         
        </div>
      );
    }
  }
  
  export {Todolist};
 
 
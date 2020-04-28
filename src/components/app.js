import React from 'react';


import{Options} from './options';
import{AddOption} from './addoption';




class Todolist extends React.Component {
  state ={
    options:[],
    selectedOption: undefined,
    render:false
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
  handlePick=()=> {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=>({
     selectedOption:option
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
    
    
    componentDidMount(){
  console.log('featching data didi mount');
    };
    componentDidUpdate(){
      console.log('saving data did update mount');
    }
  
    componentWillUnmount(){
      console.log ('componentwillunmountmount');
    }
    
    handleDeleteOptions=()=> {
      this.setState(() => ({ options: [] }));
    }
    handletodobutton=()=>{
       
        
        
    }
  
   
    render() {
      
  
      return (
        <div className="body">
          <button onClick={this.handletodobutton}>
          ADD ITEMS
          </button>
         
            <div className="container">
             {console.log("button clicked")}
          
            <div className="widget">
          
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
           
            <AddOption
              handleAddOption={this.handleAddOption}
            />
            </div>
  
           
           
  
            </div>

          
         
         
         
        </div>
      );
    }
  }
  
  export {Todolist};
 
 
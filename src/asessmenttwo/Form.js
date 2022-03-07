import React, { Component } from 'react'



    class Forms extends Component {
       
        state={
            name:"",
            dept:"",
            rating:"",
            user:[],
  
        }
  
        handleChange=(event) => {
            this.setState({
                [event.target.name] :event.target.value
            })
        }
  
        toggleClick = () => {
            this.setState({clicked:!this.state.clicked})
        };
        handleSubmit=(event)=>{
          event.preventDefault()
          console.log( "********start********",this.state)
  
          const tempobj= {
                 name:this.state.name,
                 dept:this.state.dept,
                 rating:this.state.rating,
  
  
          }
          const tempArr=this.state.user
          tempArr.push(tempobj)
          this.setState({
            
           user:tempArr
          });
  
          
          
          
        }
  
      render(){
          return(
              <div>
  
             
              <div className='maincontainer'>
                    <h1>Employee Feedback Form :</h1>
                    <form>
                        <div>
                    <label for="name" className='cont'>Name :</label>
                    <input className="hold" type="text" id="name" name="name" placeholder="name" onChange={this.handleChange} value={this.state.name} />
                        </div>
  
                    <div>
                    <label for="dept" className='cont'>Dept :</label>
                      <input className="hold"  type="text" id="dept" name="dept" placeholder="dept" onChange={this.handleChange}  value={this.state.dept} />
                    </div>
             
                    <div>
                    <label for="rating" className='cont'>Rating :</label>
                    <input className="hold" type="text" id="rating" name="rating" placeholder="rating" onChange={this.handleChange}  value={this.state.rating} />
                    </div>
  
 
                    <button className='btn' onClick={this.handleSubmit}>Submit</button>
                    </form>
              </div>
              <div className='container1'>
              {this.state.user.map((value,index) => {
                  return (
                      
                      <div className='container2'>
                   <h4>Name</h4>:{value.name }||<h4>Dept:</h4> {value.dept }||<h4>Rating:</h4>{value.rating}
                      </div>
                     
                  )
              })}
               </div>
              </div>
          )
      
      }
  }
  export default Forms
  
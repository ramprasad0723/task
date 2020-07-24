import React, { Component } from 'react'
export class register extends Component {
    constructor(props) 
    {
        super(props)
        this.state =
         {
            Firstname: '',
            Lastname: '',
            Address : '',
            Phoneno :'',
            FirstnameError: '',
            LastnameError: '',
            AddressError : '',
            PhonenoError :''
        }
    }

    handleFirstnamechange = event => {
        this.setState({
            Firstname: event.target.value
        })
    }
    handleLastnamechange = event => {
        this.setState({
            Lastname: event.target.value
        })
    }
    handleAddresschange = event => {
        this.setState({
            Address: event.target.value
        })
    }
    handlePhonenochange = event => {
        this.setState({
            Phoneno: event.target.value
        })
    }
   
    handleSubmit = event => {
        event.preventDefault()
        if(this.validate()){
            alert("registration occurs successfully")
            console.log(this.state.Firstname)
            console.log(this.state.Lastname)
            console.log(this.state.Address)
            console.log(this.state.Phoneno )
        }
      }
    validate = () => {
         let status = true;
        if (this.state.Firstname.length < 2) {
            console.log(this.state.Firstname)
            status=false
            this.setState({
                FirstnameError:'Please enter valid firstname'
            })            
        }
        if (this.state.Lastname.length < 1) {
            console.log(this.state.Lastname)
            status=false
            this.setState({
            LastnameError:'Please enter valid Lastname'
            })            
        }
        if (this.state.Address.length < 1) {
            console.log(this.state.Address)
            status=false
            this.setState({
            AddressError:'Please enter valid Address'
            })            
        }
        if (this.state.Phoneno.length < 10 || this.state.Phoneno.length >10) {
            console.log(this.state.Phoneno)
            status=false
            this.setState({
            PhonenoError:'Please enter valid Phone number'
            })            
        }
        
        return status
    }
   
    
    render() {
        return ( < form style={{textAlign:'unset' , backgroundColor:'#CECEE8'}}><div>
         <style>{'body { background-color: #CECEE8; }'}</style>
        </div>
        <br />
        <br />
             <div >
             <  input type = "text" placeholder = "Firstname" 
             style={
                 {
                     width: '20%',
                     height: '24px',  
                     WebkitBorderRadius: '5px' ,  
                     ebkitBoxSizing: 'border-box'
                    }
              }
            value = { this.state.Firstname }
            name="Firstname"
            onChange = { this.handleFirstnamechange } />
            < div > { this.state.FirstnameError } </div><br />

            < input type = "text" placeholder = "Lastname" 
            style={
                {
                    width: '20%',
                    height: '24px' ,  
                    WebkitBorderRadius: '5px' ,  
                    ebkitBoxSizing: 'border-box'
                }
              }
            value = { this.state.Lastname }
            onChange = { this.handleLastnamechange }/>
            < div > { this.state.LastnameError } </div><br />

            < input type = "textarea" placeholder = "Address" 
            style={
                {
                    width: '20%',
                    height: '24px' ,  
                    WebkitBorderRadius: '5px' ,  
                    ebkitBoxSizing: 'border-box'
                }
              }
            value = { this.state.Address }
            onChange = { this.handleAddresschange }/>
            < div > { this.state.AddressError } </div><br />

             < input type = "number" placeholder = "Phone no" 
             style={
                 {
                     width: '20%',
                     height: '24px' ,  
                     WebkitBorderRadius: '5px' ,  
                     ebkitBoxSizing: 'border-box'
                    }
              }
            value = { this.state.Phoneno }
            onChange = { this.handlePhonenochange } />
            < div > { this.state.PhonenoError } </div><br />
            
            </div>
            < button 
            style={
                {
                    color : 'white' , 
                    backgroundColor :'#080670', 
                    width:'60px',
                    height:'25px',
                    WebkitBorderRadius: '5px'
                }
            }
             onClick={this.handleSubmit } type = "submit"  > submit </button>  </form>
        )
    }
}

export default register
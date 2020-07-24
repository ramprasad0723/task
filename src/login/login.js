import React, { Component } from 'react'
export class Login extends Component {
    constructor(props) 
    {
        super(props)
        this.state = 
        {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }
    }

    handleEmailchange = event =>
    {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordchange = event => 
    {
        this.setState({
            password: event.target.value
        })
    }

    validate = () => 
    {
         let status = true;
        if (!this.state.email.includes('@','.'))
         {
            status=false
            this.setState({
                emailError:'*Invalid Email Id'
                
            })  
            console.log(this.state.email)          
        }
        if( this.state.password.length <1 || this.state.password.length <8){
            status=false
            this.setState({
                passwordError:" *Password must be greater than 8 characters"
            }) 
            console.log(this.state.password)         

        }
    
        return status
    }

    handleSubmit = event => {
        alert(`${this.state.email} ${this.state.password}`)
        event.preventDefault()
        if (this.validate()) {
        window.location.href="/appbar";   
        console.log(this.state.email)
        console.log(this.state.password)     
        }
    }

    render()
    {
        return ( <form style={{textAlign:'unset' , backgroundColor:'#CECEE8'}}>
            <div>
            
                <style>{'body { background-color: #CECEE8; }'}</style>
 
            </div><br />

            <br /><br /><br /><br /><br /><br />
             <div>
             < input type = "text" placeholder =" Email Id" 
             style={
                 {
                     width: '20%' ,
                     height: '24px', 
                     WebkitBorderRadius: '5px' ,  
                     ebkitBoxSizing: 'border-box'
                    } 
                }
            value = { this.state.email }
            onChange = { this.handleEmailchange } />
            < div > { this.state.emailError } </div> 
            </div>
            <br />
          <input type = "password" placeholder ="Password"
           style={
               {
                   width: '20%',
                   height: '24px', 
                   WebkitBorderRadius: '5px' , 
                   ebkitBoxSizing: 'border-box'
              } 
            }
            value = { this.state.password }
            onChange = { this.handlePasswordchange } />
            < div > { this.state.passwordError } </div> 
            <br />
             <button 
             style={
                 {
                     color : 'white' , 
                     backgroundColor :'#080670',
                      width:'60px' ,
                      WebkitBorderRadius: '5px',
                      height:'25px'
                      }
                }
                       type = "submit" onClick={this.handleSubmit} > LOGIN </button>
             </form>
        )}
    
    
}

export default Login
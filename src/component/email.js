import React, { Component } from 'react';

class Email extends Component {
    emailvalidation() {
        var text = document.getElementById("email");
        if((text.value.endsWith(".com")||text.value.endsWith(".edu"))&&text.value.includes("@")){
            document.getElementById("feedback").innerHTML = "Email successfully recorded";
        }else{
            document.getElementById("feedback").innerHTML = "Invalid email address.";
        }
    }

    render() {
        return (
            <div>
                <form name="form1">
                <label for = "email">Email address:</label><br/>
                <input type="text" name="email" id="email"/><br/>
                <p id="feedback"></p>
                <button type='button' onClick={this.emailvalidation}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Email; 
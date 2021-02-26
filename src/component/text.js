import React, { Component } from 'react';

class Text extends Component {
    render() {
        return (
            <div>
            <form>
                <label for = "firstname">First name:</label><br/>
                <input type="text" name="firstname" id="firstname"/><br/>
                <label for = "lastname">Last name:</label><br/>
                <input type="text" name="lastname" id="lastname"/><br/><br/>

                <label for = "fcity">Favorite City</label><br/><br/>
                <input type="radio" name="fcity1" id="Los Angeles"/>
                <label for = "Los Angeles">Los Angeles</label><br/>
                <input type="radio" name="fcity2" id="San Francisco"/>
                <label for = "San Francisco">San Francisco</label><br/>
                <input type="radio" name="fcity3" id="Washington D.C."/>
                <label for = "Washington D.C.">Washington D.C.</label><br/><br/>
                <input type="Submit" name="submit" value="Done"/>
	        </form>
            </div>
        )
    }
}

export default Text; 

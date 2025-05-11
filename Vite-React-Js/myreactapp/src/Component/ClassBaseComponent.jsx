import React, {Component} from "react";
import "../Style.css"
export default class ClassBaseComponent extends Component {
    render(){
        return (
            <header>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div>
                    <nav>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Service</a>
                    </nav>
                </div>
                <div class="auth">
                   <a href="">Login</a>
                   <a href="">Sign Up</a>
                </div>
            </header>
        )
    }
}




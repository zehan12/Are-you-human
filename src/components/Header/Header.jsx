import { Fragment } from "react";
import "./Header.css"

const Header = () => {
    return (
        <Fragment>

        <div class="nav">
            <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div class="nav-title">
                        Capthca App
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="nav-links">
                    <a target="_blank">login</a>
                </div>
        </div>
        </Fragment>
    )
}

export default Header;
import React from "react"
import Logo from "../images/rvkoon_keyboard.png"
import {Link} from "gatsby"

const Header = () => {
    return(
        <nav>
            <div className="container">
                <div className="columns is-vcentered is-gapless is-multiline">
                    <div class="column">
                        <div className="columns is-vcentered is-multiline">
                            <div className="column is-narrow">
                                <img src={Logo} width="100" alt="Raccoon with glasses holding a keyboard"/>
                            </div>
                            <div className="column">
                                <Link to="/">
                                    <h2>RVKOON'S LAB</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="is-pulled-right">
                            <Link to="/" className="text-is-primary">Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
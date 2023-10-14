import Links from "./Links/Links"
import Logo from './Logo/Logo'
import "./Navigation.css"

function Navigation(){
    return(
        <>
            <div className="navigation-container">
                <Logo />
                <Links />
            </div>
        </>
    )
}

export default Navigation;
import "./NavBar.css"
import CartWidget from "./CartWidget";

export const NavBar = () => {

    return (

        <div className="container">
            <nav className="nav">
                <div className="nav_marca">
                    <a className="nav_link" href="#">"LA PYME <br/> MAXIKIOSKO"</a>
                    
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">Almacen</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Bebidas</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Golosinas</a>
                    </li>


                </ul>
                <div className="Carrito">
                    <a className="nav_link" href="#">  <CartWidget /></a>
                  
                </div>
            </nav>

        </div>

    )

}

export default NavBar;
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (

        <ul className="nav nav-fill text-bg-warning bg-gradient">
            <li className="nav-item h4 mt-1">
                <a className="nav-link text-dark" href="#"><i className="fa-solid fa-store m-2"></i>fruit Store</a>
            </li>
            <li className="nav-item h4 mt-1">
                <a className="nav-link text-dark" href="#"><i className="fa-solid fa-building-circle-arrow-right m-2"></i>Sucursales</a>
            </li>
            <li className="nav-item h4 mt-1">
                <a className="nav-link text-dark" href="#"><i className="fa-solid fa-circle-user m-2"></i>Login</a>
            </li>
            <li className="nav-item h4 mt-1 text-dark">
                <CartWidget />
            </li>
        </ul>

    )
}

export default NavBar

// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <div className="container-fluid">
//         <a className="navbar-brand" href="#">Fruit Store</a>
//         <a className="navbar-brand" href="#">Nosotros</a>
//         <a className="navbar-brand " href="#">Sucursales</a>
//         <CartWidget />                
//     </div>
// </nav>
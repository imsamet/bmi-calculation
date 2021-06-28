import NavLink from './link/link'

import Style from './nav.module.css'

function Nav () {

    return(
        <nav className={Style.nav}>
            <ul>
                <li><NavLink href="/">Anasayfa</NavLink></li>
                <li><NavLink href="/whats-bmi">Bmi Nedir</NavLink></li>
                <li><NavLink href="/my-values">Değerlerim</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
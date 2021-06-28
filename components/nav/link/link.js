import { useRouter } from "next/dist/client/router"
import Link from 'next/link'
import cn from 'classnames'

import Style from './link.module.css'

function NavLink ({href, children}) {

    const router = useRouter()

    return(
        <Link href={href}>
            <a className={cn(Style.a, router.route == href && Style.active)}>
                {children}
            </a>
        </Link>
    )
}

export default NavLink
import Style from './form.module.css'

import Nav from '../nav/nav'

function Form ({children}) {
    return(
        <>

            <Nav/>

            <div className={Style.container}>
                <div className={Style.content}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Form
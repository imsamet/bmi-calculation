import PropTypes from 'prop-types'
import cn from 'classnames'
import Style from './form.module.css'

import Nav from '../nav/nav'

function Form ({width, marginTop, children}) {

    const style = {
        width: width
    }

    return(
        <>
            <Nav/>

            <div className={Style.container}>
                <div style={style} className={cn(Style.content, marginTop && Style.marginTop)}>
                    {children}
                </div>
            </div>
        </>
    )
}

Form.propTypes = {
    width: PropTypes.string,
    marginTop: PropTypes.bool
}

Form.defaulProp = {
    width: "20vw",
    marginTop: false
}

export default Form
import Style from './my-values.module.css'

import Form from '../../form/form'

function MyValues () {
    return(
        <Form width={"50vw"} marginTop>
            <div className={Style.head}></div>
            <div></div>
        </Form>
    )
}

export default MyValues
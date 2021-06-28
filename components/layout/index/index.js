import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

import Style from './index.module.css'

import Button from '../../button/button'
import {Calculator} from '../../icons'

function Index () {

    const [inputs, setInputs] = useState({})
    
    const [bmi, setBmi] = useState()
    
    const [isAlert, setAlert] = useState(false)

    const boyRef = useRef()
    const kiloRef = useRef()

    useEffect(() => {

        const boy = inputs.boy && inputs.boy 
        const kilo = inputs.kilo && inputs.kilo 

        if (isNaN(kilo) || isNaN(boy)){
            setAlert(true) 
        }else{
            setAlert(false)
            setBmi(Math.floor(kilo / (boy / 50)))
        }

    }, [inputs])

    useEffect(() => {
        setAlert(false)
    }, [])

    const handle = () => {
        const value = {boy: parseInt(boyRef.current.value), kilo: parseInt(kiloRef.current.value)};
        setInputs(value)
    }

    const close = () => {
        setAlert(false)
    }

    return (
        <div className={Style.container}>
            <div className={Style.content}>

                    {isAlert && <span className={Style.alert}>Lütfen tüm alanları doldurun. <i onClick={close}>×</i></span> }

                <div className={Style.inputBox}>
                    <label>Boy: </label>
                    <input type="number" ref={boyRef} placeholder="cm cinsinden"/>
                </div>

                <div className={Style.inputBox}>
                    <label>Kilo: </label>
                    <input type="number" ref={kiloRef} placeholder="kg cinsinden"/>
                </div>
                
                <Button
                    pointer
                    centerBetween
                    borderRadius={5}
                    backgroundColor={"var(--c-theme)"}
                    fontSize={20}
                    padding={"10px 20px"}
                    onClick={handle}

                >
                    Hesapla
                    <Calculator/>
                </Button>

                <span className={cn(Style.result, bmi && Style.green)}>Sonuç: {bmi}</span>
            </div>
        </div>
    )
}

export default Index
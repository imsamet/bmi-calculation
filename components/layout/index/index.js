import { useEffect, useRef, useState, useContext } from 'react'
import cn from 'classnames'
import StoreBmi from '../../../store/storeBmi'

import Style from './index.module.css'

import Button from '../../button/button'
import {Calculator} from '../../icons'

function Index () {

    const storeBmi = useContext(StoreBmi)

    const [inputs, setInputs] = useState({})
    
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
            storeBmi.setBmi((kilo / (boy / 50)).toFixed(1))
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

                <div className={cn(Style.result, 
                      storeBmi.bmi <= 18.4 ? 
                        Style.yellow
                    : storeBmi.bmi > 18.4 && storeBmi.bmi <= 24.9 ? 
                        Style.green
                    : storeBmi.bmi > 24.9 && storeBmi.bmi <= 29.9 ? 
                        Style.yellow
                    : storeBmi.bmi > 29.9 && storeBmi.bmi <= 34.9 ?
                        Style.halfOrange
                    : storeBmi.bmi > 34.9 && storeBmi.bmi <= 44.9 ?
                        Style.orange
                    : storeBmi.bmi > 44.9 && Style.red)}>

                    <span>Sonuç: {storeBmi.bmi}</span>

                        {
                            storeBmi.bmi <= 18.4 ? 
                                <p>Zayıf. Kişinin boyuna oranla ağırlığının yetersiz olduğunu ifade eden bu değer ile karşılaşılması durumunda kişinin diyetisyen eşliğinde sağlıklı bir şekilde kilo alması önerilir.</p>
                            : storeBmi.bmi > 18.4 && storeBmi.bmi <= 24.9 ? 
                                <p>Normal. Bu değer aralığı kişinin ideal kiloda olduğunu gösterir. Bu değere sahip olan kişilerin düzenli, dengeli ve sağlıklı beslenmeye devam etmeleri önerilir.</p>
                            : storeBmi.bmi > 24.9 && storeBmi.bmi <= 29.9 ? 
                                <p>Fazla Kilolu. Kişinin boyuna oranla kilosunun fazla olduğunu gösteren bu değer aralığında kişinin uygun diyet ile fazla kilolarından kurtulması önerilir.</p>
                            : storeBmi.bmi > 29.9 && storeBmi.bmi <= 34.9 ?
                                <p>Şişman. Birinci derece obez kategorisinde değerlendiren değer aralığında, kişinin kilosunun sağlık açısından risk oluşturabilecek düzeyde olduğu anlaşılır. Bu kişilerin diyetisyen yardımıyla kilo vermesi önerilir.</p>
                            : storeBmi.bmi > 34.9 && storeBmi.bmi <= 44.9 ?
                                <p>Şişman. İkinci derece obez olarak tanımlanan bu değerlere sahip olan kişilerde kalp ve damar hastalıkları bakımından risk artar. Kişinin kilo vermek için diyetisyene başvurması önerilir.</p>
                            : storeBmi.bmi > 44.9 && 
                                <p>Aşırı Şişman. Üçüncü derece obez kategorisinde olan bu kişilerde hastalık gelişme riski çok yüksektir. Hekim ve diyetisyen eşliğinde kilo verilmesi önerilir.</p>
                        }
                </div>
            </div>
        </div>
    )
}

export default Index
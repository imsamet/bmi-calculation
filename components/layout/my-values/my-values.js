import { useContext, useEffect } from 'react'
import cn from 'classnames'
import StoreBmi from '../../../store/storeBmi'

import Style from './my-values.module.css'

import Form from '../../form/form'
import Button from '../../button/button'
import NavLink from '../../nav/link/link'

function MyValues () {

    const storeBmi = useContext(StoreBmi)
    let localStorageData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('bmi-calcculation')) : []

    return(
        <Form width={"50vw"} marginTop>
            <div className={cn(Style.head, 
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


                {
                    storeBmi.bmi 
                    ? 
                        <>
                            <h1>BMI Sonucun:</h1>
                            <span>{storeBmi.bmi}</span>
                        </>
                    :
                        <Button 
                            pointer
                            borderRadius={5}
                            backgroundColor={"var(--c-halfOrange20)"} 
                            padding={"10px 20px"} 
                            fontSize={15}  
                        ><NavLink href="/">Hesaplamaya Git</NavLink></Button>
                }

            </div>

            <div className={Style.content}>

                <span>Eski sonuçlarım</span>

                <table className={Style.table}>
                    <tr className={Style.tableHead}>
                        <th>Boy</th>
                        <th>Kilo</th>
                        <th>Bmi</th>
                        <th>Sonuç</th>
                    </tr>

                    {
                        localStorageData && localStorageData.map((value, index) => {

                            const boy = value[0].boy
                            const kilo = value[1].kilo
                            const bmi = value[2].bmi

                            const sonuc = bmi <= 18.4 ? 
                                "Zayıf"
                            : bmi > 18.4 && bmi <= 24.9 ? 
                                "Normal"
                            : bmi > 24.9 && bmi <= 29.9 ? 
                                "Fazla kilolu"
                            : bmi > 29.9 && bmi <= 34.9 ?
                                "Birinci derece obez"
                            : bmi > 34.9 && bmi <= 44.9 ?
                                "İkinci derece obez"
                            : bmi > 44.9 && 
                                "Üçüncü derece obez"
                            
                            const style = 
                                bmi <= 18.4 ? 
                                    Style.yellow
                                : bmi > 18.4 && bmi <= 24.9 ? 
                                    Style.green
                                : bmi > 24.9 && bmi <= 29.9 ? 
                                    Style.yellow
                                : bmi > 29.9 && bmi <= 34.9 ?
                                    Style.halfOrange
                                : bmi > 34.9 && bmi <= 44.9 ?
                                    Style.orange
                                : bmi > 44.9 && Style.red

                                console.log(sonuc)

                            return(
                                <tr className={style} key={index}>
                                    <td>{boy}</td>
                                    <td>{kilo}</td>
                                    <td>{bmi}</td>
                                    <td>{sonuc}</td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        </Form>
    )
}

export default MyValues
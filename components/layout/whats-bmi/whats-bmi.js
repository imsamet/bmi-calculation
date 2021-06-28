import Style from './whats-bmi.module.css'

import Form from '../../form/form'

function WhatsBmi () {
    return(
        <Form width={"50vw"} marginTop>
            <h1 className={Style.h1}>Vücut Kitle Endeksi (BMI) Nedir?</h1>
            
            <p className={Style.p}>Şişman insanların sağlıklı kabul edildikleri zamanlar çok da eski değil. Doktorlar o zamanlarda aşırı zayıf insanlar için çok daha fazla endişeleniyorlardı; çünkü bu insanların çoğu yeterince kalori alamayacak kadar fakirdi. Ancak endüstriyel tarımın başlaması ve yiyeceklerin ucuz hale gelmesi, işlerin değişmesine neden oldu.</p>

            <p className={Style.p}>2. Dünya Savaşı'ndan kısa bir süre sonra, çok fazla yemek yemenin de çok az yemek kadar tehlikeli olduğu anlaşılmaya başlandı. Sigorta firmaları, en şişman müşterilerinin ortalamada çok daha erken ölmeye başladığını fark etti. Bu sebeple aşırı kiloyu ölçmenin bir yolunu aradılar ve bu sorunu 1832 yılında Belçikalı istatikçi, matematikçi ve astronom Adolphe Quetelet çözdü.</p>

            <p className={Style.p}>Basitçe, bir kişinin kilosunu, boyunun karesine böleriz. Örneğin 180 santimetre boya ve 85 kilogram ağırlığa sahip bir erkeğin Vücut Kitle Endeksi (BMI) 26.23'tür. 160 santimetre boya ve 65 kilogram ağırlığa sahip bir dişinin BMI değeri 25.39'dur. Bu oran, sigorta firmalarının sınırlarını aşarak sağlık araştırmalarına sıçradı ve 1980'li yıllarda klinik araştırmalar dünyasına da dahil oldu. </p>

            <p className={Style.p}>Günümüzde BMI, en sık kullanılan sağlık ölçülerinden birisidir. Hemşireler sizin boyunuzu ve kilonuzu ölçtüğünde, kolaylıkla BMI değerinizi görürler. Özellikle ABD gibi ülkelerde sigorta şirketleri, müşterilerinden her yıl ne kadar para talep edeceklerini belirlerken bunu ölçüt olarak kullanırlar: 2013 yılında eHealthInsurance isimli sigorta firması tarafından yayınlanan bir rapora göre, BMI değeri "obez" sınırlarında olanlar, "normal" aralıkta olanlara göre sigorta şirketlerine %22 daha fazla para ödemek zorunda kalmışlardır. Doktorlar da hastalarına tavsiyelerde bulunmak için tipik olarak BMI değerini kullanırlar: Eğer:</p>

            <ul className={Style.ul}>
                <li>18.5'un altındaysanız aşırı zayıfsınız,</li>
                <li>18.5-24.9 arasıysanız normalsiniz,</li>
                <li>25-29.9 arasındaysanız kilolusunuz,</li>
                <li>30-23.9 arasındaysanız birinci derece obezsiniz,</li>
                <li>35-44.9 arasındaysanız ikinci derece obezsiniz,</li>
                <li>45 ve üzerindeyseniz üçüncü derece obezsiniz demektir.</li>
            </ul>
        </Form>
    )
}

export default WhatsBmi
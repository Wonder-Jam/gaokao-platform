import NJU_LOGO from '@/static/school-badge/南京大学 NJU.svg'
import NJU_BACK from '@/static/school-badge/南京大学 NJU-1.svg'
import { DetailBackgroundContainer, Mask } from './style'

export default function UniversityDetail() {

    return (
        <div style={{ overflow: 'auto',   marginTop: '-13px' }}>
            <DetailBackgroundContainer>
                <Mask />
            </DetailBackgroundContainer>
            <div style={{marginTop: '-75px', display: 'flex', flexDirection: 'row'}}>
                <NJU_LOGO />
                <h1 style={{marginTop: '85px', color: '#1677FF'}}><a href="https://www.nju.edu.cn/">南京大学</a></h1>
            </div>
        </div>
    )
}
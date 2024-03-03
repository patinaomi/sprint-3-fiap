import Navbar from './components/Menu/Navbar'
import PrimeiraSessao from './components/PrimeiraSessao/PrimeiraSessao'
import SegundaSessao from './components/SegundaSessao/SegundaSessao'
import TerceiraSessao from './components/TerceiraSessao/TerceiraSessao'
import QuartaSessao from './components/QuartaSessao/QuartaSessao'
import QuintaSessao from './components/QuintaSessao/QuintaSessao'
import Footer from './components/Footer/Footer'

import NovaSessao from './components/NovaSessao/NovaSessao'

export default function App() {
    return (
        <>
            <Navbar/>

            <PrimeiraSessao/>

            <NovaSessao/>

            <SegundaSessao/>

            <TerceiraSessao/>

            <QuartaSessao/>

            <QuintaSessao/>

            <Footer/>
        </>
    )
}
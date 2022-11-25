import Hero from './Hero';
import osis from './../assets/osis.webp';
import ambalan from './../assets/pmi.webp';
import pmi from './../assets/ambalan.webp';
import jurnalistik from './../assets/jurnalistik.webp'
import CardOrganisasi from './CardOrganisasi';
import CardKegiatan from './CradKegiatan';
import padus from './../assets/paduan-suara.jpg';
import paskibra from './../assets/paskibra.jpg';

const MainContent = () => {
    return (
        <>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Organisasi</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-12">
                        <CardOrganisasi image={osis} organisasi="Osis"/>
                    </div>
                    <div className="col-lg-3 col-12">
                        <CardOrganisasi image={ambalan} organisasi="Ambalan"/>
                    </div>
                    <div className="col-lg-3 col-12">
                        <CardOrganisasi image={pmi} organisasi="PMR"/>
                    </div>
                    <div className="col-lg-3 col-12">
                        <CardOrganisasi image={jurnalistik} organisasi="Jurnalistik"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                        <CardKegiatan image={padus}/>
                    </div>
                    <div className="col-12 my-3">
                        <CardKegiatan image={paskibra}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent
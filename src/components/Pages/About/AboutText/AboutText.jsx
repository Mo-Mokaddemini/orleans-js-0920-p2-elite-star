import './AboutText.css';

const AboutText = () => {
    return (
        <div>
            <h1 className='about-title'>ABOUT US</h1>
            <div className='about-text'>
            <div><p className='elite'>ELITE STAR AGENCY</p></div>
                <div className='about-adress1'>
  
                    <p className='coruscant'>Coruscant</p>
                    <p>Keizersgracht 174-11016 DW</p>
                    <p>Sor-Akai Coruscan</p>
                    <p>Coruscant - Galactic Empire</p>
                    <p>T: 0679497610</p>
                    <p>F: 0679497611</p>
                    <p>E: elitestar@dark.rep</p>
                </div>
                <div className='about-adress2'>
                    <p className='coruscant'>Coruscant</p>
                    <p>Keizersgracht 174-11016 DW</p>
                    <p>Sor-Akai Coruscan</p>
                    <p>Coruscant - Galactic Empire</p>
                    <p>T: 0679497610</p>
                    <p>F: 0679497611</p>
                    <p>E: elitestar@dark.rep</p>
                </div>
            </div>
            <div className='description'>
                <p className='desc-title'>EliteStar was created to meet two objectives :</p>
                <p>- Represent models whose physical profiles may or may not correspond to the usual criteria of modeling agencies.</p>
                <p>- Allow event professionals to find the characters they need, namely profiles that are increasingly out of the ordinary and atypical.</p>
                <p>EliteStar agency is a member of the Intergalactic Federation of Modeling Agencies.</p>
            </div>
        </div>
    )
}

export default AboutText;
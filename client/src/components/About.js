// import plant from './images/plant.svg';
import clean from './images/clean.jpg'
// import clean2 from './images/clean2.jpg'
import image1 from './images/image1.svg';
import cleanrush from './images/cleanrush.jpg';
import './About.css'
import Cards from './Cards';
export default function About(){
    return(
        <div id='abt' style={{height: '500vh'}}>
            {/* main card */}
            <div className='details' style={{paddingBottom: '5em'}}>
                <h1>About Us</h1>
                <p>
                    At our cleaning company,
                    we understand the challenges and risks involved in
                    finding a reliable and trustworthy house help. 
                    That's why we take the burden off your shoulders
                    by thoroughly screening and background checking all of 
                    our cleaning professionals before they join our team. 
                    You can rest assured that your home is in safe hands
                    with our experienced and dependable cleaners. 
                    Say goodbye to the stress of finding a cleaner
                    and hello to a spotless home with our cleaning company.
                </p>
            </div>  
            <Cards />                             
        </div>
    );
}


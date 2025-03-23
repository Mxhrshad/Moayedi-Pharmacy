import AboutUs from "../../components/About Us/AboutUs";
import ServicesSection from "../../components/Service Section/ServiceSection";
import Address from "../../components/Address/Address";
import ContactUs from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import homeBackground from '../../assets/pictures/homebackground.jpg';


export default function Home(){
    return(
        <>
            <div id="home" className="pb-60 md:pb-28 lg:pb-16 w-full flex justify-center items-center" style={{
                                                                                        backgroundImage: `url(${homeBackground})`,
                                                                                        backgroundSize: 'cover',
                                                                                        backgroundPosition: 'center',
                                                                                        backgroundRepeat: 'no-repeat',
                                                                                    
  }}>
            <Container>
                <Header />
            </Container>
            </div>

            <div className="bg-primary w-full h-150 flex justify-center items-center">
                <Container>
                    <ServicesSection />
                </Container>
            </div>

            <div className=" w-full h-auto pt-20 md:pt-10 flex justify-center items-center">            
                <Container>
                    <AboutUs />
                </Container>
            </div>

            <div className="bg-primary w-full h-150 flex justify-center items-center">
                <Container>
                    <Address />
                </Container>
            </div>

            <div className=" w-full h-150 flex justify-center items-center">            
                <Container>
                    <ContactUs />
                </Container>
            </div>
        </>

    )
}
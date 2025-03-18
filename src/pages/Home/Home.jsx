import AboutUs from "../../components/About Us/AboutUs";
import ServicesSection from "../../components/Service Section/ServiceSection";
import Address from "../../components/Address/Address";
import ContactUs from "../../components/Contact Us/ContactUs";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";


export default function Home(){
    return(
        <>
            <div className=" w-full h-150 flex justify-center items-center">
            <Container>
                <Header />
            </Container>
            </div>

            <div className="bg-primary w-full h-150 flex justify-center items-center">
                <Container>
                    <ServicesSection />
                </Container>
            </div>

            <div className=" w-full h-150 flex justify-center items-center">            
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
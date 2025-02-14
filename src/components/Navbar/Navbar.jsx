import Container from "../Container/Container";

export default function Navbar(){
    return(
    <div className="h-18 w-full border-b shadow items-center justify-center bg-primary flex border-b-gray-300">
        <Container>
            <div className="flex items-center justify-between flex-row-reverse">
                    <ul className="flex flex-row-reverse">
                        <li className="ml-8 text-gray-100">خانه</li>
                        <li className="ml-8 text-gray-100">درباره ما</li>
                        <li className="ml-8 text-gray-100">ارتباط با ما</li>
                        <li className="ml-8 text-gray-100">آدرس ما</li>
                    </ul>
            </div>
        </Container>
    </div>
    )
}
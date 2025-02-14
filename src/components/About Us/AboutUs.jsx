export default function AboutUs(){
    return(
        <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="pb-14">
                <h2 className="font-bold text-4xl">About Us</h2>
                <p>Lorem ipsum dolor sit.</p>
            </div>

            <div className="w-full h-2/3 grid grid-cols-2 grid-rows-2">
                <div className="w-full h-50 flex items-center justify-center border-b-2 border-r-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div className="ml-4">
                        <h2 className="text-2xl font-black">Cheaper Than Your Local Pharmacy</h2>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>

                </div>
                <div className="w-full h-50 col-start-1 row-start-2 flex items-center justify-center border-t-2 border-r-2 border-black">2</div>
                <div className="w-full h-50 col-start-2 row-start-1 flex items-center justify-center border-b-2 border-l-2 border-black">3</div>
                <div className="w-full h-50 flex items-center justify-center border-t-2 border-l-2 border-black">4</div>
            </div>
        </div>
    )
}
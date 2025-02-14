export default function Header(){
    return(
    <div className=" w-full h-150 flex justify-center items-center">
        <div className="w-full h-full flex">
            <div className="w-1/2 h-full flex justify-center items-center flex-col">
                <h1 className="font-black text-5xl">Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit!</p>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
                <img className="w-3/4 h-3/4" src="..\src\assets\pictures\image1.jpg" alt="" />
            </div>
        </div>
    </div>
    )
}
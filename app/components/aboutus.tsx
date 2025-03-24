
import Navbar from "./navbar"
import Footer from "./footer"

export default function Aboutus(){
    
    return <>
        <Navbar/>
       <div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
            Welcome to PayTime Wallet, your secure and seamless digital payment solution. Designed for fast, hassle-free
             transactions, PayTime allows you to send, receive, and manage money effortlessly. 
             With robust security, instant transactions, and easy accessibility, PayTime Wallet empowers you to stay in control of your
            finances anytime, anywhere. Join us and experience the future of digital payments! 🚀💸
            </p>
        </div>
    </div>
</div>
<Footer/>
    </>
}
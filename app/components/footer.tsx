import Link from "next/link";


export default function Footer() {
    return (
      <footer className="bg-gray-100">
        <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          {/* Menu Section */}
          <div className="p-5 sm:w-2/12 border-r">
            <h3 className="text-sm uppercase text-indigo-600 font-bold">Menu</h3>
            <ul>
              {["Home", "about", "contact", "pay"].map((item) => (
                <li key={item} className="my-2">
                  <a className="hover:text-indigo-600" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* About Section */}
          <div className="p-5 sm:w-7/12 border-r text-center">
            <h3 className="font-bold text-xl text-indigo-600 mb-4">Componentity</h3>
            <p className="text-gray-500 text-sm mb-10">
             this is PayTime. pay enjoy and live a cashless life 
            </p>
          </div>
  
          {/* Contact Section */}
          <div className="p-5 sm:w-3/12">
            <h3 className="text-sm uppercase text-indigo-600 font-bold">Contact Us</h3>
            <ul>
              <li className="my-2">
                <Link className="hover:text-indigo-600" href="/pages/contactus">
                  Kattapur, Pistol Chauraha, Desi State Uttar Pradesh
                </Link>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="#">contact@paytime.com</a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Social Media Section */}
        <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            {[
              { id: "Twitter", d: "M24,12c0,6.627-5.373,12-12,12C5.373,24,0,18.627,0,12,0,5.373,5.373,0,12,0,18.627,0,24,5.373,24,12Z M17.535,8.808c-0.379,0.168-0.786,0.281-1.213,0.333,0.436-0.262,0.771-0.676,0.929-1.169-0.408,0.242-0.86,0.418-1.341,0.513-0.385-0.411-0.934-0.667-1.541-0.667-1.167,0-2.112,0.945-2.112,2.111,0,0.166,0.018,0.327,0.054,0.482-1.754-0.088-3.31-0.929-4.352-2.206-0.181,0.311-0.286,0.674-0.286,1.061,0,0.733,0.373,1.379,0.94,1.757-0.346-0.01-0.672-0.106-0.956-0.264-0.001,0.009-0.001,0.018-0.001,0.027,0,1.023,0.728,1.877,1.694,2.07-0.177,0.049-0.364,0.075-0.556,0.075-0.137,0-0.269-0.014-0.397-0.038,0.268,0.838,1.048,1.449,1.972,1.466-0.723,0.566-1.633,0.904-2.622,0.904-0.171,0-0.339-0.01-0.504-0.03,0.934,0.599,2.044,0.949,3.237,0.949,3.883,0,6.007-3.217,6.007-6.008,0-0.091-0.002-0.183-0.006-0.273,0.413-0.298,0.771-0.67,1.054-1.093Z" },
              { id: "Facebook", d: "M24,12c0,6.627-5.373,12-12,12C5.373,24,0,18.627,0,12,0,5.373,5.373,0,12,0,18.627,0,24,5.373,24,12Z M12.722,12h1.294l0.172-1.617h-1.466l0.002-0.808c0-0.422,0.04-0.648,0.646-0.648l0.809,0V7.311h-1.295c-1.555,0-2.103,0.784-2.103,2.102v0.97H9.054V12h0.969v4.689h1.941V12Z" },
            ].map((icon) => (
              <a key={icon.id} href="#" className="w-6 mx-1">
                <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={icon.d}></path>
                </svg>
              </a>
            ))}
          </div>
          <div className="my-5">© Copyright {new Date().getFullYear()}. All Rights Reserved.</div>
        </div>
      </footer>
    );
  }
  
             
// import cd_logo from "./images/cd_logo.png"
import BG from "./images/BG.jpg"
import tagline from "./images/tagline.png"
import logo from "./images/BG.jpg"
function App() {
  
  return ( 

    <>
      {/* <footer className=" bg-slate-900  text-white">
      <div className=" flex items-center justify-around ">
        <div>

          <logo className='flex p-2 font-bold items-center justify-between'>
            <img className=' w-28'
              src={cd_logo}
              alt=''
            />
            <div className='text-3xl'>
              <h1>COUPON </h1>
              <h1>DEAL</h1>
            </div>
          </logo>

        </div>
        <div className="hover:cursor-pointer">
            <h1>KNOW MORE</h1>
            <h1>FAQ</h1>
            <h1>CONTACT US</h1>
            <h1>SUPPORT</h1>
          </div>
        <div>
         

          <div className="space-x-5 flex justify-center">
            <button>fb</button><button>insta</button><button>twiter</button>
          </div>

          <div className=" items-center flex flex-col ">
            <h1>GIVE US SUGGESTION</h1>
            <input
                type="text"
                id="input-text"
                placeholder="Type something..."
                className="px-4 py-1 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
            />
               <button
                    type="button"
                    className=" py-1 m-1 w-24  text-white bg-blue-500 rounded-md shadow-sm hover:bg-green-600  focus:ring-2 focus:ring-green-500 "
                >
                    Submit
                </button>
          </div>
        </div>
      
      </div>

      <div className="text-center border-t-[1px]  mt-2">
          <h1>All Rights Reserved | Copyright © 2024 CouponDeal.</h1>
        </div>
      </footer> */}
      <body>
        <div class=" relative w-full h-[500px]">
          <img src={BG} alt="Descriptive Alt Text" class="w-full h-full object-cover" />
          <div className="absolute inset-0 my-6 bg-gradient-to-r from-black/90 via-white/0 to-black/90 bg-opacity-40 flex justify-around items-center pr-16">
            <img src={tagline} alt="tagline" className="h-full  " />
            <p className="text-white text-center drop-shadow-2xl ml-24 text-4xl  text-right">CouponDeal is a platform where you can sell your unused
              coupons and purchase useful discount coupon according to your need in reasonable price.</p>
          </div>
        </div>

        <div className="bg-slate-200 ">
          <h1 className="text-center font-extrabold text-3xl p-1 bg-slate-300 shadow-xl text-blue-900">Soldout Coupons </h1>
          <div className="bg-slate-300 h-72 mt-2">

          </div>

          <h1 className="text-center font-extrabold text-3xl mt-2 p-1 bg-slate-300 shadow-xl  text-blue-900">About CouponDeal </h1>
          <h2 className="text-center font-bold text-xl mt-3 text-blue-700 ">INTRODUCTION</h2>
          <p className="px-24 py-4 font-semibold">
            Welcome to CouponDeal , your ultimate destination for the best e-coupon and deals online ! Our platform is dedicated to helping to you to buy or sell yours coupons whether you're looking for discount on fashion , electronics , groceries or travel , we have a wide range of exclusive offer to cater to your need . Join our community , explore , save and enjoy !
          </p>
          <h2 className="text-center font-bold text-xl mt-3  text-blue-700">WHAT WE OFFER</h2>
          <div className="px-24 py-4 font-semibold">
            <h3 className="font-bold text-lg mt-3 text-blue-600 ">Buy Unused Coupon</h3>
            <p className=" py-2 font-semibold">
            Find great deals and discounts from a wide range of stores and services. Whether you are looking for fashion, electronics, dining, or travel, you can buy unused coupons at amazing prices from other users.
            </p>
            <h3 className="font-bold text-lg mt-3 text-blue-600 ">Sell Unused Coupon</h3>
            <p className=" py-2 font-semibold">
            Find great deals and discounts from a wide range of stores and services. Whether you are looking for fashion, electronics, dining, or travel, you can buy unused coupons at amazing prices from other users.
            </p>
            <h3 className="font-bold text-lg mt-3 text-blue-600 ">Wide Selection</h3>
            <p className=" py-2 font-semibold">
            Find great deals and discounts from a wide range of stores and services. Whether you are looking for fashion, electronics, dining, or travel, you can buy unused coupons at amazing prices from other users.
            </p>
            <h3 className="font-bold text-lg mt-3 text-blue-600 ">Easy To Use </h3>
            <p className=" py-2 font-semibold">
            Find great deals and discounts from a wide range of stores and services. Whether you are looking for fashion, electronics, dining, or travel, you can buy unused coupons at amazing prices from other users.
            </p>
            <h3 className="font-bold text-lg mt-3 text-blue-600 ">Buy Unused Coupon</h3>
            <p className=" py-2 font-semibold">
            Find great deals and discounts from a wide range of stores and services. Whether you are looking for fashion, electronics, dining, or travel, you can buy unused coupons at amazing prices from other users.
            </p>
            <h3 className="font-bold text-lg mt-3 text-blue-600 ">Buy Unused Coupon</h3>
            <p className=" py-2 font-semibold">
            Find great deals and discounts from a wide range of stores and services. Whether you are looking for fashion, electronics, dining, or travel, you can buy unused coupons at amazing prices from other users.
            </p>
          </div>

        </div>
      </body>

      {/* <card>
        <div className="bg-slate-300 rounded-xl m-1 absolute h-80 w-64 ">

          <img src={logo} className="h-36 w-[240px]  rounded-lg m-2 " alt="" />


          <div>
            <p className="pl-6 font-bold
            ">
              Offer 50% off
            </p>

            <ul class="list-disc list-inside pl-2 pb-3">
              <li class="">First item</li>
              <li class="">Second item</li>

            </ul>


            <hr className="w-52 mx-5  " />
            <div className=" flex flex-col items-center ">
              <h2 className="text-center pt-1">Price : 300</h2>
              <button
                type="button"
                className=" py-1 m-1 w-24  text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600  focus:ring-2 focus:ring-green-500 ">
                BUY NOW
              </button>
            </div>
          </div>


        </div>

      </card> */}

      {/* <div className="bg-slate-300 rounded-xl m-3 absolute h-80 w-64 hover:bg-slate-400 hover:shadow-lg transition-all duration-300">
        <img src={logo} className="h-36 w-[240px] rounded-lg relative m-2" alt="Logo" />
        <div>
          <p className="pl-6 font-bold">Offer 50% off</p>
          <ul className="list-disc list-inside pl-2 pb-3">
            <li>minimum</li>
            <li>validity</li>
          </ul>
          <hr className="w-52 mx-5" />
          <div className="flex flex-col items-center">
            <h2 className="text-center pt-1">Price: 300</h2>
            <button
              type="button"
              className="py-1 m-1 w-24 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 hover:ease-in-out duration-200 focus:ring-2 focus:ring-green-500"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;

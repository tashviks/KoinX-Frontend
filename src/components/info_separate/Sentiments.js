import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import book from "../../assets/book.png"
import growth from "../../assets/growth.png"
import rating from "../../assets/rating.png"
import SvgInfo from "../../assets/SVG.png"


function Sentiments() {

   const AnalystFigure = ({ label, percentage, barWidth, barColor }) => (
      <div className="flex items-center gap-4 w-100 py-1 max-md:flex-wrap max-md:max-w-full">
        <div>{label}</div>
        <div className={`h-2 rounded-md ${barColor}`} style={{ width: `${barWidth}%` }}></div>
        <div className="flex-auto text-sm leading-5">{percentage}%</div>
      </div>
    );

      const analystData = [
        { label: "Buy", percentage: 76, barWidth: 76, barColor: "bg-emerald-500" },
        { label: "Hold", percentage: 8, barWidth: 8, barColor: "bg-neutral-300" },
        { label: "Sell", percentage: 16, barWidth: 16, barColor: "bg-red-500" },
      ];

  return (
    <div className="w-[60%]  lg:w-[70%] md:w-full sm:w-auto md:m-0 sm:m-0 sm:p-4 md:p-[4rem] h-cover bg-white p-[4rem] pl-[4rem] pr-[4rem] lg:p-[4rem] ml-[4rem] mr-[4rem] mt-[1rem] rounded-2xl mb-[1rem]">
    <div>
     <div className='font-bold text-xl'>Sentiment</div>
     <div>
       <div className='flex gap-4 mt-4'>
        <h1 className='font-bold'>Key Events</h1>
        <FaCircleInfo className='mt-auto mb-auto'/>
       </div>

       <div className='flex gap-6 pt-2 mt-4 sm:flex-col'>
          <div className='flex gap-2 bg-[#E8F4FD] p-4 rounded-lg'>
             <img src={book} alt='photo' className='w-[3rem] h-[3rem]'/>
             <div>
                <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
             </div>
          </div>
          <div className='flex gap-2 bg-[#EBF9F4] p-4 rounded-lg'>
             <img src={growth} alt='photo' className='w-[3rem] h-[3rem]'/>
             <div>
                <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra 
                    in a adipisinc metus quis del</p>
             </div>
          </div>
       </div>
     </div>
    </div>

    <div className="flex p-4 flex-col max-w-[710px]">
          <header className="flex gap-2 pr-20 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full pt-4">
            <h1>Analyst Estimates</h1>
            <img loading="lazy" src={SvgInfo} alt="Insight icon" />
          </header>
          <section className="mt-6 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
                <div className="flex justify-center items-center self-stretch px-8 mx-auto font-medium text-emerald-500 whitespace-nowrap bg-emerald-50 h-[119px] rounded-[59.22px] w-[119px] max-md:px-5 max-md:mt-10">
                  <div className="flex gap-0.5 justify-between py-1.5">
                    <div className="grow text-4xl">76</div>
                    <div className="grow my-auto text-base leading-6">%</div>
                  </div>
                </div>
              </div>
              <div className={`flex flex-col ml-5 max-md:ml-0 w-[100%] max-md:w-full`}>
                <div className="flex flex-col  self-stretch my-auto font-medium text-gray-500 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                  { 
                    analystData.map((item, index) => (
                      <AnalystFigure key={index} {...item} />
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>
  </div>

  

  )
}

export default Sentiments

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

export default function SlideChooseMatches({ sizeMathes, setPageProps, valuePage }) {

  let hideLeft;
  valuePage === 1 ? hideLeft = 'invisible' : hideLeft = '';

  let hideNext;
  valuePage === sizeMathes ? hideNext = 'invisible' : hideNext = '';

  function handlerPrevPage() {
    if (valuePage === 1) return;
    setPageProps(valuePage - 1);
  }

  function handlerNextPage() {
    if (valuePage === sizeMathes) return;
    setPageProps(valuePage + 1);
  }
  return (
    <div className="flex justify-center m-6 p-2 items-center space-x-10">
      <AiOutlineLeft className={`text-2xl cursor-pointer ${hideLeft} text-4xl`} onClick={handlerPrevPage} />
      <p>Rodada <span className="text-red-400 font-extrabold">{valuePage}</span></p>
      <AiOutlineRight className={`text-2xl cursor-pointer ${hideNext} text-4xl`} onClick={handlerNextPage} />
    </div>
  )
}

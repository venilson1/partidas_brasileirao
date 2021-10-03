import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

export default function SlideChooseMatches({ sizeMathes, setPageProps, valuePage }) {

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
      <AiOutlineLeft className="text-2xl cursor-pointer" onClick={handlerPrevPage} />
      <span>Rodada {valuePage}</span>
      <AiOutlineRight className="text-2xl cursor-pointer" onClick={handlerNextPage} />
    </div>
  )
}

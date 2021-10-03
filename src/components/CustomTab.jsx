import { Tab } from "react-tabs";
import '../index.css';

export default function CustomTab({ children, active }) {

  const setActiveLink = e => {
    const links = document.getElementsByTagName("p");

    Array.from(links).forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
  }

  return (
    <Tab>
      <p className={`cursor-pointer ${active}`} onClick={setActiveLink}>{children}</p>
    </Tab>
  )
}

CustomTab.tabsRole = 'Tab';

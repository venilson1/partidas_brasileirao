import { ScrollingCarousel } from '@trendyol-js/react-carousel';
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Year from "../components/Year";
export default function ChampionshipBrazilian() {
  const years = ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
  return (
    <div>
      <Header />

      <ScrollingCarousel infinite={false} className=" p-4 my-2 flex justify-center">
        {years.map((year, i) => {
          return (
            <NavLink to={`/brazilian/${year}`} activeClassName="text-blue-400" key={i} >
              <Year number={year} />
            </NavLink>
          );
        })}
      </ScrollingCarousel>

      <Main />
    </div>
  )
}

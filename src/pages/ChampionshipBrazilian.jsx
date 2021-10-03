import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Year from "../components/Year";
import SlideChooseMatches from '../components/SlideChooseMatches';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { apiGetMatches } from '../services/apiService';
import Matches from '../components/Matches';

export default function ChampionshipBrazilian() {
  const [allMatches, setAllMatches] = useState([]);
  const { year } = useParams();
  const [page, setPage] = useState(1);

  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await apiGetMatches(year);
    setAllMatches(response);
  }, [year]);
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

      <Main>
        <Tabs>
          <TabList className="flex justify-center space-x-6">
            <Tab>Partidas</Tab>
            <Tab>Classificação</Tab>
          </TabList>

          <TabPanel>
            <SlideChooseMatches sizeMathes={allMatches.length} setPageProps={setPage} valuePage={page} />
            {
              // eslint-disable-next-line array-callback-return
              allMatches.map(({ numero, partidas }) => {
                if (numero === page) {
                  return <Matches key={numero} partidas={partidas} />
                }
              })
            }
          </TabPanel>
          <TabPanel>
            {/* <Classification /> */}
            <h1>tab 02</h1>
          </TabPanel>
        </Tabs>
      </Main>
    </div>
  )
}

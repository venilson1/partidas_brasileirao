import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Year from "../components/Year";
import SlideChooseMatches from '../components/SlideChooseMatches';
import { TabList, TabPanel, Tabs } from 'react-tabs';
import { apiGetMatches } from '../services/apiService';
import Matches from '../components/Matches';
import CustomTab from '../components/CustomTab';
import Classification from '../components/Classification';

export default function ChampionshipBrazilian() {
  const [allMatches, setAllMatches] = useState([]);
  const { year } = useParams();
  const [page, setPage] = useState(1);

  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await apiGetMatches(year);
    setAllMatches(response);
    setPage(1)
  }, [year]);

  const years = ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
  return (
    <div>
      <Header />

      <ScrollingCarousel infinite={false} className="p-4 my-2 flex justify-center">
        {years.map((year, i) => {
          return (
            <NavLink to={`/brazilian/${year}`} activeClassName="text-red-400 border-b-2 border-red-400" key={i} >
              <Year number={year} />
            </NavLink>
          );
        })}
      </ScrollingCarousel>

      <Main>
        <Tabs>
          <TabList className="flex justify-evenly p-2">
            <CustomTab active={'active'}>Partidas</CustomTab>
            <CustomTab>Classificação</CustomTab>
          </TabList>

          <TabPanel>
            <SlideChooseMatches sizeMathes={allMatches.length} setPageProps={setPage} valuePage={page} />
            {
              // eslint-disable-next-line array-callback-return
              allMatches.map(({ numero, partidas }, i) => {
                if (numero === page) {
                  return <Matches key={i} partidas={partidas} numero={numero} />
                }
              })
            }
          </TabPanel>
          <TabPanel>
            {
              // eslint-disable-next-line array-callback-return
              allMatches.map(({ numero, partidas }) => {
                if (numero === allMatches.length) {
                  return <Classification key={numero} partidas={partidas} />
                }
                //2005
                // 2005 - 53 tamanho - ultima rodada 42
                if (numero === 42) {
                  return <Classification key={numero} partidas={partidas} />
                }
              })
            }
          </TabPanel>
        </Tabs>
      </Main>
    </div>
  )
}

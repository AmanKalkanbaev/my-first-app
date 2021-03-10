// import HelloWorld from "./components/HelloWorld";
// import GoodbyeWorld from "./components/GoodbyeWorld";
// import Book from "./components/Book";
// import Length from "./components/Length";
// import Song from "./components/Song";
// import LowerCase from "./components/LowerCase";
// import UpperCase from "./components/UpperCase";
// import Link from "./components/Link";
// import Round from "./components/Round";
// import Power from "./components/Power";
// import Swith from "./components/Swith";
// import Name from "./components/Name";
// import Miror from "./components/Miror";
// import Conwerter from "./components/Conwerter";
// import Length from "./components/Lenght";
// import Range from "./components/Range";
// import Color from "./components/Color";
import Calc from "./components/Calc";
import Lists from "./components/Lists";

import ListsTable from "./components/ListsTable";

import Paragrahps from "./components/Paragrahps";
import Strongs from "./components/Strongs";
import Titles from "./components/Titles";
import Abbreviations from "./components/Abbreviations";
import Marks from "./components/Marks";

import Articles from "./components/Articles";
import Cursive from "./components/Cursive";
import Labele from "./components/Labele";
import Bold from "./components/Bold";
import Underline from "./components/Underline";

import Headers from "./components/Headers";
import Headers2 from "./components/Headers2";
import Headers3 from "./components/Headers3";
import Headers4  from "./components/Headers4";
import Headers5  from "./components/Headers5";

import Quotes from "./components/Quotes";
import Smaller from "./components/Smaller";
import Inserted from "./components/Inserted";
import Subscript from "./components/Subscript";
import Superscript from "./components/Superscript";
// import Sum from "./components/Sum";
// import Random from "./components/Random";
// import Big from "./components/Big";
// import List from "./components/List";
// import UList from "./components/UList";
// import OList from "./components/OList";
// import SList from "./components/SList";
import TextImput from "./components/TextImput"

function App() {
  return (
    <div className="App">
      {/* <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <GoodbyeWorld />
      <GoodbyeWorld />
      <GoodbyeWorld />
      <GoodbyeWorld />
      <Book title="Dark Tower" author="Stephen King"/>
      <Song title="Perfect" author="Ed Sheeran" genre="Pop" />
      <Song title="Godzila" author="Eminem" genre="Rap" />
      <LowerCase>EXAMPLE STING</LowerCase>
      <UpperCase>example sring</UpperCase>
      <Link to="http://google.com">Google</Link> */}
      {/* <Round number={12.54} />
      <Round number={32.23156} />
      <Power number={5} to={2} />
      <Power number={5} to={3} /> */}
      {/* <Swith on={false}/>
      
      <Miror />
      <Conwerter />
      <Color />
      <Range min="0" max="10"/>
      <Length/>}
       {/*DZ

      <Sum a={5} b={7} />

      <Random min={5} max={10} />

      <Big a={5} b={4} />

      <List items={['Apple', 'Kiwi', 'Ogurcy', 'Grusha']} /> */}
{/* 
      <UList items={['Hello', 'World']} />
      <OList items={['one', 'two', 'tree']}/>
      <SList items={['one', 'two', 'tree']}/>
       */}
      {/* <TextImput/> */}
      {/* <Calc/> */}
      <Lists items={["itemOne","itemsTwo","itemYch"]}/>

      <ListsTable items={["itemOne","itemsTwo","itemYch"]}/>

      <Paragrahps items={["itemOne","itemsTwo","itemYch"]}/>
      <Strongs items={["itemOne","itemsTwo","itemYch"]}/>
      <Titles items={["itemOne","itemsTwo","itemYch"]}/>
      <Abbreviations items={["itemOne","itemsTwo","itemYch"]}/>
      <Marks items={["itemOne","itemsTwo","itemYch"]}/>

      <Articles items={["itemOne","itemsTwo","itemYch"]}/>
      <Cursive items={["itemOne","itemsTwo","itemYch"]}/>
      <Labele items={["itemOne","itemsTwo","itemYch"]}/>
      <Bold items={["itemOne","itemsTwo","itemYch"]}/>
      <Underline items={["itemOne","itemsTwo","itemYch"]}/>

      <Headers items={["itemOne","itemsTwo","itemYch"]}/>
      <Headers2 items={["itemOne","itemsTwo","itemYch"]}/>
      <Headers3 items={["itemOne","itemsTwo","itemYch"]}/>
      <Headers4 items={["itemOne","itemsTwo","itemYch"]}/>
      <Headers5 items={["itemOne","itemsTwo","itemYch"]}/>

      <Quotes items={["itemOne","itemsTwo","itemYch"]}/>
      <Smaller items={["itemOne","itemsTwo","itemYch"]}/>
      <Inserted items={["itemOne","itemsTwo","itemYch"]}/>
      <Subscript items={["itemOne","itemsTwo","itemYch"]}/>
      <Superscript items={["itemOne","itemsTwo","itemYch"]}/>
    </div>
  );
}

export default App;

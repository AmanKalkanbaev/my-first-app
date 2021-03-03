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
import Swith from "./components/Swith";
import Name from "./components/Name";
import Miror from "./components/Miror";
// import Sum from "./components/Sum";
// import Random from "./components/Random";
// import Big from "./components/Big";
// import List from "./components/List";
// import UList from "./components/UList";
// import OList from "./components/OList";
// import SList from "./components/SList";

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
      <Length text="Example sring" />
      <LowerCase>EXAMPLE STING</LowerCase>
      <UpperCase>example sring</UpperCase>
      <Link to="http://google.com">Google</Link> */}
      {/* <Round number={12.54} />
      <Round number={32.23156} />
      <Power number={5} to={2} />
      <Power number={5} to={3} /> */}
      <Swith on={false}/>
      <Name />
      <Miror />
       {/*DZ

      <Sum a={5} b={7} />

      <Random min={5} max={10} />

      <Big a={5} b={4} />

      <List items={['Apple', 'Kiwi', 'Ogurcy', 'Grusha']} /> */}
{/* 
      <UList items={['Hello', 'World']} />
      <OList items={['one', 'two', 'tree']}/>
      <SList items={['one', 'two', 'tree']}/> */}

    </div>
  );
}

export default App;

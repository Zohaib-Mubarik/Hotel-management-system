import Header from './Header/Header.js';
import './Style.css';
import Bg from './/Bg';
import Booking from './/Booking';
import About from './About';
import Aroom from './Aroom';
import RDes from './RDes';
import Last from './Last';
import '../Responsive.css';

function Home() {
  return (
    <>

      
      
      <Header></Header>
      <Bg></Bg>
      <Booking></Booking>
      <About></About>
      <RDes></RDes>
      <Aroom title="Room 1" img="./images/room1.jpg" des="Experience luxury redefined: where every moment is a masterpiece." />
      <Aroom title="Room 2" img="./images/room2.jpg" des="Experience luxury redefined: where every moment is a masterpiece."/>
      <Aroom title="Room 3" img="./images/room3.jpg" des="Experience luxury redefined: where every moment is a masterpiece."/>
      <Aroom title="Room 4" img="./images/room4.jpg" des="Experience luxury redefined: where every moment is a masterpiece."/>
      <Aroom title="Room 5" img="./images/room5.jpg" des="Experience luxury redefined: where every moment is a masterpiece."/>
      <Aroom title="Room 6" img="./images/room6.jpg" des="Experience luxury redefined: where every moment is a masterpiece."/>
      <Last></Last>
    </>
  );
}

export default Home;

import './App.css';
import Testt from './assets/images/Testt.jpg';
import firstImage from './assets/images/imageRetro.jpg';
import secondImage from './assets/images/image-top-laptops.jpg';
import thirdImage from './assets/images/image-gaming-growth.jpg';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Newsection from './Components/NewSection/New';
import Articles from './Components/Articles/Articles';

function App() {
  return (
    <div className="App">
      <main className='top-container'>
        <Header />
        <div className='container'>
          <Hero heroImage={Testt}/>
          <Newsection />
        </div>
        <div className='bottom-articles'>
          <Articles sideImage={firstImage} articleNumber="01"
          articleTitle="Reviving Retro PCs"
          artDetail="What happens when old PCs are given modern upgrades?"
          />
          <Articles sideImage={secondImage} articleNumber="02"
          articleTitle="Top 10 Laptops of 2022"
          artDetail="Our best picks for various needs and budgets."
          />
          <Articles sideImage={thirdImage} articleNumber="03"
          articleTitle="The Growth of Gaming"
          artDetail="How the pandemic has sparked fresh opportunities."
          />
        </div>
      </main>
    </div>
  );
}

export default App;

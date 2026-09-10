
import { Suspense } from 'react';
import './App.css'
import { Banner } from './component/banner'
import { Nav } from './component/nav'
import { Skill } from './component/technology';
import type { ITechnology } from './type';
import Footer from './component/footer';

const Technology = async():Promise<ITechnology[]> =>{
const res = await fetch('/data.json');
const data = await res.json();
return data;
}

function App() {
// console.log(Tecnology())

  const TechnologyPromise = Technology();

  return (
    <div className="bg-[#FFFFFF]">
      <Nav />
      <Banner/>
      <Suspense fallback={<div>Loading...</div>}>
        <Skill TechnologyPromise={TechnologyPromise}/>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App

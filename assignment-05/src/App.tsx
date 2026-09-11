
// @ts-ignore React types are provided by the project environment.
import { createElement, Suspense } from 'react';
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

  return createElement(
    'div',
    { className: 'bg-[#FFFFFF]' },
    createElement(Nav),
    createElement(Banner),
    createElement(
      Suspense,
      { fallback: createElement('div', null, 'Loading...') },
      createElement(Skill, { TechnologyPromise }),
    ),
    createElement(Footer),
  );
}

export default App

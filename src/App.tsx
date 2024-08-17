import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import coverUrl from './assets/cover.png';

function About() {
  return (
    <>
      <img src={coverUrl}/>
      <div className='div__caption'>Crop of an illustration titled "Repurposed office building", by <a href='https://dustinjacobus.com/' target="_blank">Dustin Jacobus</a> under license CC BY-NC-SA 4.0, featured as the cover of <a href='https://www.sciphijournal.org/' target="_blank">SciPhi journal</a> in the 2021 Fall issue.</div>
      <p>
        <b>Solarpunk</b> is a sci-fi aesthetic (and somewhat of a political movement) that is notably utopian rather than dystopian. It is largely based on technology available today (or in the conceivably near future) and is rearranged to benefit human society and nature to a novel degree.
      </p>
      <p>
        In the solarpunk genre, we see these common themes:
      </p>
      <ul>
        <li>Sustainable practices</li>
        <li>Healthy community living</li>
        <li>A do-it-yourself ethos</li>
        <li>Nature integration</li>
        <li>A deliberate/careful adoption of technology both new and old.</li>
      </ul>
      <p>
        The <b>Colorado Solarpunks</b> is our fan-group based out of Littleton, Colorado (that's near Denver). We are working to bring the solarpunk ideals into the public consciousness.
      </p>
      <p>
        Together we dream, socialize, share knowledge, innovate, make art, and work on initiatives that strengthen our communities.
      </p>
    </>
  );
}

function GroupChat() {
  return (
    <>
      <p>
        Our group is currently using <b>Matrix</b> for our communications. If you haven't heard of Matrix, it's loosely based on Discord and Slack. The app has text channels that act as history-preserved chatrooms. The app also has voice/video calling capabilities. But what makes Matrix uniquely awesome is that it's based on an open spec and has many server and client implementations that all work together seamlessly. That's very solarpunk.
      </p>
      <p>
        To get started with Matrix, you will need a Matrix client. A "client" just means a mobile or desktop application intended for the end-user, you. <b>Element</b> is the most popular client and is also likely the most stable one (fewer bugs).
      </p>
      <p>
        <b>General Instructions:</b>
      </p>
      <ol>
        <li>Click the invite link below. It will take you to a screen where you can pick a client application to install from the list. If you are not opinionated about which client to pick, choose Element.</li>
        <li>Start the installed application and create an account in the application.</li>
        <li>Come back to our website to click the invite link once again. This time the invite page will allow you to open the invite using a deep-link, linking to the application you installed. It will automatically switch from your browser to your client application and prompt you to join the room, which you should.</li>
        <li>You can now reach the Colorado Solarpunks space from the spaces menu in the client application and join the rooms individually from there.</li>
      </ol>
      <a className='a__big-link' href='https://matrix.to/#/!GrDZviAKzNJWIhpfwR:matrix.org?via=matrix.org' target="_blank">Matrix Invite Link</a>
    </>
  );
}

function Events() {
  return (
    <>
      <p>
        Our event calendar is currently on Meetup. Check out our events at the link below.
      </p>
      <p>
        Please RSVP to events there.
      </p>
      <a className='a__big-link' href='https://meetup.com/solarpunk-club/' target="_blank">Meetup Events</a>
    </>
  )
}

interface IAccordionSection {
  Title: string;
  Element: React.ReactNode;
}

const sections: IAccordionSection[] = [
  {
    Title: 'About',
    Element: <About/>
  },
  {
    Title: 'Group Chat',
    Element: <GroupChat/>
  },
  {
    Title: 'Events',
    Element: <Events/>
  }
];

interface IAccordionProps {
  Sections: IAccordionSection[];
}

function Accordion(props: IAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className='div__accordion'>
      {props.Sections.map((s, i) => <div key={i} className='div__accordion-section'>
        <h2 role='button' aria-pressed={activeIndex === i} tabIndex={0} className='h2__accordion-header' onClick={() => setActiveIndex(i)}>{s.Title}</h2>
        <div hidden={activeIndex !== i} className={activeIndex === i ? 'div__accordion-content--expanded' : 'div__accordion-content--collapsed'}>
          {s.Element}
        </div>
      </div>)}
    </div>
  );
}

function Home() {
  return (
    <>
      <header>
        <h1 className='h1__title'>Colorado Solarpunks</h1>
      </header>
      <main>
        <Accordion Sections={sections}/>
      </main>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '*',
      element: <Navigate to="/"/>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

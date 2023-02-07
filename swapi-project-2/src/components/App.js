import './App.css';
import Planet, { planetLoader } from './Planet'
import Films, { filmsLoader } from './Films'
import Film, {filmLoader}  from './Film'
import Home from './Home';

import Person, { personLoader } from './person'
import People, { peopleLoader } from './People'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Home/>}

      />
      <Route 
        path = "people" 
        element={<People/>}
        loader={peopleLoader}
      />
      <Route 
        path = "people/:id" 
        element={<Person/>}
        loader={personLoader}
      
      />

  <Route path = "films" element={<Films/>}/>
      <Route 
        path = "films/:id" 
        element={<Film/>}
        loader={filmLoader}
      
      />

      <Route 
        path="planets/:id"
        element={<Planet/>}
        loader={planetLoader}      
      />

    </Route>
  )
)



function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <BrowserRouter>
        <Routes>
          <Route path = "people" element={<People/>}/>
          <Route 
            path = "people/:id" 
            element={<Person/>}
            // loader={personLoader}
          
          />

          <Route path = "films" element={<Films/>}/>
          <Route 
            path = "film/:id" 
            element={<Film/>}
            // loader={filmLoader}
          
          />

          <Route 
            path="planets/:id"
            element={<Planet/>}
            // loader={planetLoader}      
          />

        </Routes>
      
      
      
      
      </BrowserRouter> */}
    </div>
  );
}

export default App;

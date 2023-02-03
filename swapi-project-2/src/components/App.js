// import logo from './logo.svg';
import './App.css';
import Planet, { planetLoader } from './Planet'
import Films from './Films'
import Person, { personLoader } from './person'
import People, { peopleLoader } from './People'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route 
        path = "people" 
        loader={peopleLoader}
        element={<People/>}
      />
      <Route 
        path = "people/:id" 
        element={<Person/>}
        loader={personLoader}
      
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
    </div>
  );
}

export default App;

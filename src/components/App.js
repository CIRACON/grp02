// import logo from './logo.svg';
import './App.css';
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter } from 'react-router-dom';
import EmployeeList from './employeeList';
import Login from './Login';
import EmployeeDetails, {employeeLoader} from './employeeDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Login/>}
      />
      <Route 
        path = "employees" 
        element={<EmployeeList/>}
        // loader={peopleLoader}
      />
      <Route 
        path = "employees/:eid" 
        element={<EmployeeDetails/>}
        loader={employeeLoader}
      />
    </Route>
  )
)


export default function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <RouterProvider router={router}/>
    </div>

  );
}


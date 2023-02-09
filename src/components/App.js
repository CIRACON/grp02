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
        path = "employees/:id" 
        element={<EmployeeDetails/>}
        loader={employeeLoader}
      />
    </Route>
  )
)


export default function App() {
  return (
    <div className="App">
      <header>
        <div className='app-header-top-banner'>
        <div className='app-container'></div>
        </div>
      </header>
      <RouterProvider router={router}/>
      <footer className='app-footer'>
        <div className='app-container'>

        </div>
      </footer>
    </div>

  );
}


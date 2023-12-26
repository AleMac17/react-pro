import { Suspense } from 'react';
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import reactLogo from '../assets/react.svg';

import { routes } from '../routes/routes.ts';

export const Navigation = () => {
  const routesNavLinkMap = routes.map(({ to, name }) => (
    <li key={to}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'nav-active' : '')}
      >
        {name}
      </NavLink>
    </li>
  ));

  const routesRouteMap = routes.map(({ path, Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={reactLogo} alt='React Logo' />
            <ul>{routesNavLinkMap}</ul>
          </nav>
          <Routes>
            {routesRouteMap}
            {/* <Route
              path='/*'
              element={<Navigate to={routes[0].to} replace />}
            ></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

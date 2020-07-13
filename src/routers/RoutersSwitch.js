import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import routers from './routers';

const RoutersSwitch = ({
}) => {
  return (
    <Switch>
      {routers.length && (
        <Route exact path="/">
          <Redirect to={routers[0].path} />
        </Route>
      )}
      {routers.map(({ name, path, children }) => (
        <Route key={name} path={path}>
          {children}
        </Route>
      ))}
    </Switch>
  )
}

export default RoutersSwitch

import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { ROUTES } from '../../../configs/routes';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY, ACCESS_EXPIRES } from '../../../utils/constants';


interface Props extends RouteProps { }

const CheckLoginRoute = (props: Props) => {
    const { ...rest } = props;
    const auth = Cookies.get(ACCESS_TOKEN_KEY);
    const rememberMe = Cookies.get(ACCESS_EXPIRES);

    
    if (auth) {
        return (
            <Redirect
                to={{
                    pathname: ROUTES.home,
                }}
            />
        );
    }

    return <Route {...rest} />;
};

export default CheckLoginRoute;
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../../../utils/constants';
import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'typesafe-actions';
import { ROUTES } from '../../../configs/routes';
import { replace } from 'connected-react-router';

const Logout = () => {
    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
    const logout = ()=>{
            Cookies.remove(ACCESS_TOKEN_KEY);
            dispatch(replace(ROUTES.home));

        }      

    return (<button onClick={logout}>Đăng xuất</button>);
    
}
export default Logout;
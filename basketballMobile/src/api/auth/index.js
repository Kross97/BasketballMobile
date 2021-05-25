import {post} from '../index';

export const signIn = (url, body) => post(url, body);

export const signUp = (url, body) => post(url, body);

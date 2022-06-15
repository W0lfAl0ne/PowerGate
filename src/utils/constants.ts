export const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const APIHost = development ? '/api' : 'api.training.div3.pgtest.co';

export const ACCESS_TOKEN_KEY = 'token';
export const ACCESS_EXPIRES = 'Expires';

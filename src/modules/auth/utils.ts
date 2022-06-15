import { ILoginParams, ILoginValidation, ISignUpParams, ISignUpValidation } from '../../models/auth';
import { validEmailRegex } from '../../utils';

const validateEmail = (email: string) => {
  if (!email) {
    return 'emailRequire';
  }

  if (!validEmailRegex.test(email)) {
    return 'emailInvalid';
  }

  return '';
};

const validatePassword = (password: string) => {
  if (!password) {
    return 'passwordRequire';
  }

  if (password.length < 4) {
    return 'minPasswordInvalid';
  }

  return '';
};

const validateRepeatPassword = (password: string, repeatPassword: string) => {
  if (!repeatPassword) {
    return 'passwordRequire';
  }

  if (password !== repeatPassword) {
    return 'matchPasswordInvalid';
  }

  return '';
};

const validateName = (name: string) => {
  if (!name) {
    return 'nameRequire';
  }

  return '';
};

const validateGender = (gender: string) => {
  if (!gender) {
    return 'genderRequire';
  }

  return '';
};

const validateRegion = (region: string) => {
  if (!region) {
    return 'regionRequire';
  }


  return '';
};
const validateState = (state: string) => {
  if (!state) {
    return 'stateRequire';
  }


  return '';
};


export const validateLogin = (values: ILoginParams): ILoginValidation => {
  return {
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  };
};

export const validLogin = (values: ILoginValidation) => {
  return !values.email && !values.password;
};

export const validateSignUp = (values: ISignUpParams): ISignUpValidation => {
  return {
    email: validateEmail(values.email),
    password: validatePassword(values.password),
    repeatPassword: validateRepeatPassword(values.password, values.repeatPassword),
    name: validateName(values.name),
    gender: validateGender(values.gender),
    region: validateRegion(values.region),
    state: validateState(values.state),
  };
};

export const validSignUp = (values: ILoginValidation) => {
  return !values.email && !values.password;
};

const validateField = (field: string, value: string) => {
  if (value) return '';
  let fieldRequire = '';
  switch (field) {
    case 'name':
      fieldRequire = 'nameRequire';
      break;
    case 'gender':
      fieldRequire = 'genderRequire';
      break;
    case 'region':
      fieldRequire = 'regionRequire';
      break;
    case 'state':
      fieldRequire = 'stateRequire';
      break;
  }
  return fieldRequire;
}
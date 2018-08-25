import { ButtonType } from '../types/buttonType';

export const ButtonsStyle = {
  like: {
    className: { buttonlike: true, buttonlike_active: false },
    wrapperSize: {
      height: '40px',
      width: '40px',
    },
  } as ButtonType,
  comment: {
    className: { buttoncomment: true, buttoncomment_active: false },
    wrapperSize: {
      height: '40px',
      width: '40px',
    },
  } as ButtonType,
  save: {
    className: { buttonsave: true, buttonsave_active: false },
    wrapperSize: {
      height: '40px',
      width: '40px',
    },
  } as ButtonType,
};

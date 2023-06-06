export type TLink = {
  id: number;
  title: string;
  link: string;
};

export type TAdvantages = {
  id: number;
  title: string;
  desc: string;
};

export type TServiceCards = {
  id: number;
  title: string;
  desc: string;
  classNameProps: string;
};

export type TStages = {
  id: number;
  number: string;
  title: string;
  desc: string;
};

export type TProjects = {
  id: number;
  name: string;
  subTitle: string;
  img: string;
  classColorProps: string;
  classColorPropsBtnSm?: string;
  link: string;
  category?: string;
};

export type TReviews = {
  id: number;
  avatar: string;
  name: string;
  place: string;
  workIn: string;
  comment: string;
};

export type TAnswers = {
  id: number;
  title: string;
  subTitle: string;
  category: string;
};

export type TSortItem = {
  id: number;
  name: string;
};

export type TPriceItems = {
  id: number;
  title: string;
  time: string;
  price: string;
};
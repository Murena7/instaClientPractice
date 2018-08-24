export interface User {
  id: string;
  full_name: string;
  profile_picture: string;
  username: string;
}

export interface Thumbnail {
  width: number;
  height: number;
  url: string;
}

export interface LowResolution {
  width: number;
  height: number;
  url: string;
}

export interface StandardResolution {
  width: number;
  height: number;
  url: string;
}

export interface Images {
  thumbnail: Thumbnail;
  low_resolution: LowResolution;
  standard_resolution: StandardResolution;
}

export interface From {
  id: string;
  full_name: string;
  profile_picture: string;
  username: string;
}

export interface Caption {
  id: string;
  text: string;
  created_time: string;
  from: From;
}

export interface Likes {
  count: number;
}

export interface Comments {
  count: number;
}

export interface Location {
  latitude: number;
  longitude: number;
  name: string;
  id: number;
}

export interface Thumbnail2 {
  width: number;
  height: number;
  url: string;
}

export interface LowResolution2 {
  width: number;
  height: number;
  url: string;
}

export interface StandardResolution2 {
  width: number;
  height: number;
  url: string;
}

export interface Images2 {
  thumbnail: Thumbnail2;
  low_resolution: LowResolution2;
  standard_resolution: StandardResolution2;
}

export interface CarouselMedia {
  images: Images2;
  users_in_photo: any[];
  type: string;
}

export interface IUserMedia {
  id: string;
  user: User;
  images: Images;
  created_time: string;
  caption: Caption;
  user_has_liked: boolean;
  likes: Likes;
  tags: any[];
  filter: string;
  comments: Comments;
  type: string;
  link: string;
  location: Location;
  attribution?: any;
  users_in_photo: any[];
  carousel_media: CarouselMedia[];
}

export class UserMedia {
  readonly id: string;
  readonly user: User;
  readonly images: Images;
  readonly created_time: string;
  readonly caption: Caption;
  readonly user_has_liked: boolean;
  readonly likes: Likes;
  readonly tags: any[];
  readonly filter: string;
  readonly comments: Comments;
  readonly type: string;
  readonly link: string;
  readonly location: Location;
  readonly attribution?: any;
  readonly users_in_photo: any[];
  readonly carousel_media: CarouselMedia[];

  constructor(parameters: IUserMedia) {
    this.id = parameters.id;
    this.user = parameters.user;
    this.images = parameters.images;
    this.created_time = parameters.created_time;
    this.caption = parameters.caption;
    this.user_has_liked = parameters.user_has_liked;
    this.likes = parameters.likes;
    this.tags = parameters.tags;
    this.filter = parameters.filter;
    this.comments = parameters.comments;
    this.type = parameters.type;
    this.link = parameters.link;
    this.location = parameters.location;
    this.attribution = parameters.attribution;
    this.users_in_photo = parameters.users_in_photo;
    this.carousel_media = parameters.carousel_media;
  }
}

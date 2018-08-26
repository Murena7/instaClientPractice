export interface Counts {
  media: number;
  follows: number;
  followed_by: number;
}

export interface OwnerData {
  id: string;
  username: string;
  profile_picture: string;
  full_name: string;
  bio: string;
  website: string;
  is_business: boolean;
  counts: Counts;
}

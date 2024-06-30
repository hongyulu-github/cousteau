export type Sighting = {
  id: number;
  speciesId: number;
  species: Species;
  date: number;
  createDate: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  photoUrl: string;
  town: string;
  province: string;
  observationState: string;
  userId: number;
  users: Users;
  description: string;
};

export type Users = {
  userId: number;
  userName: string;
  pwd: string;
  name: string;
  photoUrl: string;
};

export type Species = {
  speciesId: number;
  name: string;
  scientificName: string;
  categoryId: number;
  family: string;
};

export type Comment = {
  id: number;
  sightingId: number;
  userId: number;
  text: string;
};

export type Ships = {
  id: string;
  name: string;
  type: string;
  model: string | undefined;
  image: string | undefined;
  url: string | undefined;
  active: boolean;
  year_built: number;
  weight_kg: number;
};

export type ShipType = "Tug" | "Cargo" | "Barge" | "High Speed Craft";

export const typeShip: ShipType[] = [
  "Tug",
  "Cargo",
  "Barge",
  "High Speed Craft",
];

export type ShipLocation = {
  latitude: number;
  longitude: number;
};

export type ShipDetailProps = {
  id: string;
  name: string;
  type: string;
  model: string | undefined;
  image: string | undefined;
  url: string | undefined;
  active: boolean;
  position: ShipLocation;
  year_built: number;
  weight_kg: number;
  roles: string[] | undefined;
  home_port: string | undefined;
};

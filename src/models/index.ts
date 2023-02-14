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

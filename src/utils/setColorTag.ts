type Color = "grey" | "black" | "orange" | "purple" | "blue";

export const setColorTag = (cargoType: string): Color => {
  switch (cargoType) {
    case "Tug":
      return "black";
    case "Cargo":
      return "blue";
    case "High Speed Craft":
      return "orange";
    case "Barge":
      return "purple";
    default:
      return "grey";
  }
};

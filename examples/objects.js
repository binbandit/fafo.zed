// Bare keys, quoted keys, methods, computed keys, and interpolation.
const lightKey = "light";

export const studio = {
  name: "Fuck Around Find Out",
  "opening-hours": "06:00-23:00",
  [lightKey]: "golden",
  plants: 16,
  doorsOpen: true,
  camera: null,
  materials: ["plaster", "walnut", "steel"],
  lighting: {
    day: { temperature: 3200, brightness: 0.85 },
    night: { temperature: 6500, brightness: 0.35 },
  },
  describe() {
    return `${this.name}: ${this.plants} plants.`;
  },
};

const { name, lighting: { day, night } } = studio;
export const sessions = [day, night].map((light, index) => ({
  id: `${name}-${index}`,
  ...light,
  active: index === 0,
}));

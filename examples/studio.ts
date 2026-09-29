// Golden light. Loud ideas. Make something worth finding out.
type Light = "golden" | "moonlit";

interface Studio {
  name: string;
  light: Light;
  plants: number;
  doorsOpen: boolean;
}

const studio: Studio = {
  name: "Fuck Around Find Out",
  light: "golden",
  plants: 16,
  doorsOpen: true,
};

/** Let the room change with the light. */
export function setLight(room: Studio, hour: number): Studio {
  const isDaytime = hour >= 6 && hour < 18;
  return { ...room, light: isDaytime ? "golden" : "moonlit" };
}

export function describe({ name, light, plants }: Studio): string {
  return `${name}: ${plants} plants in ${light} light.`;
}

const openingHours = [6, 12, 18, 23];
const rooms = openingHours.map((hour) => setLight(studio, hour));

for (const room of rooms) {
  console.log(describe(room));
}

export const roomPattern = /golden|moonlit/gi;

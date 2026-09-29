"""Follow the light, keep making things."""
from dataclasses import dataclass
from enum import Enum


class Light(Enum):
    GOLDEN = "golden"
    MOONLIT = "moonlit"


@dataclass(frozen=True)
class Studio:
    name: str
    light: Light = Light.GOLDEN
    plants: int = 16

    def describe(self) -> str:
        return f"{self.name}: {self.plants} plants in {self.light.value} light."


def open_studio(hour: int) -> Studio:
    if not 0 <= hour < 24:
        raise ValueError("The hour must be between 0 and 23")
    light = Light.GOLDEN if 6 <= hour < 18 else Light.MOONLIT
    return Studio("Fuck Around Find Out", light)


if __name__ == "__main__":
    rooms = [open_studio(hour) for hour in (6, 12, 18, 23)]
    for room in rooms:
        print(room.describe())

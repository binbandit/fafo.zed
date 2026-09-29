//! A small room for big experiments.
use std::fmt;

#[derive(Debug, Clone, Copy)]
enum Light {
    Golden,
    Moonlit,
}

struct Studio<'a> {
    name: &'a str,
    light: Light,
    plants: usize,
}

impl fmt::Display for Studio<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}: {} plants in {:?} light", self.name, self.plants, self.light)
    }
}

fn main() {
    let mut room = Studio {
        name: "Fuck Around Find Out",
        light: Light::Golden,
        plants: 16,
    };

    for hour in [6, 12, 18, 23] {
        room.light = match hour {
            6..=17 => Light::Golden,
            _ => Light::Moonlit,
        };
        println!("{room}");
    }
}

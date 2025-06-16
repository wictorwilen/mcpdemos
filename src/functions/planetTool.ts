import { app, InvocationContext, input, output } from "@azure/functions";


app.mcpTool("getPlanets", {
    toolName: "getPlanets",
    description: "Retrieve a list of planets in the solar system",
    toolProperties: [{
        propertyName: "includeMoons",
        propertyType: "boolean",
        description: "If true, include moons of each planet in the response",
    }],
    handler: async (
        _toolArguments: unknown,
        context: InvocationContext) => {
        const planets = [
            {
                name: "Mercury",
                type: "Terrestrial",
                diameter_km: 4879,
                distanceFromSun_km: 57900000,
                moons: []
            },
            {
                name: "Venus",
                type: "Terrestrial",
                diameter_km: 12104,
                distanceFromSun_km: 108200000,
                moons: []
            },
            {
                name: "Earth",
                type: "Terrestrial",
                diameter_km: 12742,
                distanceFromSun_km: 149600000,
                moons: [
                    {
                        name: "Moon",
                        diameter_km: 3474,
                        discovered: "Prehistoric"
                    }
                ]
            },
            {
                name: "Mars",
                type: "Terrestrial",
                diameter_km: 6779,
                distanceFromSun_km: 227900000,
                moons: [
                    {
                        name: "Phobos",
                        diameter_km: 22.2,
                        discovered: 1877
                    },
                    {
                        name: "Deimos",
                        diameter_km: 12.4,
                        discovered: 1877
                    }
                ]
            },
            {
                name: "Jupiter",
                type: "Gas Giant",
                diameter_km: 139820,
                distanceFromSun_km: 778500000,
                moons: [
                    {
                        name: "Io",
                        diameter_km: 3643,
                        discovered: 1610
                    },
                    {
                        name: "Europa",
                        diameter_km: 3122,
                        discovered: 1610
                    },
                    {
                        name: "Ganymede",
                        diameter_km: 5268,
                        discovered: 1610
                    },
                    {
                        name: "Callisto",
                        diameter_km: 4820,
                        discovered: 1610
                    }
                ]
            },
            {
                name: "Saturn",
                type: "Gas Giant",
                diameter_km: 116460,
                distanceFromSun_km: 1434000000,
                moons: [
                    {
                        name: "Titan",
                        diameter_km: 5150,
                        discovered: 1655
                    },
                    {
                        name: "Rhea",
                        diameter_km: 1528,
                        discovered: 1672
                    },
                    {
                        name: "Iapetus",
                        diameter_km: 1469,
                        discovered: 1671
                    }
                ]
            },
            {
                name: "Uranus",
                type: "Ice Giant",
                diameter_km: 50724,
                distanceFromSun_km: 2871000000,
                moons: [
                    {
                        name: "Titania",
                        diameter_km: 1578,
                        discovered: 1787
                    },
                    {
                        name: "Oberon",
                        diameter_km: 1523,
                        discovered: 1787
                    }
                ]
            },
            {
                name: "Neptune",
                type: "Ice Giant",
                diameter_km: 49244,
                distanceFromSun_km: 4495000000,
                moons: [
                    {
                        name: "Triton",
                        diameter_km: 2706,
                        discovered: 1846
                    }
                ]
            }
        ];


        const mcptoolargs = context.triggerMetadata.mcptoolargs as {
            includeMoons?: boolean;
        };

        if (mcptoolargs.includeMoons === true) {
            return JSON.stringify(planets);
        } else {
            return JSON.stringify(planets.map(planet => ({ name: planet.name })));
        }
    },
});
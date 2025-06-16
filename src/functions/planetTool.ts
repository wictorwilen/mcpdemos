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
            { name: "Mercury", moons: [] },
            { name: "Venus", moons: [] },
            { name: "Earth", moons: ["Moon"] },
            { name: "Mars", moons: ["Phobos", "Deimos"] },
            { name: "Jupiter", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
            { name: "Saturn", moons: ["Titan", "Rhea", "Iapetus"] },
            { name: "Uranus", moons: ["Titania", "Oberon"] },
            { name: "Neptune", moons: ["Triton"] },
        ];

        const mcptoolargs = context.triggerMetadata.mcptoolargs as {
            includeMoons?: boolean;
        };

        if (mcptoolargs.includeMoons) {
            return JSON.stringify(planets);
        } else {
            return JSON.stringify(planets.map(planet => ({ name: planet.name })));
        }
    },
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        alert: "#E5484D",
        idle: "#C8C8CD",
        accent: "#2D6BFF",
        accentMuted: "#2D6BFF33",
        ink: "#0A0A0A",
        ink30: "#A1A1AA",
        ink20: "#7A808D",
        offline: "#D4D4D8",
        hairline: "#D3D3D3",
        surface: "#FAFAFA",
        pureWhite: "#FFFFFF",
      },
      fontFamily: {
        regular:   ['Inter_400Regular'],  // Inter 12 Medium
        medium:    ['Inter_500Medium'],  // Inter 15 Regular
        semibold:     ['Inter_600SemiBold'], // Inter 15 SemiBold  // Inter 18 Regular // Inter 18 SemiBold
        bold:    ['Inter_700Bold'],     // Inter 28 Bold (your "Section")
      },
      fontSize: {
        small:    '12px',
        medium:       '15px', 
        large:     '18px',
        extralarge:    '28px',
      },

    },
  },
  plugins: [],
}
const plugin = require('tailwindcss/plugin');

const fontVariationSettings = plugin(function ({ addUtilities }) {
  const stretch = {
    narrow: 75,
    condensed: 87.5,
    base: 100,
    expanded: 112.5,
    wide: 125,
  };
  const weights = {
    ultralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  };

  // Custom weights with italic, stretch, italic and stretch.
  Object.entries(weights).forEach((i) => {
    const [key, value] = i;
    const select = `.font-${key}`;
    const baseData = {};
    baseData[select] = {
      fontWeight: value,
      fontVariationSettings: `'wght' ${value}`,
    };
    Object.entries(stretch).forEach((i) => {
      const [sKey, sValue] = i;
      const sSelect = `&.font-${sKey}`;
      const sSelectItalic = `&.italic.font-${sKey}`;

      baseData[select][sSelectItalic] = {
        fontVariationSettings: `'slnt' 1, 'wdth' ${sValue}, 'wght' ${value}`,
      };
      baseData[select][sSelect] = {
        fontVariationSettings: `'wdth' ${sValue}, 'wght' ${value}`,
      };
    });
    (baseData['&.italic'] = {
      fontVariationSettings: `'slnt' 1, 'wght' ${value}`,
    }),
      addUtilities(baseData);
  });

  // Custom stretch alone and with italic.
  Object.entries(stretch).forEach((i) => {
    const [key, value] = i;
    const select = `.font-${key}`;
    const stretchData = {};
    stretchData[select] = {
      fontStretch: value,
      fontVariationSettings: `'wdth' ${value}`,
      '&.italic': {
        fontVariationSettings: `'slnt' 1, 'wdth' ${value}`,
      },
    };
    addUtilities(stretchData);
  });

  // Plain italic.
  addUtilities({
    '.italic': {
      fontStyle: 'italic',
      fontVariationSettings: "'slnt' 1",
    },
  });
});

module.exports = fontVariationSettings;

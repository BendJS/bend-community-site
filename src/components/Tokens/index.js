const base = {
  //TODO: placeholder colors. replace when design is ready
  black: '#000000',
  white: '#FFFFFF',
  // Base colors here are mapped to semantic and legacy colors below.
  // Color names derived from HSL color lightness value for easy to decipher tint stacks.
  // 100: lightest tint
  // 0: darkest tint
  neutral: {
    50: '#808080'
  },
  blue: {
    57: '#007bff'
  }
}

const tokens = {
  //semantic tokens named for intent mapped to base values above
  //TODO: placeholder colors. replace when design is ready
  colors: {
    text: {
      primary: base.black,
      secondary: base.neutral[50],
      onInteractive: base.white
    },
    background: {
      interactive: {
        default: base.blue[57]
      }
    }
  }
}

export default tokens

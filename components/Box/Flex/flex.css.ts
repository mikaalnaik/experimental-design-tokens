import { recipe, RecipeVariants  } from '@vanilla-extract/recipes';
import { createVar, style } from '@vanilla-extract/css';

// Creates a single scoped CSS Variable reference.
// no value assigned by this operation, but a reference to assign later
const align = createVar()

export const button = recipe({
  base: {
    borderRadius: 6,
    color: 'white',
    padding: '20px',
    
  },
  variants: {
    display: {
      inline: { 
        display: 'inline'
      }, 
      flex:{ 
        display:  'flex'
      },
    },
    height: {
      full: {
        height: '100%'
      },
    },
    width: {
      full: {
        width: '100%'
      },
      auto: {
        width: '50%',
      },
    },
    align: {
      justifyContent: align
    },
    color: {
      primary: {
        backgroundColor: 'red',
      },
      secondary: {
        backgroundColor: 'blue'
      }
    }
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        display: 'inline'
      },
      style: {
        background: 'ghostwhite'
      }
    }
  ],

  defaultVariants: {
    display: 'inline',
    color: 'primary',
    width: 'auto'
  }
});

export type FlexBoxVariants = RecipeVariants<typeof button>;

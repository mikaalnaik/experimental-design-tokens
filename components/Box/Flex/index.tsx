import { CSSProperties } from 'react';
import { button, FlexBoxVariants } from './flex.css'

// Allows variables to be assigned dynamically that have been created
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface IFlexProps {
  gap?: number | [number, number];
  variant: FlexBoxVariants['color']
  column?: boolean;
  inline?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | null;
  children: React.ReactElement;
  sx: CSSProperties,
}

const FlexBox: React.FC<IFlexProps> = ({ 
  children,
  fullWidth,
  alignItems, 
  fullHeight,
  variant,
  sx,
}) => {

  // Select the options of the variants with type safety
  const variations: FlexBoxVariants = {
    display: 'flex',
    color: variant,
    height: fullHeight ? 'full' : null,
    width: fullWidth ? 'full' : null
  }

  // Assign dynamic values to the createVar placeholder
  // Optional (not encouraged) escape hatch for custom styling injection
  const dynamicStyles = {
    ...assignInlineVars({ justifyContent: alignItems }),
    ...sx
  }
  
  return (
    <div
      className={
        button(variations)
      }
      style={dynamicStyles}
    >
      {children}
    </div>
  )
}

export { FlexBox };
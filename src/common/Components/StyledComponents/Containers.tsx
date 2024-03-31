import styled from 'styled-components/native';

interface Props {
  size?: number;
}

export const FlexRow = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;

export const FlexColumn = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Flexsize = styled(FlexRow)<{size: number}>`
  flex: ${props => props.size};
`;

export const SpacerVertical = styled.View<Props>`
  margin-top: ${props => `${props.size}px`};
`;

export const SpacerHorizontal = styled.View<Props>`
  margin-right: ${props => `${props.size}px`};
`;

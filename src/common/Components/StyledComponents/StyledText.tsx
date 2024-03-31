import styled from 'styled-components/native';

interface Props {
  color?: string;
  eng?: boolean;
}

const styledText = styled.Text<Props>`
  color: ${props => (props.color ? props.color : 'black')};
  text-align: ${props => (props.eng ? 'left' : 'right')};
`;

export const Text16 = styled(styledText)<Props>`
  font-size: 16px;
`;

export const Text14 = styled(styledText)<Props>`
  font-size: 14px;
`;

export const Text12 = styled(styledText)<Props>`
  font-size: 12px;
`;

export const Text24 = styled(styledText)<Props>`
  font-size: 24px;
`;

export const Text16Bold = styled(Text16)`
  font-weight: bold;
`;

export const Text14Bold = styled(Text14)`
  font-weight: bold;
`;

export const Text12Bold = styled(Text12)`
  font-weight: bold;
`;

export const Text24Bold = styled(Text24)`
  font-weight: bold;
`;

export const Text48Bold = styled(Text24)`
  font-size: 48px;
  font-weight: bold;
`;

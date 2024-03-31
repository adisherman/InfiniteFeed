import {ReactNode, type ComponentType} from 'react';
import ErrorBoundary from '.';
import FallbackComponent from '../FallbackComponent';
import {FallbackComponentProps} from '../FallbackComponent/FallbackComponent.types';

export type ErrorBoundaryProps = {
  children: ReactNode; // | Node | JSX.Element | JSX.Element[];
  FallbackComponent: ComponentType<FallbackComponentProps>;
  onError?: (
    current: ErrorBoundary,
    error: null | Error,
    stack: string,
  ) => void;
} & typeof defaultProps;

const defaultProps = {
  FallbackComponent,
};

export type ErrorBoundaryState = {error: Error | null};

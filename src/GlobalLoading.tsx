import React, { CSSProperties, FC, ReactElement, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

type Listener = React.Dispatch<React.SetStateAction<boolean>> | ((value: boolean) => void);
export let showLoading: Listener = () => {};

export const show = () => {
  if (showLoading) {
    showLoading(true);
  }
};

export const hide = () => {
  if (showLoading) {
    showLoading(false);
  }
};

export const globalLoading = {
  show,
  hide
};

interface GlobalLoadingProps {
  children?: React.ReactNode;
  WrapperComponent?: (props: any) => ReactElement;
  backgroundColor?: string;
  loadingSize?: number;
  loadingColor?: string;
  loadingType?:
    | 'spin'
    | 'bars'
    | 'bubbles'
    | 'cubes'
    | 'cylon'
    | 'spin'
    | 'spinningBubbles'
    | 'spokes';
}
export const GlobalLoading: FC<GlobalLoadingProps> = props => {
  const {
    children,
    WrapperComponent,
    loadingSize = 50,
    loadingColor = '#eee',
    loadingType = 'spin',
    backgroundColor = 'rgba(0, 0, 0, 0.6)',
    ...rest
  } = props || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    showLoading = setLoading;
  }, []);

  const _renderLoading = () => (
    <ReactLoading
      type={loadingType}
      color={loadingColor}
      height={loadingSize}
      width={loadingSize}
    />
  );

  const style = {
    ...$globalLoading,
    backgroundColor
  };

  if (!loading) return null;
  if (WrapperComponent)
    return <WrapperComponent {...rest}>{children || _renderLoading()}</WrapperComponent>;
  return <div style={style}>{children || _renderLoading()}</div>;
};

const $globalLoading: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100vw',
  height: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  zIndex: 999
};

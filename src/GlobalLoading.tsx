import React, { CSSProperties, FC, ReactElement, useEffect, useState } from 'react';

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
  zIndex?: number;
  loadingSize?: number;
  loadingColor?: string;
  loadingBackgroundColor?: string;
  loadingThickness?: number;
  loadingSpeed?: number;
  blur?: number;
}
export const GlobalLoading: FC<GlobalLoadingProps> = props => {
  const {
    children,
    WrapperComponent,
    loadingSize = 70,
    loadingColor = '#eee',
    loadingBackgroundColor = '#000',
    loadingSpeed = 1,
    loadingThickness = 7,
    backgroundColor = 'rgba(0, 0, 0, 0.6)',
    zIndex = 999,
    blur = 0,
    ...rest
  } = props || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    showLoading = setLoading;
  }, []);

  // loading indicator
  const _renderLoading = () => (
    <>
      <style>{`
            @keyframes spin {
                 0% { transform: rotate(0deg); }
                 100% { transform: rotate(360deg); }
            }
        `}</style>
      <div
        style={{
          position: 'relative',
          animation: `spin ${loadingSpeed}s linear infinite`
        }}
      >
        <div
          style={{
            width: loadingSize,
            height: loadingSize,
            borderRadius: '50%',
            backdropFilter: `blur(${blur}px)`,
            border: `${loadingThickness}px solid`,
            borderColor: `${loadingColor} ${loadingBackgroundColor} ${loadingBackgroundColor} ${loadingBackgroundColor}`
          }}
        />
      </div>
    </>
  );

  const style = {
    ...$globalLoading,
    zIndex,
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
  alignItems: 'center'
};

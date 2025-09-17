import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsLeftRight,
  faPlus,
  faMinus,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from 'react-zoom-pan-pinch';
import './styles.css';

type Props = {
  children: React.ReactNode;
  title?: string;
};

/**
 * Controls displayed in fullscreen mode for fit-to-screen and exit actions.
 * Uses react-zoom-pan-pinch's useControls hook for transform operations.
 */
const FullscreenControls: React.FC<{ onExitFullscreen: () => void }> = ({
  onExitFullscreen,
}) => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="zoomable-mermaid__controls">
      <button
        type="button"
        className="zoomable-mermaid__iconbtn"
        title="Exit fullscreen"
        aria-label="Exit fullscreen"
        onClick={onExitFullscreen}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <span className="zoomable-mermaid__divider" aria-hidden="true" />{' '}
      <button
        type="button"
        className="zoomable-mermaid__iconbtn"
        title="Fit width"
        aria-label="Fit width"
        onClick={() => resetTransform()}
      >
        <FontAwesomeIcon icon={faArrowsLeftRight} />
      </button>
      <span className="zoomable-mermaid__divider" aria-hidden="true" />
      <button
        type="button"
        className="zoomable-mermaid__iconbtn"
        title="Zoom in"
        aria-label="Zoom in"
        onClick={() => zoomIn()}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button
        type="button"
        className="zoomable-mermaid__iconbtn"
        title="Zoom out"
        aria-label="Zoom out"
        onClick={() => zoomOut()}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
};

/**
 * ZoomableMermaid Component
 *
 * Wraps Mermaid diagram content to provide fullscreen viewing with zoom, pan, and pinch gestures.
 * Click the diagram to enter fullscreen mode, use controls to navigate, press Escape to exit.
 *
 * Features:
 * - CSS-based fullscreen (fills browser window)
 * - Zoom, pan, and pinch gestures via react-zoom-pan-pinch
 * - Keyboard navigation (Escape to exit)
 * - Fit-to-screen functionality
 * - Automatic theme integration with Docusaurus
 */
const ZoomableMermaid: React.FC<Props> = ({ children, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPanning, setIsPanning] = useState(false);

  const enterFullscreen = useCallback(() => {
    setIsFullscreen(true);
    // Push a new history state so back button can close the fullscreen
    window.history.pushState({ zoomableMermaidOpen: true }, '');
  }, []);

  const exitFullscreen = useCallback(() => {
    setIsFullscreen(false);
    // If we have a history state for the fullscreen, go back to remove it
    if (window.history.state?.zoomableMermaidOpen) {
      window.history.back();
    }
  }, []);

  // Handle escape key and browser back button to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        exitFullscreen();
      }
    };

    const handlePopState = (event: PopStateEvent) => {
      // If the history state indicates we had fullscreen open, close it
      if (isFullscreen && !event.state?.zoomableMermaidOpen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      // prevent page scroll while our fullscreen overlay is open
      document.body.classList.add('zoomable-mermaid-no-scroll');
      document.addEventListener('keydown', handleKeyDown);
      window.addEventListener('popstate', handlePopState);
      return () => {
        document.body.classList.remove('zoomable-mermaid-no-scroll');
        document.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isFullscreen, exitFullscreen]);

  // Ensure body class is removed if component unmounts while fullscreen
  useEffect(() => {
    return () => {
      document.body.classList.remove('zoomable-mermaid-no-scroll');
    };
  }, []);

  const onWrapperClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (isFullscreen) return;
    const target = e.target as HTMLElement;
    if (target.closest('.zoomable-mermaid__btn')) return;
    enterFullscreen();
  };

  if (isFullscreen) {
    return (
      <div
        className="zoomable-mermaid-emulated-fullscreen"
        aria-label={title ?? 'Mermaid diagram'}
      >
        <TransformWrapper
          initialScale={1}
          doubleClick={{ mode: 'reset' }}
          limitToBounds={true}
          centerZoomedOut={false}
          minScale={0.1}
          maxScale={10}
          onPanningStart={() => setIsPanning(true)}
          onPanningStop={() => setIsPanning(false)}
        >
          <FullscreenControls onExitFullscreen={exitFullscreen} />
          <TransformComponent
            wrapperClass={`zoomable-mermaid__transform-wrapper${
              isPanning ? ' is-panning' : ''
            }`}
            contentClass="zoomable-mermaid__transform-content"
          >
            {children}
          </TransformComponent>
        </TransformWrapper>
      </div>
    );
  }

  return (
    <div
      className="zoomable-mermaid"
      aria-label={title ?? 'Mermaid diagram'}
      onClick={onWrapperClick}
    >
      {children}
    </div>
  );
};

export default ZoomableMermaid;

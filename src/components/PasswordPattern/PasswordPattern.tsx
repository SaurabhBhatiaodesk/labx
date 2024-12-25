import React, { useState, useEffect, useCallback } from "react";
import PatternLock from "react-pattern-lock";

interface PasswordPatternProps {
  onFinish: (path: string) => void;
}

const PasswordPattern: React.FC<PasswordPatternProps> = ({ onFinish }) => {
  const [path, setPath] = useState<number[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const onChange = (newPath: number[]) => {
    setPath(newPath);
    setError(false); // Reset error state on change
  };

  const handleFinish = () => {
    if (path.length === 0) {
      setError(true); // Handle empty path
      return;
    }

    setDisabled(true); // Disable interaction once the pattern is finished
    onFinish(path.join("")); // Send the numeric pattern to the parent
  };

  const handleReset = () => {
    setPath([]); // Clear the pattern path
    setDisabled(false); // Re-enable interaction
    setError(false); // Clear error state
  };

  // Define a stable event handler reference using useCallback
  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleReset(); // Reset on Escape key
      }
    },
    [handleReset] // Depend on the handleReset function
  );

  useEffect(() => {
    // Add the keydown event listener
    window.addEventListener("keydown", keydownHandler);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]); // Depend on the stable keydownHandler reference

  return (
    <div className="pattern-container">
      <div className="pattern-lock-wrapper">
        <PatternLock
          size={3} // 3x3 grid
          path={path} // Current pattern
          onChange={onChange} // Update path on change
          onFinish={handleFinish} // Trigger finish logic
          disabled={disabled} // Disable after completion
          error={error} // Highlight error state
          connectorThickness={4} // Line thickness
        />
      </div>
      {error && <p className="error-text">Please draw a valid pattern.</p>}
      <div className="pattern-actions">
        <button onClick={handleReset} disabled={!disabled}>
          Reset Pattern
        </button>
      </div>
    </div>
  );
};

export default PasswordPattern;

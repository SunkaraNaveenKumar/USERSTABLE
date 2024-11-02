import React, { useMemo, useState } from "react";

const ThemeToggleComp = (Component) => {
  const wrappedThemeComp = (props) => {
    const [toggleTheme, setToggleTheme] = useState(false);
    const getToggleTheme = useMemo(() => {
      return toggleTheme ? "text-white bg-black h-screen w-full" : "";
    }, [toggleTheme]);
    const handleTheme = () => {
      setToggleTheme(!toggleTheme);
    };

    return (
      <div className={getToggleTheme}>
        <button
          className="border rounded-md bg-blue-100 px-4"
          onClick={handleTheme}
        >
          {toggleTheme ? "Light" : "Dark"}
        </button>
        <Component {...props} />
      </div>
    );
  };
  return wrappedThemeComp;
};

export default ThemeToggleComp;

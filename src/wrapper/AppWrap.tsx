import { ElementType } from "react";
import NavigationDots from "../components/common/NavigationDots";

const AppWrap = (Component: ElementType, idName: string, classNames: string) =>
  function HOC(props: { darkMode: boolean }) {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component {...props} />

          <div className="copyright">
            <p className="p-text">@2025 Shoco</p>
            {/*<p className="p-text">All rights reserved</p>*/}
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;

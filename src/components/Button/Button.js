import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ loading, btnType, btnStyle, btnAction, children }) => {
  const loadingIcon = (
    <React.Fragment>
      <svg id="SvgIconLoading" viewBox="0 0 16 16">
        <path d="M8 .504c-4.411 0-8 3.589-8 8a8.03 8.03 0 0 0 3.999 6.929.471.471 0 0 0 .472-.814A7.084 7.084 0 0 1 .942 8.505c0-3.892 3.166-7.059 7.059-7.059s7.059 3.166 7.059 7.059a7.085 7.085 0 0 1-3.528 6.114.47.47 0 1 0 .47.814A8.03 8.03 0 0 0 16 8.504c0-4.411-3.589-8-8-8z" />
      </svg>
      <span className="visually-hidden" aria-live="polite">
        Loading
      </span>
    </React.Fragment>
  );
  return (
    <button className={`Button ${btnStyle}`} type={btnType} onClick={btnAction}>
      {loading ? loadingIcon : children}
    </button>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  btnType: PropTypes.oneOf(["button", "submit", "reset"]),
  btnStyle: PropTypes.oneOf(["DefaultButton", "FormButton"]),
  btnAction: PropTypes.func,
  children: PropTypes.node
};

Button.defaultProps = {
  loading: false,
  btnType: "button",
  btnStyle: "DefaultButton",
  btnAction: null,
  children: ""
};

export default Button;

import React from "react";
import styled from "styled-components";
const Container = styled.div`
  margin: 0.5em;

  .btn {
    display: inline-block;
    padding: 5px 10px;
    color: #24292e;
    background-color: #eff3f6;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 5px;
    background-image: linear-gradient(180deg, #fafbfc, #eff3f6 90%);
    font-size: 20px;
    text-decoration: none;
  }

  .btn:hover {
    background-color: #e6ebf1;
    background-position: -0.5em;
    border-color: rgba(27, 31, 35, 0.35);
    background-image: linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);
  }

  .logo {
    margin-right: 10px;
  }

  .scale-up {
    transform: scale(2);
  }

  .scale-down {
    transform: scale(0.65);
  }
`;
const FlexBox = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const GithubButton = ({
  href,
  children
}) => {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("a", {
    className: "btn",
    href: href,
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "Follow @meerkat-citronella on GitHub"
  }, /*#__PURE__*/React.createElement(FlexBox, null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "32",
    height: "32",
    className: "octicon octicon-mark-github logo",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    className: "scale-up",
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
  })), /*#__PURE__*/React.createElement("span", null, children))));
};
export const DevpostButton = ({
  href,
  children
}) => {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("a", {
    className: "btn",
    href: href,
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "Follow @meerkat-citronella on GitHub"
  }, /*#__PURE__*/React.createElement(FlexBox, null, /*#__PURE__*/React.createElement("svg", {
    className: "logo",
    enableBackground: "new 0 0 32 32",
    height: "32",
    viewBox: "0 0 32 32",
    width: "32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(0.392157%,34.117647%,60.784314%)",
      fillOpacity: 1
    },
    d: "M 24.351562 2.398438 L 7.648438 2.398438 L 0 16 L 7.851562 29.601562 L 24.398438 29.601562 L 32 16 Z M 24.351562 2.398438 "
  }), /*#__PURE__*/React.createElement("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 16.101562 8.449219 L 10.699219 8.449219 L 10.699219 23.601562 L 16.101562 23.601562 C 20.199219 23.601562 23.550781 20.199219 23.550781 16.050781 C 23.550781 11.898438 20.25 8.449219 16.101562 8.449219 Z M 16 20.550781 L 13.75 20.550781 L 13.75 11.449219 L 16 11.449219 C 18.5 11.449219 20.550781 13.5 20.550781 16 C 20.550781 18.5 18.5 20.550781 16 20.550781 Z M 16 20.550781 "
  })), /*#__PURE__*/React.createElement("span", null, children))));
};
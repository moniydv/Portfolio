// ThemeProvider.js

import React from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";

const ShowTheme = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#121212" : "#EEE"};
    color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
  }

  .icon {
    color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};

    &:hover {
      color: ${(props) =>
        props.theme.mode === "dark" ? "#e04f62" : "#e04f62"};
      transition: all 0.5s ease;
    }
  }

  .blog-card {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#1F1F1F" : "#fff"};
  }

  .article-details,
  .post-title {
    color: ${(props) => (props.theme.mode === "dark" ? "#d9dedc" : "#111")};
  }

  .header {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#1F1F1F" : "#fff"};
  }

  .logo-nav a,
  .projects p,
  .home-title,
  .blogs-title,
  .projects-title,
  .about-title,
  .contact-title {
    color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
  }

  .blog-description {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#272727" : "rgb(255,255,255)"};
  }

  .category {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "rgb(92,92,92)" : "#fff"};
    color: ${(props) => (props.theme.mode === "dark" ? "white" : "black")};
  }

  .contact-container {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "rgb(41,41,41)" : "#fff"};
  }

  .gif {
    display: ${(props) => (props.theme.mode === "dark" ? "" : "")};
  }
`;

const ThemeProvider = ({ children, theme = "dark" }) => {
  return (
    <StyledThemeProvider theme={{ mode: `${theme}` }}>
      <>
        <ShowTheme />
        {children}
      </>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;

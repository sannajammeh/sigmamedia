import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	a {
	color: inherit;
	text-decoration: none;
	}

	* {
    box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.textOnBg};
        line-height: 1.4;
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;

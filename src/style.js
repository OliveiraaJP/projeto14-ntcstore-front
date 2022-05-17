import { createGlobalStyle } from 'styled-components';
import ney2 from './assets/ney2.jpg';

export const GlobalStyle = createGlobalStyle`
///////// Reset.css //////////
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
	cursor: pointer;
}
a{
	text-decoration-line: none;
}
///////// Style.css //////////
*{
    box-sizing: border-box;
}
body{
    font-family: 'Roboto';
    font-weight: 400;
	background-color: #fefefe;
	cursor: default;
}
button,
input,
select{
	font-family: 'Roboto';
    font-weight: 400;
	box-shadow: 3px 3px 10px -4px rgba(0, 0, 0, 0.25);
}
body{
	background-image: url(${ney2});
	background-repeat: no-repeat;
	background-size: 100vw 100vh;
}
@media (min-width: 1100px) {
    body{
		background-image: none;
	}
}
`;
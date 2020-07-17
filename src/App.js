import React from 'react';
import Markdown from 'markdown-to-jsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import './App.css';

const Image = (props) => {
  const { children, alt, ...otherProps } = props;
  return (<span className={"image"}><img alt={alt} {...otherProps}>{children}</img></span>)
};


function App() {
  const [content, setContent] = React.useState("");
  fetch("https://raw.githubusercontent.com/ReactNativeNews/React-Native-Apps/master/README.md").then((res) => res.text()).then((data) => setContent(data));
  const linkOriginal = "https://github.com/ReactNativeNews/React-Native-Apps";
  const companyLink = "https://infinite.red/technologies/react-native";
  const icons8Link = "https://icons8.com";
  return (
    <div className={"body"}>
      <Paper elevation={3} className={"list"}>
        <div className={"original"}>
          <Link href={linkOriginal}>Original </Link>
          by <Link href={companyLink}>Infinite Red</Link>
        </div>
        <TableContainer>
          <Markdown options={{
            overrides: {
              img: Image,
              table: Table,
              tbody: TableBody,
              thead: TableHead,
              tr: TableRow,
              td: TableCell,
              a: Link
            }
          }}>{content}</Markdown>
        </TableContainer>
        <div className={"icon-link"}>
          Icons by <Link href={icons8Link}> Icons8</Link>
        </div>
      </Paper>
    </div>
  );
}

export default App;

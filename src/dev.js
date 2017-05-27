import './dev.scss';

import ReactTextEllipsis from './main';

/*===example start===*/
class App extends React.Component{
  render(){
    return (
      <div className="hello-react-text-ellipsis">
        <h1>默认line:1</h1>
        <ReactTextEllipsis>
          <p>这是一段很长很长的文字，这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字</p>
        </ReactTextEllipsis>

        <h1>line:2</h1>
        <ReactTextEllipsis line="2">
          <p>这是一段很长很长的文字，这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字</p>
        </ReactTextEllipsis>

        <h1>line:3</h1>
        <ReactTextEllipsis line="3">
          <p>这是一段很长很长的文字，这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字</p>
        </ReactTextEllipsis>


        <h1>line:3 - with-padding-10</h1>
        <ReactTextEllipsis line="3" padding="10px">
          <p>这是一段很长很长的文字，这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字</p>
        </ReactTextEllipsis>

        <h1>line:2 - with-padding20</h1>
        <ReactTextEllipsis line="2" padding="20px">
          <p>这是一段很长很长的文字，这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字这是一段很长很长的文字</p>
        </ReactTextEllipsis>

    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

# react-text-ellipsis
> React text overflow ellipsis component.


## dependencies:
```css
.line-clamp {
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
```

## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    line:PropTypes.any,
    padding:PropTypes.string,
  };

  static defaultProps = {
    line:1,
    padding:'0'
  };
  
```

## usage:
```jsx
// install: npm install afeiship/react-text-ellipsis --save
// import : import ReactTextEllipsis from 'react-text-ellipsis'


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

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


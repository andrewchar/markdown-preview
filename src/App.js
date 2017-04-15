import React, { Component } from 'react';
var marked = require('marked');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*',
    }
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  rawMarkup(value) {
    var rawMarkup = marked(value);
    return {__html: rawMarkup};
  }

  updateMarkdown(event) {
    this.setState({markdown: event.target.value})
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Markdown Previewer</h1>
        <div className="row">
          <div className="col-sm-6 col-xs-12 fixed-height md">
            <textarea className="md-textarea box-style" value={this.state.markdown} onChange={this.updateMarkdown}></textarea>
          </div>
          <div className="col-sm-6 col-xs-12 fixed-height md">
            <div className="md-preview box-style" dangerouslySetInnerHTML={this.rawMarkup(this.state.markdown)}></div>
          </div>
        </div>
      </div>
    )
  }
}

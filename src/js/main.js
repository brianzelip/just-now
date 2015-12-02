var JustNowBox = React.createClass ({
  render : function() {
    return (
      <div className="center">
        <button className="btn btn-big btn-primary">WHEN?</button>
        <h1>{this.props.date.toLocaleString()}</h1>
      </div>
    );
  }
});


ReactDOM.render (
  <JustNowBox date={new Date()}/>,
  document.getElementById('justnow')
);
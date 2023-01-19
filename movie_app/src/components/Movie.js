import React from "react";
import { useLocation } from "react-router-dom"

/*class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const location = useLocation();
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}*/

const Detail = () => {
  const location = useLocation();

  return (
    <span>{location.state.title}</span>
  );
};
export default Detail;

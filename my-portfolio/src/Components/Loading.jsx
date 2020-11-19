import React, { Component } from "react";
import Typical from "react-typical";

const Motto = [
  "The more you gain by pretending, \n The less you're gonna actually have.",
  100,
];
const MottoKo = [
  "거짓으로 얻는 게 많을수록, 진짜로 얻는 것은 적어지지. \n -Aladdin(2019)-",
  4000,
];
export default class Loading extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Typical
            wrapper="span"
            steps={Motto}
            loop={1}
            className={"loading"}
          />
          <Typical wrapper="i" steps={MottoKo} loop={1} className={"mottoKo"} />
        </div>
      </>
    );
  }
}

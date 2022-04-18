import React, { useContext } from "react";
import * as Rb from "react-bootstrap";
import { DataContext } from "../../../contexts/data.context";
import "./style.scss";
import Book from "../../../assets/hub-book.png";

const BlockableHub = () => {
  const data = useContext(DataContext);

  return (
    <section className="blockable_hub--wrapper" id="Blockable Hub">
      <Rb.Container>
        <Rb.Row>
          <Rb.Col lg={6} sm={6} className="hub-title">
            <h2 className="blockable_hub-title">
              {data.contents["Blockable Hub"].title}
            </h2>
            <p className="blockable_hub-sub">
              {data.contents["Blockable Hub"].description}
            </p>
          </Rb.Col>
        </Rb.Row>
        <Rb.Row>
          <Rb.Col xl={6} lg={6} sm={12}></Rb.Col>
          <Rb.Col xl={6} lg={6} sm={12} className="list-hub">
            <Rb.Row>
              {data.contents["Blockable Hub"].items.map((e, i) => (
                <Rb.Col lg={6} sm={6} key={i}>
                  {/* <img src={e.img} alt='hub-img' /> */}
                  <img src={Book} alt="hub-img" />
                  <h3 className="list_hub-title">{e.description}</h3>
                  <p className="list_hub-content">{e.content}</p>
                </Rb.Col>
              ))}
            </Rb.Row>
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default BlockableHub;

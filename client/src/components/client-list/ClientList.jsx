import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./client-list-models.css";
const ClientList = ({ list }) => {
  const [isShow, setIsShow] = useState(true);

  const triggerHandler = (e) => {
    e.preventDefault();
    setIsShow((preMode) => !preMode);
  };

  return (
    <div className="client___list--container">
      <ul className="client___list--container__list">
        {list?.map((item, index) => (
          <li key={index}>
            {index < 9 ? (
              <span>
                <h5>{item?.username?.charAt(0)?.toUpperCase()}</h5>
              </span>
            ) : undefined}
          </li>
        ))}
        {list.lenght > 10 ? (
          <span>
            <Link onClick={triggerHandler}>
              <h5>9+</h5>
            </Link>
          </span>
        ) : undefined}
      </ul>
      {!isShow && (
        <ul className="client___list--container__list--popup scroll">
          {list?.map((item, index) => (
            <li key={index}>
              <span>
                <h5>{item?.username?.charAt(0)?.toUpperCase()}</h5>
              </span>
              <p>{item?.username}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientList;

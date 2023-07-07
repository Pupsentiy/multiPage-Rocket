import { FC } from "react";

import { priceItems } from "../../../core/constants/constants";

import "./price.scss";

const Price: FC = () => {
  return (
    <section className="price">
      <div className="container-main">
        <h2 className="price__title">ЧТО ВЫ МОЖЕТЕ ПОЛУЧИТЬ</h2>

        <div className="price-wrapper">
          {priceItems &&
            priceItems.map((item, i) => (
              <div className="price-item-block" key={i}>
                <h4 className="price-item__title">{item.title}</h4>

                <p className="price-item__time">{item.time}</p>
                <p className="price-item__price">{item.price}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Price;

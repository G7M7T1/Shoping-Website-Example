import React from "react";
import "../styles/CardList.css";

function CardList() {
  return (
    <div className="cardList">
      <div className="titleText">
        <h1>TODAY'S BEST DEALS</h1>
        <a href="">
          <p>See More</p>
        </a>
      </div>
      <div className="cards">
        <div className="card">
          <div className="cardImgHere">
            <img src="./pp (1).jpg" alt="HereI" />
          </div>
          <div className="start">
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
          </div>
          <h4 className="ProductName">
            SAMSUNG 870 QVO Series 2.5" 2TB SATA III Samsung 4-bit MLC
          </h4>
          <div className="discount">
            <p className="discountText num">Save 27%</p>
            <p className="discountText lim">$10 Off W/ Code</p>
          </div>
          <div className="cardPrice">
            <h1>
              $219<span>.99</span>
            </h1>
            <p>$299.99</p>
          </div>
          <h4 className="shipingText">FREE SHIPPING</h4>
        </div>

        <div className="card">
          <div className="cardImgHere">
            <img src="./pp (2).jpg" alt="HereI" />
          </div>
          <div className="start">
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
          </div>
          <h4 className="ProductName">
            G.SKILL Ripjaws V Series 32GB (2 x 16GB) 288-Pin DDR4
          </h4>
          <div className="discount">
            <p className="discountText num">Save 29%</p>
            <p className="discountText lim">Limited Time Offer</p>
          </div>
          <div className="cardPrice">
            <h1>
              $149<span>.99</span>
            </h1>
            <p>$209.99</p>
          </div>
          <h4 className="shipingText">FREE SHIPPING</h4>
        </div>

        <div className="card">
          <div className="cardImgHere">
            <img src="./pp (3).jpg" alt="HereI" />
          </div>
          <div className="start">
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
          </div>
          <h4 className="ProductName">
            MSI GE76 Raider 11UH-245 17.3" 360Hz IPS i7 11th Gen 11800H
          </h4>
          <div className="discount">
            <p className="discountText num">Save 9%</p>
            <p className="discountText lim">Limited Time Offer</p>
          </div>
          <div className="cardPrice">
            <h1>
              $3,589<span>.99</span>
            </h1>
            <p>$3,943.99</p>
          </div>
          <h4 className="shipingText">FREE SHIPPING</h4>
        </div>

        <div className="card">
          <div className="cardImgHere">
            <img src="./pp (4).jpg" alt="HereI" />
          </div>
          <div className="start">
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
            <i className="fas fa-star"> </i>
          </div>
          <h4 className="ProductName">
            ABS Master Gaming PC - Intel i5 10400F - GeForce RTX 3060 12GB
          </h4>
          <div className="discount">
            <p className="discountText num">Save 12%</p>
            <p className="discountText lim">Promotion Deal</p>
          </div>
          <div className="cardPrice">
            <h1>
              $1,499<span>.99</span>
            </h1>
            <p>$1,699.99</p>
          </div>
          <h4 className="shipingText">FREE SHIPPING</h4>
        </div>
      </div>
    </div>
  );
}

export default CardList;

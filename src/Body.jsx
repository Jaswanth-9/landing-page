import "./Body.css";

export default function Body() {
  return (
    <main className="Body">
      <div className="Body-image">
      <img src="/images/puma shoes.png" alt="puma shoes" />
      </div>
      <div className="Body-content">
        <h1>Step into comfort,stride with confidence</h1>
        <p>
          Puma shoes combine style, comfort, and performance, offering sleek
          designs for every activity. Whether you're hitting the gym, running
          errands, or stepping out in casual wear, Puma delivers innovative
          footwear with cutting-edge technology for optimal support and
          durability. Elevate your game with every step.
        </p>
        <div className="Body-content-button">
          <button className="shop-now">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="Available">
          <p>Availbale on </p>
          <div className="Available-icons">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
    </main>
  );
}

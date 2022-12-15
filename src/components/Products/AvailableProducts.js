import Product from "./Product";
import "./AvailableProducts.css";

const AvailableProduct = () => {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/39/5c/bd/395cbdc769cbbc96a8d123a5f1f16e80.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1876545678"
            title="The Adventures of HuckleBerry Finn By Mark Twain"
            price={29.99}
            image="https://images.thenile.io/r1000/9781435129726.jpg"
            rating={3}
          />
          <Product
            id="9876567887"
            title="Sujata Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 3 jars"
            price={250.0}
            image="https://tse1.mm.bing.net/th/id/OIP.q7uL7JI-8VSIcRs1MplS4gHaF3?w=220&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="0987651671"
            title="Samsung LC49RYUB6522081 49 Curved LED Gaming Monitor"
            price={199.0}
            image="https://tse4.mm.bing.net/th/id/OIP.TdJdNMXQqXveNQMDXIVlygHaE8?w=277&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            rating={3}
          />
          <Product
            id="987656781"
            title="Alexa Echo (3rd Generation) | Smartt speaker with Aexa, Charcoal Fabric"
            price={99.89}
            image="https://tse2.mm.bing.net/th/id/OIP.1nlJwI5BUII4BlfMUKMaNQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            rating={5}
          />
          <Product
            id="09876567898"
            title="New Apple ipad PRO (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://tse2.mm.bing.net/th/id/OIP.sCpffGwuQMfcjXGVYwGISwHaHa?w=205&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="987617515"
            title="Noise Smart Watch with Built-in GPS and High Resolution Display, Black"
            price={150.99}
            image="https://tse4.mm.bing.net/th/id/OIP.iOOkEY26Y9Y_v8U3j7mg5wHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default AvailableProduct;

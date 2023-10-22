import "./ItemListContainer.css";

const ItemListContainer = (greeting) => {
  return (
    <div className="banner-container">
      <h1>{greeting.tit1}</h1>
      <p>{greeting.tit2}</p>
      <h2>{greeting.tit3}</h2>
    </div>
  );
};

export default ItemListContainer;

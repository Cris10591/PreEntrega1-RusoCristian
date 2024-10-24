
import ItemCount from "./ItemCount";
import "./ItemListContainer.css"

export const ItemListConteiner = ({ greeting }) => {
    return (
        <>
        <div className="containerBienvenida">
            <div className="txtBienvenida">
            <h1>{greeting}</h1>
            <ItemCount/>
            </div>
           
        </div>
      
        </>
    );
}
export default ItemListConteiner;

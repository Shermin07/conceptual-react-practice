
import "./Country.css"
const Country = ({country}) => {
   const {name,flags} = country;

    return (
        <div className="country">
          <h3>Name:   {name.common}</h3>  
          <h3>Flags:
             <img src={flags.png}></img></h3>
        </div>
    );
};

export default Country;
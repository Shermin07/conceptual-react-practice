
import "./Country.css"
const Country = ({country}) => {
   const {name,flags,population,area,cca3} = country;

    return (
        <div className="country">
          <h3>Name:   {name.common}</h3>  
          
             <img src={flags.png}></img>
             <h3>Populations: {population}</h3>
             <h3>Area: {area}</h3>
             <p><small>Code: {cca3}</small></p>
        </div>
    );
};

export default Country;
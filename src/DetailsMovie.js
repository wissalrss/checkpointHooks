import {Link} from 'react-router-dom';


const DetailsMovie = ({match,data}) =>{
    console.log(match)
    var detail= data.find(p => p.id == match.params.id);
    var detailData;
    if(detail)
    detailData=
    <div>
         <h2>{detail.title}</h2>
         <p>
         {detail.description}  
         </p>
         <img src={detail.posterURL} alt="" />
<br/>
         <Link to={{pathname:"/"}}>Back to home</Link>
               
         </div>
    return(<>
    <div className="description">
    {detailData}
    </div>
    
    </>);
}
export default DetailsMovie;
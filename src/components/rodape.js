import Style from "./rodape.module.css";
function Rodape( props ) 
{
    return(
       <div className={Style.divroda}>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-facebook"></i>
        </div>
    )
}
export default Rodape;
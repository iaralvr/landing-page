import Style from "./logo.module.css";
function Logo( props ) 
{
    return(
       <figure className={Style.figure}>
         <img className={Style.logo} src={props.logo} alt="" />
        </figure>
    )
}
export default Logo;
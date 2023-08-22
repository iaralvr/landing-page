import Style from "./home.module.css"
function Home( props ) 
{
    return(
       <div className={Style.div}>
        <i class="fa-solid fa-bars"></i>
        <span>home</span>
        <span>all</span>
        <span>brow</span>
        <span>concealer</span>
        <span>eyeliner</span>
        <span>lashes</span>
        <span>lip gloss</span>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
    )
}
export default Home;
import React, {useState,useEffect} from "react";
import Styles from "./header.module.scss";
import * as _ from "underscore"

//IMAGES
import shoppingCart from "../../Assets/shoppingCart.svg";



let lastScrollTop = window.pageYOffset;

const Header = () =>{
    const [headerClass, setHeaderClass] = useState(true)

    const onScroll = () =>{
        let st = window.pageYOffset;
           
        if (st > lastScrollTop){
            setHeaderClass(false)
           console.log("downScroll")
        }else{
            setHeaderClass(true)
            console.log("upScroll")
        }
        
        if(st <= 0 ){
            lastScrollTop = 0;
            console.log("first statement ran")
        } else{
            lastScrollTop = st;
            console.log("second statement ran")
        } 
       
        console.log("st: "+st + " Last: " + lastScrollTop)
        console.log(headerClass)
    }
    
    useEffect(() => {
        const throttledScroll = _.throttle(onScroll, 300)
        
         window.onscroll = throttledScroll;
         
    }, [])
    
  
    
            
    return(
        <div className={headerClass ? Styles.header : `${Styles.header} ${Styles.headerHide}`}>
            <div className={Styles.row1}>
                <span className={Styles.logo}>DB <span className={Styles.logoPeriod}>.</span> </span>
            </div>
            <div className={Styles.row2}>
                <ul className={Styles.ul}>
                    <li className={Styles.li}>Home</li>
                    <li className={Styles.li}>Hygine</li>
                    <li className={Styles.li}>Toys</li>
                    <li className={Styles.li}>Home</li>
                </ul>
            </div>
            <div className={Styles.row3}>
                <button className={Styles.headerBtn}>
                    Shop with us
                </button>
                
                <button className={Styles.shoppingCartBtn}>
                    <img src={shoppingCart} alt="shopping cart" className={Styles.shoppingCart} />
                </button>
            </div>
        </div>
    )
}

export default Header;
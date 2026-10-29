import {  Drawer } from "@mui/material"
import { useContext, useState } from "react";
//import logo from "../assets/hero.png"
import { AiOutlineMenu } from "react-icons/ai";
import MenuLinks from "./MenuLinks";
import { Link } from "react-router-dom";
import { KogusummaContext } from "../context/KogusummaContext";
import { useTranslation } from "react-i18next";

function Menu({ tume, vahetaTeema }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const {kogusumma} = useContext(KogusummaContext);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <div className="menu">
      <span className="menu-mobile">
        <AiOutlineMenu onClick={toggleDrawer(true)} />
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <MenuLinks toggleDrawer={toggleDrawer} cssClass="menu-links-mobile" tume={tume} vahetaTeema={vahetaTeema} />
        </Drawer>
      </span>

      <Link to="/">
          <img className="logo" src="https://template.canva.com/EAGR4J_-jYM/2/0/1600w-zxo07UzxTDw.jpg" alt="Logo" />
      </Link>

      <span>{t('menu.total_amount')} {kogusumma.toFixed(2)}€</span>

      <span className="menu-desktop">
        <MenuLinks toggleDrawer={toggleDrawer} cssClass="menu-links-desktop" tume={tume} vahetaTeema={vahetaTeema} />
      </span>
    </div>
  )
}

export default Menu
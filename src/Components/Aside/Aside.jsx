import React, { useContext } from "react";
import "./Aside.scss";
import Logo1 from "../../Assets/Img/logo1.png";
import ListItem from "../Listitem/ListItem";
import { ContactIcon, IdeasIcon, OverviewIcon, TicketsIcon } from "../../Assets/Icon";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Aside = () => {
  const { t, i18n } = useTranslation()


  const handleChangLanguage = e =>{
    i18n.changeLanguage(e.target.value)
  }

  let x = localStorage.getItem("i18nextLng")
  return (
    <aside>
      <Link to="/" className="logo">
        <img src={Logo1} alt="" />
      </Link>
      <ul>
        <ListItem icon={<OverviewIcon />} href="/" content={t("overview")} />
        <ListItem icon={<TicketsIcon />} href="/tickets" content={t("tickets")} />
        <ListItem icon={<IdeasIcon />} href="/ideas" content={t("ideas")} />
        <ListItem icon={<ContactIcon />} href="/contacts" content={t("contacts")} />
        
        <li>
          <select defaultValue={x} onChange={handleChangLanguage}>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="tr">Turkish</option>
          </select>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
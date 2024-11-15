import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import catalog from "../images/catalog.svg";
import gears from "../images/gears.svg";
import phone from "../images/phone.svg";

import { faBook, faGear, faPhone } from "@fortawesome/free-solid-svg-icons";

export const cta = [
    {
        id: 1,
        icon: faBook,
        cta: "Spare Parts Catalog",
        navigate: '/catalog'
    },
    {
        id: 2,
        icon: faGear,
        cta: "Avail our Services",
        navigate: '/services'
    },
    {
        id: 3,
        icon: faPhone,
        cta: "Book a Call",
        navigate: '/contact'
    }
]
import React from "react";
import moment from "moment";

const Footer = () => {
    return (
        <footer className="bg-white py-4 text-center fixed bottom-0 left-0 w-full z-[100]">
            © {moment().year()}
        </footer>
    )
}

export default Footer;
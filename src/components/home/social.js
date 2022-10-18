import React from "react";
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-dashicons/whatsapp';
import telegramFill from '@iconify/icons-akar-icons/telegram-fill';


export default function Social() {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/" target="_blank" className="home__social-icon">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/Amira-MK" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://web.telegram.org/k/" className="home__social-icon" target="_blank">
                <Icon icon={telegramFill} />
            </a>
            <a href="https://web.whatsapp.com/" className="home__social-icon" target="_blank">
            <   Icon icon={whatsappIcon} />
            </a>
        </div>
    )
}
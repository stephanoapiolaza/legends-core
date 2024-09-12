import React from 'react';
import {Image} from "react-bootstrap";
import GooglePlay from "../../../assets/google-play-badge.png";

export const PlaystoreBtn = ({className = ''}: { className?: string}) => (
    <a target="_blank" className={className} href="https://apps.apple.com/us/app/arlo-secure-home-security/id1459289784?itsct=apps_box_badge&amp;itscg=30200">
        <Image fluid src={GooglePlay} alt="Download on the Play Store" style={{"height": "6.5rem"}}/>
    </a>
);
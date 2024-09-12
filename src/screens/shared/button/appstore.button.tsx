import React from 'react';
import {Image} from "react-bootstrap";

export const AppstoreBtn = ({className = 'mt-5'}: { className?: string}) => (
    <a target="_blank" href="https://apps.apple.com/us/app/arlo-secure-home-security/id1459289784?itsct=apps_box_badge&amp;itscg=30200" style={{"display": "inline-block", "overflow": "hidden", "borderRadius": "13px", "height": "83px"}}>
     <Image fluid src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/es-es?size=250x83&amp;releaseDate=1567555200" alt="Download on the App Store" style={{"borderRadius": "13px", "height": "83px"}} />
    </a>
);
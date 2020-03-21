import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
    faBoxOpen,
    faEnvelope,
    faLink,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faGithub,
    faGithubAlt,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faFacebook,
    faGithub,
    faGithubAlt,
    faInstagram,
    faLinkedinIn,
    faBoxOpen,
    faEnvelope,
    faLink,
);


export default {
    loadFontAwesome: () => {
        dom.watch();
    },
};
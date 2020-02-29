'use strict';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
    faBookOpen,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faClock,
    faEnvelope,
    faRss,
    faTag,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faFacebookF,
    faGithub,
    faGitlab,
    faInstagram,
    faKeybase,
    faLinkedin,
    faLinkedinIn,
    faMastodon,
    faMedium,
    faPinterest,
    faReddit,
    faRedditAlien,
    faStackOverflow,
    faTwitter,
    faWeibo,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faGithub,
    faLinkedin,
    faLinkedinIn,
);

export default {
    loadFontAwesome: () => {
        dom.watch();
    },
};
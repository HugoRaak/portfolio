import React from 'react';
import PropTypes from 'prop-types';

const IconLinkedin = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 42 42"
            fill="none"
            className={className}
        >
            <title>Linkedin</title>
            <path
                d="M38.3542 0.000291314H3.0625C2.66579 -0.00521831 2.27188 0.0674736 1.90326 0.214216C1.53465 0.360958 1.19855 0.578876 0.914161 0.855525C0.629774 1.13217 0.40267 1.46213 0.245816 1.82656C0.0889633 2.19099 0.00543415 2.58275 0 2.97946V38.6878C0.00543415 39.0845 0.0889633 39.4763 0.245816 39.8407C0.40267 40.2051 0.629774 40.5351 0.914161 40.8117C1.19855 41.0884 1.53465 41.3063 1.90326 41.453C2.27188 41.5998 2.66579 41.6725 3.0625 41.667H38.3542C38.7509 41.6725 39.1448 41.5998 39.5134 41.453C39.882 41.3063 40.2181 41.0884 40.5025 40.8117C40.7869 40.5351 41.014 40.2051 41.1708 39.8407C41.3277 39.4763 41.4112 39.0845 41.4167 38.6878V2.97946C41.4112 2.58275 41.3277 2.19099 41.1708 1.82656C41.014 1.46213 40.7869 1.13217 40.5025 0.855525C40.2181 0.578876 39.882 0.360958 39.5134 0.214216C39.1448 0.0674736 38.7509 -0.00521831 38.3542 0.000291314ZM12.5625 34.8753H6.3125V16.1253H12.5625V34.8753ZM9.4375 13.5003C8.57555 13.5003 7.7489 13.1579 7.1394 12.5484C6.52991 11.9389 6.1875 11.1122 6.1875 10.2503C6.1875 9.38834 6.52991 8.56169 7.1394 7.9522C7.7489 7.3427 8.57555 7.00029 9.4375 7.00029C9.8952 6.94838 10.3587 6.99374 10.7977 7.13338C11.2366 7.27303 11.6411 7.50381 11.9847 7.81063C12.3283 8.11745 12.6032 8.49337 12.7914 8.9138C12.9796 9.33422 13.0769 9.78966 13.0769 10.2503C13.0769 10.7109 12.9796 11.1664 12.7914 11.5868C12.6032 12.0072 12.3283 12.3831 11.9847 12.69C11.6411 12.9968 11.2366 13.2276 10.7977 13.3672C10.3587 13.5068 9.8952 13.5522 9.4375 13.5003ZM35.1042 34.8753H28.8542V24.8128C28.8542 22.292 27.9583 20.6461 25.6875 20.6461C24.9847 20.6513 24.3004 20.8717 23.7267 21.2777C23.1531 21.6838 22.7177 22.2559 22.4792 22.917C22.3161 23.4066 22.2455 23.9223 22.2708 24.4378V34.8545H16.0208C16.0208 34.8545 16.0208 17.8128 16.0208 16.1045H22.2708V18.7503C22.8386 17.7651 23.6644 16.9535 24.6593 16.4028C25.6541 15.8521 26.7803 15.5833 27.9167 15.6253C32.0833 15.6253 35.1042 18.3128 35.1042 24.0836V34.8753Z"
                fill="black"
                className="transition-fill dark:fill-white"
            />
        </svg>
    );
};

IconLinkedin.propTypes = {
    className: PropTypes.string,
};

export default IconLinkedin;

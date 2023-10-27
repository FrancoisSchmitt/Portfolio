import './index.css';
import { NavLink } from 'react-router-dom';

/**
 *
 * @param {*} mailContent
 * @returns
 */

export default function ButtonMailto(mailContent) {
      const { mailto, label } = mailContent;

      return (
            <>
                  <button className="button-mailto">
                        <NavLink
                              to="#"
                              onClick={(e) => {
                                    window.location.href = mailto;
                                    e.preventDefault();
                              }}
                        >
                              {label}
                        </NavLink>
                  </button>
            </>
      );
}

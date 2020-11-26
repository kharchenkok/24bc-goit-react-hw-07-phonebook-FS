import React from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={style.phonebook_wrapper}>
             <CSSTransition
        in={true}
        timeout={500}
        classNames={style}
        appear={true}
        unmountOnExit
      >
        <h1 className={style.phonebook_title}>Phonebook</h1>
      </CSSTransition>
            {children}
        </div>
    );
};

export default Layout;
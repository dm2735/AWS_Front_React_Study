/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import * as S from './style'
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
const MainAside = () => {
    return (
        <aside css={S.style}>
            <Navigation
            activeItemId="/"
            onSelect={({itemId}) => {
              
            }}
            items={[
             {
                title: "Home",
                itemId: '/',
                elemBefore: () => <HiHome/>
             },
             {
                title: "T1",
                itemId: '/t1',
                elemBefore: () => <GrTest/>
             },
             {
                title: "T2",
                itemId: '/t2',
                elemBefore: () => <GrTest/>
             },
             {
                title: "Sample",
                itemId: '/sample',
                elemBefore: () => <BsCardChecklist/>,
                subNav: [
                    {
                        title: "input1",
                        itemId: '/sample/imput/1',
                        elemBefore: () => <BiListCheck/>
                    }
                ]
             }
            ]}
          />
        </aside>
    );
};

export default MainAside;
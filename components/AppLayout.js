import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import styled from 'styled-components';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsloggedIn} /> : <LoginForm setIsLoggedIn={setIsloggedIn} />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="http://zenaislee.site" target="_blank" rel="noreferrer noopener">Zena</a>
                </Col>
            </Row>

        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppLayout;

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;
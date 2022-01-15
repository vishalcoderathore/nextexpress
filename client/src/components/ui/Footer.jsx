import { React, Fragment } from 'react';
import { Typography, Space } from 'antd';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Fragment>
      <Typography.Title
        level={5}
        style={{ color: 'white', textAlign: 'center' }}>
        Cryptoverse <br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to='/'>Home</Link>
        <Link to='/exchanges'>Exchanges</Link>
        <Link to='/news'>News</Link>
      </Space>
    </Fragment>
  );
}

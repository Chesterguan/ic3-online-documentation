import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import axios from 'axios' 

const LoginBox = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:50000/user/register');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(`username=${values.username}&password=${values.password}`);
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {

                    console.log(xhr.status); 
                    // console.log(xhr.statusText); 
                    // console.log(xhr.getAllResponseHeaders()); 
                    // console.log(xhr.response); 
                    alert(`create user ${values.username} successfully!`)

                } else {
                    console.log('error');
                    console.log(xhr.status);
                }
            }

        }

        
    };



    return (
        <>
            <div className={`w-[22rem] h-[18rem] bg-[#abb8c3] rounded-[1rem] px-[2rem] py-[2rem] flex items-center shadow-[2px_4px_5px_3px_rgba(8,8,3,0.3)]`}>
                <Form
                    name="normal_login"
                    className="login-form grid w-[18rem] h-[15rem] "
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            {
                                pattern: /^\w{3,20}$/,
                                message: 'Please input more than 3-20 numbers without special characters ',
                                validateTrigger: 'onBlur',
                            },

                        ]}
                        className={`justify-center`}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon mr-[1rem]" />}

                            placeholder="Username"
                        />

                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                        className={`justify-center `}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon mr-[1rem]" />}
                            type="password"
                            placeholder="Password"
                        // bordered={false}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>
                                <span className='ml-[1rem]'>Remember me</span>
                            </Checkbox>
                        </Form.Item>


                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-[5rem] h-[2.5rem] rounded-[0.5rem] bg-[#dd7338]">
                            Log in
                        </Button>
                        <div className='mt-[0.5rem] text-white'>
                            <a className="login-form-forgot  mt-[1rem]" href="">
                                Forgot password
                            </a>
                            <a className="block mt-[0.5rem]" href="">
                                Register now!
                            </a>
                        </div>

                    </Form.Item>
                </Form>
            </div>
        </>

    );
};

export default LoginBox;
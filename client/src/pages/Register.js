import { Button, Form, Input, Row, Col } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import back from '../pic/back.png';
import logooo from '../pic/logo2.png';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <Form layout="vertical" onFinish={onFinish} className="authentication-form">
        <div className='img-logooo'>
          <img src={logooo} alt="Medsync Logo" className='logo'/>
        </div>
        <Form.Item label="Name" name="name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
            {
              min: 8,
              message: 'Password must be at least 8 characters!',
            },
          ]}
        >
          <Input placeholder="Password" type="password" />
        </Form.Item>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Age" name="age">
              <Input placeholder="Age" type="number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Gender" name="gender">
              <Input placeholder="Gender" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Blood Type" name="bloodType">
              <Input placeholder="Blood Type" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Weight" name="weight">
          <Input placeholder="Weight" type="number" />
        </Form.Item>
        <Form.Item label="Height" name="height">
          <Input placeholder="Height" type="number" />
        </Form.Item>
        <Form.Item label="Birthday" name="birthday">
          <Input placeholder="Birthday" type="date" />
        </Form.Item>
        <Form.Item label="Phone Number" name="phoneNumber">
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Button className="primary-button my-2 full-width-button" htmlType="submit">
          REGISTER
        </Button>
        <Link to="/login" className="anchor mt-2">
          CLICK HERE TO LOGIN
        </Link>
      </Form>
      <div className='back-image'>
        <img src={back} alt="Medsync Logo" className='back'/>
      </div>
    </div>
  );
}

export default Register;

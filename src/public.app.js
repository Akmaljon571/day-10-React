import { Button, Form, Input, message, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import useStart from "./hooks/useStart";
import "antd/dist/antd.css";

function Public() {
  const key = "updatable";
  const { start, setStart, token, setToken } = useStart();
  const onFinish = (values) => {
    if (token !== '' && (values.password - 0) === 12345678) {
      let pros = {
        start: true,
        token: token.token,
      };
      setStart(pros)

      message.loading({
        content: "Loading...",
        key,
      });
      setTimeout(() => {
        message.success({
          content: "Loaded!",
          key,
          duration: 2,
        });
      }, 500);
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem('start', JSON.stringify(pros)) 
    } else {
      notification.open({
        message: "Xato xabarnoma",
        description:
          "Kechirasiz siz kirish kodini hato kiritdingiz!!!     Kirish Kodi : 12345678 ",
        icon: (
          <SmileOutlined
            style={{
              color: "#108ee9",
            }}
          />
        ),
      });
    }
  };

  useEffect(() => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((res) => res.json())
    .then((malumot) => setToken(malumot));
  });

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="BgImage">
      <div className="miniContainer">
        <h1 className="SingIn">Sing In</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Sing In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Public;

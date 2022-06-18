import { Button, Form, Input, Select } from "antd";
import { gql, useQuery, useMutation } from "@apollo/client";
import React from "react";
const { Option } = Select;

const GET_USERS = gql`
  query {
    users {
      id
      username
    }
  }
`;
const NEW_EVENT_MUTATION = gql`
  mutation addNewEvent($data: createEventInput) {
    createEvent(data: $data) {
      id
      title
    }
  }
`;

const NewPostForm = () => {
  const [saveEvent, { loading, data }] = useMutation(NEW_EVENT_MUTATION);
  const { loading: get_usersloading, data: userData } = useQuery(GET_USERS);

  const handleSubmit = async (values) => {
    console.log({ ...values, id: Math.random() });
    try {
      await saveEvent({
        variables: {
          data: { ...values, id: Math.random() },
        },
      });
    } finally {
      console.log("submitted");
    }
  };
  return (
    <Form
      name="basic"
      onFinish={handleSubmit}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="title" />
      </Form.Item>
      <Form.Item
        name="desc"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="description" />
      </Form.Item>
      <Form.Item
        name="date"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="date" />
      </Form.Item>
      <Form.Item
        name="from"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="from" />
      </Form.Item>

      <Form.Item
        name="to"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="to" />
      </Form.Item>
      <Form.Item
        name="location"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="location" />
      </Form.Item>

      <Form.Item name="user_id" rules={[{ required: true }]}>
        <Select
          disabled={get_usersloading}
          loading={get_usersloading}
          placeholder="Select a option and change input text above"
          allowClear
        >
          {userData &&
            userData.users.map((user) => (
              <Option key={user.id}>{user.username}</Option>
            ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewPostForm;

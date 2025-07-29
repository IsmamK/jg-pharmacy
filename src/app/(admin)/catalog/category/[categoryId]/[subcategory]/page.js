'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Table,
  Button,
  Input,
  Space,
  Modal,
  Form,
  Switch,
  Select,
  message,
  Pagination,
} from 'antd';
import {
  SearchOutlined,
  DeleteOutlined,
  PlusOutlined,
  EditOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import Head from 'next/head';
import Swal from 'sweetalert2';

const { Option } = Select;

const SubSubCategoryPage = () => {
  const { categoryId, subcategory } = useParams();
  const router = useRouter();
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [subsubcategories, setSubsubcategories] = useState([
    {
      id: '1',
      name: 'Multivitamins',
      image: '/images/multivitamin.jpg',
      description: 'Daily multivitamin support',
      published: true,
    },
    {
      id: '2',
      name: 'Protein Bars',
      image: '/images/proteinbars.jpg',
      description: 'Nutritious protein bars',
      published: true,
    },
    {
      id: '3',
      name: 'Herbal Teas',
      image: '/images/herbaltea.jpg',
      description: 'Soothing herbal teas',
      published: false,
    },
  ]);

  const filteredItems = subsubcategories.filter((item) => {
    const matchText =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase());
    const matchStatus =
      filterStatus === null ||
      item.published === (filterStatus === 'published');
    return matchText && matchStatus;
  });

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This sub-subcategory will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setSubsubcategories((prev) => prev.filter((item) => item.id !== id));
        message.success('Deleted successfully');
      }
    });
  };

  const handleBulkDelete = () => {
    if (selectedRowKeys.length === 0) {
      message.warning('No sub-subcategories selected.');
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'Selected sub-subcategories will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete all!',
    }).then((result) => {
      if (result.isConfirmed) {
        setSubsubcategories((prev) =>
          prev.filter((item) => !selectedRowKeys.includes(item.id))
        );
        setSelectedRowKeys([]);
        message.success('Selected sub-subcategories deleted');
      }
    });
  };

  const handleTogglePublished = (id) => {
    setSubsubcategories((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, published: !item.published } : item
      )
    );
  };

  const columns = [
    {
      title: '',
      dataIndex: 'id',
      width: 50,
      render: (id) => (
        <input
          type="checkbox"
          checked={selectedRowKeys.includes(id)}
          onChange={(e) => {
            setSelectedRowKeys((prev) =>
              e.target.checked
                ? [...prev, id]
                : prev.filter((key) => key !== id)
            );
          }}
        />
      ),
    },
    {
      title: 'Image',
      dataIndex: 'image',
      width: 120,
      render: (image) => (
        <div className="flex justify-center h-20">
          <img
            src={image}
            alt="Sub Subcategory"
            className="w-16 h-16 object-cover rounded-lg"
            onError={(e) => {
              e.target.src = '/images/default-category.jpg';
            }}
          />
        </div>
      ),
    },
    {
      title: 'Sub Subcategory Name',
      dataIndex: 'name',
      render: (text) => <span className="text-gray-800 font-medium">{text}</span>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      ellipsis: true,
      width: 300,
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: 'Published',
      dataIndex: 'published',
      width: 120,
      render: (published, record) => (
        <Switch
          checked={published}
          onChange={() => handleTogglePublished(record.id)}
          checkedChildren="Yes"
          unCheckedChildren="No"
        />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 120,
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined className="text-blue-500" />}
            onClick={() => showEditModal(record)}
          />
          <Button
            type="text"
            icon={<DeleteOutlined className="text-red-500" />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  const showEditModal = (item) => {
    setCurrentItem(item);
    form.setFieldsValue(item);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (currentItem) {
        const updated = subsubcategories.map((item) =>
          item.id === currentItem.id ? { ...item, ...values } : item
        );
        setSubsubcategories(updated);
        message.success('Sub-subcategory updated successfully');
      } else {
        const newItem = {
          id: `new-${Date.now()}`,
          ...values,
        };
        setSubsubcategories([...subsubcategories, newItem]);
        message.success('Sub-subcategory added successfully');
      }
      setIsModalVisible(false);
    });
  };

  return (
    <>
      <Head>
        <title>Sub Subcategory Management</title>
      </Head>
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => router.back()}
            className="flex items-center"
          >
            Back
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">
            Sub-Subcategories under: {subcategory}
          </h1>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="bg-blue-600"
            onClick={() => {
              setCurrentItem(null);
              form.resetFields();
              setIsModalVisible(true);
            }}
          >
            Add Sub-Subcategory
          </Button>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <Input
            placeholder="Search sub-subcategories..."
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-72"
            allowClear
          />
          <Select
            placeholder="Filter by status"
            allowClear
            value={filterStatus}
            onChange={(value) => setFilterStatus(value)}
            className="w-40"
          >
            <Option value="published">Published</Option>
            <Option value="unpublished">Unpublished</Option>
          </Select>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={handleBulkDelete}
            disabled={selectedRowKeys.length === 0}
          >
            Delete Selected
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={paginatedItems}
          rowKey="id"
          pagination={false}
        />

        <div className="flex justify-end mt-6">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredItems.length}
            onChange={(page, size) => {
              setCurrentPage(page);
              setPageSize(size);
            }}
            showSizeChanger
          />
        </div>

        <Modal
          title={currentItem ? 'Edit Sub-Subcategory' : 'Add Sub-Subcategory'}
          open={isModalVisible}
          onOk={handleOk}
          onCancel={() => setIsModalVisible(false)}
          okText={currentItem ? 'Update' : 'Create'}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="name"
              label="Sub-Subcategory Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item
              name="published"
              label="Published"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image URL"
              rules={[{ required: true }]}
            >
              <Input placeholder="https://example.com/image.jpg" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default SubSubCategoryPage;
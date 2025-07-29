"use client";

import { Table, Button, Input, Space, Modal, Form, Upload, Switch, Select, message, Pagination } from 'antd';
import { SearchOutlined, DeleteOutlined, PlusOutlined, EditOutlined, UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'; // ✅ Fixed here
import { useState } from 'react';
import Head from 'next/head';

const { Option } = Select;

const CategoriesPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [categories, setCategories] = useState([
    { id: '1', name: 'Medicine', image: '/images/medicine.avif', description: 'Prescription and over-the-counter medications', published: true },
    { id: '2', name: 'Lab Tests', image: '/images/lab-test.jpg', description: 'Diagnostic tests and health checkups', published: true },
    { id: '3', name: 'Beauty', image: '/images/beauty.jpg', description: 'Skincare and personal grooming products', published: false },
    { id: '4', name: 'Sexual Wellness', image: '/images/sexual wellness.webp', description: 'Products for intimate health', published: true },
    { id: '5', name: 'Health Care', image: '/images/health care.jpg', description: 'Medical devices and first aid', published: true },
    { id: '6', name: 'Baby & Mom Care', image: '/images/baby-care.jpg', description: 'Essentials for mothers and babies', published: true },
    { id: '7', name: 'Herbal', image: '/images/herbal.png', description: 'Natural and Ayurvedic remedies', published: false },
    { id: '8', name: 'Home Care', image: '/images/home care.jpg', description: 'Home health and hygiene products', published: true },
    { id: '9', name: 'Supplements', image: '/images/supplements.jpg', description: 'Vitamins and nutritional supplements', published: true },
    { id: '10', name: 'Food Nutrition', image: '/images/Food-and-Nutrition.webp', description: 'Healthy foods and nutritional products', published: true },
    { id: '11', name: 'Fitness', image: '/images/fitness.jpg', description: 'Exercise equipment and accessories', published: true },
    { id: '12', name: 'Elderly Care', image: '/images/elderly care.webp', description: 'Products for senior health needs', published: true }
  ]);

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchText.toLowerCase()) || 
                          category.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = filterStatus === null || category.published === (filterStatus === 'published');
    return matchesSearch && matchesStatus;
  });

  const paginatedCategories = filteredCategories.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
            if (e.target.checked) {
              setSelectedRowKeys([...selectedRowKeys, id]);
            } else {
              setSelectedRowKeys(selectedRowKeys.filter(key => key !== id));
            }
          }}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
      )
    },
    {
      title: 'Image',
      dataIndex: 'image',
      width: 120,
      render: (image) => (
        <div className="flex items-center justify-center h-20">
          <img 
            src={image} 
            alt="Category" 
            className="w-16 h-16 object-cover rounded-lg shadow-sm"
            onError={(e) => {
              e.target.src = '/images/default-category.jpg';
            }}
          />
        </div>
      )
    },
    {
      title: 'Category Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => (
        <a 
          onClick={() => router.push(`/catalog/category/${record.id}`)}
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          {text}
        </a>
      )
    },
    {
      title: 'Description',
      dataIndex: 'description',
      ellipsis: true,
      width: 300,
      render: (text) => <span className="text-gray-600">{text}</span>
    },
    {
      title: 'Published',
      dataIndex: 'published',
      width: 120,
      filters: [
        { text: 'Published', value: 'published' },
        { text: 'Unpublished', value: 'unpublished' }
      ],
      filteredValue: filterStatus ? [filterStatus] : null,
      onFilter: (value, record) => {
        if (value === 'published') return record.published;
        if (value === 'unpublished') return !record.published;
        return true;
      },
      render: (published) => (
        <Switch 
          checked={published} 
          checkedChildren="Yes" 
          unCheckedChildren="No"
          className="bg-gray-300"
          style={{ backgroundColor: published ? '#2177b3' : '#cccccc' }}
        />
      )
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
            className="hover:bg-blue-50 rounded-lg"
          />
          <Button 
            type="text" 
            icon={<DeleteOutlined className="text-red-500" />} 
            onClick={() => handleDelete(record.id)}
            className="hover:bg-red-50 rounded-lg"
          />
        </Space>
      )
    }
  ];

  const showEditModal = (category) => {
    setCurrentCategory(category);
    form.setFieldsValue({
      name: category.name,
      description: category.description,
      published: category.published,
      image: category.image,
      supervision: category.supervision || undefined // ✅ Pre-fill supervision
    });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (currentCategory) {
        const updatedCategories = categories.map(category => {
          if (category.id === currentCategory.id) {
            return {
              ...category,
              name: values.name,
              description: values.description,
              published: values.published,
              image: values.image,
              supervision: values.supervision
            };
          }
          return category;
        });
        setCategories(updatedCategories);
        message.success('Category updated successfully');
      } else {
        const newCategory = {
          id: `new-${Date.now()}`,
          name: values.name,
          description: values.description,
          published: values.published,
          image: values.image,
          supervision: values.supervision
        };
        setCategories([...categories, newCategory]);
        message.success('Category added successfully');
      }
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(category => category.id !== id));
    message.success('Category deleted successfully');
  };

  const handleBulkDelete = () => {
    setCategories(categories.filter(category => !selectedRowKeys.includes(category.id)));
    setSelectedRowKeys([]);
    message.success('Selected categories deleted successfully');
  };

  const handleAddNew = () => {
    setCurrentCategory(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleImport = () => {
    message.info('Import functionality will be implemented');
  };

  const handleExport = () => {
    message.info('Export functionality will be implemented');
  };

  const handleResetFilters = () => {
    setSearchText('');
    setFilterStatus(null);
    setCurrentPage(1);
  };

  return (
    <>
      <Head>
        <title>Manage Categories | Your Brand</title>
        <meta name="description" content="Manage your product categories" />
      </Head>

      <div className="p-6 bg-white rounded-lg shadow-sm min-h-screen">
        {/* Header */}
        <div className="flex flex-col space-y-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Categories Management</h1>
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <Button type="primary" icon={<PlusOutlined />} onClick={handleAddNew} className="bg-blue-600 hover:bg-blue-700 border-blue-600" size="large">
                Add Category
              </Button>
              <Button icon={<UploadOutlined />} onClick={handleImport} className="text-blue-600 border-blue-600 hover:bg-blue-50" size="large">Import</Button>
              <Button icon={<DownloadOutlined />} onClick={handleExport} className="text-blue-600 border-blue-600 hover:bg-blue-50" size="large">Export</Button>
            </div>
            {selectedRowKeys.length > 0 && (
              <Button danger icon={<DeleteOutlined />} onClick={handleBulkDelete} size="large">
                Delete Selected ({selectedRowKeys.length})
              </Button>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col space-y-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <Input
              placeholder="Search categories..."
              prefix={<SearchOutlined className="text-gray-400" />}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setCurrentPage(1);
              }}
              className="w-72 h-10"
              allowClear
            />
            <Select
              placeholder="Filter by status"
              allowClear
              value={filterStatus}
              onChange={(value) => {
                setFilterStatus(value);
                setCurrentPage(1);
              }}
              className="w-40 h-10"
            >
              <Option value="published">Published</Option>
              <Option value="unpublished">Unpublished</Option>
            </Select>
            <Button onClick={handleResetFilters} className="h-10">Reset</Button>
          </div>
        </div>

        {/* Table */}
        <div className="mb-6">
          <Table
            columns={columns}
            dataSource={paginatedCategories}
            rowKey="id"
            pagination={false}
            scroll={{ x: 1000 }}
            rowSelection={{ selectedRowKeys, onChange: setSelectedRowKeys }}
            className="border border-gray-200 rounded-lg overflow-hidden"
          />
        </div>

        {/* Pagination */}
        <div className="flex justify-end">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredCategories.length}
            onChange={(page, size) => {
              setCurrentPage(page);
              setPageSize(size);
            }}
            showSizeChanger
            pageSizeOptions={['10', '20', '50', '100']}
          />
        </div>

        {/* Modal */}
        <Modal
          title={currentCategory ? "Edit Category" : "Add New Category"}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={700}
          footer={[
            <Button key="back" onClick={handleCancel} className="h-10">Cancel</Button>,
            <Button key="submit" type="primary" onClick={handleOk} className="bg-blue-600 hover:bg-blue-700 border-blue-600 h-10">
              {currentCategory ? "Update" : "Create"}
            </Button>,
          ]}
        >
          <Form form={form} layout="vertical" className="space-y-4">
            <Form.Item name="name" label="Category Name" rules={[{ required: true, message: 'Please input the category name!' }]}>
              <Input placeholder="Enter category name" className="h-10" />
            </Form.Item>
            <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input the description!' }]}>
              <Input.TextArea rows={4} placeholder="Enter category description" />
            </Form.Item>
            <Form.Item name="supervision" label="Supervision">
              <Select placeholder="Select supervision (optional)" allowClear>
                <Option value="Featured Product">Featured Product</Option>
                <Option value="Popular Product">Popular Product</Option>
              </Select>
            </Form.Item>
            <Form.Item name="published" label="Published" valuePropName="checked">
              <Switch checkedChildren="Published" unCheckedChildren="Unpublished" className="bg-gray-300" />
            </Form.Item>
            <Form.Item name="image" label="Category Image" rules={[{ required: true, message: 'Please upload an image!' }]}>
              <Upload
                listType="picture-card"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={(info) => {
                  if (info.file.status !== 'uploading') {
                    const reader = new FileReader();
                    reader.onload = () => {
                      form.setFieldsValue({ image: reader.result });
                    };
                    reader.readAsDataURL(info.file.originFileObj);
                  }
                }}
              >
                {form.getFieldValue('image') ? (
                  <img src={form.getFieldValue('image')} alt="Category" className="w-full h-32 object-cover rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center justify-center h-32">
                    <PlusOutlined className="text-2xl text-gray-400" />
                    <div className="mt-2 text-gray-500">Upload Image</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default CategoriesPage;

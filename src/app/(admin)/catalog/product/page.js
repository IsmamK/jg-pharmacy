"use client";

import { useState } from "react";
import {
  DownloadOutlined,
  UploadOutlined,
  DeleteOutlined,
  PlusOutlined,
  SearchOutlined,
  CloseOutlined,
  EditOutlined,
  FilterOutlined,
  StarFilled,
} from "@ant-design/icons";
import dayjs from "dayjs";
import {
  Button,
  Card,
  Table,
  Input,
  Select,
  Space,
  Tag,
  Modal,
  Form,
  Pagination,
  Row,
  Col,
  Typography,
  Divider,
  Popconfirm,
  message,
  Image,
  Tooltip,
  Switch,
  InputNumber,
  DatePicker,
} from "antd";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const ProductDashboard = () => {
  const [form] = Form.useForm();

  const initialProducts = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    category: ["Electronics", "Fashion", "Home & Kitchen"][
      Math.floor(Math.random() * 3)
    ],
    subcategory: [
      ["Smartphones", "Laptops", "Headphones"],
      ["Men's Wear", "Women's Wear", "Accessories"],
      ["Furniture", "Appliances", "Decor"],
    ][Math.floor(Math.random() * 3)][Math.floor(Math.random() * 3)],
    image:
      "https://getbyweb.com/wp-content/uploads/2024/09/Fogg-Fine-Bay-Breeze.webp",
    name: [
      "Wireless Headphones Pro X",
      "Smart Watch Series 5",
      "Premium Phone Case",
      "Bluetooth Speaker 360",
      "Fitness Tracker Max",
    ][Math.floor(Math.random() * 5)],
    price: Math.floor(Math.random() * 200) + 50,
    discountPrice: Math.floor(Math.random() * 150) + 30,
    collection: ["Summer Collection", "Winter Special", "New Arrivals"][
      Math.floor(Math.random() * 3)
    ],
    status: ["Published", "Draft", "Archived"][Math.floor(Math.random() * 3)],
    stock: Math.floor(Math.random() * 100),
    offer: `${Math.floor(Math.random() * 50) + 10}% OFF`,
    expiryDate: new Date(
      Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    ),
    ratings: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 100),
    sku: `SKU-${Math.floor(Math.random() * 10000)}`,
    description:
      "High-quality product with premium features and excellent durability.",
    featured: Math.random() > 0.5,
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000
    ),
  }));

  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const productsPerPage = 8;

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const subcategories = {
    Electronics: ["Smartphones", "Laptops", "Headphones"],
    Fashion: ["Men's Wear", "Women's Wear", "Accessories"],
    "Home & Kitchen": ["Furniture", "Appliances", "Decor"],
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.collection.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    message.success("Product deleted successfully");
  };

  const handleBulkDelete = () => {
    setLoading(true);
    setTimeout(() => {
      setProducts(
        products.filter((product) => !selectedRowKeys.includes(product.id))
      );
      setSelectedRowKeys([]);
      setLoading(false);
      message.success("Selected products deleted successfully");
    }, 1000);
  };

  const handleEdit = (values) => {
    setProducts(
      products.map((p) =>
        p.id === currentProduct.id ? { ...p, ...values } : p
      )
    );
    setIsModalOpen(false);
    message.success("Product updated successfully");
  };

  const handleAdd = (values) => {
    const newProduct = {
      ...values,
      id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      ratings: parseFloat(values.ratings).toFixed(1),
      price: parseFloat(values.price),
      discountPrice: parseFloat(values.discountPrice),
      stock: parseInt(values.stock),
      reviews: 0,
      createdAt: new Date(),
    };

    setProducts([newProduct, ...products]);
    setIsModalOpen(false);
    form.resetFields();
    message.success("Product added successfully");
  };

  const handleFeaturedChange = (checked, record) => {
    setProducts(
      products.map((p) =>
        p.id === record.id ? { ...p, featured: checked } : p
      )
    );
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 80,
      fixed: "left",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Image",
      dataIndex: "image",
      width: 100,
      render: (image) => (
        <Image
          src={image}
          width={60}
          height={60}
          style={{ borderRadius: 4 }}
          preview={false}
        />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "name",
      width: 200,
      fixed: "left",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Category",
      dataIndex: "category",
      width: 150,
      filters: categories
        .filter((c) => c !== "All")
        .map((c) => ({ text: c, value: c })),
      onFilter: (value, record) => record.category === value,
    },
    {
      title: "Subcategory",
      dataIndex: "subcategory",
      width: 150,
    },
    {
      title: "Price",
      width: 150,
      render: (_, record) => (
        <Space direction="vertical" size={0}>
          <Text strong>${record.discountPrice.toFixed(2)}</Text>
          <Text delete type="secondary">
            ${record.price.toFixed(2)}
          </Text>
        </Space>
      ),
      sorter: (a, b) => a.discountPrice - b.discountPrice,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 120,
      render: (status) => (
        <Tag
          color={
            status === "Published"
              ? "green"
              : status === "Draft"
              ? "orange"
              : "red"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Stock",
      dataIndex: "stock",
      width: 100,
      render: (stock) => (
        <Tag color={stock > 50 ? "green" : stock > 20 ? "orange" : "red"}>
          {stock}
        </Tag>
      ),
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: "Offer",
      dataIndex: "offer",
      width: 120,
    },
    {
      title: "Expiry",
      dataIndex: "expiryDate",
      width: 120,
      render: (date) => date.toLocaleDateString(),
      sorter: (a, b) => a.expiryDate - b.expiryDate,
    },
    {
      title: "Rating",
      dataIndex: "ratings",
      width: 120,
      render: (ratings, record) => (
        <Space>
          <StarFilled style={{ color: "#faad14" }} />
          <Text>
            {ratings} ({record.reviews})
          </Text>
        </Space>
      ),
      sorter: (a, b) => a.ratings - b.ratings,
    },
    {
      title: "Featured",
      dataIndex: "featured",
      width: 100,
      render: (featured, record) => (
        <Switch
          checked={featured}
          checkedChildren="Yes"
          unCheckedChildren="No"
          onChange={(checked) => handleFeaturedChange(checked, record)}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: 120,
      fixed: "right",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Edit">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => {
                setCurrentProduct(record);
                form.setFieldsValue({
                  ...record,
                  expiryDate: dayjs(record.expiryDate),
                  supervision: record.supervision || undefined,
                });

                setIsModalOpen(true);
              }}
            />
          </Tooltip>
          <Popconfirm
            title="Delete this product?"
            description="This action cannot be undone"
            onConfirm={() => handleDelete(record.id)}
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <Tooltip title="Delete">
              <Button type="text" danger icon={<DeleteOutlined />} />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Card variant="outlined" style={{ marginBottom: 24 }}>
        <Title level={3} style={{ marginBottom: 8 }}>
          Product Management
        </Title>
        <Text type="secondary">Manage your product catalog and inventory</Text>
      </Card>

      <Card variant="outlined" style={{ marginBottom: 24 }}>
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col>
            <Space>
              <Button type="primary" icon={<DownloadOutlined />}>
                Export
              </Button>
              <Button icon={<UploadOutlined />}>Import</Button>
              <Button>Bulk Action</Button>
            </Space>
          </Col>
          <Col>
            <Space>
              <Popconfirm
                title="Delete selected products?"
                description="This will permanently delete the selected items"
                onConfirm={handleBulkDelete}
                disabled={selectedRowKeys.length === 0}
              >
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  disabled={selectedRowKeys.length === 0}
                  loading={loading}
                >
                  Delete Selected
                </Button>
              </Popconfirm>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  setCurrentProduct(null);
                  form.resetFields();
                  setIsModalOpen(true);
                }}
              >
                Add Product
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>

      <Card variant="outlined" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Input
              placeholder="Search products..."
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              allowClear
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Select
              style={{ width: "100%" }}
              placeholder="Select category"
              value={selectedCategory}
              onChange={setSelectedCategory}
            >
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Space>
              <Button type="primary" icon={<FilterOutlined />}>
                Filter
              </Button>
              <Button
                icon={<CloseOutlined />}
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Reset
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>

      <Card bordered={false}>
        <Table
          columns={columns}
          dataSource={currentProducts}
          rowKey="id"
          rowSelection={{
            selectedRowKeys,
            onChange: setSelectedRowKeys,
          }}
          pagination={false}
          scroll={{ x: 1800 }}
          bordered
        />
        <div style={{ marginTop: 24, textAlign: "right" }}>
          <Pagination
            current={currentPage}
            total={filteredProducts.length}
            pageSize={productsPerPage}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} products`
            }
          />
        </div>
      </Card>

      {/* Product Modal */}
      <Modal
        title={
          <Title level={4}>
            {currentProduct ? "Edit Product" : "Add New Product"}
          </Title>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  currentProduct ? handleEdit(values) : handleAdd(values);
                })
                .catch((info) => {
                  console.log("Validation failed:", info);
                });
            }}
          >
            {currentProduct ? "Save Changes" : "Add Product"}
          </Button>,
        ]}
        width={900}
      >
        <Divider />
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            status: "Published",
            ratings: "4.0",
            stock: 0,
            price: 0,
            discountPrice: 0,
            featured: false,
          }}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Product Name"
                rules={[
                  { required: true, message: "Please enter product name" },
                ]}
              >
                <Input placeholder="Enter product name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: "Please select category" }]}
              >
                <Select
                  placeholder="Select category"
                  onChange={() =>
                    form.setFieldsValue({ subcategory: undefined })
                  }
                >
                  {Object.keys(subcategories).map((category) => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="subcategory"
                label="Subcategory"
                rules={[
                  { required: true, message: "Please select subcategory" },
                ]}
              >
                <Select placeholder="Select subcategory">
                  {form.getFieldValue("category") &&
                    subcategories[form.getFieldValue("category")].map((sub) => (
                      <Option key={sub} value={sub}>
                        {sub}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="collection" label="Collection">
                <Input placeholder="Enter collection name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name="price"
                label="Original Price ($)"
                rules={[{ required: true, message: "Please enter price" }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  placeholder="0.00"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="discountPrice"
                label="Discount Price ($)"
                rules={[
                  { required: true, message: "Please enter discount price" },
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  placeholder="0.00"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="offer" label="Offer">
                <Input placeholder="e.g. 20% OFF" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="supervision" label="Supervision">
                <Select placeholder="Select supervision (optional)" allowClear>
                  <Option value="Featured Product">Featured Product</Option>
                  <Option value="Popular Product">Popular Product</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name="stock"
                label="Stock Quantity"
                rules={[{ required: true, message: "Please enter stock" }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  placeholder="0"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="status" label="Status">
                <Select>
                  <Option value="Published">Published</Option>
                  <Option value="Draft">Draft</Option>
                  <Option value="Archived">Archived</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="featured"
                label="Featured"
                valuePropName="checked"
              >
                <Switch checkedChildren="Yes" unCheckedChildren="No" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name="ratings"
                label="Rating"
                rules={[{ required: true, message: "Please enter rating" }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  max={5}
                  step={0.1}
                  placeholder="0.0"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="expiryDate" label="Offer Expiry">
                <DatePicker
                  style={{ width: "100%" }}
                  disabledDate={(current) => {
                    return current && current < dayjs().startOf("day");
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="sku"
                label="SKU"
                rules={[{ required: true, message: "Please enter SKU" }]}
              >
                <Input placeholder="Product SKU" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="description" label="Description">
            <TextArea rows={4} placeholder="Enter product description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductDashboard;

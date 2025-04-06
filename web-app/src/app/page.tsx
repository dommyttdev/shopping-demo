"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Carousel, Typography, Card, Row, Col, Divider, Spin } from "antd";
import { fetchFeaturedProducts } from "./services/productService";
import type { Product } from "./services/productService";


const { Title, Paragraph } = Typography;

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await fetchFeaturedProducts();
        setFeaturedProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <Carousel autoplay className={styles.carousel}>
        <div>
          <div className={styles.heroSlide}>
            <div className={styles.heroContent}>
              <Title level={1}>Dommy オンラインストアへようこそ</Title>
              <Paragraph>最新ガジェットが大幅値引きで販売中</Paragraph>
              <Button type="primary" size="large">
                いますぐ購入
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.heroSlide}>
            <div className={styles.heroContent}>
              <Title level={1}>サマーコレクション</Title>
              <Paragraph>今夏おすすめの新商品が販売開始！</Paragraph>
              <Button type="primary" size="large">
                さがす
              </Button>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Featured Products Section */}
      <div className={styles.section}>
        <Title level={2}>Featured Products</Title>
        <Divider />
        
        {loading ? (
          <div className={styles.loadingContainer}>
            <Spin size="large" />
          </div>
        ) : (
          <>
            <Row gutter={[16, 16]}>
              {featuredProducts.map((product) => (
                <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                  <Card
                    hoverable
                    cover={
                      <div className={styles.productImageContainer}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={200}
                          style={{
                            objectFit: "cover"
                          }}
                          className={styles.productImage}
                        />
                      </div>
                    }
                  >
                    <Card.Meta
                      title={product.name}
                      description={`¥${product.price.toLocaleString()}`}
                    />
                    <Button type="primary" style={{ marginTop: 16 }} block>
                      Add to Cart
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
            
            <div style={{ textAlign: "center", margin: "24px 0" }}>
              <Button type="default" size="large">
                View All Products
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
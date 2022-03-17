 package com.example.demo.model;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="cart")
public class Cart{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //@Column(name = "product_id")
    //private @NotBlank Long productId;
    private String productId;

    //@Column(name = "user_id")
    //private @NotBlank Long userId;
    private String userId;

    private int quantity;
    private String productName;
    private String price;

    //@Column(name="created_date")
    private Date createDate;

   // @ManyToOne
   // @JoinColumn(name = "product_id", referencedColumnName = "id", inserttable = false, updatable = false)
   // private Product product;
    public Cart() {
    }
  
    public Cart(Long id,String productId, String userId, int quantity, String productName, String price, Date createDate) {
        this.id = id;
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.productName = productName;
        this.price = price;
        this.createDate = createDate;
    }

    public Cart(String productId, String userId, int quantity, String productName, String price, Date createDate) {
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.productName = productName;
        this.price = price;
        this.createDate = createDate;
    }

    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduct() {
        return productId;
    }

    public void setProduct(String productId) {
        this.productId = productId;
    }

    public String getUser() {
        return userId;
    }

    public void setUser(String userId) {
        this.userId = userId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
    
    @Override
    public String toString() {
        return "cartModel [Id=" + id + ", createDate=" + createDate + ", price=" + price + ", product=" + productId
                + ", productName=" + productName + ", quantity=" + quantity + ", user=" + userId + "]";
    }    

}

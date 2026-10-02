/*1. Product name with category name and supplier name */
  SELECT 
    p.product_name, 
    c.category_name, 
    s.supplier_name
FROM products p
JOIN categories c ON p.category_id = c.category_id
JOIN suppliers s ON p.supplier_id = s.supplier_id;


/*2. Orders with full customer name */
  SELECT 
    o.order_id, 
    o.order_date, 
    CONCAT(c.first_name, ' ', c.last_name) AS full_name
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id;


/*3. Total amount per order */
  SELECT 
    order_id, 
    SUM(quantity * unit_price) AS total_amount
FROM order_items
GROUP BY order_id;

/*4. Total amount spent by each customer */
  SELECT 
    c.customer_id, 
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    SUM(oi.quantity * oi.unit_price) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY c.customer_id, customer_name;

/*5. Products never ordered */
  SELECT 
    p.product_id, 
    p.product_name
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
WHERE oi.product_id IS NULL;

/*6. Customers with more than 2 orders*/
  SELECT 
    c.customer_id, 
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    COUNT(o.order_id) AS total_orders
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, customer_name
HAVING COUNT(o.order_id) > 2;

/*7. Average product rating (at least 2 reviews)  */
  SELECT 
    p.product_id, 
    p.product_name, 
    AVG(r.rating) AS avg_rating
FROM products p
JOIN reviews r ON p.product_id = r.product_id
GROUP BY p.product_id, p.product_name
HAVING COUNT(r.review_id) >= 2;

/*8. Top 3 products by total quantity sold*/
SELECT 
    p.product_id, 
    p.product_name, 
    SUM(oi.quantity) AS total_quantity_sold
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name
ORDER BY total_quantity_sold DESC
LIMIT 3;


/*9. Total revenue per category*/
SELECT 
    c.category_id, 
    c.category_name, 
    SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM categories c
JOIN products p ON c.category_id = p.category_id
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY c.category_id, c.category_name;

/*10. Customers spending above average customer spending*/
WITH customer_spending AS (
    SELECT 
        c.customer_id, 
        CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
        SUM(oi.quantity * oi.unit_price) AS total_spent
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    JOIN order_items oi ON o.order_id = oi.order_id
    GROUP BY c.customer_id, customer_name
)
SELECT customer_id, customer_name, total_spent
FROM customer_spending
WHERE total_spent > (SELECT AVG(total_spent) FROM customer_spending);

/*11. Orders without a completed payment*/
SELECT 
    o.order_id, 
    o.order_date
FROM orders o
LEFT JOIN payments p ON o.order_id = p.order_id AND p.status = 'Completed'
WHERE p.payment_id IS NULL;

/*12. Top revenue-generating supplier*/
SELECT 
    s.supplier_id, 
    s.supplier_name, 
    SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM suppliers s
JOIN products p ON s.supplier_id = p.supplier_id
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY s.supplier_id, s.supplier_name
ORDER BY total_revenue DESC
LIMIT 1;







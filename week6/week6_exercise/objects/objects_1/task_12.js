/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

const orders = [
  { orderId: 101, customerName: "John Doe", totalAmount: 250.75, status: "completed" },
  { orderId: 102, customerName: "Jane Smith", totalAmount: 120.50, status: "pending" },
  { orderId: 103, customerName: "Alice Johnson", totalAmount: 450.00, status: "completed" },
  { orderId: 104, customerName: "Bob Brown", totalAmount: 89.99, status: "pending" },
  { orderId: 105, customerName: "Mary Davis", totalAmount: 35.10, status: "completed" }
];

// Using map method
orders.map(order => {
  if (order.status === 'completed') {
    console.log(order);
  }
});

// Using filter method
const filteredOrders = orders.filter(order => order.status == 'completed');
console.log(filteredOrders);
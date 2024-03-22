const data = [
  {
    "id": 1,
    "name": "Fresh Foods Inc.",
    "image": "fresh_foods.jpg",
    "address": "123 Green Street, Cityville",
    "products": [
      {
        "id": 1,
        "name": "Red Apple",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€2.50",
        "discount": 0
      },
      {
        "id": 2,
        "name": "Basmati Rice",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€3.80",
        "discount": 0
      },
      {
        "id": 3,
        "name": "Organic Milk",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€1.99",
        "discount": 0
      },
      {
        "id": 4,
        "name": "Fresh Salmon",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€8.50",
        "discount": 0
      },
      {
        "id": 5,
        "name": "Spinach Leaves",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€1.20",
        "discount": 0
      },
      {
        "id": 6,
        "name": "Whole Wheat Bread",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€2.00",
        "discount": 0
      }
    ]
  },
  {
    "id": 2,
    "name": "Tea Emporium",
    "image": "tea_emporium.jpg",
    "address": "456 Tea Avenue, Teatown",
    "products": [
      {
        "id": 1,
        "name": "Black Tea",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€4.20",
        "discount": 0
      },
      {
        "id": 2,
        "name": "Green Tea",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€3.50",
        "discount": 0
      },
      {
        "id": 3,
        "name": "Chamomile Tea",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€3.80",
        "discount": 0
      },
      {
        "id": 4,
        "name": "Peppermint Tea",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€3.00",
        "discount": 0
      },
      {
        "id": 5,
        "name": "Earl Grey Tea",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€4.50",
        "discount": 0
      },
      {
        "id": 6,
        "name": "White Tea",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€5.20",
        "discount": 0
      }
    ]
  },
  {
    "id": 3,
    "name": "Organic Farm",
    "image": "organic_farm.jpg",
    "address": "789 Organic Lane, Farmville",
    "products": [
      {
        "id": 1,
        "name": "Organic Carrots",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€2.00",
        "discount": 0
      },
      {
        "id": 2,
        "name": "Organic Potatoes",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€1.50",
        "discount": 0
      },
      {
        "id": 3,
        "name": "Organic Tomatoes",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€3.00",
        "discount": 0
      },
      {
        "id": 4,
        "name": "Organic Kale",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€2.50",
        "discount": 0
      },
      {
        "id": 5,
        "name": "Organic Lettuce",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€2.20",
        "discount": 0
      },
      {
        "id": 6,
        "name": "Organic Cucumbers",
        "image": "https://images.unsplash.com/photo-1621800544619-0beb8cc67ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D",
        "price": "€2.80",
        "discount": 0
      }
    ]
  }
]

export default data;
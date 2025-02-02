# Multilingual FAQ Management API

##  Overview
This is a REST API for managing FAQs with multilingual support. The API allows users to select a language using the `?lang=` query parameter. To ensure efficient responses, translations are cached using Redis.

##  Features
- CRUD operations for FAQs
- Multi-language translation support
- Fast responses using pre-translation
- Caching mechanism using Redis for improved performance
- Built with **Node.js**, **Express.js**, and **Redis**

---

##  Installation Steps
### Prerequisites
Ensure you have the following installed:
- **Node.js** (>= v14)
- **Redis** (running instance required)

### 1️ Clone the Repository
```sh
 git clone https://github.com/your-username/multilingual-faq-api.git
 cd multilingual-faq-api
```

### 2️⃣ Install Dependencies
```sh
 npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
REDIS_HOST=localhost
REDIS_PORT=6379
DEFAULT_LANGUAGE=en
```

### 4️⃣ Start the Server
```sh
 npm start
```
The API will run at `http://localhost:5000`

---

##  API Usage Examples

### 1️⃣ Create a New FAQ
**Request:**
```http
POST /faqs
Content-Type: application/json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
  "language": "en"
}
```

### 2️⃣ Retrieve FAQs (with language selection)
**Request:**
```http
GET /faqs?lang=fr
```

**Response:**
```json
[
  {
    "id": 1,
    "question": "Qu'est-ce que Node.js?",
    "answer": "Node.js est un environnement d'exécution JavaScript basé sur le moteur V8 de Chrome."
  }
]
```

### 3️⃣ Update an FAQ
**Request:**
```http
PUT /faqs/1
Content-Type: application/json
{
  "answer": "Updated Answer Here"
}
```

### 4️⃣ Delete an FAQ
**Request:**
```http
DELETE /faqs/1
```

---

##  Caching Mechanism
- FAQs and their translations are stored in **Redis** to enhance performance.
- Redis invalidation occurs when an FAQ is updated or deleted.

---




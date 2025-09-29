# Postman & cURL

## 1) What is Postman?

* A GUI client to **send HTTP requests** (GET/POST/PUT/PATCH/DELETE, etc.)
* Great for **testing APIs**, saving requests as **Collections**, using **Environments** (e.g., `DEV`, `PROD`), and generating **code snippets** like **cURL**.

---

## 2) Quick Workflow in Postman

1. **Create a Request**

   * Choose method (GET/POST/PUT/PATCH/DELETE).
   * Enter URL (e.g., `https://api.example.com/users`).
2. **Add Params / Body / Headers**

   * Params tab → query strings (`?page=1`).
   * Body tab → JSON (`raw` + `application/json`).
   * Headers tab → `Content-Type`, `Authorization`, etc.
3. **Send** → Inspect **Status**, **Time**, **Size**, and **Response JSON**.
4. **Save** into a **Collection** for reuse.
5. **Generate cURL** → Click **`</> Code`** → choose **cURL** → copy.

---

## 3) HTTP Methods

| Method | Typical Use                           | Idempotent? |
| ------ | ------------------------------------- | ----------- |
| GET    | Read a resource (no body)             | ✅           |
| POST   | Create a resource / perform an action | ❌           |
| PUT    | Full update/replace a resource        | ✅           |
| PATCH  | Partial update of a resource          | ❌ (usually) |
| DELETE | Remove a resource                     | ✅           |

> **Idempotent** means sending the same request again won’t change the result beyond the first call.

---

## 4) Common HTTP Status Codes
### ✅ Success

* **200 OK** — Request succeeded (GET/PUT/PATCH).
* **201 Created** — Resource created (POST).
* **204 No Content** — Success with no response body (DELETE/PUT).

### 🔁 Redirects

* **301/302** — Moved (rare in APIs; handled by clients).
* **304 Not Modified** — Caching related.

### ⚠️ Client Errors

* **400 Bad Request** — Invalid input/body.
* **401 Unauthorized** — Missing/Invalid auth (login first / bad token).
* **403 Forbidden** — Authenticated but **not allowed**.
* **404 Not Found** — Resource/route doesn’t exist.
* **409 Conflict** — Versioning/duplicate constraints.
* **422 Unprocessable Entity** — Validation failed.
* **429 Too Many Requests** — Rate limited.

### 💥 Server Errors

* **500 Internal Server Error** — Bug on server.
* **502 Bad Gateway** / **503 Service Unavailable** — Upstream/down.

---

## 5) Postman Environments & Variables (pro tip)

Create variables like:

* `{{base_url}}` → `https://api.example.com`
* `{{token}}` → `eyJhbGciOi...`

Use them in requests:

```
{{base_url}}/users?page=1
Authorization: Bearer {{token}}
```

Switch **Environment** from the top-right dropdown.

---

## 6) Headers You’ll Use a Lot

```text
Content-Type: application/json
Accept: application/json
Authorization: Bearer <YOUR_JWT_TOKEN>
```

---

## 7) cURL — Your CLI Friend

> Postman can **generate** these for you (click **`</> Code` → cURL**).
> Below are templates you can adapt.

### 7.1 GET with Query Params

**Postman**

* Method: **GET**
* URL: `{{base_url}}/users?page=1&limit=10`
* Headers: `Authorization: Bearer {{token}}`

**cURL**

```bash
curl --location "{{base_url}}/users?page=1&limit=10" \
  --header "Authorization: Bearer {{token}}"
```

### 7.2 POST JSON (Create)

**Postman**

* Method: **POST**
* URL: `{{base_url}}/users`
* Headers: `Content-Type: application/json`
* Body (raw → JSON):

```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

**cURL**

```bash
curl --location "{{base_url}}/users" \
  --header "Content-Type: application/json" \
  --data-raw '{
    "name": "Alice",
    "email": "alice@example.com"
  }'
```

### 7.3 PUT (Full Update)

```bash
curl --location "{{base_url}}/users/42" \
  --header "Authorization: Bearer {{token}}" \
  --header "Content-Type: application/json" \
  --data-raw '{
    "name": "Alice A.",
    "email": "alice.a@example.com",
    "role": "admin"
  }'
```

### 7.4 PATCH (Partial Update)

```bash
curl --location "{{base_url}}/users/42" \
  --request PATCH \
  --header "Authorization: Bearer {{token}}" \
  --header "Content-Type: application/json" \
  --data-raw '{
    "role": "manager"
  }'
```

### 7.5 DELETE

```bash
curl --location "{{base_url}}/users/42" \
  --request DELETE \
  --header "Authorization: Bearer {{token}}"
```

### 7.6 Authenticated Example (like the demo)

```bash
curl --location 'https://api.example.com/payment/create' \
  --header 'Authorization: Bearer {{token}}' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "amount": 100,
    "payeeId": "0123456789@pay",
    "paymentMethod": "payment_id",
    "pin": "8520"
  }'
```

---

## 8) Using Postman to Generate cURL

1. Build your request (method, URL, headers, body).
2. Click **`</> Code`** (right side of Send button).
3. Select **cURL** → **Copy**.
4. Paste in terminal. Replace any secrets/variables as needed.

---

## 9) Sample GET Demo API (used in class later)

You can quickly test with **Random User API**:

**GET**

```bash
curl --location "https://randomuser.me/api/"
```

---

## 10) Troubleshooting Tips

* **401 Unauthorized**: Check **Bearer token** and **Auth tab** in Postman.
* **415 Unsupported Media Type**: Set `Content-Type: application/json`.
* **CORS in browser**: Test in Postman first (server issue), then handle CORS server-side.
* **404**: Verify route path, method, and base URL.
* **500**: Check server logs; confirm your JSON is valid.

---

## 11) Handy Shortcuts / Habits

* Save everything in a **Collection**.
* Use **Environments** (`{{base_url}}`, `{{token}}`) for easy switching.
* Add simple **Tests** in Postman (e.g., expect `status = 200`) to validate quickly.

**Example Postman Test (Tests tab):**

```js
pm.test("Status is 200", function () {
  pm.response.to.have.status(200);
});
```

---

### Recap

* You learned **HTTP methods** + **status codes**.
* You used **Postman** to send requests and **generate cURL**.
* You practiced **auth headers**, **JSON bodies**, and **query params**.

Keep your **Collections** organized and reuse **variables** that’s how professionals work at speed.

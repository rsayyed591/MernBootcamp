# 🧱 HTML & CSS Bootcamp Notes (Day 1)

A quick, practical intro to semantic HTML + clean CSS. We used **Urbanist** as our font and focused on forms, lists, links, images, the box model (margin vs padding), and simple multi-page navigation.

---

## 📁 Project Structure

```
day1-html-css/
├── index.html          # main page (header, features list, form, image, footer)
├── styles.css          # global styles (Urbanist font, layout, form, buttons)
├── margin.html         # margin vs padding demo
├── thankyou.html       # simple second page (linked from index)
└── links-media.html    # (NEW) anchors, download, iframe (YouTube), image examples
```

> Open any `.html` directly in your browser, or use VS Code’s **Live Server** for auto-refresh.

---

## ⚡ Quick Start

* Open the folder in VS Code.
* Right-click `index.html` → **Open with Live Server** (or just double-click it to open in a browser).
* Edit `styles.css` and refresh to see changes.

---

## 🧩 What We Covered

* **HTML boilerplate** (Emmet `!` shortcut).
* **Semantic tags**: `header`, `section`, `footer`, `h1–h3`, `p`, `ul/li`, `a`, `img`, `form`, `label`, `input`, `button`.
* **CSS basics**: selectors, fonts, colors, spacing, shadows, transitions.
* **Google Fonts**: Urbanist.
* **Box Model** (margin vs padding) with a dedicated demo page.
* **Navigation** between pages and basic **links** (`target="_blank"`, `download`).
* **Media** embedding (`iframe` for YouTube).
* Clean, accessible UI: clear contrast, readable font sizes, focus states on inputs.

---

## 🧪 The Files (exactly what we used)

### 1) `styles.css`

```css
/* Import Google Fonts – Urbanist for a modern, clean look */
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');


/* ------------------------------ */
/* BODY – Page Layout and Typography */
/* ------------------------------ */
body {
    font-family: 'Urbanist', sans-serif; /* Clean, modern font */
    background-color: #f4f4f4; /* Light gray background */
    color: #333; /* Default text color */
    margin: 0;
    padding: 20px; /* Spacing from edges */
}

/* ------------------------------ */
/* HEADER – Page Title Section */
/* ------------------------------ */
header {
    background-color: #007BFF; /* Accent background */
    color: #ffffff; /* White text */
    padding: 20px; /* Spacing inside header */
    text-align: center; /* Center content */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Depth effect */
}

/* ------------------------------ */
/* HEADINGS – Title Hierarchy */
/* ------------------------------ */
h1 {
    font-size: 2rem; /* Large, prominent title */
    margin-bottom: 0.5em; /* Space below heading */
}

h2 {
    color: #007BFF; /* Accent color for subheadings */
    margin-bottom: 1em; /* Space below heading */
}

h3 {
    color: #6c757d; /* Softer color for tertiary headings */
    margin-bottom: 0.5em; /* Space below heading */
}

/* ------------------------------ */
/* FORM – Input Section Styling */
/* ------------------------------ */
form {
    background-color: #ffffff; /* White form background */
    padding: 25px; /* Space inside form */
    border-radius: 8px; /* Rounded corners */
    max-width: 400px; /* Responsive width */
    margin: 20px auto; /* Center horizontally with space around */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

form:hover {
    transform: translateY(-5px); /* Slight lift effect on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
}

/* ------------------------------ */
/* INPUT and BUTTON – Form Fields */
/* ------------------------------ */
input, button {
    padding: 12px; /* Comfortable space inside fields */
    margin-bottom: 15px; /* Space between fields */
    width: 100%; /* Full width */
    box-sizing: border-box; /* Include padding and border in width */
    border: 1px solid #ccc; /* Light border */
    border-radius: 8px; /* Rounded corners */
    font-size: 1rem; /* Readable text size */
    transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth focus effect */
}

/* INPUT – Focus State */
input:focus {
    border-color: #007BFF; /* Highlight border on focus */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Subtle glow effect */
    outline: none; /* Remove default outline */
}

/* BUTTON – Primary Action Styling */
button {
    background-color: #007BFF; /* Accent color */
    color: #ffffff; /* White text */
    border: none; /* Remove border */
    cursor: pointer; /* Pointer cursor */
    font-weight: 600; /* Bold text */
}

/* BUTTON – Hover State */
button:hover {
    background-color: #0056b3; /* Darker shade on hover */
}

img {
    max-width: 100%; /* Responsive images */
    height: auto; /* Maintain aspect ratio */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
    margin-top: 15px; /* Space above image */
}
/* ------------------------------ */
/* FOOTER – Closing Section */
/* ------------------------------ */
footer {
    text-align: center; /* Center text */
    padding: 15px; /* Spacing */
    color: #6c757d; /* Softer text */
    font-size: 0.9rem; /* Smaller font size */
}
```

> We used `@import` inside CSS for Google Fonts. You can also use a `<link>` tag in `<head>` (slightly better for performance).

---

### 2) `index.html`

```html
<!-- Using ! is a shortcut for creating a fast boilerplate of HTML -->
<!DOCTYPE html>
<html lang="en"> <!-- Root element with language attribute -->
<head> <!-- Metadata about the document -->
    <meta charset="UTF-8" /> <!-- Character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- Responsive design -->
    <title>Extended HTML Example</title> <!-- Title of the page -->

    <!-- Link our stylesheet -->
    <link rel="stylesheet" href="styles.css" />
</head>
<body>

    <header> <!-- Header section containing site title and intro -->
        <h1>My Awesome Page</h1> <!-- Main heading -->
        <p>This is a paragraph explaining what this page is about.</p> <!-- Paragraph text -->
    </header>

    <section> <!-- Section for listing features -->
        <h2>Features</h2> <!-- Subheading -->
        <ul> <!-- Unordered list -->
            <li>Simple layout</li> <!-- List item -->
            <li>Forms and buttons</li>
            <li>Images and links</li>
        </ul>
    </section>

    <section> <!-- Section for contact form -->
        <h2>Contact Us</h2> 
        <form action="thankyou.html" method="get"> <!-- Navigate to thankyou.html -->
            <label for="name">Name:</label><br> <!-- Label for input -->
            <input type="text" id="name" placeholder="Your name"><br><br> <!-- Text input with placeholder -->

            <label for="email">Email:</label><br>
            <input type="email" id="email" placeholder="Your email"><br><br>

            <button type="submit">Send</button> <!-- Submit button -->
        </form>
    </section>

    <section> <!-- Section for additional information -->
        <h3>More Info</h3>
        <p>
          Visit our
          <a href="https://example.com" target="_blank" rel="noopener">official site</a>
          for details.
        </p> <!-- Hyperlink -->

        <p>
          See <a href="links-media.html">link & media examples</a>.
        </p>

        <img src="https://via.placeholder.com/150" alt="Sample image"><br><br> <!-- Image with alt text -->
    </section>

    <footer> <!-- Footer section -->
        <p>&copy; 2025 My Awesome Page. All rights reserved.</p>
    </footer>

</body>
</html>
```

---

### 3) `margin.html` (Box Model demo)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Margin vs Padding</title>
    <style>
      .box1 {
        background-color: #007bff;
        color: white;
        padding: 20px; /* Space inside the box */
        margin: 20px;  /* Space outside the box */
        border-radius: 8px;
      }

      .box2 {
        background-color: #6c757d;
        color: white; 
        padding: 10px; /* Space inside the box */
        margin: 40px;  /* Space outside the box */
        border-radius: 8px;
      }
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial }
    </style>
  </head>
  <body>
    <h2>Box Model: Margin vs. Padding</h2>
    <div class="box1">Box 1</div>
    <div class="box2">Box 2</div>
  </body>
</html>
```

---

### 4) `thankyou.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>PayMate - Thank You</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <header>
        <h1>Thank You!</h1>
    </header>
    <section>
        <p>Your information has been received. We’ll contact you soon!</p>
        <a href="index.html">Back to Home</a>
    </section>
    <footer>
        <p>&copy; 2025 Index. All rights reserved.</p> 
    </footer>
</body>
</html>
```

---

### 5) `links-media.html` (NEW: anchors, download, iframe, image)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Links & Media Examples</title>
  <link rel="stylesheet" href="styles.css" />
  <style>
    .card {
      background: #fff;
      border-radius: 10px;
      padding: 16px;
      box-shadow: 0 4px 10px rgba(0,0,0,.06);
      margin: 16px auto;
      max-width: 760px;
    }
    .row { display: flex; gap: 12px; flex-wrap: wrap; }
    .row a { flex: 1 1 220px; text-align: center; }
    iframe { width: 100%; aspect-ratio: 16/9; border: none; border-radius: 10px; }
  </style>
</head>
<body>

  <header>
    <h1>Links & Media</h1>
    <p>Anchor tags, downloads, images, and a YouTube iframe.</p>
  </header>

  <section class="card">
    <h2>Anchor Tag Variations</h2>
    <div class="row">
      <!-- Open in new tab -->
      <a href="https://developer.mozilla.org/" target="_blank" rel="noopener">MDN (new tab)</a>

      <!-- Link to a file in the same folder (example: PDF or image) -->
      <a href="assets/sample.pdf" target="_blank">Open local PDF</a>

      <!-- Force download of a file -->
      <a href="assets/sample.pdf" download="my-handout.pdf">Download PDF</a>

      <!-- Email and phone links -->
      <a href="mailto:hello@example.com">Email us</a>
      <a href="tel:+1234567890">Call us</a>
    </div>
  </section>

  <section class="card">
    <h2>Embedded YouTube (iframe)</h2>
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </section>

  <section class="card">
    <h2>Image via URL</h2>
    <img
      src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop"
      alt="Sample landscape from Unsplash"
    />
  </section>

  <footer>
    <p><a href="index.html">Back to Home</a></p>
  </footer>

</body>
</html>
```

> If you don’t have `assets/sample.pdf`, just place any PDF inside an `assets/` folder, or change the link to a real file.

---

## 🧭 Key Takeaways

* Use **semantic HTML** for clearer structure and accessibility.
* **Urbanist** (Google Font) gives a modern look; keep spacing and contrast consistent.
* **Box Model** = *content + padding + border + margin*.
* Anchors can:

  * open new tabs (`target="_blank"`),
  * **download** files,
  * trigger actions (`mailto:`, `tel:`).
* Use `iframe` for embeddable content like YouTube.

---

## 🏋️ Practice

* Add a **required** attribute to inputs (e.g., `required` on email).
* Create a **navbar** linking all pages.
* Add a **cards grid** with images + titles + buttons.
* Make a responsive **two-column layout** for the features section using CSS Grid.
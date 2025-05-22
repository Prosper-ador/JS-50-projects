— **Project 1: Expanding Cards** will now be dissected **line-by-line**, across:

1. `index.html`
2. `style.css`
3. `script.js`

---

# 🧠 Project 1: Expanding Cards — Full Explanation

---

## 📄 1. `index.html`

```html
<!DOCTYPE html>
```

Defines this document as an HTML5 file.

```html
<html lang="en">
```

Starts the HTML document, with English (`en`) as the language.

```html
<head>
```

The head contains meta and setup data (not visible content).

```html
  <meta charset="UTF-8" />
```

Sets character encoding to UTF-8, covering all common characters.

```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Ensures mobile responsiveness by controlling the page's width and scale.

```html
  <title>Expanding Cards</title>
```

Defines the page title (seen in browser tabs).

```html
  <link rel="stylesheet" href="style.css" />
```

Links external CSS to style the HTML.

```html
</head>
```

Ends the head section.

```html
<body>
  <div class="container">
```

Main visible content begins. `container` is the flex wrapper for the cards.

```html
    <div class="panel active" style="background-image: url('https://picsum.photos/id/1011/1000/600')">
      <h3>Explore Mountains</h3>
    </div>
```

First card. It's pre-activated (`active`), has a background image, and a visible title.

```html
    <div class="panel" style="background-image: url('https://picsum.photos/id/1015/1000/600')">
      <h3>Sunny Beaches</h3>
    </div>
```

Remaining cards — not active on page load.

```html
    ...
  </div>
  <script src="script.js"></script>
</body>
</html>
```

The container closes. The JS file is linked at the bottom to ensure DOM loads first.

---

## 🎨 2. `style.css`

```css
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
```

Loads the “Muli” font from Google Fonts.

```css
* {
  box-sizing: border-box;
}
```

Ensures padding/margin don’t inflate element size.

```css
body {
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  background: #111;
}
```

* Uses loaded font
* Centers content vertically & horizontally using Flexbox
* Takes full viewport height
* Hides scrollbars
* Removes default margins
* Sets dark background

```css
.container {
  display: flex;
  width: 90vw;
  max-width: 1200px;
}
```

* Flexbox layout for horizontal card alignment
* Responsive width with a max cap

```css
.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in-out;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}
```

* Full-bleed background image
* Rounded corners & shadow
* Shrinks in width initially (`flex: 0.5`)
* Transitions when resized via JS
* Responsive, styled card box

```css
.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in 0.4s;
}
```

Title appears only when active, via a delayed fade-in.

```css
.panel.active {
  flex: 5;
}
```

Expanded card grows to occupy more space (`flex: 5`).

```css
.panel.active h3 {
  opacity: 1;
}
```

When a panel is active, its title becomes visible.

```css
@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
```

Responsive: On small screens, only show 3 cards for better spacing.

---

## ⚙️ 3. `script.js`

```javascript
const panels = document.querySelectorAll('.panel');
```

Grabs all elements with the `panel` class.

```javascript
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
```

Adds a click event to each panel:

* First, removes `active` from all
* Then, adds `active` to the clicked one

```javascript
function removeActiveClasses() {
  panels.forEach(panel => panel.classList.remove('active'));
}
```

Utility function to reset all cards.

---

# ✅ Project 1 Summary

* Clean UI with polished visuals
* CSS transitions for smooth resizing
* Simple JS event delegation
* Fully responsive
* Great UX foundation for interactivity

---

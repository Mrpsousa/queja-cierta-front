# 🎨 Color Usage Guidelines

**Yellow · Charcoal · Soft White · Staging Green**

These guidelines define **how colors must be used in the UI**, in alignment with the design tokens defined in `tokens/colors.json`.

> **Design intent lives here.  
> Color values and mappings live in tokens.**

---

## 🧠 System Overview

The color system is based on **semantic roles**, not raw colors.

- Colors are consumed via **themes** (`light`, `dark`, `staging`)
- Components must use **semantic tokens** (`bg`, `fg`, `primary`, `surface`)
- Interactive states must use **state tokens**
- Hex values must never be used directly in components

---

## 🎯 Core Color Roles

### 🟡 Yellow — *Action & Emphasis*
**Design role:** Attention  
**Token source:** `color.brand.dominant`  
**Theme mapping:** `color.themes.*.primary`

Use yellow for:
- Primary CTAs
- High-importance actions
- Active or selected indicators
- Brand highlights

Do **not** use yellow for:
- Body text
- Large backgrounds
- Dense UI surfaces

> Yellow represents **action**, not structure.

---

### ⚫ Charcoal — *Structure & Authority*
**Design role:** Structure / readability  
**Token source:** `color.brand.support`  
**Theme mapping:** `color.themes.light.fg`

Use charcoal for:
- Body text
- Headings
- Icons
- Borders and dividers
- UI scaffolding

Charcoal is the **default reading color** in light theme and the **on-primary color** across themes.

---

### 🤍 Soft White — *Canvas & Breathing Space*
**Design role:** Neutral background  
**Token source:** `color.neutral.base`  
**Theme mapping:** `color.themes.light.bg`

Use soft white for:
- Page backgrounds
- Cards and containers
- Content-heavy layouts
- Reading surfaces

Soft white is intentionally used instead of pure white to reduce eye strain.

---

### 🌿 Staging Green — *Context & Presence*
**Design role:** Staging / atmosphere  
**Token source:** `color.stage.primary`  
**Theme mapping:** `color.themes.staging.bg`

The staging green is **not a general UI color**.

Use staging green only for:
- Hero sections and landing headers
- Logo backgrounds (brand stage)
- Marketing or storytelling sections
- Empty or quiet states

Do **not** use staging green for:
- Buttons
- Text-heavy layouts
- Interactive states

> Staging green provides **presence**, not action.

---

## 🌗 Themes

Themes remap the same semantic roles to different values.

### ☀️ Light Theme
**Token namespace:** `color.themes.light`

- Background: `bg`
- Text: `fg`
- Primary action: `primary`
- Surface: `surface`

This is the **default application theme**.

---

### 🌑 Dark Theme
**Token namespace:** `color.themes.dark`

- Background is **near-black**, not charcoal
- Text switches to soft white
- Yellow remains the primary action color

Charcoal remains a **structural brand color**, not a dark-mode background.

---

### 🎭 Staging Theme
**Token namespace:** `color.themes.staging`

Used only in **specific sections**, not full application shells.

- Background: staging green
- Text: soft white
- Primary actions invert for contrast

---

## 🔘 Interactive States

Interactive states must always use **state tokens**.

### Primary action states
| State | Token |
|-----|------|
| Default | `color.themes.*.primary` |
| Hover | `color.state.hover.primaryBg` |
| Active | `color.state.active.primaryBg` |
| Disabled (bg) | `color.themes.*.disabledBg` |
| Disabled (text) | `color.themes.*.disabledFg` |

Do **not** derive states manually or darken colors ad-hoc.

---

## 🧱 Common UI Patterns

### Buttons
- **Primary button:** `primary` + `onPrimary`
- **Secondary button:** surface + border + `fg`
- **Ghost button:** text only, with yellow accent on hover

### Cards & Containers
- Background: `surface`
- Border: `border`
- Hover: subtle yellow accent only

### Navigation
- Background: `bg` or `surface`
- Active item: yellow indicator (underline / dot)

Yellow indicates **state**, not structure.

---

## ♿ Accessibility Rules

Allowed combinations:
- Charcoal on soft white ✅
- Charcoal on yellow ✅
- Soft white on staging green ✅

Not allowed:
- Yellow text on soft white ❌
- Yellow text on staging green ❌
- Low-contrast yellow states ❌

All components must meet **WCAG AA** contrast requirements.

---

## 🧠 Design Principles (Summary)

- **Soft white is the canvas**
- **Charcoal explains**
- **Yellow acts**
- **Green stages**

> If yellow is everywhere, it loses meaning.  
> If green is interactive, hierarchy breaks.

---

## 🔒 Final Rules

- Never use raw hex values in UI code
- Never invent new colors outside tokens
- Never use staging green as an action color
- Always design with semantic intent first

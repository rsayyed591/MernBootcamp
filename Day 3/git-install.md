# git-install.md — Install Git & Connect to GitHub (Beginner-Friendly)

**Video walkthrough:** [https://youtu.be/AdzKzlp66sQ?si=DzEAN2jyOJh6XQko](https://youtu.be/AdzKzlp66sQ?si=DzEAN2jyOJh6XQko)

## 1) What is Git? What is GitHub?

* **Git**: a version control tool on your computer.
* **GitHub**: a website that hosts your repositories and enables collaboration.

You’ll install **Git** locally, then sign in to **GitHub** when you push code from your machine.

---

## 2) Install Git (choose your OS)

### 🪟 Windows (Recommended path)

1. Go to **[https://git-scm.com/](https://git-scm.com/)**
2. Click **Download for Windows** and run the installer.
3. **Keep defaults** (important: “Add Git to PATH” and **Git Credential Manager** checked).
4. Open **Git Bash** (installed with Git).
5. Verify:

   ```bash
   git --version
   ```

   You should see a version number.

> Tip: The installer adds **Git Bash** and **Git GUI**. We’ll mostly use Git Bash or VS Code Terminal.

---

### 🍎 macOS

**Option A — Homebrew (easiest if you have Brew)**

1. Install Homebrew if you don’t have it: [https://brew.sh](https://brew.sh)
2. Then:

   ```bash
   brew install git
   git --version
   ```

**Option B — Xcode Command Line Tools (built-in)**
Run:

```bash
xcode-select --install
git --version
```

> macOS also supports **Git Credential Manager** (installed via Homebrew if needed):
> `brew install --cask git-credential-manager`

---

### 🐧 Linux (optional for completeness)

* **Debian/Ubuntu**:

  ```bash
  sudo apt update
  sudo apt install git
  git --version
  ```
* **Fedora**:

  ```bash
  sudo dnf install git
  git --version
  ```

---

## 3) Create a GitHub Account

1. Go to **[https://github.com/](https://github.com/)**
2. Click **Sign up** → choose a username, email, and password.
3. Verify your email.

---

## 4) Tell Git who you are (global identity)

Set your name and email **once** so your commits are labeled correctly:

```bash
git config --global user.name "Your GitHub Username"
git config --global user.email "your_email@example.com"
```

Check:

```bash
git config --global --list
```

---

## 5) How you’ll sign in when pushing code

You have two common choices:

### ✅ HTTPS (simple; recommended for beginners)

* When you push to GitHub the first time, a **sign-in popup** appears.
* Enter your GitHub username/password (and 2FA if enabled).
* **Git Credential Manager** (installed with Git on Windows, available on macOS) securely remembers your token—no need to retype.

> You do **not** need to create a token manually for the first push; the popup handles it.

### 🔐 SSH (optional; advanced later)

* Create SSH keys and add the public key to GitHub.
* Great if you prefer key-based auth.
* We’ll cover SSH in a later session.

---

## 6) VS Code integration (optional but nice)

* Install **Visual Studio Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
* Open VS Code → **Source Control** tab → it detects Git automatically.
* Sign in to GitHub via **Accounts** (bottom-left) for a smoother experience.

---

## 7) GitHub Desktop (optional GUI)

If you prefer a visual app:

* **GitHub Desktop**: [https://desktop.github.com/](https://desktop.github.com/)
* It installs Git for you and provides a beginner-friendly interface.

---

## 8) Troubleshooting

* **`git: command not found`** → Reopen your terminal or restart your computer. Ensure Git is installed and on PATH.
* **No popup when pushing (HTTPS)** → Install/enable **Git Credential Manager**:

  * Windows: Re-run Git installer and keep defaults.
  * macOS: `brew install --cask git-credential-manager`
* **Wrong email on commits** → Re-run:

  ```bash
  git config --global user.name "Correct Name"
  git config --global user.email "correct_email@example.com"
  ```
* **2FA issues** → Ensure you complete OTP in the popup.

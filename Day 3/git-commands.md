# git-commands.md

**Scope today:** init → add → commit → branch → push/pull → clone → merge
**Bonus (peek):** rebase & stash (brief)

---

## 0) Create or open a repo

```bash
# Start a brand-new repo in the current folder
git init

# OR: get an existing repo from GitHub
git clone https://github.com/USERNAME/REPO.git
cd REPO
```

---

## 1) Status & what changed?

```bash
git status         # What’s new/modified/staged?
git diff           # See changes in working directory
git diff --staged  # See changes you staged
```

---

## 2) Stage files (add)

```bash
git add index.html            # stage one file
git add src/                  # stage a folder
git add .                     # stage everything (be careful)
```

**Tip:** Stage only what you intend to commit. Smaller commits = clearer history.

---

## 3) Commit (save a snapshot)

```bash
git commit -m "feat: add user form and validation"
```

**Good messages**: use verbs and context (feat, fix, docs, refactor, chore).

---

## 4) Branching (work in parallel)

```bash
git branch                    # list branches
git branch feature/auth       # create a branch
git checkout feature/auth     # switch to it (older syntax)
# or (newer):
git switch -c feature/auth    # create and switch
git switch main               # go back to main
```

**Why branches?** Keep main clean; experiment safely.

---

## 5) Push (send to GitHub)

First time for a new branch:

```bash
git push -u origin feature/auth
```

After that, just:

```bash
git push
```

**Common:**

* `origin` = default remote name
* `main` (or `master`) = default primary branch name

---

## 6) Pull (get latest from GitHub)

```bash
git pull               # from the current branch’s upstream
git pull origin main   # explicitly from origin/main
```

**Tip:** Pull before you start work to reduce conflicts.

---

## 7) Merge (combine branches)

1. Switch to the branch that should **receive** changes:

```bash
git switch main
```

2. Merge another branch into it:

```bash
git merge feature/auth
```

* If Git reports conflicts, open files, look for `<<<<<<<`, fix, then:

  ```bash
  git add .
  git commit
  ```

---

## 8) Clone (copy a remote repo)

```bash
git clone https://github.com/USERNAME/REPO.git
# or with SSH (after keys are set up)
git clone git@github.com:USERNAME/REPO.git
```

---

## 9) Remote shortcuts

```bash
git remote -v                          # list remotes
git remote add origin <repo-url>       # set remote for an existing local repo
git branch -M main                     # rename branch to main
git push -u origin main                # push and set upstream
```

---

## 10) Clean-up branches

```bash
git branch -d feature/auth     # delete merged local branch
git push origin --delete feature/auth   # delete remote branch
```

---

## 11) Undo (carefully)

```bash
git restore file.js                 # discard local changes in file
git restore --staged file.js        # unstage, keep changes
git checkout -- file.js             # (older equivalent of restore)
git reset --hard HEAD               # nuke ALL local changes (danger)
```

---

## 12) Bonus: Rebase (advanced, brief)

Rebase rewrites history to make it linear. Great for keeping a clean commit timeline.

```bash
# Update your feature branch with latest main, but keep a linear history
git switch feature/auth
git fetch origin
git rebase origin/main
# resolve conflicts, then:
git rebase --continue
```

**Note:** Rewriting history on shared branches can confuse teammates. Prefer rebase **before** pushing or only on your own branches.

---

## 13) Bonus: Stash (shelve work-in-progress)

```bash
git stash               # save current uncommitted work
git stash list          # see stashes
git stash pop           # re-apply latest and remove from stash
git stash apply stash@{2}  # re-apply a specific stash
```

Use when you need to switch branches quickly but don’t want to commit yet.

---

## 14) Typical daily workflow

```bash
git switch main
git pull
git switch -c feature/task-123

# work... then:
git add .
git commit -m "feat(task-123): implement thing"
git push -u origin feature/task-123

# open a Pull Request on GitHub
# review/approve/merge → then back to main:
git switch main
git pull
git branch -d feature/task-123
git push origin --delete feature/task-123
```

---

## 15) Troubleshooting

* **“fatal: not a git repository”** → Run `git init` or navigate into your repo folder.
* **Auth popup doesn’t show (HTTPS)** → Reinstall/enable Git Credential Manager.
* **Permission denied (publickey)** → You’re using SSH; set up SSH keys on GitHub or switch to HTTPS.
* **Merge conflicts** → Open files, resolve `<<<<<<<` markers, then `git add` and `git commit`.

---

## 16) Good habits

* Pull before you start.
* Make **small, focused** commits with clear messages.
* Use branches for new work.
* Delete merged branches (local & remote).
* Don’t commit secrets (env files, tokens).

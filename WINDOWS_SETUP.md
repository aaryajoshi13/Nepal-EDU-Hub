# Nepal EDU Hub — Windows Setup Guide

Welcome to Nepal EDU Hub! Follow these instructions to set up the project on a Windows computer.

## 1. Install the required software

Before starting, install:

- [Node.js (LTS)](https://nodejs.org/) — JavaScript runtime and npm.
- [Git for Windows](https://git-scm.com/downloads/win) — Version control.
- [Visual Studio Code](https://code.visualstudio.com/) — Recommended code editor.

After installation, open PowerShell and verify:

```powershell
node -v
npm -v
git --version
```

## 2. Clone the repository

Open PowerShell and run:

```powershell
git clone https://github.com/aaryajoshi13/Nepal-EDU-Hub.git
cd Nepal-EDU-Hub
```

## 3. Install project dependencies

Run:

```powershell
npm install
```

This installs the dependencies listed in `package.json`.

## 4. Configure Supabase

Nepal EDU Hub uses Supabase as its backend.

Create your local environment file:

```powershell
Copy-Item .env.example .env.local
```

Open it:

```powershell
notepad .env.local
```

Fill in the Supabase project URL and publishable key provided by the project owner.

Save the file.

**Important:** Never commit or upload `.env.local` to GitHub.

Both developers use the same Supabase project, so application data and database changes are shared.

## 5. Run the application

Start the development server:

```powershell
npm run dev
```

Open your browser and visit:

http://localhost:3000

The development server runs locally on your computer.

## 6. Working collaboratively

Before starting work, get the latest changes:

```powershell
git pull
```

For a new feature, create a separate branch:

```powershell
git switch -c feature/your-feature-name
```

After making changes:

```powershell
git add .
git commit -m "Describe your changes"
git push -u origin feature/your-feature-name
```

Create a Pull Request on GitHub so changes can be reviewed and merged into the main branch.

## Important reminders

- Both developers work on the same GitHub repository.
- Both developers connect to the same Supabase project.
- Each developer has their own local `.env.local` file.
- Each developer can have their own Nepal EDU Hub login account.
- Never commit `.env.local`, passwords, or Supabase secret/service-role keys.
- Coordinate database schema changes and use Supabase migrations to track them.

Happy coding!
# Nepal EDU Hub — Windows Setup Guide

Welcome to Nepal EDU Hub! Follow these instructions to set up the project on a Windows computer.

## 1. Install the required software

Before starting, install:

- [Node.js (LTS)](https://nodejs.org/) — JavaScript runtime and npm.
- [Git for Windows](https://git-scm.com/downloads/win) — Version control.
- [Visual Studio Code](https://code.visualstudio.com/) — Recommended code editor.

After installation, open PowerShell and verify:

```powershell
node -v
npm -v
git --version
```

## 2. Clone the repository

Open PowerShell and run:

```powershell
git clone https://github.com/aaryajoshi13/Nepal-EDU-Hub.git
cd Nepal-EDU-Hub
```

## 3. Install project dependencies

Run:

```powershell
npm install
```

This installs the dependencies listed in `package.json`.

## 4. Configure Supabase

Nepal EDU Hub uses Supabase as its backend.

Create your local environment file:

```powershell
Copy-Item .env.example .env.local
```

Open it:

```powershell
notepad .env.local
```

Fill in the Supabase project URL and publishable key provided by the project owner.

Save the file.

**Important:** Never commit or upload `.env.local` to GitHub.

Both developers use the same Supabase project, so application data and database changes are shared.

## 5. Run the application

Start the development server:

```powershell
npm run dev
```

Open your browser and visit:

http://localhost:3000

The development server runs locally on your computer.

## 6. Working collaboratively

Before starting work, get the latest changes:

```powershell
git pull
```

For a new feature, create a separate branch:

```powershell
git switch -c feature/your-feature-name
```

After making changes:

```powershell
git add .
git commit -m "Describe your changes"
git push -u origin feature/your-feature-name
```

Create a Pull Request on GitHub so changes can be reviewed and merged into the main branch.

## Important reminders

- Both developers work on the same GitHub repository.
- Both developers connect to the same Supabase project.
- Each developer has their own local `.env.local` file.
- Each developer can have their own Nepal EDU Hub login account.
- Never commit `.env.local`, passwords, or Supabase secret/service-role keys.
- Coordinate database schema changes and use Supabase migrations to track them.

Happy coding!

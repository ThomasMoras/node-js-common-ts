# 🚀 my-project-esm

A modern Node.js TypeScript template project with ESM support, testing, and documentation.
Including practice exercices

## 🌟 Features

- ⚡ TypeScript 5.x with strict type checking
- 📦 Native ES Modules (ESM) support
- 🧪 Jest testing with coverage reporting
- 🔄 TSX for development with hot reload
- 📚 Typedoc for automatic documentation
- 🚀 Optimized for pnpm performance
- 🔒 Pre-commit hooks with Husky (optional)
- 🐳 Docker support (optional)

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installation
```bash
pnpm install
```
### Running the Project

```bash
pnpm dev       
pnpm build    
pnpm start     
```

📂 Project Structure

```
my-project-esm/
├── dist/                   # Compiled output (excluded from git)
├── src/                    # Source files
│   ├── lib/                # Reusable libraries
│   ├── types/              # Type definitions
│   ├── utils/              # Utility functions
│   └── index.ts            # Main entry point
├── test/                   # Test files (mirror src structure)
├── docs/                   # Generated documentation
├── .github/                # GitHub workflows
├── .husky/                 # Git hooks (optional)
├── .vscode/                # VSCode settings
├── Dockerfile              # Docker configuration
├── tsconfig.json           # TypeScript config
├── jest.config.ts          # Jest configuration
├── package.json
└── README.md
```

📚 Documentation

```bash
pnpm docs:generate  # Generate HTML docs
pnpm docs:serve     # Live documentation server
pnpm docs:json      # Generate docs as JSON
```
# NX Strap - A Modern NX Monorepo Boilerplate

<img src=".github/readme.webp" alt="NX Strap - A NX Monorepo Boilerplate" width="100%" />

[![NX](https://img.shields.io/badge/NX-143055?style=for-the-badge&logo=nx&logoColor=white)](https://nx.dev)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io)

### Overview 🎯

NX Strap is a modern monorepo boilerplate that provides a robust foundation for building scalable applications. It combines the power of NX for monorepo management with Next.js for the frontend and Express.js for the backend.

### Features ✨

- 🏗️ **NX Monorepo Structure** - Efficient workspace organization for optimal code sharing and maintenance
- ⚡ **Next.js Frontend** - Server-side rendered React application with static generation capabilities
- 🔐 **Express Gateway** - Dynamic API gateway for modular request routing and handling
- 📦 **Modular APIs** - Self-contained API libraries that seamlessly integrate with the gateway
- 🎨 **Modern Styling** - Responsive and customizable designs using TailwindCSS
- 🧪 **Full Test Suite** - Jest unit testing and Cypress E2E testing integration
- 📈 **Scalable Architecture** - Enterprise-ready design with clear separation of concerns
- 🔄 **Continuous Integration** - Automated testing pipeline using GitHub Actions
- 📚 **Storybook** - Interactive component development and documentation

### Architecture Overview 🏛️

The project follows a modular API architecture where:

- The `api-gateway` acts as a central routing layer, handling incoming HTTP requests
- API implementations live in the `data-access` directory as separate libraries
- Each API module injects its routes into the gateway at runtime
- This separation allows for:
  - Independent development and testing of API modules
  - Clear boundaries between different API domains
  - Easy addition of new API functionality without modifying the gateway
  - Better code organization and maintainability

### Project Structure 📁

```
project_name/
├── apps/
│   ├── frontend/        # @nxstrap/source - Next.js frontend application
│   ├── frontend-e2e/    # Frontend end-to-end tests
│   ├── api-gateway/     # ApiGateway - Routes requests to appropriate API implementations
│   └── api-gateway-e2e/ # API gateway end-to-end tests
├── libs/
│   ├── data-access/     # @nxstrap/data-access - API implementation libraries
│   │   └── api-example/ # Example API module that injects routes into the gateway
│   └── ui/             # @nxstrap/ui - Shared UI components
│       └── components/ # UI-Shared - React components with Storybook documentation
```

### Project Names & Namespaces 📦

#### Project Names

- Frontend App: `@nxstrap/source`
- API Gateway: `ApiGateway`
- UI Library: `UI-Shared`
- Data Access: `data-access`

#### Global Namespace

All shared code uses the `@nxstrap` namespace:

- `@nxstrap/ui`
- `@nxstrap/ui/server`
- `@nxstrap/data-access`

#### Import Rules

1. **Frontend App** (`apps/frontend/`):

   ```typescript
   import { ComponentName } from '@nxstrap/ui';
   import { routeName } from '@nxstrap/data-access';
   ```

2. **API Gateway** (`apps/api-gateway/`):

   ```typescript
   import { routeName } from '@nxstrap/data-access';
   ```

3. **UI Library** (`libs/ui/components/`):

   ```typescript
   // Internal imports
   import { Component } from './lib/component-name';
   // Export path: @nxstrap/ui
   ```

4. **Data Access Library** (`libs/data-access/api-example/`):
   ```typescript
   // Internal imports
   import { route } from './lib/route-name';
   // Export path: @nxstrap/data-access
   ```

### Getting Started 🚀

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/nx-strap.git
   cd nx-strap
   ```
2. Rename the project:
   - Search and replace all instances of `@nxstrap` with your desired namespace
   - Update the project name in `package.json`
   - Update the project name in `nx.json`
   - Update the project name in `tsconfig.base.json`
3. Run `make install` to install all dependencies
4. Rename the `.env.example` file to `.env` and **populate it with your own values**
5. Run `make dev` to start both the frontend and API gateway in parallel

### Development Commands 🛠️

The project includes a Makefile for common development tasks. Running `make help` shows all available commands:

```bash
NX Strap Development Commands:
make install    - Install all dependencies
make clean      - Clean build artifacts and dependencies
make dev        - Start development servers
make test       - Run all tests
make lint       - Run linting
make build      - Build all applications
make serve-all  - Serve all applications
make e2e        - Run end-to-end tests
make testsuite  - Run all test jobs (test, lint, e2e)
make storybook  - Start Storybook development server
make build-storybook - Build Storybook for production
```

### Credits 🙏

This project aims to provide a robust starting point for building scalable applications using NX monorepo architecture. Special thanks to the NX, Next.js, and Express.js communities for their excellent tools and documentation.

Feel free to contribute or suggest improvements! 🤝

<img src=".github/nx-strap.png" alt="NX Strap - A NX Monorepo Boilerplate" width="100%" />

# NX Strap - A Modern NX Monorepo Boilerplate

### Features ✨

- 🏗️ **NX Monorepo Structure** - Organized workspace with apps and libs for maximum code reuse and maintainability.
- ⚡ **Next.js Frontend** - Modern, performant frontend built with Next.js featuring server-side rendering and static generation.
- 🔐 **Express Gateway** - Centralized API gateway that dynamically loads and routes requests to modular API implementations.
- 📦 **Modular APIs** - APIs are developed as independent libraries that inject their routes into the gateway, ensuring clean separation of concerns.
- 🎨 **Modern Styling** - Powered by TailwindCSS for beautiful, responsive, and customizable designs.
- 🧪 **Full Test Suite** - Comprehensive testing with Jest for unit tests and Cypress for E2E testing.
- 📈 **Scalable Architecture** - Built for enterprise-grade applications with clear separation of concerns and best practices.

### Getting Started 🚀

1. Clone this repository
2. Rename the project:
   - Search and replace all instances of `nx-strap` with your `project_name`
   - Update the project name in `package.json`
   - Update the project name in `nx.json`
3. Run `pnpm install`
4. Rename the `.env.example` file to `.env` and **populate it with your own values**
5. Run `nx serve frontend` to start the Next.js frontend
6. Run `nx serve api-gateway` to start the Express API gateway

Feel free to contribute or suggest improvements! 🤝

### Project Structure 📁

```
project_name/
├── apps/
│   ├── frontend/        # Next.js frontend application
│   ├── frontend-e2e/    # Frontend end-to-end tests
│   ├── api-gateway/     # Express API gateway - Routes requests to appropriate API implementations
│   └── api-gateway-e2e/ # API gateway end-to-end tests
├── libs/
│   └── data-access/     # API implementation libraries
│       └── api-example/ # Example API module that injects routes into the gateway
```

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

### Credits 🙏

This project aims to provide a robust starting point for building scalable applications using NX monorepo architecture. Special thanks to the NX, Next.js, and Express.js communities for their excellent tools and documentation.

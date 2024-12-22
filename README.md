<img src=".github/nx-strap.png" alt="NX Strap - A NX Monorepo Boilerplate" width="100%" />

# NX Strap - A Modern NX Monorepo Boilerplate

### Features ✨

- 🏗️ **NX Monorepo Structure** - Organized workspace with apps and libs for maximum code reuse and maintainability.
- ⚡ **Next.js Frontend** - Modern, performant frontend built with Next.js featuring server-side rendering and static generation.
- 🔐 **Express Gateway** - Robust API gateway built with Express.js for secure and efficient request handling.
- 📦 **Shared Libraries** - Dedicated libraries for UI components and data access layers to promote code reuse.
- 🎨 **Modern Styling** - Powered by TailwindCSS for beautiful, responsive, and customizable designs.
- 🧪 **Full Test Suite** - Comprehensive testing with Jest for unit tests and Cypress for E2E testing.
- 📈 **Scalable Architecture** - Built for enterprise-grade applications with clear separation of concerns and best practices.

### Getting Started 🚀

#### Local Development

- Run `pnpm install`
- Rename the `.env.example` file to `.env` and **populate it with your own values**
- Run `nx serve frontend` to start the Next.js frontend
- Run `nx serve gateway` to start the Express gateway

#### Production 🌐

- 🌍 Get a domain name
- 🏗️ Set up your project from this repo on your preferred hosting platform
- 🔐 Configure your environment variables
- 🚀 Deploy your apps using NX's powerful build system

Feel free to contribute or suggest improvements! 🤝

### Project Structure 📁

```
nx-strap/
├── apps/
│   ├── frontend/     # Next.js frontend application
│   └── gateway/      # Express.js API gateway
├── libs/
│   ├── ui/          # Shared UI components
│   └── data-access/ # Data access and API integration layer
```

### Credits 🙏

This project aims to provide a robust starting point for building scalable applications using NX monorepo architecture. Special thanks to the NX, Next.js, and Express.js communities for their excellent tools and documentation.

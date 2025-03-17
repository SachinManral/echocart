
# EchoCart

EchoCart is a modern e-commerce platform built with cutting-edge web technologies. This fully responsive front-end application showcases a complete shopping experience with product browsing, detailed product views, cart management, and a streamlined checkout process. Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Redux**, **Framer Motion**, and **ShadCN UI**, EchoCart delivers exceptional performance, accessibility, and user experience.

## Table of Contents

- [EchoCart](#echocart)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Demo](#demo)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [Issues](#issues)
  - [License](#license)
  - [Contact](#contact)

## Overview

EchoCart bridges the gap between design and development by converting Figma designs into production-ready code. The project follows best practices for **SEO**, **performance optimization**, and **accessibility**, making it a perfect foundation for developers looking to create scalable and maintainable e-commerce front-ends.

## Demo

Check out the live demo: [EchoCart Demo](https://echocart.netlify.app/)


## Features

- **Next.js 14**: Server-side rendering (SSR), Static Site Generation (SSG), optimized routing, and API integrations.
- **TypeScript**: Strongly typed code for better error detection and maintainability.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Redux**: State management for managing the shopping cart and other global states.
- **Framer Motion**: Smooth animations and transitions for an enhanced user experience.
- **ShadCN UI**: Beautifully styled, accessible, and customizable UI components.
- **Fully Responsive**: Mobile-first design ensuring the layout adapts across devices.
- **Performance Optimized**: Best practices followed for fast loading and interaction.
- **Accessible**: Built with accessibility standards to provide an inclusive experience.

## Technologies

- **Next.js 14** - A popular React framework with built-in SSR and optimization.
- **TypeScript** - A superset of JavaScript for strong typing and code consistency.
- **Tailwind CSS** - A utility-first CSS framework for fast, responsive design.
- **Redux** - A state management library used for the shopping cart and global app state.
- **Framer Motion** - A library for animations and interactions in React.
- **ShadCN UI** - A collection of beautiful, accessible, and customizable UI components.
- **Figma** - The design tool used as the source of the project's layout. The [Figma file](https://www.figma.com/community/file/1273571982885059508/e-commerce-website-template-freebie) designed by [Hamza Naeem](https://www.figma.com/@hamzauix)

## Installation

To get started with EchoCart locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/echocart.git
   cd echocart
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   ```bash
   yarn dev
   ```

4. **Open in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- To explore or modify the code, navigate through the `components`, `features`, and `app` directories.
- The shopping cart logic is managed using **Redux**. You can find the store configuration and cart actions in the `src/lib/features` directory.
- **ShadCN UI** components are used across the app. They can be customized in the `src/components/ui` directory.
- You can easily modify and extend the project to suit your needs, whether for personal use or professional projects.

## Project Structure

```bash
EchoCart/
│
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable components (including ShadCN UI components)
│   └── lib/
│       ├── features/      # The Redux logics for features (e.g., shopping cart)
│       ├── hooks/         # Custom React hooks
│       ├── store.ts       # Redux store
│       ├── utils.ts       # Utility functions
│   ├── styles/            # Tailwind CSS styles (global, utilities and fonts)
│   ├── types/             # TypeScript types
│
├── components.json         # ShadCN UI configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Node.js dependencies and scripts
├── postcss.config.mjs      # Post CSS configuration
└── README.md               # Project documentation
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
```

## Contributing

Contributions are welcome! If you'd like to contribute, Please follow these steps to contribute to EchoCart:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## Issues

Feel free to submit issues for any bugs, feature requests, or general questions related to the project. You can also reach out via [email](mailto:sachinmanral2431@gmail.com) for support.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.

## Contact

Feel free to reach out to:

- **Name**: Sachin Manral
- **Email**: [sachinmanral2431@gmail.com](mailto:sachinmanral2431@gmail.com)
- **GitHub**: [https://github.com/SachinManral](https://github.com/SachinManral)

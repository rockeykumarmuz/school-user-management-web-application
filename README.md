# User Details Management App (React + TypeScript + Tailwind)

This is a role-based scholl user management application built with **React, TypeScript, and Tailwind CSS**.  
The app demonstrates login authentication, role-based dashboards, and user details management using a static JSON dataset.

---

## 🚀 Features

- **Login Module**:

  - Validates email format and password.
  - Authenticates users using SHA256 encrypted passwords.

- **Role-based Dashboard**:

  - **Admin**: Can view all students, search by name or subject, and view detailed info in a popup.
  - **Student**: Can view only their own details.

- **Reusable Components**: Built using **React + Tailwind CSS** with a clean and maintainable folder structure.

---

## 🛠️ Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- SHA256 (crypto-js)

---

## 🚀 Project SetUp Guide 
1. git clone https://github.com/rockeykumarmuz/school-user-management-web-application.git
2. npm install (Node js must be installed on you system globally)
3. Npm run dev (to see the preview in local system)
4. Npm run build and preview (to see the production grade on your system)

## 🛠️ Sample UserName and Password to Login and view the project details and functionality
1. email - rockey.kumar@test.com password: Rockey@123 (Admin)
1. email - priya.mehra@test.com password: Priya@321 (Admin)
1. email - aman.patil@test.com password: Aman@456 (Student)
1. email - sneha.patel@test.com password: Sneha@102 (Student)
1. email - pratik.patil@test.com password: Pratik@112 (Student)
1. email - dilip.singhania@test.com password: Dilip@189 (Student)

so, please login via these credentials to view all features

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			// Other configs...

			// Remove tseslint.configs.recommended and replace with this
			...tseslint.configs.recommendedTypeChecked,
			// Alternatively, use this for stricter rules
			...tseslint.configs.strictTypeChecked,
			// Optionally, add this for stylistic rules
			...tseslint.configs.stylisticTypeChecked,

			// Other configs...
		],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			// Other configs...
			// Enable lint rules for React
			reactX.configs['recommended-typescript'],
			// Enable lint rules for React DOM
			reactDom.configs.recommended,
		],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
])
```

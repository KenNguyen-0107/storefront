# Niteco Storefront

A comprehensive e-commerce storefront solution built with Next.js, featuring multiple CMS integrations, customer management, and cart functionality.

## 🚀 Features

- **Multi-CMS Support**: Optimizely CMS and Generic CMS adapters
- **Customer Management**: Complete customer authentication and profile management
- **Cart System**: Unified cart functionality for both authenticated and anonymous users
- **Token-based Authentication**: Secure authentication system with refresh tokens
- **Commerce Integration**: Optimizely Configure Commerce integration
- **Component Library**: Reusable UI components with Storybook
- **Type Safety**: Full TypeScript support with GraphQL code generation

## 📁 Project Structure

```
Niteco.Storefront/
├── optimizely/                 # Optimizely CMS frontend
│   ├── src/app/api/           # API routes including customer endpoints
│   ├── src/components/        # React components
│   └── src/gql/              # Generated GraphQL types
├── generic-cms/               # Generic CMS frontend
├── packages/                  # Shared packages
│   ├── cms-adapter-core/     # Core CMS adapter functionality
│   ├── cms-component-registry/ # Component registry system
│   ├── cms-nextjs/           # Next.js CMS integration
│   ├── niteco-ui/            # UI component library
│   ├── optimizely-cms-adapter/ # Optimizely CMS adapter
│   ├── optimizely-graph-client/ # Optimizely GraphQL client
│   └── optimizely-configure-commerce-adapter/ # Commerce adapter
└── prompts/                  # Development prompts
```

## 🔧 Customer API & Commerce Integration

The project includes a comprehensive customer API system with CommerceTools integration and the following features:

### Authentication System
- **Anonymous Tokens**: For guest users to perform cart operations
- **Customer Tokens**: For authenticated customers
- **Refresh Tokens**: For refreshing expired access tokens

### Key Endpoints

#### Authentication
- `POST /api/auth/anonymous-token` - Get anonymous token for cart operations
- `POST /api/auth/password-token` - Authenticate customer with email/password
- `POST /api/auth/refresh-token` - Refresh expired access token

#### Customer Management
- `POST /api/customers/signup` - Create new customer account
- `POST /api/customers/signin` - Sign in existing customer
- `POST /api/customers/signout` - Sign out customer
- `GET /api/customers/profile` - Get authenticated customer profile
- `PUT/PATCH /api/customers/profile` - Update customer profile

#### Cart Operations (Unified)
- `GET /api/cart` - Get active cart
- `POST /api/cart` - Create new cart
- `POST /api/cart/items` - Add item to cart
- `DELETE /api/cart/items` - Remove item from cart
- `PATCH /api/cart/items` - Update item quantity
- `POST /api/cart/discount` - Apply discount code
- `DELETE /api/cart/discount` - Remove discount code
- `POST /api/cart/shipping` - Set shipping address
- `POST /api/cart/billing` - Set billing address

**Cart Features:**
- **Unified Authentication**: All cart operations work for both authenticated customers and anonymous users
- **Address Management**: Full shipping and billing address support
- **Discount Codes**: Apply and remove discount codes
- **Inventory Management**: Track inventory with configurable modes
- **Tax Calculation**: Platform-based tax calculation support
- **Multi-currency**: Support for different currencies and locales

### Authentication Flow

1. **Anonymous Users**: Get anonymous token → Use for cart operations
2. **Customer Sign In**: Get customer token → Use for authenticated operations
3. **Token Refresh**: Use refresh token to get new access token when expired

### Service Architecture

The project uses a service-oriented architecture with CommerceTools SDK integration:

- **CartService**: Handles all cart operations with CommerceTools
- **CustomerService**: Manages customer data and authentication
- **AuthService**: Handles token generation and refresh
- **Unified Authentication**: Single authentication flow for all operations

### Frontend Integration

The API is designed to work seamlessly with frontend applications. Example usage:

```typescript
// Get anonymous token for cart operations
const anonymousToken = await fetch('/api/auth/anonymous-token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ anonymousId: 'user-123' })
});

// Sign in customer
const signInResult = await fetch('/api/customers/signin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    email: 'user@example.com', 
    password: 'password',
    anonymousId: 'user-123' // For cart migration
  })
});

// Use token for authenticated requests
const cart = await fetch('/api/cart', {
  headers: { 
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (LTS version)
- Yarn package manager
- Optimizely CMS instance (for Optimizely frontend)
- CommerceTools account (for commerce features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Niteco.Storefront
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Configure environment variables**

   Create `.env.local` files in the respective directories:

   **For Optimizely frontend (`optimizely/.env.local`):**
   ```bash
   OPTIMIZELY_CMS_URL=https://your-instance.cms.optimizely.com/
   OPTIMIZELY_GRAPH_GATEWAY=your-graph-gateway
   OPTIMIZELY_GRAPH_SINGLE_KEY=your-single-key
   OPTIMIZELY_GRAPH_APP_KEY=your-app-key
   OPTIMIZELY_GRAPH_SECRET=your-secret
   OPTIMIZELY_CMS_CLIENT_ID=your-client-id
   OPTIMIZELY_CMS_CLIENT_SECRET=your-client-secret
   ```

   **For Commerce integration:**
   ```bash
   COMMERCETOOLS_PROJECT_KEY=your-project-key
   COMMERCETOOLS_CLIENT_ID=your-client-id
   COMMERCETOOLS_CLIENT_SECRET=your-client-secret
   COMMERCETOOLS_REGION=your-region
   ```

4. **Generate GraphQL types**
   ```bash
   yarn compile
   ```

5. **Start development server**
   ```bash
   # For Optimizely frontend
   cd optimizely
   yarn dev

   # For Generic CMS frontend
   cd generic-cms
   yarn dev
   ```

## 📚 Documentation

- [Customer API Documentation](./optimizely/src/app/api/customers/README.md) - Complete API reference
- [Optimizely Frontend README](./optimizely/README.md) - Optimizely-specific setup
- [Generic CMS README](./generic-cms/README.md) - Generic CMS setup

## 🔒 Security

- All API endpoints use token-based authentication
- Tokens are managed securely on the frontend
- HTTPS is required for production deployments
- Proper error handling and validation implemented

## 🧪 Testing

```bash
# Run tests for all packages
yarn test

# Run tests for specific package
cd packages/cms-component-registry
yarn test
```

## 📦 Packages

### Core Packages
- **cms-adapter-core**: Core CMS adapter functionality
- **cms-component-registry**: Component registry system
- **cms-nextjs**: Next.js CMS integration utilities

### CMS Adapters
- **optimizely-cms-adapter**: Optimizely CMS integration
- **litium-cms-adapter**: Litium CMS integration

### GraphQL Clients
- **optimizely-graph-client**: Optimizely GraphQL client
- **optimizely-configure-commerce-graph-client**: Commerce GraphQL client

### UI Components
- **niteco-ui**: Reusable UI component library with Storybook

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Check the documentation in the respective README files
- Review the API documentation for customer endpoints
- Open an issue for bugs or feature requests

## 🔄 Recent Updates

- **Customer API**: Complete customer authentication and management system
- **Unified Cart**: Cart functionality for both authenticated and anonymous users with CommerceTools integration
- **Token-based Auth**: Secure authentication with refresh token support
- **Commerce Integration**: Full CommerceTools SDK integration with cart, customer, and auth services
- **Address Management**: Shipping and billing address support in cart operations
- **Discount System**: Apply and remove discount codes functionality
- **Service Architecture**: Clean service-oriented architecture with proper error handling
- **Component Library**: Enhanced UI component library with Storybook 
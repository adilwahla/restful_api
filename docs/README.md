project-root/
├── .env                    # Environment variables
├── .gitignore
├── package.json
├── README.md
├── config/                 # Configuration files
│   ├── database.js         # Database configuration
│   ├── passport.js         # Authentication strategies
│   └── server.js           # Server configuration
├── src/
│   ├── app.js              # Main application entry point
│   ├── routes/             # Route definitions
│   │   ├── api/            # API routes
│   │   │   ├── v1/         # Version 1 routes
│   │   │   │   ├── index.js
│   │   │   │   ├── user.routes.js
│   │   │   │   ├── product.routes.js
│   │   │   │   └── ...
│   │   │   └── v2/         # Version 2 routes
│   │   │       ├── index.js
│   │   │       ├── user.routes.js
│   │   │       └── ...
│   │   └── web/            # Web routes (if needed)
│   ├── controllers/        # Route controllers
│   │   ├── v1/             # Version 1 controllers
│   │   │   ├── user.controller.js
│   │   │   ├── product.controller.js
│   │   │   └── ...
│   │   └── v2/             # Version 2 controllers
│   │       ├── user.controller.js
│   │       └── ...
│   ├── services/           # Business logic
│   │   ├── v1/             # Version 1 services
│   │   │   ├── user.service.js
│   │   │   ├── product.service.js
│   │   │   └── ...
│   │   └── v2/             # Version 2 services
│   │       ├── user.service.js
│   │       └── ...
│   ├── models/             # Database models
│   │   ├── user.model.js
│   │   ├── product.model.js
│   │   └── ...
│   ├── middleware/         # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   ├── logger.js
│   │   └── ...
│   ├── utils/             # Utility functions
│   │   ├── apiFeatures.js
│   │   ├── appError.js
│   │   └── ...
│   └── validations/       # Request validations
│       ├── user.validation.js
│       ├── product.validation.js
│       └── ...
├── tests/                 # Test files
│   ├── unit/              # Unit tests
│   └── integration/       # Integration tests
└── docs/                  # API documentation
    ├── swagger.json       # Swagger/OpenAPI spec
    └── README.md
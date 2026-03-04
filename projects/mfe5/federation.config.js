const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'mfe5',
  // This is a remote federated application
  // It exposes modules that can be loaded by the shell (host)

  // Expose modules to the shell (host)
  exposes: {
    // Main component for direct component loading
    './Component': './projects/mfe5/src/app/app.ts',
    // Routes for lazy-loaded routing integration
    './routes': './projects/mfe5/src/app/app.routes.ts',
  },

  // Configure shared dependencies
  // These should match the shell's shared configuration
  shared: {
    ...shareAll({
      singleton: true,       // Load shared packages only once
      strictVersion: true,   // Use strict version matching
      requiredVersion: 'auto', // Automatically detect required version
    }),
  },

  // Skip packages that should not be shared
  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add packages you don't need at runtime
  ],

  // Performance optimizations
  features: {
    // Ignore unused dependencies to reduce bundle size
    ignoreUnusedDeps: true,
  },
});

const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'shell',
  // Shell is the host application that loads remotes
  // Do NOT add 'exposes' here - only remotes expose modules

  // Configure which remotes can be loaded by this host
  remotes: [
    'mfe1',
    'mfe2',
    'mfe3',
    'mfe4',
    'mfe5',
  ],

  // Configure shared dependencies
  // These will be loaded once and shared across all federated applications
  shared: {
    ...shareAll({
      singleton: true,      // Load shared packages only once
      strictVersion: true,  // Use strict version matching
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

  // Additional configuration for production
  // Uncomment and adjust as needed for your deployment
  // Extra: {
  //   minVersion: require('./package.json').version,
  // },
});

const { ClerkExpressRequireAuth, ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

module.exports = {
  requireAuth: ClerkExpressRequireAuth(),   // middleware for protected routes
  withAuth:   ClerkExpressWithAuth(),      // to read user info if needed
};

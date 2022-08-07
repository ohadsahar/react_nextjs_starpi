module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e1ed36402eb35fe9baab195d6dc714c'),
  },
});

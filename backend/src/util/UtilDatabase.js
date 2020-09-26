export default {
  getUri() {
    const { db_username, db_password, db_name } = process.env;

    return `mongodb://${db_username}:${db_password}@ds137256.mlab.com:37256/${db_name}`;
  },
};

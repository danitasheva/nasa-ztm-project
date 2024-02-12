const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0; // IF IT IS SET TO 0, MONGO RETURNS ALL DOCUMETNS - NOT PAGINATED

function getPagination(query) {
  const page = Math.abs(query.page) || 1;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;

  return { skip, limit };
}

module.exports = {
  getPagination,
};

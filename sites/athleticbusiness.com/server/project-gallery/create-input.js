module.exports = ({
  limit,
  gallery,
  direction,
  cursor,
  sortField,
}) => ({
  types: [gallery.type],
  ...(gallery.alias === 'facilities-of-merit' && { winner: true }),
  sort: { field: 'PUBLISHED_AT', order: sortField || 'DESC' },
  pagination: {
    limit,
    using: 'CURSOR',
    cursor: { direction: direction || 'AFTER', value: cursor },
  },
});

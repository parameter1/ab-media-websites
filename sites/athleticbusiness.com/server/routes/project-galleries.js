const { Router } = require('express');
const createError = require('http-errors');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const projectsGraphQLClient = require('../middleware/projects-graphql-client');

const indexTemplate = require('../templates/project-galleries/index');
const galleryTemplate = require('../templates/project-galleries/gallery');
const projectTemplate = require('../templates/project-galleries/project');

const { LIST_QUERY, VIEW_QUERY } = require('../project-gallery/queries');


const { env } = process;

const galleries = [
  {
    name: 'Architectural Showcase',
    alias: 'architectural-showcase',
    slug: 'architectural-showcase',
    type: 'ARCHITECTURAL_SHOWCASE',
    teaser: 'The best of recently constructed and renovated facilities.',
    description: 'The best of recently constructed and renovated facilities.',
  },
  {
    name: 'Facilities of Merit',
    alias: 'facilities-of-merit',
    slug: 'architectural-showcase',
    type: 'ARCHITECTURAL_SHOWCASE',
    teaser: 'Award-winning facilities from the Showcase.',
    description: 'Award-winning facilities from the Showcase.',
  },
  {
    name: 'Aquatic Design Portfolio',
    alias: 'aquatic-design-portfolio',
    slug: 'aquatic-design-portfolio',
    type: 'AQUATIC_DESIGN_PORTFOLIO',
    teaser: '',
    description: '',
  },
];

const galleryAliases = galleries.map(({ alias }) => alias);

module.exports = (app) => {
  const router = Router();
  router.use(projectsGraphQLClient({ uri: env.AB_PROJECTS_GRAPHQL_URL }));

  router.get('/', (_, res) => {
    res.marko(indexTemplate, { galleries });
  });

  router.get(`/:alias(${galleryAliases.join('|')})`, asyncRoute(async (req, res) => {
    const { alias } = req.params;
    const { direction, cursor } = req.query;
    const gallery = galleries.find(g => g.alias === alias);

    const input = {
      types: [gallery.type],
      ...(alias === 'facilities-of-merit' && { winner: true }),
      sort: { field: 'PUBLISHED_AT', order: 'DESC' },
      pagination: {
        limit: 30,
        using: 'CURSOR',
        cursor: { direction: direction || 'AFTER', cursor },
      },
    };
    const variables = { input };
    const { data } = await req.$projectsGraphQL.query({ query: LIST_QUERY, variables });
    res.marko(galleryTemplate, {
      galleries,
      gallery,
      entries: data.entries,
      rootPath: `${req.baseUrl}/${alias}`,
    });
  }));

  router.get(`/:alias(${galleryAliases.join('|')})/:shortId([a-zA-Z0-9]{10})/:slug(*)`, asyncRoute(async (req, res) => {
    const { alias, shortId, slug } = req.params;
    const gallery = galleries.find(g => g.alias === alias);
    const input = { shortId };
    const variables = { input };

    const { data } = await req.$projectsGraphQL.query({ query: VIEW_QUERY, variables });
    const { entryByShortId: entry } = data;
    if (!entry) throw createError(404, `No ${gallery.name} found for ID ${shortId}`);
    const path = `${entry.shortId}/${entry.slug}`;
    if (path !== `${shortId}/${slug}`) return res.redirect(301, `${req.baseUrl}/${alias}/${path}`);
    return res.marko(projectTemplate, {
      galleries,
      gallery,
      entry,
      canonicalPath: `${req.baseUrl}/${entry.type.slug}/${path}`,
    });
  }));

  app.use('/project-galleries', router);
};

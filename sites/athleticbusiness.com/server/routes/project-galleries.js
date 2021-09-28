const { Router } = require('express');
const projectsGraphQLClient = require('../middleware/projects-graphql-client');

const indexTemplate = require('../templates/project-galleries/index');
const galleryTemplate = require('../templates/project-galleries/gallery');

const { env } = process;

const galleries = [
  {
    name: 'Architectural Showcase',
    alias: 'architectural-showcase',
    teaser: 'The best of recently constructed and renovated facilities.',
    description: 'The best of recently constructed and renovated facilities.',
  },
  {
    name: 'Facilities of Merit',
    alias: 'facilities-of-merit',
    teaser: 'Award-winning facilities from the Showcase.',
    description: 'Award-winning facilities from the Showcase.',
  },
  {
    name: 'Aquatic Design Portfolio',
    alias: 'aquatic-design-portfolio',
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

  router.get(`/:alias(${galleryAliases.join('|')})`, (req, res) => {
    const { alias } = req.params;
    const gallery = galleries.find(g => g.alias === alias);
    res.marko(galleryTemplate, { galleries, gallery });
  });

  app.use('/project-galleries', router);
};

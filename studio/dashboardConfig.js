export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6032a65802ba89089f2f208c',
                  title: 'Sanity Studio',
                  name: 'david-odyssey-gatsby-sanity-netlify-v-1-studio',
                  apiId: 'e26c0827-7fec-4520-8454-198b17aba799'
                },
                {
                  buildHookId: '6032a658258d66757a220ca2',
                  title: 'Portfolio Website',
                  name: 'david-odyssey-gatsby-sanity-netlify-v-1',
                  apiId: 'efe43eb4-99ac-4960-98e3-8b85fbdf285e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jacob-Fromm/david-odyssey-gatsby-sanity-netlify-v1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://david-odyssey-gatsby-sanity-netlify-v-1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6230d9982674050abc1019ce',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j6crb698',
                  apiId: '5d770dff-eb76-4bac-b2cf-0e89f7b12225'
                },
                {
                  buildHookId: '6230d9984e35f00a09f7d499',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fygdjqhh',
                  apiId: 'f0867ba9-358f-41a5-b8d3-66a18cc96ebf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/terjela/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fygdjqhh.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

export default {
  logo: <strong>Saint CMS</strong>,
  project: {
    link: 'https://github.com/Agbara286/saint-cms', 
  },
  docsRepositoryBase: 'https://github.com/Agbara286/saint-docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Saint CMS'
    }
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} © Saint CMS.
      </span>
    )
  }
}
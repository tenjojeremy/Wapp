module.exports = () => {
  console.log('generate declarations automatically !')
  const declarations = [
    {
      default: 'React',
      members: ['useEffect', 'useState', 'useRef', 'memo', 'Fragment', 'Suspense'],
      path: 'react',
    },
    {
      default: 'Icon',
      path: '@tenjojeremy/wapp/dataDisplay/icon',
    },
  ]

  return [
    require('babel-plugin-auto-import'),
    {
      declarations,
    },
  ]
}

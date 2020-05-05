module.exports = (name, nameUppercase, base = '@tenjojeremy/wapp/', path) => {
  let importString = `import ${nameUppercase} from '${base}${path}/styles/1'`

  return importString
}

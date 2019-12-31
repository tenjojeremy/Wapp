module.exports = `
const {
  data: { title, actions },
} = payload
const parseActions = JSON.parse(actions)
const options = { icon: logo, actions: parseActions }
`
